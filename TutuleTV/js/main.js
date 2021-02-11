let fecha = document.getElementById('hora');

setInterval(() => {
    let captura_hora = new Date(),
        hora = captura_hora.getHours(),
        min = captura_hora.getMinutes(),
        seg = captura_hora.getSeconds();
        
    if(seg<10){
        fecha.innerHTML = `${hora}:${min}:0${seg}`;
    }else{
        fecha.innerHTML = `${hora}:${min}:${seg}`;
    }
},1000);