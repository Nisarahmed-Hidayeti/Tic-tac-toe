let gameElement = document.getElementById("game")

let box1 = "BOŞ"
let box2 = "BOŞ"
let box3 = "BOŞ"
let box4 = "BOŞ"
let box5 = "BOŞ"
let box6 = "BOŞ"
let box7 = "BOŞ"
let box8 = "BOŞ"
let box9 = "BOŞ"

let sıra = true
let tur = 0

let sayıX = 0
let kazanan = document.getElementById("kazanan")
let kazanankişi = document.getElementById("kazanankişi")
let butonum = document.getElementById("buton")
let sayıO = 0

gameElement.addEventListener("mousemove", (e) => {

    const gameWidth = gameElement.offsetWidth;
    const gameHeight = gameElement.offsetHeight;

    const clickX = event.clientX - gameElement.getBoundingClientRect().left;
    const clickY = event.clientY - gameElement.getBoundingClientRect().top;

    const percentageX = ((clickX / gameWidth) * 100).toFixed(2);
    const percentageY = ((clickY / gameHeight) * 100).toFixed(2);

    if ((percentageX < 30 && percentageY < 30 && box1 == "BOŞ")
        || (percentageX > 68.5 && percentageY > 68.5 && box9 == "BOŞ")
        || (30 > percentageX && percentageY > 68.5 && box7 == "BOŞ")
        || (percentageX > 68.5 && 30 > percentageY && box3 == "BOŞ")
        || ((35.7 < percentageX && percentageX < 64) && percentageY < 30 && box2 == "BOŞ")
        || ((35.7 < percentageX && percentageX < 64) && percentageY > 68.5 && box8 == "BOŞ")
        || ((35.7 < percentageY && percentageY < 64) && percentageX > 68.5 && box6 == "BOŞ")
        || ((35.7 < percentageY && percentageY < 64) && percentageX < 30 && box4 == "BOŞ")
        || ((35.7 < percentageY && percentageY < 64) && (35.7 < percentageX && percentageX < 64) && box5 == "BOŞ")) {
        gameElement.style.cursor = "pointer"
    }

    else {
        gameElement.style.cursor = "auto"
    }
})

