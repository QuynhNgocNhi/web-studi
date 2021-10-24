/*var company= new Object();
company.name = "Nông Sản Xanh";
company.ceo = "huynh Thi Yen nhi";
console.log(company);

var NSX = "Nông Sản Xanh";

function Hinhtron (bankinh){
  console.log(this);
  this.bankinh = bankinh;
}
var circle = new Hinhtron(5);
console.log(circle);
*/
function Cat(name){
  this.name=name;
}
Cat.prototype.meow= function(){
  console.log(this.name + " says chuc ban may man lan sau!");
}
var Ngheo = new Cat("Ngheo", "Kho");
Ngheo.meow();