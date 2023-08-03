function Ftestatriangulo(){
    const l1=parseFloat(document.querySelector("#ilado1").value);
    const l2=parseFloat(document.querySelector("#ilado2").value);
    const l3=parseFloat(document.querySelector("#ilado3").value);
    if ((l1 + l2> l3) && (l1 + l3> l2) && (l2 + l3> l1) ){
        document.querySelector("#presultado").innerHTML = "Essas representam um Triangulo";
        document.querySelector("#presultado").style.color="green";
    } else{
        document.querySelector("#presultado").innerHTML = "Esses lados não formam um Triangulo";
        document.querySelector("#presultado").style.color="red";
    }
    return false; //não enciar para a Action do form
}