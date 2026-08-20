import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

walk('./src', (filePath) => {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/bg-black\/20\/50/g, 'bg-black/20');
    content = content.replace(/bg-white\/5\/30/g, 'bg-white/5');
    content = content.replace(/bg-white\/5\/10/g, 'bg-white/5');
    content = content.replace(/text-white\/80\/80/g, 'text-white/80');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed double slash in ${filePath}`);
    }
  }
});
