

var khoahoc = document.getElementById("khoa_hoc");
var hocphi = document.getElementById("hoc_phi");
hocphi.value = 0;
khoahoc.addEventListener("change", function() {
    if (khoahoc.value == 0) {
        hocphi.value = 0;
    } else if (khoahoc.value == 1) {
        hocphi.value = 1000000;
    } else if (khoahoc.value == 2) {
        hocphi.value = 2000000;
    } else if (khoahoc.value == 3) {
        hocphi.value = 3000000;
    }
});
var soluong = document.getElementById("so_luong");
var thanhtien = document.getElementById("thanh_tien");

thanhtien.value = 0;
soluong.addEventListener("change", function() {
    thanhtien.value = hocphi.value * soluong.value;
    tongchiphi.value = thanhtien.value;
});



var tongchiphi = document.getElementById("tong_chi_phi");
var hinhthuc = document.getElementsByName("hinh_thuc");
var seleceted = false;
tongchiphi.value = 0;
//hinhthuc[0].checked = true;
tongchiphi.value = thanhtien.value;
hinhthuc.forEach((element) => {
    element.addEventListener("change", function() {
        if (hinhthuc[0].checked) {
            tongchiphi.value = thanhtien.value;
            seleceted = true;
        }
        else if (hinhthuc[1].checked) {
            tongchiphi.value = thanhtien.value * 0.7;
            seleceted = true;
        }
    });
});


function kiemTra() {

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var khoahoc = document.getElementById("khoa_hoc").value;
    var soluong = document.getElementById("so_luong").value;
    var hinhthuc = document.getElementById("hinh_thuc").value;

    var name_error = document.getElementById("name_error");
    var email_error = document.getElementById("email_error");
    var phone_error = document.getElementById("phone_error");
    var khoahoc_error = document.getElementById("khoahoc_error");
    var hinhthuc_error = document.getElementById("hinhthuc_error");
    var soluong_error = document.getElementById("soluong_error");
    

    name_error.innerHTML = "";
    email_error.innerHTML = "";
    phone_error.innerHTML = "";
    khoahoc_error.innerHTML = "";
    hinhthuc_error.innerHTML = "";
    soluong_error.innerHTML = "";

 

    if(!name || !email || !phone || !soluong || khoahoc == 0)
    {
        if(!name)
        {
            name_error.innerHTML = "Vui lòng nhập tên";
        }
        if(!email)
        {
            email_error.innerHTML = "Vui lòng nhập email";
        }
        if(!phone)
        {
            phone_error.innerHTML = "Vui lòng nhập số điện thoại";
        }
        if(!soluong)
        {
            soluong_error.innerHTML = "Vui lòng nhập số lượng đăng kí";
        }
        if(khoahoc == 0)
        {
            khoahoc_error.innerHTML = "Vui lòng chọn khóa học";
        }
        if(seleceted == false)
        {
            hinhthuc_error.innerHTML = "Vui bạn chọn hình thức học";
        }
        return false;
    }
    


    if(name.length < 3)
    {
        name_error.innerHTML = "Vui lòng nhập tên trên 3 kí tự";
        return false;
    }
    if(name.length > 18)
    {
        name_error.innerHTML = "Vui lòng nhập tên nhỏ hơn 18 kí tự";
        return false;
    }
    if(email.length > 0)
    {
        let regexEmail = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
        if(!regexEmail.test(email))
        {
            email_error.innerHTML = "Vui lòng nhập email đúng định dạng";
            return false;
        }
    }
    if(phone.length > 0)
    {
        let regexPhone = new RegExp("^0\\d{9}$");
        if(!regexPhone.test(phone))
        {
            phone_error.innerHTML = "Vui lòng nhập số điện thoại đúng định dạng";
            return false;
        }
    }
    var hinhthuchoc = document.getElementsByName("hinh_thuc");
  
    hinhthuchoc.forEach((element) => {
        if(element.checked)
        {
            seleceted = true;
        }
    });
    if(seleceted == false)
    {
        hinhthuc_error.innerHTML = "Vui lòng chọn hình thức hoc";
        return false;
    }

    if(soluong < 1)
    {
        soluong_error.innerHTML = "Số người đăng kí phải lớn hơn 0";
        return false;
    }
    if(soluong > 20)
    {
        soluong_error.innerHTML = "Số người đăng kí không quá 20 người";
        return false;
    }

    alert ("Đăng ký thành công");
    return false;


}
