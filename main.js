const fs = require('fs');
const chokidar = require('chokidar');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const inDir = process.env.IN;
const outDir = process.env.OUT;
const isDev = process.env.NODE_ENV !== 'production';
const isWatch = process.env.WATCH !== 'false';
const basePath = isDev ? '/assets' : 'https://assets.pyro.sh';

if (!outDir || !inDir) {
  throw new Error('Need to specify IN and OUT env variable');
}

const page = (header, body) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="encoding" content="utf-8">
    <meta name="description" content="Hi there, I'm Peter John, a fullstack developer from Bangalore, India.">
    <meta name="author" content="pyro.sh">
    <meta name="keywords" content="pyros2097,pyro.sh,full stack developer,bangalore,india">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover">
    <link rel="icon" type="image/x-icon" href="${basePath}/icons/logo.png">
    <link rel="stylesheet" href="${basePath}/css/styles.css">
    <script src="${basePath}/js/alpine.js" defer></script>
    <sergey-slot name="title">
        <title>pyro.sh</title>
    </sergey-slot>
</head>
<body class="w-full h-full">
    ${header}
    <main class="w-full h-full">
        ${body}
    </main>
</body>
</html>`;

const compile = (fp) => {
  if (!fp || fp.includes('header.html')) {
    return;
  }
  let header = '';
  const headerFile = inDir + '/header.html';
  if (fs.existsSync(headerFile)) {
    header = fs.readFileSync(headerFile);
  }
  const body = fs.readFileSync(fp);
  const data = page(header, body);
  const outfile = outDir + fp.replace(inDir, '');
  const dirname = path.dirname(outfile);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }
  fs.writeFileSync(outfile, data);
};

chokidar.watch(inDir).on('add', compile).on('change', compile).on('ready', compile);
console.log('watching files');

if (isWatch) {
  express()
    .use('/assets', serveStatic('./assets.pyro.sh'))
    .use((req, res) => {
      if (path.extname(req.path) === '') {
        const name = req.path === '/' ? '/index' : req.path;
        res.sendFile(path.join(__dirname, outDir + name + '.html'));
      }
    })
    .listen(3000, () => {
      console.log('server listening on http://localhost:3000');
    });
}
