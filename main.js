export async function upload(event) {
    /** @type HTMLInputElement */
    const target = event.target;
    /** @type File */
    const file = target.files[0];
    const element = document.createElement("template");
    document.createDocumentFragment().append(element);
    element.innerHTML = await file.text();
    /** @type HTMLMetaElement */
    const contentMeta = element.content.getElementById("meta-preload-data");
    const contentJson = JSON.parse(contentMeta.getAttribute("content"));
    let content = Object.entries(contentJson.novel).values().next().value[1].content;
    content = content
        .replaceAll("\r", "")
        .replaceAll("\n", "<br/>")
        .replaceAll("[newpage]", "<hr/>");
    document.getElementById("text").innerHTML = content;
    scrollTo(0, 0);
}