
const ui = new UI();
const storage = new Storage();

const weatherLocation =   storage.getLocationData();

const weather = new Weather(weatherLocation.city,weatherLocation.state);
document.addEventListener('DOMContentLoaded',getweather);
const locationChange= document.getElementById('w-change-btn');

locationChange.addEventListener('click',changelocation);

function changelocation(e)
{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.setLocation(city,state);

  storage.setLocationData(city,state);
  getweather();

}

function getweather(){
  weather.get()
    .then(data=>{
      ui.showData(data);
    })
    .catch(err => console.log(err));
  }


   