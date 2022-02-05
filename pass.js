const characters ='ABCDEFGHIJK@LMN$OP&QRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    var result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;  

}
document.getElementById("pushable").onclick=function(){
    var num =document.getElementById("input1")
    var a=num.value 
      a=parseInt(a)
    console.log(a)
document.querySelector("#results").innerHTML=`password is : ${generateString(a)}`
}
// console.log(generateString(a));