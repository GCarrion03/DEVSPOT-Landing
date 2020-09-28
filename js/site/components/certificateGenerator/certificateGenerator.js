export const CredentialType = {
        EXAM: { path: '/images/certificate/AWSBaseCert.png', name: 'exam' },
        MYTRACK: { path: '/images/certificate/AWSBaseMyTrack.png', name: 'track' }
};

const toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob)
    }));

export function generateCertificate (credentialType,candidateName, certificationId,certificationName, issueDate, expiryDate, providerAcronym, validationNumber, shareURL) {
    toDataURL(credentialType.path)
        .then(dataUrl => {
            // console.log('RESULT:', dataUrl);
            var doc = new jsPDF("landscape");
            doc.addImage(dataUrl, "JPEG", 0, 0, 300, 215);
            doc.setFontSize(35);
            doc.text(candidateName, 149, 80, 'center');
            doc.setFontSize(20);
            doc.text("has successfully completed the AWS Certification", 70, 100);
            doc.text(`preparation ${credentialType.name} to achieve their:`, 88, 107);
            doc.text("DEVSPOT IT Training", 175, 180);
            doc.text(issueDate, 40, 175);
            // doc.text(expiryDate, 40, 195);
            doc.setFontSize(10);
            doc.text("Validation Number:", 40, 195);
            doc.text(validationNumber, 70, 195);
            doc.text("Validate and get your own certificate here: ", 40, 200);
            doc.setTextColor(0, 0, 255);
            doc.text(shareURL, 106, 200);
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(35);
            doc.text(`${providerAcronym} ${certificationName}`, 149, 143, 'center');
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(20);
            doc.setFontStyle('bold');
            doc.text("Issue Date", 40, 165);
            // doc.text("Expiration Date", 40, 185);
            doc.save(`${candidateName}_${certificationId}.pdf`);
        });
}