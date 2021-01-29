dev:
	npx tailwindcss-cli@latest build ./src/assets/config.css -o ./src/assets/styles.css
	npx sergey --watch --root=./src/ --imports=./components --output=../public --port=1235

build: export NODE_ENV=production
build:
	npx sergey --root=./src/ --imports=./components --output=../public
	npx tailwindcss-cli@latest build ./src/assets/config.css -o ./public/assets/styles.css
	# npx css-minify -f ./public/assets/styles.css -o ./public/assets/
	# mv ./public/assets/styles.min.css ./public/assets/styles.css
	# find public -type f | xargs brotli -Z -j
	# find public -type f -name "*.br" -exec sh -c 'mv "$$1" "$${1%.br}"' _ {} \;
