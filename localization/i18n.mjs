import fs from "node:fs"

const i18n = {
  dateFormaters: {
    us: (date) => date.toLocaleDateString("en"),
    no: (date) => date.toLocaleDateString("nb-NO"),
  },
  
};

const path = "./localization/localization-json"
let files = fs.readdirSync(path);
for (let file of files) {
    let id = file.replace(".json", "");
    let content = JSON.parse(fs.readFileSync(`${path}/${file}`, "utf8"));
    i18n[id] = content;
}


export default i18n;