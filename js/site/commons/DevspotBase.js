import { fetchFromPost } from "/js/site/commons/HttpUtils.js";
export const Role = {
    VISITOR: 'visitor',
    USER: 'user',
    CONTRIBUTOR: 'contributor',
};

export class DevspotBase extends HTMLElement {
    userData = {};
    constructor(){
        super();
        const userData = localStorage.getItem('userData');
        if (userData && userData !== "undefined" && userData !== "\"\"") {
            this.userData = JSON.parse(localStorage.getItem('userData'));
            this.userData.username = this.userData['cognito:username'];
        } else {
            this.userData = null;
        }
    }

    async getAssignedUserRole (exam) {
        let assignedUserRole;
        if (this.userData?.username) {
            let body = {userId: this.userData.username, examId: exam.examId};
            this.accessData = await fetchFromPost(this.constants.paymentEndpoint, body);
            if (this.accessData?.transactionId?.length === 17) {
                assignedUserRole = Role.CONTRIBUTOR;
            } else {
                assignedUserRole = Role.USER;
            }
        } else {
            assignedUserRole = Role.VISITOR;
        }
        return assignedUserRole;
    }
}