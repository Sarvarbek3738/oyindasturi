const word = document.querySelector("#word")
const timer = document.querySelector("#timer")
const inputmode = document.querySelector(".inputmode")
const yutuq = document.querySelector(".yutuq")
const record = document.querySelector(".record")
const select = document.querySelector("#select")
let score = 0
let ball = 0
let time = 0
let internal
let HightScore = localStorage.getItem("HightScore") ? JSON.parse(localStorage.getItem("HightScore")) : 0;
// const words = [
//     "abreact", "abreacted", "abreacting", "abreaction", "abreactions", "paltrier", "paltriest", "paltrily", "paltriness", "paltrinesses", "paltry", "paludal", "paludism", "shiv", "shiva", "shivah", "shivahs", "shivaree", "shivareed", "shivareeing",
// ]

const apiLink = `https://random-word-api.herokuapp.com/word`
let randomWord;
const getData = async (link) => {
    const req = await fetch(link);
    const data = await req.json();
    randomWord = data[0]
    console.log(randomWord);
    textWord()
};
getData(apiLink)

const textWord = () => {
    word.textContent = randomWord;
}
const timerWord = () => {
    internal = setInterval(() => {
        timer.textContent = time
        if (time == 0) {
            word.textContent = "Yutqizdingiz !!!"
            clearInterval(internal)
        }
        time--
    }, 1000)
}
record.textContent = HightScore
inputmode.addEventListener("input", () => {
    if (inputmode.value ==  word.textContent) {
        getData(apiLink)
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


