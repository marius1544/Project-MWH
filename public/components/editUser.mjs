import { UserRequest } from "../utils-folder/utils.mjs";
import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";
import { getTranslations } from "../public-localization/i18n-frontend-loader.mjs";
export class EditUserClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.EditUser);
    this.appendChild(document.importNode(template.content, true));

    const submitUsernameBtn = document.getElementById("submitUsernameBtn");
    const idInputFieldVar = document.getElementById("idInputField");
    const newUsernameInputFieldVar = document.getElementById(
      "newUsernameInputField",
    );

    submitUsernameBtn.addEventListener("click", async () => {
            const translations = getTranslations();

      try {
        const response = await UserRequest({
          method: "PUT",
          userID: idInputFieldVar.value,
          username: newUsernameInputFieldVar.value,
        });

        if (response) {
          alert(
            `${translations.editUserSuccess} ${newUsernameInputFieldVar.value}`,
          );
        } else {
          alert(`${translations.cantFindId} ${idInputFieldVar.value}`);
        }
      } catch (err) {
        alert(`${translations.errorUsername}`, err);
      }
    });
  }
}
