
    var hamburger=document.getElementById("drop")
function myFunction() {
    // var hamburger=document.getElementById("drop")
   if (hamburger.style.display === "block") {  
    // document.getElementById("icon").style.display = "none"; 
    hamburger.style.display = "none";        
   }   
   else {
       hamburger.style.display = "block";
   }
}

function aboutClick(){
    var program=document.getElementById("drop-program")

    if (program.style.display == "none") {
        program.style.display = "flex";
    } else {
        program.style.display = "none";
    } 
}

// if(hamburger=="block"){
//     document.getElementById("icon").style.display = "none";
//     // document.getElementById("cross-icon").style.display = "block";
    
// }
// else{
//     document.getElementById("cross-icon").style.display = "none"; 
// }