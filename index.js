import fs from 'fs'; // import to make new directory
import https from 'https'; // import for downloader
import fetch from 'node-fetch'; // import fetch

// Fetch html from url into string
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const urlString = await response.text();

// console.log(urlString);

// Find images in string
let i;
const images = []; // creates an array
const str = urlString;
const rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

while ((i = rex.exec(str))) {
  images.push(i[1]);
}
// slice array to get first 10 images
const imagesurl = images.slice(0, 10);
//console.log(images2);

// create memes directory
const path = './memes';
fs.access(path, (error) => {
  // To check if the given directory
  // already exists or not
  if (error) {
    // If current directory does not exist
    // then create it
    fs.mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('New Directory created successfully !!');
      }
    });
  } else {
    console.log('Given Directory already exists !!');
  }
});

//var link =
// 'https://api.memegen.link/images/iw/does_testing/in_production.jpg?width=300';

for (let n = 0; n < imagesurl.length; n++) {
  https
    .get(imagesurl[n], (res) => {
      const imagePath = `./memes/0${n + 1}.jpg`;
      const stream = fs.createWriteStream(imagePath);

      res.pipe(stream);

      stream.on('finish', () => {
        stream.close();
        console.log('Image downloaded');
      });
    })
    .on('error', (err) => {
      // handle error
      console.log(err);
    });
}
