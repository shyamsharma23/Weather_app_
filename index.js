const form = document.getElementById("form");

form.addEventListener("submit",  async (e)=>{
    e.preventDefault()
    const query = form.elements.city.value
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=8bf777afd1a44af0bff180311221303&q=${query}&aqi=yes`)
    document.getElementById("text").textContent = `${res.data.current.temp_c} C`
    document.getElementById("text-two").textContent = `${res.data.current.temp_f} F`
    
})


  
    



