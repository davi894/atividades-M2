import { Api } from "../API/api.js";
import { DarkMode } from "./darkmode.js"

const usuariosSemDepratamentos = await Api.usuariosSemDepartamentos()

const usuarios = await Api.listarTodosusuarios()

const admin__kindofwork = document.querySelector("#admin__kindofwork")

const admin__nivelProfissional = document.querySelector("#admin__nivelProfissional")

class HomePage {

    static async listaUsuarios() {
        const ul = document.querySelector("#admin__listarUsuarios")
        usuarios.forEach((elem) => {

            if (!elem.is_admin) {
                const li = document.createElement("li")

                li.classList.add("admin__empresas")

                const h2 = document.createElement("h2")
                const h3 = document.createElement("h3")
                const h4 = document.createElement("h4")
                const h5 = document.createElement("h5")
                const h6 = document.createElement("h6")

                h2.innerText = elem.username
                h3.innerText = elem.professional_level
                h4.innerText = elem.kind_of_work
                h5.innerText = elem.email
                h6.innerText = elem.department_uuid


                li.append(h2, h3, h4, h5, h6)
                ul.appendChild(li)
            }
        })
    }

    static async usuariosSemDeparatemntos() {
        const ul = document.querySelector("#admin__semDepartamentos")

        usuariosSemDepratamentos.forEach((elem) => {

            if (!elem.is_admin && !elem.department_uuid) {
                const li = document.createElement("li")

                li.classList.add("admin__empresas")

                const h2 = document.createElement("h2")
                const h3 = document.createElement("h3")
                const h4 = document.createElement("h4")
                const h5 = document.createElement("h5")
                const h6 = document.createElement("h6")

                h2.innerText = elem.username
                h3.innerText = elem.professional_level
                h4.innerText = elem.kind_of_work
                h5.innerText = elem.email
                h6.innerText = elem.department_uuid


                li.append(h2, h3, h4, h5, h6)
                ul.appendChild(li)
            }
        });
    }

    static async buscarUsuarios() {

        const select = document.querySelector("#admin__select")

        usuarios.forEach((elem) => {
            if (!elem.is_admin) {
                const option = document.createElement("option")
                option.innerText = elem.username
                option.value = elem.uuid
                select.appendChild(option)
            }
        })

        const btnBuscar = document.querySelector("#admin__btn__buscarFunSelect")

        btnBuscar.addEventListener("click", (e) => {
            e.preventDefault()

            const usuariosFilter = usuarios.filter((elem) => {
                return select.value === elem.uuid

            })
            console.log(usuariosFilter)
            admin__kindofwork.value = usuariosFilter[0].kind_of_work
            admin__nivelProfissional.value = usuariosFilter[0].professional_level

            /* console.log(admin__kindofwork.value = usuariosFilter[0].kind_of_work,
                admin__nivelProfissional.value = usuariosFilter[0].professional_level) */
            const btneditar = document.querySelector("#admin__btn__editarUser")
            btneditar.addEventListener("click", async (e) => {
                e.preventDefault()


                /*  console.log(admin__kindofwork.value, admin__nivelProfissional.value) */
                await Api.adminEditarDadosDoFuncionario({
                    kind_of_work: admin__kindofwork.value,
                    professional_level: admin__nivelProfissional.value
                }, select.value)
            })

        })

    }
}
DarkMode.darkMode()
HomePage.buscarUsuarios()
HomePage.listaUsuarios()
HomePage.usuariosSemDeparatemntos()