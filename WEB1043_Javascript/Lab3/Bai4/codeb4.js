//var arr = ['Rock','Paper','Scissors'];
var  nguoi,may,ketqua,giatri;
    
    // function debug()
    //    {
    //     console.log("Người:" + nguoi);
    //     console.log("Máy:" + may);
    //     console.log("Kết quả:" + ketqua);
    //    }
   
    function getValue(giatri)
    {
            nguoi = giatri;

            may = Math.floor(Math.random() * 3);

        if(may == 0){
            if(nguoi == 0){
                ketqua = "Hòa";
            } else if(nguoi == 1){
                ketqua = "Thắng rùi";
            } else{
                ketqua = "Thua rùi";
            }
        } else if (may == 1) {
            if(nguoi == 0){
                ketqua = "Thua rùi";
            }else if(nguoi == 1){
                ketqua = "Hòa";
            } else {
                ketqua = "Thắng rùi";
            }
        } else {
            if(nguoi == 0){
                ketqua = "Thắng rùi";
            } else if(nguoi == 1) {
                ketqua = "Thua rùi";
            } else {
                ketqua = "Hòa";
            }
        }
           // debug();
        alert("Bạn ra: " + getInfo(nguoi) + " và Máy ra: " + getInfo(may) + " --> Kết quả: " + ketqua);
        
    }
        function getInfo(value){
            switch(value){
                case 0:
                    return "Đá";
                    break;
                case 1:
                    return "Bao";
                    break;
                default:
                    return "Kéo";
                    break;
            }
        }