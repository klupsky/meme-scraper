import fs from 'node:fs';
import request from 'request';

const top = process.argv[2];
const bottom = process.argv[3];

// console.log(`https://memecomplete.com/edit/images/bender/${top}/${bottom}.jpg`);

// const bender = `https://memecomplete.com/edit/images/bender/${top}/${bottom}.jpg`;

const download = (url, path, callback) => {
  request.head(url, () => {
    request(url).pipe(fs.createWriteStream(path)).on('close', callback);
  });
};

const url = `https://api.memegen.link/images/bender/${top}/${bottom}.jpg?watermark=memecomplete.com&token=spacntuz7cmhe3xggy2w`;
const path = './memes/bender.jpg';

download(url, path, () => {
  console.log('✅ Done!');
});
