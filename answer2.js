// You need to write code which would:
// 1. Find and print in console the city located at latitude/longtitude 51.5074 and 0.1278 accordingly 
// 2. Print in console the weather for the city located at lat/long = 51.5074 and 0.1278
// 3. Print in console in one line the weather and currency for a given city (London)


class Provider {  
    /** 
     * Gets the weather for a given city 
     */  
    static getWeather(city) {  
      return Promise.resolve(`The weather of ${city} is Cloudy`)  
    };  
    /** 
     * Gets the weather for a given city 
     */  
    static getLocalCurrency(city) {  
      return Promise.resolve(`The local currency of ${city} is GBP`)  
    };  
    /** 
     * Given Longtitude and latitude, this function returns a city 
     */  
    static findCity(long, lat) {  
      return Promise.resolve(`London`)  
    };  
  };  
   
   
   
   
  Provider.findCity('51.5074', '0.1278').then((city) => {
      console.log(city)
  }).catch((err) => console.log(err))
   
  Provider.findCity('51.5074', '0.1278').then((city) => {
      Provider.getWeather(city).then((weather) => {
          console.log(weather)
      }).catch((err) => console.log(err))
  }).catch((err) => console.log(err))
   
   
  Provider.getWeather(city='London').then((weather) => {
      Provider.getLocalCurrency(city).then((currency) => {
          console.log(weather, currency)
      }).catch((err) => console.log(err))
  }).catch((err) => console.log(err))
  