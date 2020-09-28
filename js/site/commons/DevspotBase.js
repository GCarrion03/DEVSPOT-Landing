import { fetchFromPost } from "/js/site/commons/HttpUtils.js";
import { constants } from "/js/site/siteConstants.js";
import { GUIDUtils } from "/js/site/commons/GUIDUtils.js";

export const SimulatorMode = {
    STUDY: 'study',
    EXAM: 'exam'
};

export const Role = {
    VISITOR: 'visitor',
    USER: 'user',
    CONTRIBUTOR: 'contributor',
};

export class DevspotBase extends HTMLElement {
    userData = {};
    userRole;
    examGUID = GUIDUtils.newGuid();

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

    async getAssignedUserRole (examId) {
        let assignedUserRole;
        if (this.userData?.username) {
            let body = {userId: this.userData.username, examId: examId};
            this.accessData = await fetchFromPost(constants.paymentEndpoint, body);
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