 class Weather {

  constructor(city, state){
    this.city = city;
    this.state = state;
    this.apiKey='143e41729b214ac7e113e21ebe66d05e';

  }

  async get(){
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
    const responsedata = await response.json();
     
    return responsedata;

  }


  setLocation(city,state)
  {
    this.city = city;
    this.state = state;
  }

}