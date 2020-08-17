export class DevspotBase extends HTMLElement {
    userData = {};
    constructor(){
        super();
        const userData = localStorage.getItem('userData');
        if (userData && userData !== "undefined" && userData !== "\"\"") {
            this.userData = JSON.parse(localStorage.getItem('userData'));
            this.userData.username = this.userData['cognito:username'];
        }
    }
}