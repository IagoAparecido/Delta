function calcularDelta (a,b,c){
  let delta =   b*b - (4*a*c);

  return delta;
}

function calcularx1(a,b, delta){
    let x1= (-1*b + Math.sqrt(delta))/2*a;
    return x1;
}
function calcularx2(a,b, delta){
    let x2= (-1*b - Math.sqrt(delta))/2*a;
    return x2;
}



//         // cadastro =
//         // {
        
//         //     'nome':document.getElementById('inputnome').value,
//         //     'endereco':document.getElementById('inputendereco').value,
//         //     'email':document.getElementById('inputemail').value
//         // }
    
//         // alert('meu nome é:' +cadastro.nome + 'sou de'+cadastro.endereco)
//         function calculomedia (a,b,c){
//             let resultado = (a+b+c)/3;
//             return resultado;
//         }
        
//         function calculoexame (nota){
//             let resultado = 10 - nota;
//             return resultado;
//         }
        
$('#inputenviar').click(
    function(){
        formula = {
            'b':parseInt(document.getElementById('inputB').value),
            'c':parseInt(document.getElementById('inputC').value),
            'a':parseInt(document.getElementById('inputA').value),
    }

    let delta = calcularDelta(formula.a, formula.b, formula.c);

    let x1 = calcularx1(formula.a, formula.b, delta)
    let x2 = calcularx2(formula.a, formula.b, delta)

    alert("Delta = "+delta+", x1 = "+x1+", x2="+ x2)
}
)


//         calculo = {
//             'b':document.getElementById('inputB').value,
//             'c':document.getElementById('inputC').value,
//             'a':document.getElementById('inputA').value,
//         }

//         let media = calculomedia (parseInt(calculo.a), parseInt(calculo.b), parseInt(calculo.c));
//         let exame = calculoexame - 10
//         if (media >= 7){
//             alert('voce foi aprovado!');
//         } else {
//             alert('Falta '+ calculoexame(media ) +' pra tu passar');
//         } 
//     }
// )