

class MenuOpcoes {

    static opcoesMenu = document.querySelector(".opcoesMenu")

    static sectionDadosUsuario = document.querySelector("#usuario")

    static sairMenuUsuario = document.querySelector("#sairMenuUsuario")

    static MostrarOpcoesMenu() {

        this.opcoesMenu.addEventListener("click", (e) => {
            if (this.sectionDadosUsuario.style.display === "none") {

                this.sectionDadosUsuario.style.display = "block"
                this.opcoesMenu.style.display = "none"
                this.sairMenuUsuario.style.display = "block"
            } else {
                this.sectionDadosUsuario.style.display = "none"
            }
        })
    }

    static SairOpcoesMenu() {

        this.sairMenuUsuario.addEventListener("click", (e) => {
            if (this.sairMenuUsuario.style.display = "block") {

                this.sectionDadosUsuario.style.display = "none"
                this.opcoesMenu.style.display = "block"
                this.sairMenuUsuario.style.display = "none"
            }
        })
    }

}
MenuOpcoes.MostrarOpcoesMenu()
MenuOpcoes.SairOpcoesMenu()