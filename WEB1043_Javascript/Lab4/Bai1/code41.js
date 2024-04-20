inv = [];
  function item(itName, itModel, itCost, itQlty)
  {
      this.itName = itName;
      this.itModel = itModel;
      this.itCost = itCost;
      this.itQlty = itQlty;
 }


 inv[0] = new item("iPhone 10", 10, 10000, "Avg");
 inv[1] = new item("iPhone 11", 11, 15000, "Good");
 inv[2] = new item("iPhone 12", 12, 20000, "Good");

 for(var x in inv){
    console.log(inv[x])
 }

 console.log(inv[2].itQlty);

 inv[3] = new item("iPhone 13", 13, 30000, "Bad");

 console.log(inv[3].itCost);