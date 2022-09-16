

class SairEntrarModalCadastro {

    static spanModalCadastro = document.querySelector("span")

    static sairModalCadastro = document.querySelector("#sairModalCadastro")

    static cadastrarSpan = document.querySelector(".modalCadastrar")

    static ModalCadastrar() {
        this.spanModalCadastro.addEventListener("click", (e) => {


            if (this.cadastrarSpan.style.display === "none") {

                this.cadastrarSpan.style.display = "block"

            } else {

                this.cadastrarSpan.style.display = "none"

            }
        })

    }

    static ModalSairCadastro() {
        this.sairModalCadastro.addEventListener("click", (e) => {

            if (this.cadastrarSpan.style.display === "block") {

                this.cadastrarSpan.style.display = "none"
            }
        })
    }
}
SairEntrarModalCadastro.ModalCadastrar()
SairEntrarModalCadastro.ModalSairCadastro()



