

function kiemTra() {

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
 

    var name_error = document.getElementById("name_error");
    var email_error = document.getElementById("email_error");
    var phone_error = document.getElementById("phone_error");
    var password_error = document.getElementById("password_error");
    var age_error = document.getElementById("age_error");
  
    

    name_error.innerHTML = "";
    email_error.innerHTML = "";
    phone_error.innerHTML = "";
    password_error.innerHTML = "";
    age_error.innerHTML = "";
  
   

    if(!name || !email || !phone || !password || !age)
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
        if(!password)
        {
            password_error.innerHTML = "Vui lòng nhập mật khẩu";
        }
        if(!age)
        {
            age_error.innerHTML = "Vui lòng nhập tuổi";
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
    if(password.length < 6)
    {
        password_error.innerHTML = "Vui lòng nhập mật khẩu tối thiểu 6 kí tự";
        return false;
    }
    if(age < 0)
    {
        age_error.innerHTML = "Vui lòng nhập số tuổi hợp lệ";
        return false;
    }
    if(age < 18 || age > 100)
    {
        age_error.innerHTML = "Vui lòng nhập tuổi tối thiểu 18";
        return false;
    }


   
    alert ("Đăng ký thành công");
    return true;


}
