// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById ("lista-de-productos") //Se cambio porque solo buscaba elementos por nombre y se necesitaba por elemento con ID 
const $i = document.querySelector('.input'); //BUSCAR INPUT SINO CORREGIR const $i = document.querySelector('input[type="text"]');

//$i.addEventListener('input', (event) => {
 // console.log(event.target.value); //Se agrega un addevent listener escucarñp
//}); CORREGIR PORQUE ME MUEVE LO DEMAS



const displayProductos = (productos) => { //Se agrega para definir a la funcion antes de ser llamada
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p"); //falta punto y coma
  ti.classList.add("titulo") //punto y coma
  ti.textContent = productos[i].nombre; //faltaba ;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);// ;
  d.appendChild(imagen); //

  li.appendChild(d); //;
}
}; //parentesis para llamar a la funcion displayproducts

displayProductos(productos)//Llama a la funcion pero no ha sido antes definida
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div"); // ;
    d.classList.add("producto"); // falta ;
  
    var ti = document.createElement("p"); //;
    ti.classList.add("titulo"); //:
    ti.textContent = productosFiltrados[i].nombre; //;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti); //;
    d.appendChild(imagen); //;
   
    li.appendChild(d); //;
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
} ; // ;  