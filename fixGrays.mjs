import fs from 'fs';
import path from 'path';

const replacements = [
  { regex: /\btext-gray-400\b/g, replacement: 'text-muted' },
  { regex: /\btext-gray-500\b/g, replacement: 'text-muted' },
  { regex: /\bborder-gray-800\b/g, replacement: 'border-white/10' },
  { regex: /\bborder-gray-700\b/g, replacement: 'border-white/10' },
  { regex: /\bbg-gray-900\b/g, replacement: 'bg-black/20' },
  { regex: /\bbg-gray-800\b/g, replacement: 'bg-white/5' },
  { regex: /\btext-gray-300\b/g, replacement: 'text-white/80' },
];

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

let modifiedCount = 0;

walk('./src', (filePath) => {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`Updated ${filePath}`);
    }
  }
});

console.log(`Replaced hardcoded grays in ${modifiedCount} files.`);
