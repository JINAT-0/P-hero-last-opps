console.log(5>10);
console.log(5<10);
console.log(5==10);
console.log(5!==10);
// ---------variable diye--------
var p=40;
var app=200;
console.log(p>app);
console.log(p<app);
console.log(p<app);
// --------------------------
var biriyani=250;
var delivary_service=true;
if(biriyani<=300){
    console.log("I will buy biriyani");
    if(delivary_service=true){
        console.log("i will stay home and order that food");
    }
    else{
        console.log("I will go to the resturent");
    }
}
else{
    console.log("I will not buy biriyani");
}
// --------------
var boy_has_good_char_with_imandar=true;
var good_education=false;
if(boy_has_good_char_with_imandar==true || good_education==true){
    console.log("I will say yes");
}
// ------------
let sum=100;
let sub=50;
let div=20;
if((sum==100 || sub==20)&& div==20){
    console.log("it follow the rules");
}
else{
    console.log("i was wrong");
}
const price=100;
if (price<=100){
    const discount=price*(10/100);
    const pay_price= price-discount;
    console.log(pay_price);
}
// ------advance tarnari learn
let age=13;
age>=18? console.log('yea'):console.log('no')