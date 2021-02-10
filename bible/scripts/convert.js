const fs = require('fs');
const bible = require('../src/assets/bible.json')

async function main() {
  const json = []
  for (const book of bible) {
    const bookName = book._attributes.bname
    json.push(bookName)
  }
  fs.writeFileSync("chapters.json", JSON.stringify(json))
}

main();
