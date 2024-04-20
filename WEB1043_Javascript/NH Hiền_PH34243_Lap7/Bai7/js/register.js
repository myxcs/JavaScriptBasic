function register() {
    //Truy xuat form register qua id
    let registerForm = document.getElementById("register-form");
    let inputs = registerForm.elements;
    console.log(inputs);
    //Lay ra gia tri cua input name
    let ten = inputs["ten"].value;
    let ho = inputs["ho"].value;
    let gioiTinh = inputs["gioiTinh"].value;
    alert("Xin chao " + ho + " " + ten);
    console.log(gioiTinh);
    let thongDiep = validateTen(ten);
    let canhBaoChoTen = document.getElementById("canhBaoChoTen");
    canhBaoChoTen.innerHTML = thongDiep;
}

//Ham kiem tra tinh dung dan cua ten
function validateTen(ten) {
    //Kiem tra chuoi rong
    if(ten == "") {
        return "Vui lòng nhập tên";
    } else if (ten.length > 10) {
        return "Độ dài tên cần nhập nhỏ hơn 10 ký tự";
    } else if (ten.length < 2) {
        return "Độ dài tên cần nhập lớn hơn 1 ký tự";
    }
    return "";
}
function validateHo(ho){
    if(ho==""){
        return"Vui long nhap ho";
    }else if(ho.length>10){
        return"Do dai ho can nhap nho hon 10 ki tu"
    }else if(ho.length<2){
        return"do dai ho can nhap lon hon 2 ki tu"
    }
    return"";
}

function validateTen(gioiTinh) {
    //Kiem tra chuoi rong
    if(gioiTinh == 0) {
        return "Vui lòng chon gioi tinh";

}
}

