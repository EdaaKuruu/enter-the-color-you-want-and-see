// parola uygulaması
/*var parola="abc1234";

var parola_gir=prompt("parola","parolanı gir...");
if(parola==parola_gir)
{
    document.write("tebrikler doğru parola girdiniz");
}

else{
    document.write("yanlış giriş yaptınız");
}
*/

var renk = prompt("Renk","Bir renk giriniz...");


switch(renk) {
    case "kırmızı":
        document.bgColor = "red";
    break;
    case "mavi":
        document.bgColor = "blue";
    break;

    case "mor":
        document.bgColor = "purple";
    break;


    default:
        document.bgColor = "white";
    break;

}