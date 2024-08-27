document.addEventListener("DOMContentLoaded", () => {

    let $document = document.querySelector("html")
    let $switcher = document.getElementById("theme-toggle")

    const savedTheme = sessionStorage.getItem("theme")
    if (savedTheme) {
        $document.setAttribute("data-theme", savedTheme)
    }

    $switcher.addEventListener("click", () => {
        let currentTheme = $document.getAttribute("data-theme")

        if (currentTheme !== "dark") {
            $document.setAttribute("data-theme", "dark")
            sessionStorage.setItem("theme", "dark")
        } else {
            $document.setAttribute("data-theme", "light")
            sessionStorage.setItem("theme", "light")
        }
    })

})
