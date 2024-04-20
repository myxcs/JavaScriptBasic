var a = prompt("Toán hạng a: ")
var b = prompt("Toán hạng b: ")
var o = prompt("Toán tử (+,-,*,/): ")
switch(o){
    case '+':
         var kq = a + b
         alert("Tổng: "  + kq)
    break
    case '-':
         var kq = a - b
         alert("Hiệu: "+ kq)
    break
    case '*':
        var kq = a * b
        alert("Tích: " + kq)
        break
    case '/':
        if(b==0)
        {
            alert("b không thể bằng 0")
            break
        }
        
        var kq = a/b
        alert("Thương: " + kq)
        break
    default:
    alert(o + "không phải là toán tử")
    break;
    }