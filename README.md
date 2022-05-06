# node.js meme scraper

Create a cli (Command Line Interface) application that scrapes the **current version** of this website:

https://memegen-link-examples-upleveled.netlify.app/

...and saves the first 10 images into a folder called "memes" within the directory of the new project. The image files should be named with a number with a leading zero, eg. `01.jpg`, `02.jpg`, etc.

Avoid using an "image scraper" or "image downloader" library that does multiple steps at once for you (eg. do not use [`image-downloader`](https://www.npmjs.com/package/image-downloader) or [`nodejs-file-downloader`](https://www.npmjs.com/package/nodejs-file-downloader) or similar) - break the task down into smaller steps and select libraries as necessary for each step.

Make sure that the meme images are "ignored" in Git - they should not show up in your repository.

The program should be able to run multiple times without throwing an error.

## TODOs

This is a placeholder for you to enter your todos.

Stretch goals:

- Make the application create your own custom meme (eg. `node index.js hello karl bender` would download an image with the top text of "hello", the bottom text of "karl", with the meme image of Bender)
- Add a nice progress indicator (either messages or a progress bar)

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: repl.it demo
- [ ] [Drone bot](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-git-github/#writing-commit-messages))

- Upon inspecting https://memegen-link-examples-upleveled.netlify.app/, we found that each image is an `<img>`, which is inside of a `<div>` and inside of an `<a>`
  ![Screen Shot 2022-05-04 at 12 18 40](https://user-images.githubusercontent.com/1935696/166663626-3b6f989e-8dac-46bc-9a8d-caf2dc0303da.png)

## TODO

- [x] Connect to the link (URL) in Node.js - other words: "loading", "open"
  - [x] We may decide to set the URL as a const
  - [x] We may decide to open a browser for this (using our Node.js program)
  - [x] Research shows us ways to do this in Node.js
- [x] Get html from URL (this will be in a "string" inside of an "HTTP response")
- [x] Locate the image URLs in the html string
  - [ ] Maybe we somehow turn the string into an array to make this easier? Potential data structures: array of objects (see below), array of strings
- [x] Take the array of image urls and extract the first 10
- [x] Make the folder `memes`
- [x] Download / transfer / save
  - [x] Connect to the image URL
  - [x] Receive image data from the response (maybe a string)
  - [x] Generate the correct file name
  - [x] Store image data in the file path in the folder (maybe you need to create the file first)
- [x] Add `memes` to `.gitignore`
- [x] Test that the program runs multiple times without errors

```js
[
  {
    name: '01.jpg',
    url: 'https://example.com/1.jpg',
  },
];
```
