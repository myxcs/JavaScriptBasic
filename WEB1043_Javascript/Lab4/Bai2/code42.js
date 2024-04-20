var sv = new Object(); 
sv.hoTen = prompt("Họ và tên");
sv.diem = prompt("Điểm");

 sv.hienThi = function(){

    if(this.diem >= 5){ 
        this.hocLuc = "Đậu";
        }
    else {
        this.hocLuc = "Rớt"; 
        }

    document.write("<h3>Họ và tên: "+this.hoTen+ "</h3>"); 
    document.write("<h3>Điểm TB: "+this.diem+ "</h3>"); 
    document.write("<h3>Học lực: "+this.hocLuc+ "</h3>"); 
         
 }

