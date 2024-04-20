var imgArr = ['src/img/1.jpg','src/img/2.jpg','src/img/3.jpg','src/img/4.jpg','src/img/5.jpg'];

var img = document.getElementsByTagName("img")[0];
img.setAttribute("src",imgArr[0]);
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

var index = 0;
var length = imgArr.length;
auto_slider = function(){
    img.setAttribute("src",imgArr[index]);
    index++;
    if(index >= length){
        index = 0;
    }
}
setInterval(auto_slider, 3000);

prev.onclick = function(){
    index--;
    if(index < 0){
        index = length - 1;
    }
    img.setAttribute("src",imgArr[index]);
console.log(index);

}
next.onclick = function(){
    index++;
    if(index >= length){
        index = 0;
    }
    img.setAttribute("src",imgArr[index]);
    console.log(index);
}

