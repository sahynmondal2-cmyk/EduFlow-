import fs from 'fs';
import path from 'path';

const replacements = [
  { regex: /bg-\[\#080B14\]/gi, replacement: 'bg-background' },
  { regex: /bg-\[\#111625\]/gi, replacement: 'bg-surface' },
  { regex: /text-\[\#F8FAFC\]/gi, replacement: 'text-text' },
  { regex: /text-\[\#6366F1\]/gi, replacement: 'text-primary' },
  { regex: /text-\[\#8B5CF6\]/gi, replacement: 'text-secondary' },
  { regex: /text-\[\#22D3EE\]/gi, replacement: 'text-accent' },
  { regex: /text-\[\#94A3B8\]/gi, replacement: 'text-muted' },
  
  { regex: /border-\[\#111625\]/gi, replacement: 'border-surface' },
  { regex: /border-\[\#6366F1\]/gi, replacement: 'border-primary' },
  { regex: /from-\[\#6366F1\]/gi, replacement: 'from-primary' },
  { regex: /to-\[\#22D3EE\]/gi, replacement: 'to-accent' },
  
  // also fix places where they did text-primary-[#6366F1] (saw this in StudentDashboard)
  { regex: /text-primary-\[\#6366F1\]/gi, replacement: 'text-primary' },
  { regex: /text-accent-\[\#22D3EE\]/gi, replacement: 'text-accent' },
  { regex: /text-secondary-\[\#8B5CF6\]/gi, replacement: 'text-secondary' },
  { regex: /bg-surface-\[\#111625\]/gi, replacement: 'bg-surface' },
  { regex: /bg-primary-\[\#6366F1\]/gi, replacement: 'bg-primary' },
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
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    
    // Also change bg-bg to bg-background (since we saw bg-bg in Home.jsx)
    content = content.replace(/\bbg-bg\b/g, 'bg-background');
    content = content.replace(/\bbg-bg\//g, 'bg-background/');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`Updated ${filePath}`);
    }
  }
});

console.log(`Replaced hardcoded styles in ${modifiedCount} files.`);
