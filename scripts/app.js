// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Harumaki',
        descripcion: '4 arrolladitos fritos de carne o vegetales',
        precio: 760,
        imagen: 'assets/images/sushiharumaki.png'
    },
    {
        id: 2,
        nombre: 'Yakitori',
        descripcion: '3 brochettes de pollo glaseado en salsa agridulce',
        precio: 1130,
        imagen: 'assets/images/sushiyakitori.png'
    },
    {
        id: 3,
        nombre: 'Gyoza Thai',
        descripcion: '5 empanadas fritas rellenas de pollo, especias y queso crema',
        precio: 970,
        imagen: 'assets/images/sushigyozathai.png'
    },
    {
        id: 4,
        nombre: 'Ebi Furai',
        descripcion: 'Langostinos panizados en panko fritos, salsa honey mustard',
        precio: 1570,
        imagen: 'assets/images/sushiebifurai.png'
    },
    {
        id: 5,
        nombre: 'Ika Furai',
        descripcion: 'Aros de calamar panizados en panko y fritos',
        precio: 1570,
        imagen: 'assets/images/sushiikafurai.jpg'
    },
    {
        id: 6,
        nombre: 'Karaage',
        descripcion: '12 trocitos de pollo frito macerado en soja y jengibre',
        precio: 970,
        imagen: 'assets/images/sushikaraage.jpg'
    },
    {
        id: 7,
        nombre: 'Gyoza',
        descripcion: '8 empanaditas grilladas al vapor rellenas de cerdo y vegetales',
        precio: 1020,
        imagen: 'assets/images/sushigyoza.jpg'
    },
    {
        id: 8,
        nombre: 'Lomo Saltado',
        descripcion: 'Lomo, cebolla, ajies y tomates al wok, acompañado con papas fritas y arroz',
        precio: 1870,
        imagen: 'assets/images/sushilomosaltado.png'
    },
    {
        id: 9,
        nombre: 'Katsukare',
        descripcion: 'Milanesa de cerdo, acompañado de arroz y curry',
        precio: 1740,
        imagen: 'assets/images/sushikatsukare.png'
    },
    {
        id: 10,
        nombre: 'Buta Teri Don',
        descripcion: 'Arroz cubierto de cerdo agridulce, salteado con cebolla y hongos',
        precio: 1440,
        imagen: 'assets/images/sushibutateridon.jpg'
    },
    {
        id: 11,
        nombre: 'Toriteri',
        descripcion: 'Pollo glaseado a la plancha, con arroz y vegetales al wok',
        precio: 1440,
        imagen: 'assets/images/sushitoriteri.jpg'
    },
    {
        id: 12,
        nombre: 'Yakisoba',
        descripcion: 'Salteado de fideos y vegetales',
        precio: 1020,
        imagen: 'assets/images/sushiyakisoba.jpg'
    },
    {
        id: 13,
        nombre: 'Ramen Miso/Shoyu',
        descripcion: 'Fideos, cerdo, huevo junto con caldo de Miso o Shoyu',
        precio: 1250,
        imagen: 'assets/images/sushiramen.png'
    },
    {
        id: 14,
        nombre: 'Miku (20u)',
        descripcion: '5 Tuna, 5 Alaska, 5 Mediterraneo, 5 Placer Real',
        precio: 3000,
        imagen: 'assets/images/sushimiku.png'
    },
    {
        id: 15,
        nombre: 'Miyagi (20u)',
        descripcion: '5 Sashimi, 4 Nigiri salmón, 6 Philadelphia, 5 Sakemaki',
        precio: 3900,
        imagen: 'assets/images/sushimiyagi.png'
    },
    {
        id: 16,
        nombre: 'Denver Roll (5u)',
        descripcion: 'Salmón con queso crema, cubierto de chutney con togarashi',
        precio: 1170,
        imagen: 'assets/images/sushidenver.png'
    },
    {
        id: 17,
        nombre: 'Orlando Roll (5u)',
        descripcion: 'Salmón panizado, tomate y queso crema, con mayonesa tonkatsu',
        precio: 1200,
        imagen: 'assets/images/sushiorlando.png'
    },
    {
        id: 18,
        nombre: 'Spicy Roll (5u)',
        descripcion: 'Salmón rosado y queso crema, con togarashi y sriracha',
        precio: 1140,
        imagen: 'assets/images/sushispicy.png'
    },
    {
        id: 19,
        nombre: 'Sashimi Salmón(5u)',
        descripcion: 'Lonja de salmón rosado',
        precio: 1510,
        imagen: 'assets/images/sushisashimi.png'
    },
    {
        id: 20,
        nombre: 'Nigiri Salmón (5u)',
        descripcion: 'Arroz cubierto con una lonja de salmón rosado',
        precio: 1280,
        imagen: 'assets/images/sushinigiri.jpg'
    },
    {
        id: 21,
        nombre: 'Geisha Mango (2u)',
        descripcion: 'Mango y palta envuelto en salmón rosado',
        precio: 720,
        imagen: 'assets/images/sushigeisha.png'
    },
    {
        id: 22,
        nombre: 'Asahi Roll (5u)',
        descripcion: 'Salmón rosado, verdeo y queso, cubierto con salmón ahumado',
        precio: 1250,
        imagen: 'assets/images/sushiasahi.png'
    },
    {
        id: 23,
        nombre: 'Text Mex Roll (5u)',
        descripcion: 'Salmón coronado con guacamole y crocante de batatas',
        precio: 1140,
        imagen: 'assets/images/sushitexmex.png'
    },
    {
        id: 24,
        nombre: 'Coca-Cola 500ml',
        descripcion: '',
        precio: 250,
        imagen: 'assets/images/sushicoca.png'
    },
    {
        id: 25,
        nombre: 'Fanta 500ml',
        descripcion: '',
        precio: 250,
        imagen: 'assets/images/sushifanta.png'
    },
    {
        id: 26,
        nombre: 'Bon Aqua 500ml',
        descripcion: '',
        precio: 200,
        imagen: 'assets/images/sushiagua.png'
    },
    {
        id: 27,
        nombre: 'Heineken Lata 330ml',
        descripcion: '',
        precio: 460,
        imagen: 'assets/images/sushiheineken.png'
    },

];

