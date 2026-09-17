const productos = [

    // =====================================================
    // BEBIDAS
    // =====================================================

    // -------------------------
    // CAFÉ
    // -------------------------

    {
        nombre: "Espresso",
        precio: 40,
        categoria: "bebidas",
        subcategoria: "cafe"
    },

    {
        nombre: "Americano",
        precio: 60,
        categoria: "bebidas",
        subcategoria: "cafe",
        frio: true
    },

    {
        nombre: "Flat White",
        precio: 65,
        categoria: "bebidas",
        subcategoria: "cafe",
        frio: true
    },

    {
        nombre: "Capuccino",
        precio: null,
        categoria: "bebidas",
        subcategoria: "cafe",
        frio: false,
        variantes: [
            {
                nombre: "Caramelo",
                precio: 70
            },
            {
                nombre: "Vainilla",
                precio: 70
            },
            {
                nombre: "Crema Irlandesa",
                precio: 70
            },
            {
                nombre: "Sabores temporales",
                precio: 70
            }
        ]
    },

    {
        nombre: "Latte",
        precio: null,
        categoria: "bebidas",
        subcategoria: "cafe",
        frio: false,
        variantes: [
            {
                nombre: "Caramelo",
                precio: 75
            },
            {
                nombre: "Vainilla",
                precio: 75
            },
            {
                nombre: "Crema Irlandesa",
                precio: 75
            },
            {
                nombre: "Sabores temporales",
                precio: 75
            }
        ]
    },

    {
        nombre: "Moka",
        precio: 75,
        categoria: "bebidas",
        subcategoria: "cafe",
        frio: true
    },

    {
        nombre: "Espresso Tonic",
        precio: 75,
        categoria: "bebidas",
        subcategoria: "cafe",
        frio: true
    },


    // -------------------------
    // BEBIDAS SIN CAFÉ
    // -------------------------

    {
        nombre: "Thai",
        precio: 75,
        categoria: "bebidas",
        subcategoria: "sin-cafe",
        frio: true
    },

    {
        nombre: "Thai Verde",
        precio: 75,
        categoria: "bebidas",
        subcategoria: "sin-cafe",
        frio: true
    },

    {
        nombre: "Tisana",
        precio: 65,
        categoria: "bebidas",
        subcategoria: "sin-cafe",
        frio: true
    },

    {
        nombre: "Té",
        precio: 45,
        categoria: "bebidas",
        subcategoria: "sin-cafe",
        frio: true
    },

    {
        nombre: "Té Rooibos",
        precio: 50,
        categoria: "bebidas",
        subcategoria: "sin-cafe",
        frio: true
    },

    {
        nombre: "Latte Rooibos",
        precio: 65,
        categoria: "bebidas",
        subcategoria: "sin-cafe",
        frio: true
    },


    // -------------------------
    // FRAPPES
    // -------------------------

    {
        nombre: "Caramelo",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Lotus",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Nutella",
        precio: 95,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Crema Irlandesa",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Mocha",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Vainilla",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Sin Café",
        precio: null,
        categoria: "bebidas",
        subcategoria: "frappes",
        titulo: true
    },

    {
        nombre: "Oreo",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Thai",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Chai",
        precio: 89,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Matcha",
        precio: 95,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Matcha Fresa",
        precio: 110,
        categoria: "bebidas",
        subcategoria: "frappes"
    },

    {
        nombre: "Proteína",
        precio: 90,
        categoria: "bebidas",
        subcategoria: "frappes"
    },


    // -------------------------
    // REFRESCANTES
    // -------------------------

    {
        nombre: "Limonada",
        precio: 45,
        categoria: "bebidas",
        subcategoria: "refrescantes"
    },

    {
        nombre: "Limonada Mineral",
        precio: 65,
        categoria: "bebidas",
        subcategoria: "refrescantes"
    },

    {
        nombre: "Limonada Fresa",
        precio: 70,
        categoria: "bebidas",
        subcategoria: "refrescantes"
    },

    {
        nombre: "Limonada Temporal",
        precio: 70,
        categoria: "bebidas",
        subcategoria: "refrescantes"
    },

    {
        nombre: "Rusa",
        precio: 60,
        categoria: "bebidas",
        subcategoria: "refrescantes"
    },

    {
        nombre: "Limonada Yuzu",
        precio: 85,
        categoria: "bebidas",
        subcategoria: "refrescantes"
    },


    // -------------------------
    // MÉTODOS
    // -------------------------

    {
        nombre: "V60",
        precio: 70,
        categoria: "bebidas",
        subcategoria: "metodos",
        frio: true
    },

    {
        nombre: "Aeropress",
        precio: 60,
        categoria: "bebidas",
        subcategoria: "metodos",
        frio: true
    },

    {
        nombre: "Chemex",
        precio: 80,
        categoria: "bebidas",
        subcategoria: "metodos",
        frio: true
    },


    // -------------------------
    // COLD BREW
    // -------------------------

    {
        nombre: "Tonic Cold Brew",
        precio: 75,
        categoria: "bebidas",
        subcategoria: "cold-brew"
    },

    {
        nombre: "Tuba Cold Brew",
        precio: 75,
        categoria: "bebidas",
        subcategoria: "cold-brew"
    },

    {
        nombre: "Naranja Cold Brew",
        precio: 75,
        categoria: "bebidas",
        subcategoria: "cold-brew"
    },

    {
        nombre: "Cold Brew Mineral",
        precio: 70,
        categoria: "bebidas",
        subcategoria: "cold-brew"
    },

    {
        nombre: "Cold Brew",
        precio: 60,
        categoria: "bebidas",
        subcategoria: "cold-brew"
    },


    // -------------------------
    // MATCHA
    // -------------------------

    {
        nombre: "Matcha Latte",
        precio: 85,
        categoria: "bebidas",
        subcategoria: "matcha",
        frio: true
    },

    {
        nombre: "Matcha Fresa",
        precio: 90,
        categoria: "bebidas",
        subcategoria: "matcha",
        frio: true
    },

    {
        nombre: "Matcha Temporal",
        precio: 95,
        categoria: "bebidas",
        subcategoria: "matcha",
        frio: true
    },

    {
        nombre: "Matcha Tonic",
        precio: 90,
        categoria: "bebidas",
        subcategoria: "matcha",
        frio: true
    },

    {
        nombre: "Matcha Yuzu Tonic",
        precio: 100,
        categoria: "bebidas",
        subcategoria: "matcha",
        frio: true
    },

    {
        nombre: "Coco Cold Foam",
        precio: 115,
        categoria: "bebidas",
        subcategoria: "matcha",
        frio: true
    },

    {
        nombre: "Matcha Limonada",
        precio: 95,
        categoria: "bebidas",
        subcategoria: "matcha",
        frio: true
    },


    // -------------------------
    // EXTRAS
    // -------------------------

    {
        nombre: "Espresso",
        precio: 10,
        categoria: "bebidas",
        subcategoria: "extras"
    },

    {
        nombre: "Creatina 5Gr (Creapure)",
        precio: 10,
        categoria: "bebidas",
        subcategoria: "extras"
    },

    {
        nombre: "Leche Avena",
        precio: 15,
        categoria: "bebidas",
        subcategoria: "extras"
    },

    {
        nombre: "Cold Foam",
        precio: 15,
        categoria: "bebidas",
        subcategoria: "extras"
    },


    // =====================================================
    // ALIMENTOS
    // =====================================================

    // -------------------------
    // WAFFLES
    // -------------------------

    {
        nombre: "El Padre",
        precio: 115,
        categoria: "alimentos",
        subcategoria: "waffles",
        descripcion: "Huevo y tocino"
    },

    {
        nombre: "Platanar",
        precio: 90,
        categoria: "alimentos",
        subcategoria: "waffles",
        descripcion: "Plátano, nuez, chocolate y crema batida"
    },

    {
        nombre: "Fresita",
        precio: 95,
        categoria: "alimentos",
        subcategoria: "waffles",
        descripcion: "Puré de fresa con Nutella y crema batida"
    },


    // -------------------------
    // PANINIS
    // -------------------------

    {
        nombre: "Serrano",
        precio: 115,
        categoria: "alimentos",
        subcategoria: "paninis",
        descripcion: "Jamón serrano, queso, mayonesa, lechuga y jitomate"
    },

    {
        nombre: "Jamón de Pierna",
        precio: 95,
        categoria: "alimentos",
        subcategoria: "paninis",
        descripcion: "Jamón, queso, mayonesa y lechuga"
    },

    {
        nombre: "El Paso",
        precio: 105,
        categoria: "alimentos",
        subcategoria: "paninis",
        descripcion: "Huevo, tocino, queso y mayonesa"
    },


    // -------------------------
    // BAGELS
    // -------------------------

    {
        nombre: "Vista Hermosa",
        precio: 135,
        categoria: "alimentos",
        subcategoria: "bagels",
        descripcion: "Salmón ahumado, queso crema y pepino"
    },

    {
        nombre: "Tocino y Huevo",
        precio: 115,
        categoria: "alimentos",
        subcategoria: "bagels",
        descripcion: "Huevo, tocino y queso"
    },


    // -------------------------
    // YOGURT
    // -------------------------

    {
        nombre: "Yogurt y Fruta",
        precio: 115,
        categoria: "alimentos",
        subcategoria: "yogurt",
        descripcion: "Fruta de temporada, endulzada al gusto y acompañado con granola"
    },


    // -------------------------
    // SNACKS
    // -------------------------

    {
        nombre: "Papas Chips",
        precio: 45,
        categoria: "alimentos",
        subcategoria: "snacks"
    },

    {
        nombre: "Papas a la Francesa",
        precio: 65,
        categoria: "alimentos",
        subcategoria: "snacks"
    },

    {
        nombre: "Palomitas",
        precio: 38,
        categoria: "alimentos",
        subcategoria: "snacks"
    },


    // -------------------------
    // POSTRES
    // -------------------------

    {
        nombre: "Postre de la casa",
        precio: null,
        categoria: "alimentos",
        subcategoria: "postres",
        descripcion: "Preguntar por disponibilidad"
    },

    {
        nombre: "Strudel de Manzana",
        precio: 35,
        categoria: "alimentos",
        subcategoria: "postres",
        descripcion: "Strudel de manzana acompañado con crema batida"
    },

    {
        nombre: "Tarta",
        precio: 60,
        categoria: "alimentos",
        subcategoria: "postres",
        descripcion: "Rellena con queso crema y mermelada de arándano"
    }

];


