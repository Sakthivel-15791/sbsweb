const pages = [
  ["Home", "index.html", "home"],
  ["Services", "services.html", "services"],
  ["Product", "product.html", "product"],
  ["Price", "price.html", "price"],
  ["Events", "events.html", "events"],
  ["Team", "team.html", "team"],
  ["Career", "career.html", "career"],
  ["Contact", "contact.html", "contact"]
];

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const activePage = currentPage.replace(".html", "") === "index" ? "home" : currentPage.replace(".html", "");

document.querySelector("#site-header").innerHTML = `
  <header>
    <nav class="navbar navbar-expand-lg site-navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html" aria-label="Scale Beyond Solutions home"><img src="logo/SBS_Logo.jpg" alt="Scale Beyond Solutions"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavigation">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            ${pages.map(([label, href, key]) => `<li class="nav-item"><a class="nav-link${activePage === key ? " active" : ""}"${activePage === key ? ' aria-current="page"' : ""} href="${href}">${label}</a></li>`).join("")}
          </ul>
        </div>
      </div>
    </nav>
  </header>`;

document.querySelector("#site-footer").innerHTML = `
  <footer class="site-footer">
    <div class="container footer-main">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <a class="footer-brand" href="index.html"><img src="logo/SBS_Logo.jpg" alt="Scale Beyond Solutions"></a>
          <p class="gst-number">GST IN : 33GKFPS0492K1ZR</p>
          <p class="footer-description">Your trusted digital marketing partner in Dharmapuri, Krishnagiri and Hosur. We help businesses scale beyond limits with innovative digital solutions.</p>
        </div>
        <div class="col-6 col-lg-2 col-md-3">
          <h2 class="footer-heading">Customer Service</h2>
          <ul class="footer-links">
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="pricing.html">Pricing</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 col-md-3">
          <h2 class="footer-heading">Company</h2>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="internship.html">Internship</a></li>
            <li><a href="project-development.html">Project Development</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h2 class="footer-heading">Follow Us</h2>
          <div class="social-links">
            <a href="https://www.instagram.com/scalebeyondsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61586455025661" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="https://x.com/sbsolitions" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom"><div class="container"><p>© ${new Date().getFullYear()} Scale Beyond Solutions. All rights reserved.</p></div></div>
  </footer>`;