let carrito = [];
let productosSeleccionados = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonConfirmar = document.querySelector('#boton-confirmar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('local-product');
        const container = document.createElement('div');
        // Body cards
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('container-product-div');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('image-container');
        miNodoImagen.setAttribute('src', info.imagen);
        // Info
        const miNodoDescripcion = document.createElement('p');
        miNodoDescripcion.classList.add('card-text');
        miNodoDescripcion.textContent = `${info.descripcion}`;
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('price');
        miNodoPrecio.textContent = `${divisa} ${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('agregar-btn');
        miNodoBoton.textContent = 'Agregar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoDescripcion);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    let productoId = evento.target.getAttribute('marcador');
    carrito.push(productoId);

    let productoDB = baseDeDatos.find(p => 
        p.id == parseInt(productoId)
    );

    let productoAAgregar = {
        id: productoDB.id,
        cantidad: 1,
        nombre: productoDB.nombre,
        precio: productoDB.precio
    }

    if (yaExisteProducto(productoId)) {
        let productoRepetido = productosSeleccionados.find(p => p.id == parseInt(productoId));
        productoRepetido.cantidad += 1;
    }
    else
    {
        productosSeleccionados.push(productoAAgregar);
    }
    // Actualizamos el carrito 
    renderizarCarrito();

}

function yaExisteProducto(id) {
    return productosSeleccionados.some(p => p.id == id);
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        // miNodo.classList.add('text-right');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('eliminar-button');
        miBoton.textContent = 'x';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    productosSeleccionados = productosSeleccionados.filter((p) => {
        return p.id !== parseInt(id);
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Vacia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Limpiamos los productos seleccionados
    productosSeleccionados = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

//Lee y retorna como string el numero de mesa obtenida de la URL. Si no la encuentra retorna 10
function nroDeMesa(){
    let nroDeMesa = 10
    let url = document.URL.split("?mesa=",2)[1]
    let regex = /\d{1,2}/
    if(regex.test(url)){
        nroDeMesa = url.match(regex)[0]
    } 
    return(nroDeMesa)
}

function confirmarPedido() {
    let productosSeleccionadosJson = JSON.stringify(productosSeleccionados);
    console.log(productosSeleccionadosJson);

    // Llamar al backend con los productos seleccionados
    let xhr = new XMLHttpRequest();
    let url = "https://jbnm-backend-production.up.railway.app/mesas/" + nroDeMesa() + "/pedido"
    console.log(url)
    
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    let data = productosSeleccionadosJson;
    xhr.send(data);

    vaciarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMbotonConfirmar.addEventListener('click', confirmarPedido);

// Inicio
renderizarProductos();
renderizarCarrito();