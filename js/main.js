let randomText = "none"
const word = document.querySelector("#word")
const timer = document.querySelector("#timer")
const inputmode = document.querySelector(".inputmode")
const yutuq = document.querySelector(".yutuq")
const record = document.querySelector(".record")
const select = document.querySelector("#select")
let score = 0
let ball = 0
let HightScore = localStorage.getItem("HightScore") ? JSON.parse(localStorage.getItem("HightScore")) : 0;
let internal
let time = 0
const words = [
    "abreact", "abreacted", "abreacting", "abreaction", "abreactions", "paltrier", "paltriest", "paltrily", "paltriness", "paltrinesses", "paltry", "paludal", "paludism", "shiv", "shiva", "shivah", "shivahs", "shivaree", "shivareed", "shivareeing",
]
const textWord = () => {
    let random = Math.floor(Math.random() * words.length)
    randomText = words[random]
    word.textContent = randomText
}
const timerWord = () => {
    internal = setInterval(() => {
        timer.textContent = time
        if (time == 0) {
            word.textContent = "Yutqizdingiz !!!"
            clearInterval(internal)
            // textWord()
        }
        time--
    }, 1000)
}
record.textContent = HightScore
inputmode.addEventListener("input", () => {
    if (inputmode.value == randomText) {
        time += ball
        score += 1
        yutuq.textContent = score
        inputmode.value = ""
        if (HightScore < score) {
            HightScore = score
            record.textContent = HightScore
            localStorage.setItem("HightScore", JSON.stringify(HightScore))
        }
        textWord()
    }
})
select.addEventListener("click", () => {
    clearInterval(internal)
    if (select.value == "easy") {
        time = 10
        ball = 5
        select.value = ""
        textWord()
        timerWord()
    } else if (select.value == "medium") {
        time = 7
        ball = 3
        select.value = ""
        textWord()
        timerWord()
    } else if (select.value == "hard") {
        time = 5
        ball = 2
        select.value = ""
        textWord()
        timerWord()
    }

})


