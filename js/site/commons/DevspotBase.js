export class DevspotBase extends HTMLElement {
    userData = {};
    constructor(){
        super();
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userData.username = this.userData['cognito:username'];
    }
}