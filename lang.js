function loadLanguage(lang) {
    localStorage.setItem("lang", lang);

    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {

            document.querySelectorAll("[data-i18n]").forEach(el => {
                let key = el.getAttribute("data-i18n");
                if (data[key]) el.innerHTML = data[key];
            });

        });
}

function changeLanguage(lang) {
    loadLanguage(lang);
}

window.onload = () => {
    let lang = localStorage.getItem("lang") || "en";
    loadLanguage(lang);
};
