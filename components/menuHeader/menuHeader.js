class menuHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="menu-template">
                <nav class="navbar navbar-fixed-top inbody">
                    <div class="container">
                        <div class="collapse navbar-collapse" id="topFixedNavbar1">
                            <div id="logo" class="fl_left">
                                <img src="images/logo/Main-logo-png200px.png" class="logomain" alt="logo" longdesc="http://index.html"/>
                            </div>
                            <ul class="nav navbar-nav navbar-right text-uppercase">
                                <li><a href="index.html#carousel1">Home</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                       aria-expanded="false">Exam Simulator<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="SAA-C02.html">Architect A.(SAA-C02)</a></li>
                                        <li><a href="DVA-C01.html">Developer A.(DVA-C01)</a></li>
                                        <li><a href="SOA-C01.html">SysOps A.(SOA-C01)</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </template>`;
        document.body.append(div);
        const template = document.getElementById(`menu-template`);
        const node = document.importNode(template.content, true);
        document.body.removeChild(div);
        document.body.appendChild(node);
    }
}
customElements.define('header-menu', menuHeader);