import { UserRequest } from "../utils-folder/utils.mjs";
import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";
import { getTranslations } from "../public-localization/i18n-frontend-loader.mjs";

export class CreateUserClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.CreateUser);
    this.appendChild(document.importNode(template.content, true));

    const outputField = this.querySelector("#OutputField");
    const TOSmenuCheckbox = this.querySelector("#TOSmenuCheckbox");
    const inputForm = this.querySelector("#InputForm");
    const userNameInput = this.querySelector("#usernameInp");
    const dropbox = document.querySelector("dropbox-view");

    inputForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const translations = getTranslations();
      const hasConsented = TOSmenuCheckbox.checked;
      const username = userNameInput.value;

      const filename = dropbox.getFilename();
      console.log("Selected filename:", filename);

      try {
        const userResponse = UserRequest({
          method: "POST",
          username: username,
          consent: hasConsented,
          filename,
        });
        const data = await userResponse;

        if (data.error) {
          console.log(data);
          outputField.textContent = data.error;
          return;
        }
        outputField.textContent = `${translations.userAdded} ${data.id}`;
      } catch (err) {
        ((outputField.textContent = translations.userError), console.log(err));
      }
    });
  }
}
