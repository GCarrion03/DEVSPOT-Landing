class postsSidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML =
            `<template id="sidebar-template">
                <link href="/layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="/css/bootstrap.css" rel="stylesheet">
                <link href="/css/style.css" rel="stylesheet" type="text/css">
                <div>
                    <h3 class="section-title">Popular Posts</h3>
                </div>
    
                <div class="col-lg-12 padding-sides-0 trend-entry d-flex">
                    <div class="trend-contents">
                        <h4><a class="bold" href="/blog-01.html" rel="author">How to pass the AWS Certified Solutions Architect Associate Exam - SAA-C02.</a></h4>
                        <div class="post-meta" style="float: right;">
                        <span class="d-block"><a href="./">Gustavo Carrion</a></span>
                            <span class="date-read">Aug/20 <span class="mx-1">•</span> 3 min read <span class="icon-star2"></span></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 padding-sides-0 trend-entry d-flex">
                    <div class="trend-contents">
                        <h4><a class="bold" href="/blog-02.html" rel="author">Get your AWS Certified Developer Associate Certification - DVA-C01 with this guide.</a></h4>
                        <div class="post-meta" style="float: right;">
                        <span class="d-block"><a href="./">Gustavo Carrion</a></span>
                            <span class="date-read">Oct/20 <span class="mx-1">•</span> 3 min read <span class="icon-star2"></span></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 padding-sides-0 trend-entry d-flex">
                    <div class="trend-contents">
                        <h4><a class="bold" href="/blog-03.html" rel="author">Ace the Certified SysOps Admin Associate Exam - SOA-C01 with our guide.</a></h4>
                        <div class="post-meta" style="float: right;">
                        <span class="d-block"><a href="./">Gustavo Carrion</a></span>
                            <span class="date-read">Nov/20 <span class="mx-1">•</span> 3 min read <span class="icon-star2"></span></span>
                        </div>
                    </div>
                </div>
            </template>`;
        const template = this.shadowRoot.getElementById('sidebar-template');
        const node = document.importNode(template.content, true);
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(node);
    }
}
customElements.define('sidebar-posts', postsSidebar);