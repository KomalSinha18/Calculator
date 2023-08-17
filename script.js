function calculate(){
    let input=document.getElementById("input").value 
    document.getElementById("input").value=eval(input)
}

function clearscreen(){
    document.getElementById("input").value=""
}

function buttonclick(e){
    document.getElementById("input").value += e
}

function backspace(){
 let komal =   document.getElementById("input").value
  let sinha = komal.substring(0,komal.length-1)
  document.getElementById("input").value = sinha
}