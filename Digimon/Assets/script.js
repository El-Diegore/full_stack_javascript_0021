function obtenerTodosLosPersonajes() {
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => response.json())
        .then(data => {
            console.log(data)
           
            let html = '';
            for (let digi of data) {
                console.log("en el bucle")
                html += `
      <div class="col-md-3 col-sm-12" style="margin-bottom: 15px";>
        <div class="card">
            <img src="${digi.img}" class="card-img-top" alt="...">
            <div class="card-body" style="text-align: center">
              <h4 class="card-title">${digi.name}</h5>
              <h5 class="card-title">${digi.level}</h4>
              <a onclick="obtenerPersonaje('${digi.name}')" class="btn btn-dark" style="display: none">Saber más</a>
            </div>
        </div>
    </div>
        `
            }
            console.log(html)
            document.getElementById("container_card").innerHTML = html
        })
        .catch(error => alert("No pudimos obtener la informacion"))
}
obtenerTodosLosPersonajes()

function obtenerDigi() {
   let name = document.getElementById("Buscar").value
console.log(name)
fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
.then(response => response.json())
.then(data => {
    personaje = `
    <div class="col-md-3 col-sm-12">
      <div class="card">
          <img src="${digi.img}" class="card-img-top" alt="...">
          <div class="card-body" style="text-align: center">
            <h4 class="card-title">${digi.name}</h5>
            <h5 class="card-title">${digi.level}</h4>
            <a onclick="obtenerPersonaje('${digi.name}')" class="btn btn-primary">Saber más</a>
          </div>
      </div>
  </div>
      `
      document.getElementById("parrafo").innerHTML = personaje
console.log(data)
})
.catch(error=> alert("Error no se pudo encontrar"))
}


  function mostrarDigimon(){
     let digimon = document.getElementById("Buscar").value
     
        console.log(digimon)
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data[0].img)
    document.getElementById("nombreDigi").innerText = data[0].name
    document.getElementById("imgDigi").innerHTML =  `<img src="${data[0].img}"  class="card-img-top" alt="">`
    document.getElementById("lvlDigi").innerHTML =  `<b>nivel:</b> ${data[0].level}`
    document.getElementById("Buscar").value = ""
  })
  
}