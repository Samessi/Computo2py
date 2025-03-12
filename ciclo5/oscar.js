document.addEventListener("DOMContentLoaded", function () {
    // Función para ampliar la imagen
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    window.ampliarImagen = function (img) {
        modal.style.display = "block";
        modalImg.src = img.src;
    };

    window.cerrarModal = function () {
        modal.style.display = "none";
    };

    // Definiendo el custom element
    class OscarWinner extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });

            const wrapper = document.createElement("div");
            wrapper.classList.add("winner");

            const title = document.createElement("h3");
            title.textContent = this.getAttribute("title");

            const description = document.createElement("p");
            description.textContent = this.getAttribute("description");

            const img = document.createElement("img");
            img.src = this.getAttribute("img");
            img.alt = this.getAttribute("title");
            img.style.cursor = "pointer";

            img.addEventListener("click", () => {
                alert(`Ganador: ${this.getAttribute("title")}`);
            });

            const style = document.createElement("style");
            style.textContent = `
                .winner {
                    background: white;
                    padding: 15px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    width: 300px;
                    text-align: center;
                }
                .winner img {
                    width: 100%;
                    border-radius: 10px;
                }
            `;

            this.shadowRoot.append(style, wrapper);
            wrapper.append(title, description, img);
        }
    }

    customElements.define("oscar-winner", OscarWinner);
});
