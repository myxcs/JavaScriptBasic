function Nguoi(ten, tuoi, diaChi, ngheNghiep, sdt)
{
    this.ten = ten;
    this.tuoi = tuoi;
    this.diaChi = diaChi;
    this.ngheNghiep = ngheNghiep;
    this.sdt = sdt;

}

 Nguoi[0] = new Nguoi("Nguyen Quang Teo", 19,"Ha Noi", "Ki su"," 0123456");
 Nguoi[1] = new Nguoi("Tran Thi A", 20, "Nghe An", "Lai xe", "0165432");
Nguoi[2] = new Nguoi("Pham Thi C", 20, "Thanh Hoa", "Dau bep", "0965465");

for (var x in Nguoi)
{
    console.log(Nguoi[x].ten);
}