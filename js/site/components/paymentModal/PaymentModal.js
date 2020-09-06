import { fetchFromPut } from "/js/site/commons/HttpUtils.js";
import { constants } from "/js/site/siteConstants.js";
export const paymentModal =
    `<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
    <!-- Modal content-->
<div class="modal-content" style="max-width:440px;">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">&times;</button>
<h4 class="modal-title">Become a supporter!</h4>
</div>
<div class="modal-body">
    <div class="col-lg-12 padding-sides-0">
    <h5 class="bold">Make use of all the simulator features, improve your passing odds!</h5>
<p>Supporter access will grant you the following features to ace your exam:</p>
<ul>
<li>Save all you answered questions to "My Track".</li>
<li>Create practice exams from the "not yet taken" questions only.</li>
<li>Premium Support.</li>
<li>Try again the "incorrect" questions to improve your score(coming soon).</li>
<li>Reset "Your Track"(coming soon).</li>
<li>Download and Print all the exam questions database with answers and the most liked comment(coming soon).</li>
</ul>
<p>Finally it will give us the means to grow this platform to provide a totally free high quality exam simulator.</p>
<p class="padding-bottom-md">Thanks for your support.</p>
<h5 class="bold">Please select your supporter status duration:</h5>
</div>
<div class="col-lg-9 col-sm-6 padding-sides-0">
    <input type="radio" value="9.99" name="subscriptionType" id="months1" style="float: left;">
    <label id="1MonthRadioLabel" for="months1"
    style="padding-left: 5px;float: left;font-weight: 100;">1 month ($0.33 per day):</label>
</div>
<div class="col-lg-3 col-sm-6 padding-sides-0">
    <label style="float: right;">$9.99 USD</label>
</div>
<div class="col-lg-9 col-sm-6 padding-sides-0">
    <input type="radio" value="14.99" name="subscriptionType" id="months3" style="float: left;">
    <label id="3MonthsRadioLabel" for="months3"
    style="padding-left: 5px;float: left;font-weight: 100;">3 months ($0.17
per day):</label>
</div>
<div class="col-lg-3 col-sm-6 padding-sides-0">
    <label style="float: right;">$14.99 USD</label>
</div>
<div class="col-lg-9 col-sm-6 padding-sides-0 padding-bottom-md">
    <input type="radio" value="19.99" name="subscriptionType" id="months12" style="float: left;" checked>
<label id="12MonthsRadioLabel" for="months12"
    style="padding-left: 5px;float: left;font-weight: 100;">12 months
($0.05 per day):</label>
</div>
<div class="col-lg-3 col-sm-6 padding-sides-0">
    <label style="float: right;">$19.99 USD</label>
</div>

<div id="paypal-button-container"></div>
    <script src="https://www.paypal.com/sdk/js?client-id=${constants.paypalClientId}&currency=USD" data-sdk-integration-source="button-factory"></script>
</div>
<div class="modal-footer">
    <button type="button"name="" class="btn btn-default" id="btnClosePopup" data-dismiss="modal">Close</button>
    </div>
    </div>
    </div>
    </div>`;

export function renderPaypalButtons(onApproveRerenderCallback, payerUserId, payerExamId) {
    paypal.Buttons({
        style: {
            shape: 'pill',
            color: 'blue',
            layout: 'vertical',
            size: 'small',
            label: 'buynow',

        },
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: document.querySelector('input[name = subscriptionType]:checked').value
                    }
                }]
            });
        },
        onApprove: function (data, actions) {
            let selectedPaymentDuration = +document.querySelector('input[name = subscriptionType]:checked').id.replace('months','');
            return actions.order.capture().then(async function (details) {
                // alert('Transaction completed by ' + details.payer.name.given_name + '!');
                let startDate = new Date();
                let endDate = new Date();
                const examPrice = details.purchase_units[0].payments.captures[0].amount.value;
                const txId = details.purchase_units[0].payments.captures[0].id;
                endDate.setMonth(endDate.getMonth() + selectedPaymentDuration);
                const body = [{
                    userId: payerUserId,
                    examId: payerExamId,
                    startDate: startDate.getTime(),
                    expirationDate: endDate.getTime(),
                    transactionDetails: details,
                    duration: selectedPaymentDuration,
                    price: examPrice,
                    transactionId: txId
                }];
                const result = await fetchFromPut(constants.paymentEndpoint, body);
                console.log(result);
                // console.log(`${JSON.stringify(details)} paymentid: ${details.purchase_units[0].payments.captures[0].id} Duration:
                //     ${selectedPaymentDuration}
                //     value: ${details.purchase_units[0].payments.captures[0].amount.value} startDate: ${startDate} expireDate: ${endDate}
                //     startDateUnix: ${startDate.getTime()} expireDateUnix: ${endDate.getTime()}`);
                onApproveRerenderCallback(details);
            });
        }
    }).render('#paypal-button-container');
}
