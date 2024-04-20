

function submit(){
    var name = document.getElementById('ten').value
    var age = document.getElementById('tuoi').value
    var email = document.getElementById('email').value
    var pwo = document.getElementById('mkc').value
    var pwn = document.getElementById('mkm').value
    var pwa = document.getElementById('xnmk').value
    if (!name || !age || !email || !pwo || !pwn || !pwa) {
        document.getElementById("ab").innerHTML = "Tất cả các trường không được để trống";
        document.getElementById("ab").style.color = "red";
       // alert('');
        return;
    }


    if (isNaN(age)) {
        document.getElementById("a").innerHTML = "Tuổi phải là số";
        document.getElementById("a").style.color = "red";
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
       // alert('Email phải có . và @');
        return;
    }

    if (pwo !== 'lopJScoban') {
       // alert('Mật khẩu cũ không đúng');
        return;
    }

    if (pwn.length <= 8) {
        //alert('Mật khẩu mới phải có trên 8 kí tự');
        return;
    }

    if (pwn != pwa) {
       // alert('Mật khẩu mới và xác minh mật khẩu mới không trùng nhau');
        return;
    }

    alert('Đổi mật khẩu thành công!');
}