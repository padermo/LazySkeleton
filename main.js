async function requestInfo(){
  // 1. obtenemos la informacion del json o api
  const data = await fetch("data.json");
  const json = await data.json();
  let html = "";

  // 2. para cada post se van a descargar las imagenes
  for(let i = 0; i < json.imagenes.length; i++){
    // 3. crear la tarjeta para cada post
    html += `
    <div class="card"><img loading="lazy" class="image fadeIn" src="${json.imagenes[i].url}" ></div>
    `
  }
  
  // 4. adjuntar tarjetas en #container
  document.querySelector("#container").innerHTML = html;
}

requestInfo();