// =====================================================
// CATEGORÍAS GENERALES
// =====================================================

const nombresCategorias = {

    bebidas: "Bebidas",

    alimentos: "Alimentos"

};


// =====================================================
// SUBCATEGORÍAS
// =====================================================

const subcategorias = {

    bebidas: [

        {
            id: "cafe",
            nombre: "Café"
        },

        {
            id: "sin-cafe",
            nombre: "Bebidas sin café"
        },

        {
            id: "frappes",
            nombre: "Frappes"
        },

        {
            id: "refrescantes",
            nombre: "Refrescantes"
        },

        {
            id: "metodos",
            nombre: "Métodos"
        },

        {
            id: "cold-brew",
            nombre: "Cold Brew"
        },

        {
            id: "matcha",
            nombre: "Matcha"
        },

        {
            id: "extras",
            nombre: "Extras"
        }

    ],


    alimentos: [

        {
            id: "waffles",
            nombre: "Waffles"
        },

        {
            id: "paninis",
            nombre: "Paninis"
        },

        {
            id: "bagels",
            nombre: "Bagels"
        },

        {
            id: "yogurt",
            nombre: "Yogurt"
        },

        {
            id: "snacks",
            nombre: "Snacks"
        },

        {
            id: "postres",
            nombre: "Postres"
        }

    ]

};


