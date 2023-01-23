const key = document.getElementById("key")
const def = document.getElementById("def")

async function search() {
    console.log(key.value)
    def.innerText = ""

    if(key.value == ""){
        def.innerText = "No input!"
        def.style.color = "red"
    }else{
        def.style.color = "#464b74"
        const respone = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${key.value}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
        const data = await respone.json()
        console.log(data[0]);
        def.innerText = data[0].shortdef[0]
    }
}