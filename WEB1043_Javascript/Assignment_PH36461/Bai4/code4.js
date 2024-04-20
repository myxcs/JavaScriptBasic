var i = 1;
var time = setInterval(() => {
    console.log("Chuong trinh da chay duoc " + i + " giay")
    {
       if(i==5)
       {
        clearInterval(time)
       }
       i++;
    }
},1000)