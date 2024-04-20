var arr = ["banner1.webp", "banner2.webp", "banner3.webp", "banner4.webp"];
var index = 0;
var a = document.getElementById("slider");
function next() {
  if (index < 3) index++;
  a.src = arr[index];
}
function pre() {
  if (index > 0) {
    index--;
    a.src = arr[index];
  }
}