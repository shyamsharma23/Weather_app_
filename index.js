const form = document.getElementById("form");

form.addEventListener("submit",  async (e)=>{
    e.preventDefault()
    const query = form.elements.city.value
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=8bf777afd1a44af0bff180311221303&q=${query}&aqi=yes`)
    document.getElementById("text").textContent = `${res.data.current.temp_c} C`
    document.getElementById("text-two").textContent = `${res.data.current.temp_f} F`
    document.getElementById("img").innerHTML = `<img src = "${res.data.current.condition.icon}"/>`
    if (res.data.current.temp_c >= 5)
    {
        document.getElementById("background").classList.remove("background-two")
        document.getElementById("background").classList.add("background-one")
        document.getElementById("attribute").textContent = "Photo by Chris Nemeth on Unsplash"
    }
    else if(res.data.current.temp_c < 5){
        document.getElementById("background").classList.remove("background-one")
        document.getElementById("background").classList.add("background-two")
        document.getElementById("attribute").textContent = "Photo by Juha Lakaniemi on Unsplash"
    }
})


  
    



