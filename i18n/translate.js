function Translate() {
    var _self = window;;
    //initialization
    this.init =  function(attribute, lng){
        _self.attribute = attribute;
        _self.lng = lng;
    }
    //translate
    this.process = async function() {
        var xrhFile = new XMLHttpRequest();
        var LngObject = (await import("./" + _self.lng + ".js")).translation;
        console.log(LngObject["nav-aboutus"]);
        var allDom = document.getElementsByTagName("*");
        for (var i = 0; i < allDom.length; i++) {
            var elem = allDom[i];
            var key = elem.getAttribute(_self.attribute);
            if (key != null) {
                // console.log(key);
                elem.innerHTML = LngObject[key];
            }
        }
        ;
    }
}

function loadi18n(){
    const language = navigator.language || navigator.browserLanguage;
    let currentLng = 'en';
    if (language.indexOf('es') > -1) {
        currentLng = 'es';
    }
    var translate = new Translate();
    var attributeName = 'data-tag';
    translate.init(attributeName, currentLng);
    translate.process();
}
document.body.onload = loadi18n();