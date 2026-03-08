import i18n from "../../localization/i18n.mjs";
export function getL10n(req) {
  let lang = req.headers["accept-language"];

  lang = lang.split(",")[0].split("-")[0];

  if (["nb", "nn", "no"].includes(lang)) {
    lang = "no";
  } else {
    lang = "en";
  }

  return i18n[lang];
}