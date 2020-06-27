class copyrightFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML =
            `<template id="footer-template">
                <link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="css/bootstrap.css" rel="stylesheet">
                <link rel="stylesheet" type="text/css" href="fontawesome/css/font-awesome.min.css"/>
                <link rel="stylesheet" type="text/css" href="js/lightbox/css/lightbox.min.css">
                <link href="css/style.css" rel="stylesheet" type="text/css">
                <footer class="footer container-fluid text-center">
                    <div class="logo"><span>DEVSPOT</span></div>
                    <div class="socials">
                        <a href="http://twitter.com/gusmcarrion"><span class="fa fa-twitter"></span></a>
                        <a href="https://www.linkedin.com/in/gusmcarrion"><span class="fa fa-linkedin"></span></a>
                    </div>
                    <p>Copyright 2015 ${(new Date().getFullYear() > 2015) ? ("- " + new Date().getFullYear()):''}, DEVSPOT all rights reserved
                    </p>
                </footer>
            </template>`;
        const template = this.shadowRoot.getElementById('footer-template');
        const node = document.importNode(template.content, true);
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(node);
    }
}
customElements.define('footer-copyright', copyrightFooter);