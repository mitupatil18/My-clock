let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(()=>{
    let c = new Date();
    hrs.innerHTML = (c.getHours()<10?"0":"") +c.getHours();
    min.innerHTML = (c.getMinutes()<10?"0":"")+c.getMinutes();
    sec.innerHTML = (c.getSeconds()<10?"0":"")+c.getSeconds();
},1000)


