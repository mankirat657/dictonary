const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("res")
const sound = document.getElementById("audio");
const button = document.getElementById("searchBtn");

button.addEventListener("click",()=>{
    let inpWord = document.getElementById("inpWord").value;
    fetch(`${url} ${inpWord}`)
    .then((Response)=> Response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML = `
        <div class="word">
        <h3>${inpWord}</h3>
        <button onclick = "Sound()">
            <i class="fas fa-volume-up"></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="wordMeaning">${data[0].meanings[0].definitions[0].definition}</p>
    <p class="wordExample">${data[0].meanings[0].definitions[0].example || ""}</p>
    <p class="syn"><b>Synonyms :</b> ${data[0].meanings[0].synonyms[0]}</p>`
    sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`)
    })
})
function Sound(){
    sound.play()
}