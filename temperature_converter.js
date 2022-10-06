document.getElementById("myButton").onclick = function(){

    let temp = document.getElementById("convert").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    temp = Number(temp);
    to = to.toLowerCase();
    from = from.toLowerCase();

    fc = ((temp - 32) * 5/9).toFixed(2); // working
    cf = ((temp * 9/5) + 32).toFixed(2); // working
    fk = ((temp - 32)*5/9 + 273.15).toFixed(2); // working
    ck = (temp + 273.15).toFixed(2); // working
    kf = ((temp - 273.15)*9/5 + 32).toFixed(2); // working
    kc = (temp - 273.15).toFixed(2); // working

    if (to == "" || temp == "" || from == ""){
        alert("You are missing input/s")
    }
    else if (from == "celsius" && to == "fahrenheit"){
        document.getElementById("result").innerHTML = `Temperature in Fahrenheit: ${cf}°F` 
    }
    else if (from == "fahrenheit" && to == "celsius"){
        document.getElementById("result").innerHTML = `Temperature in Celsius: ${fc}°C` 
    }
    else if (from == "fahrenheit" && to == "kelvin"){
        document.getElementById("result").innerHTML = `Temperature in Kelvin: ${fk}K` 
    }
    else if (from == "celsius" && to == "kelvin"){
        document.getElementById("result").innerHTML = `Temperature in Kelvin: ${ck}K` 
    }
    else if (from == "kelvin" && to == "fahrenheit"){
        document.getElementById("result").innerHTML = `Temperature in Fahrenheit: ${kf}°F` 
    }
    else if (from == "kelvin" && to == "celsius"){
        document.getElementById("result").innerHTML = `Temperature in Celsius: ${kc}°C` 
    }

    
    document.getElementById("resetBtn").onclick = function(){
        document.getElementById("convert").value = "";
        document.getElementById("to").value = "";
        document.getElementById("result").innerHTML = ""; 
        document.getElementById("from").value = ""; 
    }
}