// =====================================================
// ELEMENTOS DEL DOM
// =====================================================

const productsContainer =
    document.getElementById("productsContainer");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryButtons =
    document.querySelectorAll(".category-button");

const subcategoryContainer =
    document.getElementById("subcategoryContainer");


// =====================================================
// MOSTRAR SUBCATEGORÍAS
// =====================================================

function mostrarSubcategorias(categoria) {

    subcategoryContainer.innerHTML = "";

    const lista = subcategorias[categoria];

    lista.forEach((subcategoria, index) => {

        const button =
            document.createElement("button");

        button.classList.add("subcategory-button");

        if (index === 0) {
            button.classList.add("active");
        }

        button.dataset.subcategory =
            subcategoria.id;

        button.textContent =
            subcategoria.nombre;

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".subcategory-button")
                .forEach(btn => {

                    btn.classList.remove("active");

                });

            button.classList.add("active");

            mostrarProductos(
                categoria,
                subcategoria.id
            );

        });

        subcategoryContainer.appendChild(button);

    });

}


// =====================================================
// MOSTRAR PRODUCTOS
// =====================================================

function mostrarProductos(
    categoria,
    subcategoria
) {

    productsContainer.innerHTML = "";

    const productosFiltrados =
        productos.filter(producto =>

            producto.categoria === categoria &&
            producto.subcategoria === subcategoria

        );


    productosFiltrados.forEach(producto => {

        // ---------------------------------------------
        // GRUPOS CON VARIANTES
        // ---------------------------------------------

        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add("product");


        let precioHTML = "";

        if (producto.precio !== null) {

            precioHTML = `
                <span class="price">
                    $${producto.precio}
                </span>
            `;

        }


        let frioHTML = "";

        if (producto.frio) {

            frioHTML = `
                <span class="cold">*</span>
            `;

        }


        let variantesHTML = "";

        if (producto.variantes) {

            variantesHTML = `
                <div class="product-variants">

                    ${producto.variantes.map(variante => `

                        <div class="variant">

                            <span>
                                ${variante.nombre}
                            </span>

                            <span class="price">
                                $${variante.precio}
                            </span>

                        </div>

                    `).join("")}

                </div>
            `;

        }


        // ---------------------------------------------
        // PRODUCTO
        // ---------------------------------------------

        tarjeta.innerHTML = `

            <div class="product-information">

                <h3>

                    ${producto.nombre}

                    ${frioHTML}

                </h3>


                ${producto.descripcion
                ?
                `<p>${producto.descripcion}</p>`
                :
                ""
            }


                ${producto.precio === null &&
                !producto.variantes &&
                producto.nombre !== "Sin Café"
                ?
                `<p>Preguntar por disponibilidad</p>`
                :
                ""
            }


                ${variantesHTML}

            </div>


            ${precioHTML}

        `;


        // ---------------------------------------------
        // SUBTÍTULO ESPECIAL
        // ---------------------------------------------

        if (producto.titulo) {

            tarjeta.classList.add("subcategory-title");

        }


        productsContainer.appendChild(tarjeta);

    });

}


// =====================================================
// CAMBIO DE CATEGORÍA GENERAL
// =====================================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const categoria =
            button.dataset.category;


        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        categoryTitle.textContent =
            nombresCategorias[categoria];


        mostrarSubcategorias(categoria);


        const primeraSubcategoria =
            subcategorias[categoria][0].id;


        mostrarProductos(
            categoria,
            primeraSubcategoria
        );


        window.scrollTo({

            top:
                document
                    .querySelector(".menu-section")
                    .offsetTop - 20,

            behavior: "smooth"

        });

    });

});


// =====================================================
// PANTALLA DE BIENVENIDA
// =====================================================

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


// =====================================================
// INICIO
// =====================================================

mostrarSubcategorias("bebidas");

mostrarProductos(
    "bebidas",
    "cafe"
);