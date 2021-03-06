const storageType = localStorage;
const consentPropertyName = 'jdc_consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.getItem(consentPropertyName, true);

window.onload = () => {

    const consentPopup = document.getElementById("consent");
    if (shouldShowPopup()) {
        const consent = confirm('Agree to the terms and Conditions of our website?');
        if (consent) {
            saveToStorage();
            console.log('You have accepted our Cookie Consent Popup');
            consentPopup.classList.add("none");
        } else {
            console.log('You Dismissed the Cookie Consent Popup');
            consentPopup.classList.add("block");
        }
    }
};

function hidePopup() {
    const consentPopup = document.getElementById("consent");
    consentPopup.classList.add("none");
};