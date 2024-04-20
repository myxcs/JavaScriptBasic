var a = null, b = null, c = null, o = null; x = null;

function toan_hang()
{

    if(a == null){
        a = x;
        }
    else{
            b = x;
        }

}
// function debug()
// {
//     console.log(x);
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(o);
// }

function gan0()
{    x = 0;
     toan_hang();
     //debug();
    
}
function gan1()
{
    x = 1;
    toan_hang();
    //debug();
}
function gan2()
{
    
    x = 2;
    toan_hang();
   // debug();
}
function gan3()
{
    x = 3;
    toan_hang();
   // debug();
}
function gan4()
{
    x = 4;
   toan_hang();
  // debug();

}
function gan5()
{
    x = 5;
    toan_hang();

}
function gan6()
{
    x = 6;
    toan_hang();

}
function gan7()
{
    x = 7;
    toan_hang();

}
function gan8()
{
    x = 8;
    toan_hang();

}
function gan9()
{
    x = 9;
   toan_hang();

}
function gancong()
{
    o = 1;
    //alert(o);
}
function gantru()
{
    o = 2;
}
function gannhan()
{
    o = 3;
}
function ganchia()
{
    o = 4;
}
 function thuc_hien()
  {
     //o = s;
    switch (o) {
        case 1: 
            c = a + b;
            alert("Tổng: " + c);
            break;
        case 2:
            c = a - b;
            alert("Hiệu: " + c);
            break
        case 3:
            c = a * b;
            alert("Tích: " + c);
            break;
        case 4:
            if(b == 0 )
            {
                alert("Không thể thực hiện phép chia");
                break;
            }
            else
            {
                c = a / b;
                alert("Thương: " + c);
                break;
            }
            
         default:
         alert(o + ' không phải toán tử');
       }
        lam_lai();
}

//  function toan_tu()
//  {
//      o = s;

// }

function lam_lai()
{
    a = null;
    b = null;
    c = null
    o = null;
}
