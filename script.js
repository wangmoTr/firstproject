console.log("hello")
const yourname=document.getElementById("first");
const button = document.getElementById("btn");
//console.log(yourname)

const othername = document.getElementById("second");


const result = document.getElementById("result");
var nameTogether="";

var resultfrom_True=0;
var resultfrom_Love = 0;
var final_result = 0;


button.addEventListener('click',function(event){
    nameTogether += yourname.value+othername.value;
    nameTogether = nameTogether.toLowerCase();
    console.log("final", nameTogether)
    //result.innerHTML = nameTogether;
    for(var i = 0; i< nameTogether.length;i++){
        var letter = nameTogether[i]
        if(letter==="t" || letter==="r" || letter==="u" || letter==="e"){
            resultfrom_True+=1;
        
            console.log("letter", letter,resultfrom_True,",resultfrom_True");
        };
        if(letter==="l" || letter==="o" || letter==="v" || letter==="e"){
            resultfrom_Love += 1;
            console.log(resultfrom_Love)
        }
    }
    final_result = resultfrom_True*10 + resultfrom_Love;
    if(final_result >100){
        final_result === 100
    }
    
    result.innerHTML = final_result;
  //result.innerHTML= setInterval((final_result +"%"),50);
  
})
