class AddToAnySharer extends HTMLElement {
    accessToken = '';
    userData;
    componentRoot = (document.body.querySelector('addtoany-sharer'));

    constructor() {
        super();
    }

    async connectedCallback() {
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="addtoany-sharer">
                <!-- AddToAny BEGIN -->
                <style type="text/css">
                #my_centered_buttons { display: flex; justify-content: center; }
                </style>
                <div class="col-lg-12" style="padding-top: 1em;">
                    <div class="col-lg-12 font-x2 text-align-center">Enjoying it?, make this Exam Simulator reach more people:</div>
                    <div class="col-lg-12 text-align-center padding-top-lg">
                        <div class="a2a_kit a2a_kit_size_32 a2a_default_style" id="my_centered_buttons">
                            <a class="a2a_button_facebook"></a>
                            <a class="a2a_button_twitter"></a>
                            <a class="a2a_button_linkedin"></a>
                            <a class="a2a_button_reddit"></a>
                        </div>
                    </div>
                </div>
            <!-- AddToAny END -->
            </template>`;
        // Add the async scripts this way
        var script = document.createElement('script');
        const config = document.createElement('script');
        config.innerHTML =
            `var a2a_config = a2a_config || {};
                a2a_config.thanks = {
                    postShare: false,
                    ad: false
                };
                function my_addtoany_onshare(data) {
                 if (65 > +document.querySelector('#consumedQuota')?.innerHTML) {
                    document.querySelector('#cogLoading').style.display = 'inline-block';
                    document.querySelector('#btnContribute').style.display = 'none';
                    setTimeout(function () {   
                        document.querySelector('#btnSaveToMyTrack').style.display = 'block';
                        document.querySelector('#cogLoading').style.display = 'none';
                    }, 5000);      
                    }            
                };
                a2a_config.callbacks = a2a_config.callbacks || [];
                a2a_config.callbacks.push({
                    share: my_addtoany_onshare
                });`;
        script.src = "https://static.addtoany.com/menu/page.js";
        document.body.append(div);
        const template = document.getElementById(`addtoany-sharer`);
        const node = document.importNode(template.content, true);
        document.body.removeChild(div);
        this.componentRoot.innerHTML='';
        this.componentRoot.appendChild(node);
        this.componentRoot.appendChild(config);
        this.componentRoot.appendChild(script);
    }
}
customElements.define('addtoany-sharer', AddToAnySharer);