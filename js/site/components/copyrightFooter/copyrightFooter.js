class copyrightFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML =
            `<template id="footer-template">
                <link href="/layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="/css/bootstrap.css" rel="stylesheet">
                <link rel="stylesheet" type="text/css" href="/fontawesome/css/font-awesome.min.css"/>
                <link rel="stylesheet" type="text/css" href="/js/third-party/lightbox/css/lightbox.min.css">
                <link href="/css/style.css" rel="stylesheet" type="text/css">
                <footer class="footer container-fluid text-center">
                    <div class="logo"><span>DEVSPOT</span></div>
                    <div class="socials">
                        <a href="https://discord.gg/2yquf9V" class="basicTooltip"><span class="fa fa-bug"></span><span class="basicTooltipText displayTooltipCenter">Report a bug on Discord</span></a>
                        <a href="https://www.reddit.com/r/devspot/" class="basicTooltip"><span class="fa fa-reddit-alien"></span><span class="basicTooltipText displayTooltipCenter">No Discord? Follow DevSpot Exam simulator updates on Reddit</span></a>
                        <a href="https://www.linkedin.com/in/gusmcarrion" class="basicTooltip"><span class="fa fa-linkedin"></span><span class="basicTooltipText displayTooltipCenter">Add DevSpot Exam simulator author to your LinkedIn Network</span></a>
                    </div>
                    <p>Copyright 2015 ${(new Date().getFullYear() > 2015) ? ("- " + new Date().getFullYear()) : ''}, DEVSPOT all rights reserved
                    </p>
                </footer>
            </template>`;
        //<a href="http://twitter.com/gusmcarrion" class="basicTooltip"><span class="fa fa-twitter"></span><span class="basicTooltipText displayTooltipCenter">Follow DevSpot Exam simulator updates on Twitter</span></a>
        const template = this.shadowRoot.getElementById('footer-template');
        const node = document.importNode(template.content, true);
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(node);
    }
}
customElements.define('footer-copyright', copyrightFooter);