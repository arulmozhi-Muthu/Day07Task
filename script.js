var request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res)
//Get all the countries from Asia continent /region using Filter function
    var res_asia=res.filter((ele)=>ele.region=="Asia");
    console.log(res_asia)
    var res_asian_countries=res_asia.map((ele)=>ele.name.common)
    console.log(res_asian_countries);

//Get all the countries with a population of less than 2 lakhs using Filter function
    var res_popu=res.filter((ele)=>ele.population<200000)
    console.log(res_popu)

//Print the following details name, capital, flag, using forEach function
    var res_name=res.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag))

//Print the total population of countries using reduce function
    var res_popu_sum=res.reduce((acc,cv)=>acc+cv.population,0)
    console.log("The total number of population =",res_popu_sum)

//Print the country that uses US dollars as currency.
    var res_dollar=res.filter((ele)=>ele.currencies!=undefined && ele.currencies.USD!=undefined)
    console.log(res_dollar)
    var res_country=res_dollar.map((ele)=>ele.name.common)
    console.log(res_country)

    
}

