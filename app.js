const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');

//Since we are working with time, we would be working with js object: new Date() to manipulate our document
const setDate = ()=> {

    const time = new Date();
    
    //Seconds
    const seconds = time.getSeconds();
    //converting seconds to deg
    const secondsDegree = ((seconds / 60) * 360) + 90;
    
    second.style.transform = `rotate(${secondsDegree}deg)`
    
    //minute
    const minutes = time.getMinutes();
    const minuteDegree = ((minutes / 60) * 360) + 90;
    
    min.style.transform = `rotate(${minuteDegree}deg)`
    
    //hour
    const hourCount = time.getHours();
    const hourDegree = ((hourCount / 12 ) * 360) + 90;

    hour.style.transform = `rotate(${hourDegree}deg)`
    
}   

setInterval(() => {
    setDate();
}, 1000);

