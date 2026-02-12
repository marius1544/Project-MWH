import fetchRequest from "../utils-folder/fetchreq.mjs";

async function loadView(path) {
  const response = await fetchRequest(path);
  const html = await response.text();

  const template = document.createElement("template");
  template.innerHTML = html;

  return template;
}

export default loadView;