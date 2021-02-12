const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const bible = require('./data/kannada.json')
const client = new textToSpeech.TextToSpeechClient();

process.env.GOOGLE_APPLICATION_CREDENTIALS = '~/.gcloud/bionic-repeater-283714-9d735436c317.json'
const gender = 'FEMALE'

async function main() {
  for (const bookName of Object.keys(bible)) {
	const book = bible[bookName]
	const bookPath = `./src/assets/audio/${gender.toLowerCase()}/${bookName}`
	if (!fs.existsSync(bookPath)) {
	  fs.mkdirSync(bookPath)
	}
	for (let c = 0; c < book.length; c++) {
	  const verses = book[c];
	  const chapterPath = `./src/assets/audio/${gender.toLowerCase()}/${bookName}/chapter_${c+1}`
	  if (!fs.existsSync(chapterPath)) {
	    fs.mkdirSync(chapterPath)
	  }
	  for(let i = 0; i < verses.length; i++) {
		const verse = verses[i]
		const request = {
		  input: {text: verse},
		  voice: {languageCode: 'kn-IN', ssmlGender: gender},
		  audioConfig: {
			audioEncoding: 'MP3',
			speakingRate: 0.85,
			pitch: 0.78,
			//volumeGainDb: 1,
			//sampleRateHertz: 44000,
		  },
		};
		const filename = `./src/assets/audio/${gender.toLowerCase()}/${bookName}/chapter_${c+1}/verse_${i + 1}.mp3`
		if (fs.existsSync(filename)) {
		  console.log(`${bookName}-${c+1}-${i+1} already exists`)
		} else {
		  console.log(`saving mp3 ${bookName}-${c+1}-${i+1}`)
		  const [response] = await client.synthesizeSpeech(request);
		  const writeFile = util.promisify(fs.writeFile);
		  await writeFile(filename, response.audioContent, 'binary');
		}
	  }
	}
  }
}

main();
