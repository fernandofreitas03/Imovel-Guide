function calcularRegraDeTres() {
   var a = parseFloat(document.getElementById("a").value);
   var b = parseFloat(document.getElementById("b").value);
   var c = parseFloat(document.getElementById("c").value);

   if (!isNaN(a) && !isNaN(b) && !isNaN(c) && b !== 0) {
       var resultado = (a * c) / b;
       document.getElementById("resultado").value = resultado;
   } else {
       alert("Por favor, insira valores válidos");
   }
}

function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

function Validar(){
   
   const cpf = document.getElementById('cpf')
   const tel = document.getElementById('tel')

   if(cpf.value.length < 14){
      alert('Preencha seu cpf corretamente')
   }
   if(tel.value.length < 14){
      alert('Preencha seu telefone corretamente')
   }else{
      alert('Campos preenchidos corretamente')
   }
}