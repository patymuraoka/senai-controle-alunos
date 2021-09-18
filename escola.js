let listaDeAlunos = ['Vania', 'Lais', 'Eduardo', 'Rodrigo']

if(listaDeAlunos.length == 0){
    console.log('zero' + ' ' + listaDeAlunos.length);
}
for(let contador = 0; contador < listaDeAlunos.length; contador++) {
    if(listaDeAlunos.length % 2 == 1){
        console.log('impar' + ' ' + listaDeAlunos.length);
    } else if(listaDeAlunos.length % 2 == 0){
        console.log('par' + ' ' + listaDeAlunos.length);
    } 
}


    






