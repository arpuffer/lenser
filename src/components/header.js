class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav>
            <ul>
              <li><a href="index.html">Lenser</a></li>
              <li><a href="about.html">About</a></li>
              <li><a class="launch-lenser-app-button" href="lenser-app.html">Let's Go!</a></li>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  