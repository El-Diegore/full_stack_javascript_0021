alert("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma")

hora = new Date
console.log(hora)
console.log(hora.getDay(),hora.getMonth(), hora.getFullYear(), hora.getDate())

let hour = `${hora.getHours()} : ${hora.getMinutes()}`
document.getElementById("insertTime").innerHTML = hour

let fecha = `${hora.getDate()}-${hora.getMonth()+1}-${hora.getFullYear()}`
document.getElementById("insertDate").innerHTML = fecha

nroPasaje = Math.floor(Math.random()*10000)
document.getElementById("flightNumber").innerHTML = nroPasaje

nroTerminal = Math.floor(Math.random()*100)
document.getElementById("terminalNumber").innerHTML = nroTerminal

