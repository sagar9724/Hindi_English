// script for timer

const timer = () => {
    let timer = document.getElementById("timer");

    let count = 0;
    setInterval(() => {
        if (count <= 60) {
            timer.innerHTML = count++;
            return;
        }
    }, 1000)

}

let english = document.getElementById("english");

english.addEventListener("click",timer)



