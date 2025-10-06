// HTML-skabelon til headeren, bruges i Header-klassen
export const headerTemplate = `
  <!-- Navigation til desktop: hjem-knap -->
  <nav>
    <a href="/" class="home-link">
      <img src="/img/home-icon.png" alt="house" class="home-icon">
    </a>
  </nav>

  <!-- Desktop header med menu-knap og navigation -->
  <header class="bottom-header">
    <div class="bottom-bar">
      <button class="menu-btn">Menu</button> <!-- Knappen der åbner/lukker menuen -->
      <nav class="bottom-nav">
        <a href="/"><img src="/img/home-icon.png" alt="house">Hjem</a>
        <a href="/cv.html"><img src="/img/cv.png" alt="book">CV</a>
        <a href="/portfolio.html"><img src="/img/folder.png" alt="folder">Portfolio</a>
        <a href="/kontakt.html"><img src="/img/contact.png" alt="letter">Kontakt</a>
      </nav>
    </div>
  </header>

  <!-- Mobile header med taskbar-links -->
  <header>
    <div class="mobile-taskbar">
      <a href="/"><img src="/img/home-icon.png" alt="house"><span>Hjem</span></a>
      <a href="/cv.html"><img src="/img/cv.png" alt="book"><span>CV</span></a>
      <a href="/portfolio.html"><img src="/img/folder.png" alt="folder"><span>Portfolio</span></a>
      <a href="/kontakt.html"><img src="/img/contact.png" alt="letter"><span>Kontakt</span></a>
    </div>
  </header>
`;
