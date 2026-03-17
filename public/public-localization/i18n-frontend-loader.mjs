let translations = {};

export async function loadLanguage() {
    const res = await fetch("/lang");
    translations = await res.json();

    const usernameInpes = document.querySelector("#usernameInput")
    const submitBtn = document.querySelector("#submitTOS");
    const privacypolicys = document.querySelector("#privacy-policy")
    const privacylink = document.querySelector("#privacy-link")
    const droptext = document.querySelector("#drop-text")
    const clicktos = document.querySelector("#click-tos")
    const toslink = document.querySelector("#tos-link")
    const retractConsent = document.querySelector("#retract-consent")
    const editUser = document.querySelector("#edit-user")
    const filelabels = document.querySelector("#filelabel")
    const exportUserdata = document.querySelector("#exportUserdata")
    const settingsIdInput = document.querySelector("#settingsIdInput")
    const exportButton = document.querySelector("#exportButton")
    const submitUsernameBtn = document.querySelector("#submitUsernameBtn")
    const retractButton = document.querySelector("#retract-delete")
    submitBtn.textContent = translations.submitButton;
    privacypolicys.textContent = translations.privacypolicy
    privacylink.textContent = translations.privacylink;
    droptext.textContent = translations.droptext;
    usernameInpes.placeholder = translations.usernameInp
    clicktos.textContent = translations.clicktos
    toslink.textContent = translations.toslink
    retractConsent.textContent = translations.retractConsent
    editUser.textContent = translations.editUser
    filelabels.textContent = translations.filelabel
    exportUserdata.textContent = translations.exportUserdata
    settingsIdInput.placeholder = translations.settingsIdInput
    exportButton.textContent = translations.exportButton
    submitUsernameBtn.textContent = translations.submitButton
    retractButton.textContent = translations.retractButton
}

export function getTranslations() {
    return translations;
}