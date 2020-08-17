export let constants;
window.location.hostname === 'devspot.org' ?
    constants = {
        examEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/prod/stable/exam',
        questionEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/prod/stable/question',
        myTrackEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/prod/stable/mytrack'
    } : constants = {
        examEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/default/exam',
        questionEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/default/question',
        myTrackEndpoint: 'https://wmb2ihcl2e.execute-api.us-east-1.amazonaws.com/default/mytrack'
    };