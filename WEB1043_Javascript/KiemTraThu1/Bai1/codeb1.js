var arrAnh=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];
console.log(arrAnh);
 var index = 0;
 function next(){
    if(index <=4 )
    {
        index++;
    } 
    if(index == 5)
    {
        index = 0;
    }
    document.getElementById('slider').src= arrAnh[index];
 }
 function back(){
    if(index>0)
    {
        index--;
    } 
    if(index == 0)
    {
        index = 4;
    }
    document.getElementById('slider').src=arrAnh[index];
 }

 let start=  null;
 function startSlider(){

    start = setInterval(() => {
        index++;
        if(index>= arrAnh.length){
            index=0;
        }
        document.getElementById('slider').src= arrAnh[index];
    }, 1500);
 }
 function stop(){
    if(start){
        clearInterval(start);
        start= null;
    }
    document.getElementById('slider').src= arrAnh[index];
    
 }
 function anh1(){

    document.getElementById('slider').src= arrAnh[0];
 }
 function anh2(){
    document.getElementById('slider').src= arrAnh[1];
 }
 function anh3(){
    document.getElementById('slider').src= arrAnh[2];
 }
 function anh4(){
    document.getElementById('slider').src= arrAnh[3];
 }
 function anh5(){
    document.getElementById('slider').src= arrAnh[4];
 }
 