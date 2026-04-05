const fs = require('fs');

const galleryHtml = `    <a href="../gallery.html" class="back-btn" style="left: max(230px, 17.5rem);">
      <span class="material-symbols-outlined text-[16px]">photo_library</span>Gallery
    </a>`;

const regex = /(<a href="\/" class="back-btn" style="left: max\(140px, 11rem\);">\s*<span class="material-symbols-outlined text-\[16px\]">home<\/span>Home\s*<\/a>)/;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('photo_library') && regex.test(content)) {
        content = content.replace(regex, `$1\n${galleryHtml}`);
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    } else {
        console.log(`Skipped ${file}`);
    }
}
