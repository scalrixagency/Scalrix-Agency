const fs = require('fs');

const content = fs.readFileSync('src/ProjectDetailPage.tsx', 'utf-8');
const newContent = content.replace(/ProjectDetailPage/g, 'InstituteDetailPage');
fs.writeFileSync('src/InstituteDetailPage.tsx', newContent);

const viteConfig = fs.readFileSync('vite.config.ts', 'utf-8');
const newViteConfig = viteConfig.replace("projectDetail: path.resolve(__dirname, 'project-detail.html')", "projectDetail: path.resolve(__dirname, 'project-detail.html'),\n          instituteDetail: path.resolve(__dirname, 'institute-detail.html')");
fs.writeFileSync('vite.config.ts', newViteConfig);

const appContent = fs.readFileSync('src/App.tsx', 'utf-8');
const appNewContent1 = appContent.replace('<a href="/project-detail.html" className="text-slate-600 hover:text-purple-600 font-bold transition-colors">Online Academy</a>', '<a href="/institute-detail.html" className="text-slate-600 hover:text-purple-600 font-bold transition-colors">Abdullah Islamic Institute</a>');
fs.writeFileSync('src/App.tsx', appNewContent1);
