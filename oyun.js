const siyahi = ["paper.png","qayçı.png","daş.png"]
 

// DOM 

const kagiz = document.getElementById('kagiz')
const qayci = document.getElementById('qayci')
const das = document.getElementById('das')

const komputerinSecimi = document.getElementById('komputer-secim')
const neticeniYaz = document.getElementById('netice')

kagiz.onclick = seciminiEle
qayci.onclick = seciminiEle
das.onclick = seciminiEle

function seciminiEle() {
    const komputer = RandomSecim()
    const secim = this.dataset.id

    if(komputer ==0 && secim ==0) {
        netice = "Hər ikiniz eyni elementi seçdiniz!"
    }
    else if (komputer ==0 && secim ==1) {
        netice = "Təbriklər, kağız qayçını kəsdiyi üçün qazandın!"
    }

    else if (komputer ==0 && secim ==2) {
        netice = "Uduzdun, kağız daşı bükür"
    }

    else if (komputer ==1 && secim ==0) {
        netice = "Uduzdun, qayçı kağızı kəsir :("
    }

    else if (komputer ==1 && secim ==1) {
        netice = "İkiniz də eyni elementi seçdiniz :)) Yenidən cəhd edin"
    }

    else if (komputer ==1 && secim ==2) {
        netice = "Təbriklər, qazandın. Daş qayçını sındırar :) "

    }

    else if (komputer ==2 && secim ==0) {
        netice = "Təbriklər, qazandın. Kağız daşı bükür :) "
    }

    else if (komputer ==2 && secim ==1) {
        netice = "Uduzdun, daş qayçını sındırar :( "
    }
    else if (komputer ==2 && secim ==2) {
        netice = "Eyni elementi seçdiniz. Yenidən cəhd edin! "
    }

    neticeniYaz.innerHTML=netice

}


function RandomSecim() {
    const say = Math.round(Math.random()*2) //0-2
    komputerinSecimi.src = `images/${siyahi[say]}`

    return say
}

