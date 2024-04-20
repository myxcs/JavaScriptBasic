let chieucao = prompt("Nhập chiều cao (cm)") / 100
let cannang = prompt("Nhập cân nặng (kg)")
let bmi = cannang / (chieucao*chieucao)
console.log("Chỉ số BMI là: " + bmi)
if(bmi<18.5){
    alert("Thiếu cân")
    } 
    else if(bmi >=18.5 && bmi<25)
    {
        alert("Bình thường")
    } 
    else if(bmi>=25 && bmi<30)
    {
        alert("Thừa cân")
    }
    else
    {
        alert("Béo phì")
    }
   
