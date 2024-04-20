let anhArr = ['img/1.jpg','img/2.jpg','img/3.jpg'];
let indexNow = 0;
 function chonAnh(index)
 {
    indexNow = index;
    document.getElementById('slidershow').src= anhArr[indexNow];
 }
 function tien()
 {
    if(indexNow <=2 )
    {
        indexNow++;
    } 
    if(indexNow == 3)
    {
        indexNow = 0;
    }
    document.getElementById('slidershow').src = anhArr[indexNow];
 }