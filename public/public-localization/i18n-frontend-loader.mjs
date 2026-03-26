let translations = {};

export async function loadLanguage() {
    const res = await fetch("/lang");
    translations = await res.json();

    const usernameInput = document.querySelector("#usernameInput");
    const submitBtn = document.querySelector("#submitTOS");
    const privacyPolicy = document.querySelector("#privacy-policy");
    const privacyLink = document.querySelector("#privacy-link");
    const dropText = document.querySelector("#drop-text");
    const clickTos = document.querySelector("#click-tos");
    const tosLink = document.querySelector("#tos-link");
    const retractConsent = document.querySelector("#retract-consent");
    const editUser = document.querySelector("#edit-user");
    const fileLabel = document.querySelector("#filelabel");
    const exportUserdata = document.querySelector("#exportUserdata");
    const settingsIdInput = document.querySelector("#settingsIdInput");
    const exportButton = document.querySelector("#exportButton");
    const submitUsernameBtn = document.querySelector("#submitUsernameBtn");
    const retractButton = document.querySelector("#retract-delete");
    const adminPageButton = document.querySelector("#goToAdminPage");
    const changeUsernameidInputField = document.querySelector("#idInputField")
    const retractConsentInp = document.querySelector("#userIdInp");
    const newUsernameInp = document.querySelector("#newUsernameInputField")
    
    function translate(element, text) {
          element.textContent = text;
    }

    function translatePlaceholder(element, text) {
          element.placeholder = text;
    }

  
    translatePlaceholder(newUsernameInp, translations.newUsernameInp)
    translatePlaceholder(retractConsentInp, translations.settingsIdInput)
    translatePlaceholder(changeUsernameidInputField, translations.changeUsernameidInputField)
    translatePlaceholder(usernameInput, translations.usernameInp)
    translatePlaceholder(settingsIdInput, translations.settingsIdInput)
    translate(submitBtn, translations.submitButton);
    translate(privacyPolicy, translations.privacypolicy);
    translate(privacyLink, translations.privacylink);
    translate(dropText, translations.droptext);
    translate(clickTos, translations.clicktos);
    translate(tosLink, translations.toslink);
    translate(retractConsent, translations.retractConsent);
    translate(editUser, translations.editUser);
    translate(fileLabel, translations.filelabel);
    translate(exportUserdata, translations.exportUserdata);
    translate(exportButton, translations.exportButton);
    translate(submitUsernameBtn, translations.submitButton);
    translate(retractButton, translations.retractButton);
    translate(adminPageButton, translations.adminPageButton);
}

export function getTranslations() {
    return translations;
}