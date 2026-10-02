HOW TO DEPLOY (no build step needed)

Folder must look like this (index.html at the TOP level):
  index.html
  style.css
  script.js
  vercel.json
  netlify.toml
  assets/  (Omo1-5.jpeg, Omo6.mp4)

NETLIFY: app.netlify.com/drop -> drag this whole UNZIPPED folder in.
VERCEL:  vercel.com/new -> upload this folder, or run "vercel" in it.
         Framework Preset: Other. Leave build command empty.
After deploying, hard refresh with Ctrl+Shift+R.
