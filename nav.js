const SITE_PAGES = [
    { href: 'index.html', label: 'Home' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'clips.html', label: 'Clips' },
    { href: 'about.html', label: 'Developer' },
    { href: 'tester.html', label: 'Tester Program' }
];

function injectNav(currentPage) {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    const links = SITE_PAGES.map(page => {
        const active = page.href === currentPage ? ' class="active"' : '';
        return `<a href="${page.href}"${active}>${page.label}</a>`;
    }).join('');

    nav.innerHTML = `
        <div class="nav-inner">
            <a class="nav-brand" href="index.html">Legacy of Mind</a>
            <div class="nav-links">${links}</div>
        </div>
    `;
}

function injectFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-inner">
            <span>Legacy of Mind</span>
            <span>Solus Studios</span>
        </div>
    `;
}
