class DarkMode {

    static darkMode() {
        const body = document.querySelector("body")
        const btnDarkMode = document.querySelector("#mode")
        btnDarkMode.addEventListener("click", (e) => {
            e.preventDefault()
            body.classList.toggle("dark__mode")
        })
    }
}
export { DarkMode }