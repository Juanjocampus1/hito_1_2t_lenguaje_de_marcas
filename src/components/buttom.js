document.addEventListener("DOMContentLoaded", function() {
    const xmlButton = document.querySelector("#xmlButton");
    const jsonButton = document.querySelector("#jsonButton");
    const contactButton = document.querySelector("#contactButton");
    const BLOGButton = document.querySelector("#BLOGButton");

    xmlButton.addEventListener("click", redirectToXMLPage);
    jsonButton.addEventListener("click", redirectToJSONPage);
    contactButton.addEventListener("click", redirectToContactPage);
    BLOGButton.addEventListener("click", redirectToblogPage)
});

function redirectToXMLPage() {
    window.location.href = "https://www.xml.com"; 
}

function redirectToJSONPage() {
    window.location.href = "https://www.json.org/json-en.html";
}

function redirectToContactPage() {
    window.location.href = "../pages/contacta.html";
}

function redirectToblogPage() {
    window.location.href = "../pages/blog.html";
}