gameElement.addEventListener("click", (e) => {

    const gameWidth = gameElement.offsetWidth;
    const gameHeight = gameElement.offsetHeight;

    const clickX = event.clientX - gameElement.getBoundingClientRect().left;
    const clickY = event.clientY - gameElement.getBoundingClientRect().top;

    const percentageX = ((clickX / gameWidth) * 100).toFixed(2);
    const percentageY = ((clickY / gameHeight) * 100).toFixed(2);

    if ((percentageX < 30 && percentageY < 30 && box1 == "BOŞ")) {
        if (sıra == true) {
            box1 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "15.5%"
            yeniX.style.left = "15.5%"
            gameElement.appendChild(yeniX)
        }
        else {
            box1 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "15.5%"
            yeniO.style.left = "15.5%"
            gameElement.appendChild(yeniO)
        }
    }

    if ((35.7 < percentageX && percentageX < 64) && percentageY < 30 && box2 == "BOŞ") {
        if (sıra == true) {
            box2 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "15.5%"
            yeniX.style.left = "50.2%"
            gameElement.appendChild(yeniX)
        }
        else {
            box2 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "15.5%"
            yeniO.style.left = "50.2%"
            gameElement.appendChild(yeniO)
        }
    }

    if ((percentageX > 68.5 && 30 > percentageY && box3 == "BOŞ")) {
        if (sıra == true) {
            box3 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "15.5%"
            yeniX.style.left = "84.5%"
            gameElement.appendChild(yeniX)
        }
        else {
            box3 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "15.5%"
            yeniO.style.left = "84.5%"
            gameElement.appendChild(yeniO)
        }
    }

    if ((35.7 < percentageY && percentageY < 64) && percentageX < 30 && box4 == "BOŞ") {
        if (sıra == true) {
            box4 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "50.2%"
            yeniX.style.left = "15.5%"
            gameElement.appendChild(yeniX)
        }
        else {
            box4 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "50.2%"
            yeniO.style.left = "15.5%"
            gameElement.appendChild(yeniO)
        }
    }

    if ((35.7 < percentageY && percentageY < 64) && (35.7 < percentageX && percentageX < 64) && box5 == "BOŞ") {
        if (sıra == true) {
            box5 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "50.2%"
            yeniX.style.left = "50.2%"
            gameElement.appendChild(yeniX)
        }
        else {
            box5 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "50.2%"
            yeniO.style.left = "50.2%"
            gameElement.appendChild(yeniO)
        }
    }

    if ((35.7 < percentageY && percentageY < 64) && percentageX > 68.5 && box6 == "BOŞ") {
        if (sıra == true) {
            box6 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "50.2%"
            yeniX.style.left = "84.5%"
            gameElement.appendChild(yeniX)
        }
        else {
            box6 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "50.2%"
            yeniO.style.left = "84.5%"
            gameElement.appendChild(yeniO)
        }
    }

    if ((30 > percentageX && percentageY > 68.5 && box7 == "BOŞ")) {
        if (sıra == true) {
            box7 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "84.5%"
            yeniX.style.left = "15.5%"
            gameElement.appendChild(yeniX)
        }
        else {
            box7 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "84.5%"
            yeniO.style.left = "15.5%"
            gameElement.appendChild(yeniO)
        }
    }

    if (((35.7 < percentageX && percentageX < 64) && percentageY > 68.5 && box8 == "BOŞ")) {
        if (sıra == true) {
            box8 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "84.5%"
            yeniX.style.left = "50.2%"
            gameElement.appendChild(yeniX)
        }
        else {
            box8 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "84.5%"
            yeniO.style.left = "50.2%"
            gameElement.appendChild(yeniO)
        }
    }

    if ((percentageX > 68.5 && percentageY > 68.5 && box9 == "BOŞ")) {
        if (sıra == true) {
            box9 = "X"
            sıra = !sıra
            let yeniX = document.createElement("div")
            yeniX.className = "x"
            yeniX.style.top = "84.5%"
            yeniX.style.left = "84.5%"
            gameElement.appendChild(yeniX)
        }
        else {
            box9 = "O"
            sıra = !sıra
            let yeniO = document.createElement("div")
            yeniO.className = "o"
            yeniO.style.top = "84.5%"
            yeniO.style.left = "84.5%"
            gameElement.appendChild(yeniO)
        }
    }



    if ((box1 == "X" && box2 == "X" && box3 == "X")
        || (box4 == "X" && box5 == "X" && box6 == "X")
        || (box7 == "X" && box8 == "X" && box9 == "X")

        || (box3 == "X" && box5 == "X" && box7 == "X")
        || (box1 == "X" && box5 == "X" && box9 == "X")

        || (box1 == "X" && box4 == "X" && box7 == "X")
        || (box2 == "X" && box5 == "X" && box8 == "X")
        || (box3 == "X" && box6 == "X" && box9 == "X")
    ) {
        box1 = "X"
        box2 = "X"
        box3 = "X"
        box4 = "X"
        box5 = "X"
        box6 = "X"
        box7 = "X"
        box8 = "X"
        box9 = "X"

        console.log("Kazanan = X")
        kazanankişi.innerHTML = "Kazanan:X"
        kazanan.style.opacity = "1"
        kazanan.style.zIndex = "1"
        sayıX++
        tur = 1
    }
    if ((tur == 0 && box1 != "BOŞ" && box2 != "BOŞ" && box3 != "BOŞ" && box4 != "BOŞ" && box5 != "BOŞ" && box6 != "BOŞ" && box7 != "BOŞ" && box8 != "BOŞ" && box9 != "BOŞ")) {
        box1 = "dsjad"
        box2 = "dsjad"
        box3 = "dsjad"
        box4 = "dsjad"
        box5 = "dsjad"
        box6 = "dsjad"
        box7 = "dsjad"
        box8 = "dsjad"
        box9 = "dsjad"

        console.log("Beraberlik")
        kazanankişi.innerHTML = "Beraberlik"
        kazanan.style.zIndex = "1"
        kazanan.style.opacity = "1"
    }
    if ((box1 == "O" && box2 == "O" && box3 == "O")
        || (box4 == "O" && box5 == "O" && box6 == "O")
        || (box7 == "O" && box8 == "O" && box9 == "O")

        || (box3 == "O" && box5 == "O" && box7 == "O")
        || (box1 == "O" && box5 == "O" && box9 == "O")

        || (box1 == "O" && box4 == "O" && box7 == "O")
        || (box2 == "O" && box5 == "O" && box8 == "O")
        || (box3 == "O" && box6 == "O" && box9 == "O")
    ) {
        box1 = "O"
        box2 = "O"
        box3 = "O"
        box4 = "O"
        box5 = "O"
        box6 = "O"
        box7 = "O"
        box8 = "O"
        box9 = "O"

        console.log("Kazanan = O")
        kazanankişi.innerHTML = "Kazanan:O"
        kazanan.style.zIndex = "1"
        kazanan.style.opacity = "1"
        sayıO++
        tur = 1
    }



})

butonum.addEventListener("click", (w) => {
    gameElement.innerHTML = ""

    box1 = "BOŞ"
    box2 = "BOŞ"
    box3 = "BOŞ"
    box4 = "BOŞ"
    box5 = "BOŞ"
    box6 = "BOŞ"
    box7 = "BOŞ"
    box8 = "BOŞ"
    box9 = "BOŞ"
    console.log("SKHSKFHKHFSK")
    kazanan.style.zIndex = "-1"
    kazanan.style.opacity = "0"
    tur = 0

    sıra = true
})