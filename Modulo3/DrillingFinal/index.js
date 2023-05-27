document.getElementById("labelGastos").value = "$ 0";
document.getElementById("labelSaldo").value = "$ 0";
document.getElementById("labelPresu").value = "$ 0";
let presupuesto = 0;
let saldo;
let nuevoSaldo = 0;
// Capturar presupuesto
function montoPresu() {
  let presu = document.getElementById("inputPresu").value;
  presupuesto = presu;
  if (presu) {
    let etiqueta = (document.getElementById("labelPresu").value = `$ ${presu}`);
    document.getElementById("inputPresu").value = "";
  } else {
    alert("Error: Debe ingresar un monto");
  }
}

let inputGasto = document.getElementById("montoGasto");
inputGasto.addEventListener("keyup", function () {
  let presupuesto = inputGasto.value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  inputGasto.value = presupuesto;
});

let arreglo = [];
//capturar nombre y monto del gasto
function gasto() {
  let nombreGasto = document.getElementById("nombreGasto").value;
  let montoGasto = document.getElementById("montoGasto").value;

  let articulo = { nombre: nombreGasto, monto: montoGasto };
  //Condicion de nombre y gasto
  if (nombreGasto && montoGasto) {
    let td = "";
    contador = 0;
    let p = parseInt(presupuesto.replaceAll(".", ""));

    document.getElementById("nombreGasto").value = "";
    document.getElementById("montoGasto").value = "";
    //condicion: si saldo es mayor al gasto
    if (p - nuevoSaldo >= parseInt(montoGasto.replace(".", ""))) {
      arreglo.push(articulo);
      arreglo.forEach((element) => {
        console.log(element.monto);
        let parseado = parseInt(element.monto.replace(".", ""));
        let id = element.nombre;
        console.log(parseado);
        td += `<tr id="${element.nombre}">
                      <td>${element.nombre}</td>
                      <td>$${element.monto}</td>
                       <td> <i class="fa-solid fa-trash" onclick="eliminar(${parseado}, ${element.nombre})"></i></td>
                  </tr>`;

        document.querySelector("tbody").innerHTML = td;
        contador += parseInt(element.monto.replaceAll(".", ""));

        saldo = document.getElementById("labelSaldo").value = p - contador;
      });

      let etiqueta = (document.getElementById(
        "labelGastos"
      ).value = `$ ${contador}`);
    } else {
      alert("Monto insuficiente, ingrese más presupuesto");
    }
  } else {
    alert("Debe ingresar nombre y monto");
  }
}

let inputPresu = document.getElementById("inputPresu");
inputPresu.addEventListener("keyup", function () {
  let presupuesto = inputPresu.value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  inputPresu.value = presupuesto;
});

//eliminar gasto
function eliminar(monto, id) {
  let dato = id.id;

  id.remove();

  let remover = arreglo.filter((producto) => producto.nombre != dato);
  arreglo = remover;

  console.log(arreglo);
  let total = arreglo.reduce(
    (acumulador, actual) =>
      acumulador + parseInt(actual.monto.replace(".", "")),
    0
  );
  document.getElementById("labelGastos").value = total;
  document.getElementById("labelSaldo").value =
    parseInt(presupuesto.replace(".", "")) - total;
  nuevoSaldo -= monto;
}
