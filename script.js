/* ==========================================
   PRODUCTOS
========================================== */

const productos = [

    /* ==========================
       CLÁSICOS
    ========================== */

    {
        nombre: "Espresso",
        precio: 40,
        categoria: "clasicos"
    },

    {
        nombre: "Americano",
        precio: 55,
        categoria: "clasicos",
        frio: true
    },

    {
        nombre: "Capuchino",
        precio: 75,
        categoria: "clasicos",
        descripcion: "Caramelo, vainilla, crema irlandesa",
        frio: true
    },

    {
        nombre: "Latte",
        precio: 75,
        categoria: "clasicos",
        descripcion: "Caramelo, vainilla, crema irlandesa",
        frio: true
    },

    {
        nombre: "Mocha",
        precio: 75,
        categoria: "clasicos",
        frio: true
    },

    {
        nombre: "Flat white",
        precio: 65,
        categoria: "clasicos"
    },

    {
        nombre: "Macchiato",
        precio: 75,
        categoria: "clasicos",
        frio: true
    },

    {
        nombre: "Espresso tonic",
        precio: 65,
        categoria: "clasicos"
    },


    /* ==========================
       ESPECIALES
    ========================== */

    {
        nombre: "Chocolate",
        precio: 90,
        categoria: "especiales"
    },

    {
        nombre: "Chai sucio",
        precio: 75,
        categoria: "especiales",
        frio: true
    },

    {
        nombre: "Chai latte",
        precio: 75,
        categoria: "especiales",
        frio: true
    },

    {
        nombre: "Thai",
        precio: 75,
        categoria: "especiales"
    },

    {
        nombre: "Matcha latte",
        precio: 85,
        categoria: "especiales",
        frio: true
    },

    {
        nombre: "Matcha fresa",
        precio: 85,
        categoria: "especiales",
        frio: true
    },


    /* ==========================
       MÉTODOS
    ========================== */

    {
        nombre: "V60",
        precio: 70,
        categoria: "metodos"
    },

    {
        nombre: "Aeropress",
        precio: 60,
        categoria: "metodos"
    },

    {
        nombre: "Frappe Oreo",
        precio: 89,
        categoria: "metodos"
    },

    {
        nombre: "Frappe Caramelo",
        precio: 89,
        categoria: "metodos"
    },

    {
        nombre: "Frappe Mocha",
        precio: 89,
        categoria: "metodos"
    },

    {
        nombre: "Frappe Matcha",
        precio: 89,
        categoria: "metodos"
    },

    {
        nombre: "Frappe Vainilla",
        precio: 89,
        categoria: "metodos"
    },


    /* ==========================
       BEBIDAS
    ========================== */

    {
        nombre: "Té",
        precio: 40,
        categoria: "bebidas"
    },

    {
        nombre: "Tisana",
        precio: 65,
        categoria: "bebidas"
    },

    {
        nombre: "Proteína de la casa",
        precio: 85,
        categoria: "bebidas"
    },

    {
        nombre: "Agua mineral",
        precio: 35,
        categoria: "bebidas"
    },


    /* ==========================
       EXTRAS
    ========================== */

    {
        nombre: "Carga de espresso",
        precio: 15,
        categoria: "extras"
    },

    {
        nombre: "Leche de almendra",
        precio: 15,
        categoria: "extras"
    },

    {
        nombre: "Leche de avena",
        precio: 15,
        categoria: "extras"
    },

    {
        nombre: "Cold foam",
        precio: 15,
        categoria: "extras"
    }

];



/* ==========================================
   NOMBRES DE LAS CATEGORÍAS
========================================== */

const nombresCategorias = {

    clasicos: "Clásicos",

    especiales: "Especiales",

    metodos: "Métodos",

    bebidas: "Bebidas",

    extras: "Extras"

};



/* ==========================================
   ELEMENTOS HTML
========================================== */

const productsContainer =
    document.getElementById("productsContainer");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryButtons =
    document.querySelectorAll(".category-button");



/* ==========================================
   MOSTRAR PRODUCTOS
========================================== */

function mostrarProductos(categoria) {

    productsContainer.innerHTML = "";

    categoryTitle.textContent =
        nombresCategorias[categoria];


    const productosFiltrados =
        productos.filter(
            producto => producto.categoria === categoria
        );


    productosFiltrados.forEach(producto => {

        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add("product");


        tarjeta.innerHTML = `

            <div class="product-information">

                <h3>
                    ${producto.nombre}
                    ${producto.frio
                ? '<span class="cold">*</span>'
                : ''
            }
                </h3>

                ${producto.descripcion
                ?
                `<p>${producto.descripcion}</p>`
                :
                ""
            }

            </div>


            <span class="price">
                $${producto.precio}
            </span>

        `;


        productsContainer.appendChild(tarjeta);

    });

}



/* ==========================================
   CAMBIAR CATEGORÍA
========================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const categoria =
            button.dataset.category;


        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        mostrarProductos(categoria);


        window.scrollTo({

            top:
                document.querySelector(".menu-section")
                    .offsetTop - 20,

            behavior: "smooth"

        });

    });

});



/* ==========================================
   PANTALLA DE BIENVENIDA
========================================== */

const welcome =
    document.getElementById("welcome");

const mainContent =
    document.getElementById("mainContent");

const openMenu =
    document.getElementById("openMenu");


openMenu.addEventListener("click", () => {

    welcome.classList.add("hide-welcome");


    setTimeout(() => {

        welcome.style.display = "none";

        mainContent.classList.remove("hidden");

    }, 700);

});



/* ==========================================
   MENÚ INICIAL
========================================== */

mostrarProductos("clasicos");