const həftəninGünləri = [ "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə", "Bazar"];
const gunNomresi= prompt("Zəhmət olmasa bir rəqəm daxil edin (1-7):");

if (gunNomresi >= 1 && gunNomresi <= 7) {
    alert("Seçdiyiniz gün: " + həftəninGünləri[gunNomresi - 1]);
} else {
    alert("Zəhmət olmasa düzgün bir rəqəm daxil edin.");
    
}



 


   
  


// let a = +prompt ("")
// let b= Math.sqrt(a)
// console.log(b);