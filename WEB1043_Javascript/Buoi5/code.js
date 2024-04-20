let me  = {
    name: "Quang Thai",
    age: 19,
    address: "Ha Noi",
    
    sua: function (){
        alert("Gau Gau");
    }
};
console.log(me.name);
console.log(me.age);

me.name = "nguyen quang thai";
console.log(me.name);
//me.sua();

function conChim(chimName, dai, rong, mau)
{
    this.chimName = chimName;
    this.dai = dai;
    this.rong = rong;
    this.mau = mau;
    this.hot = function (){
        console.log("sua gau gau");
    }
}

// let chimTo = new conChim("chimTo","20","10","tim");

// console.log(chimTo.dai);
// chimTo.hot();
 conChim[0] = new conChim("conCo","12","5","trang");
conChim[5] = new conChim("chimBe","16","3","do");
//console.log(conChim[5].chimName);

for(var x in conChim)
{
    console.log(conChim[x].chimName);
}

 let conGa = {

    family: ["gaCon","gaMe","gaCha"],
    name: "daiTao"
} 

let ga = conGa.family[1];
console.log(ga);

