const data = require("../API/data.json");

// let english = document.getElementById("english");
// let next = document.getElementById("next");
const get = ()=>{
    const rand = Math.random() * 18;
    const num = Math.floor(rand);
    const score = 0;
    const hindi = data[num].hindi;
    console.log(hindi);
    
    
    

    // let next = document.getElementById("next");

    // next.addEventListener("click",);
}

module.exports = get;

