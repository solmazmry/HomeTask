let qiymet= +prompt("Qiymetinizi daxil edin");
if(qiymet<100 && qiymet>0 ){
    if(qiymet>=90 && qiymet<=100 && "A"=="A"){
        alert("imtahandan ugurlu kecdiniz");
    }
       
    else if(qiymet>=81 && qiymet<=90 && "B"== "B") {
        alert("novbeti merhele kecdiniz");

    }
    else if ( qiymet>=71 && qiymet<=80 && "C"=="C"){
        alert("yeniden muraciet edin")

    }
    else if ( qiymet>=61 && qiymet<=70 && "C"=="C"){
        alert("kesilmisiniz")
    }
   

}
else{
    alert("menfi ve 100 den boyuk eded daxil ede bilmezsiniz")
}
