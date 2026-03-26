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

    function translate(element, text) {
          element.textContent = text;
    }

    function translatePlaceholder(element, text) {
          element.placeholder = text;
    }

    translatePlaceholder(usernameInput, translations.frontend.usernameInp);
    translate(submitBtn, translations.frontend.submitButton);
    translate(privacyPolicy, translations.frontend.privacypolicy);
    translate(privacyLink, translations.frontend.privacylink);
    translate(dropText, translations.frontend.droptext);
    translate(clickTos, translations.frontend.clicktos);
    translate(tosLink, translations.frontend.toslink);
    translate(retractConsent, translations.frontend.retractConsent);
    translate(editUser, translations.frontend.editUser);
    translate(fileLabel, translations.frontend.filelabel);
    translate(exportUserdata, translations.frontend.exportUserdata);
    translatePlaceholder(settingsIdInput, translations.frontend.settingsIdInput);
    translate(exportButton, translations.frontend.exportButton);
    translate(submitUsernameBtn, translations.frontend.submitButton);
    translate(retractButton, translations.frontend.retractButton);
    translate(adminPageButton, translations.frontend.adminPageButton);
}

export function getTranslations() {
    return translations;
}