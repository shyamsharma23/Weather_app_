const form = document.getElementById("form");

form.addEventListener("submit",  async (e)=>{
    e.preventDefault()
    const query = form.elements.city.value
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=8bf777afd1a44af0bff180311221303&q=${query}&aqi=yes`)
    const temp = document.createElement("P")
    temp.textContent = res.data.current.temp_c
    temp.classList.add("info")
    temp.setAttribute("id","text-main")
    document.body.append(temp)
    console.log(temp)
    
    
})

function clearText(elementId){
    form.elements.city.value = ''
    document.getElementById(elementId).innerHTML = ""
}

  
    



