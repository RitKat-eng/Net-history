/* header*/ 
const headerPlaceholder = document.getElementById("header-placeholder");

fetch("../assist/header.html")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Kunde inte ladda header.html: " + response.status);
        }
        return response.text();
    })
    .then(function (headerHTML) {
        headerPlaceholder.innerHTML = headerHTML;
    })
    .catch(function (error) {
        console.error("Kunde inte ladda headern:", error);
    });


/* Footer */
const footerPlaceholder = document.getElementById("footer-placeholder");


    fetch("../assist/footer.html")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Kunde inte ladda footer.html: " + response.status);
            }
            return response.text();
        })
        .then(function (footerHTML) {
            footerPlaceholder.innerHTML = footerHTML;
        })
        .catch(function (error) {
            console.error("Kunde inte ladda footern:", error);
        });
