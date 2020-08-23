export let constants;
window.location.hostname === 'devspot.org' ?
    constants = {
        examEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/prod/stable/exam',
        questionEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/prod/stable/question',
        myTrackEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/prod/stable/mytrack',
        paymentEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/prod/stable/payment',
        paypalClientId: 'AVzcOPC_DG357R6KlYHjzB7XL4dIjckF-HdOTNGHFos5MC_AcBoYSSUxTgi0WXiRjRMs6cPhUFB_qcIG'
    } : constants = {
        examEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/default/exam',
        questionEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/default/question',
        myTrackEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/default/mytrack',
        paymentEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/default/payment',
        paypalClientId: 'AbmxaQozKWK874PgsBI6KySynlfN_S8Ae_J_7n1CXKOXkaMhdUBB_JupCFpKfUcmrINNosBDdTT5Bd8D'
    };