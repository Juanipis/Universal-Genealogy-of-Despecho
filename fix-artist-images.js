const fs = require('fs');
let content = fs.readFileSync('src/config/artistImages.ts', 'utf-8');
const newArtists = [
  '"Arctic Monkeys": "artists/arctic-monkeys.jpg",',
  '"FINNEAS": "artists/finneas.jpg",',
  '"Fruko y sus Tesos": "artists/fruko-y-sus-tesos.jpg",'
].join('\n  ');
content = content.replace('};', `  ${newArtists}\n};`);
fs.writeFileSync('src/config/artistImages.ts', content);
