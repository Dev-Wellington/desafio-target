const [sp, rj, mg, es, outros] = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53];

const soma = sp + rj + mg + es + outros;

const estados = ['SP', 'RJ', 'MG', 'ES', 'Outros'];
const valoresEstados = [sp,rj,mg,es,outros];

const total = soma;

function porcentagem(estado){
    const resultadoPor = (estado / total) *100;
    return resultadoPor
}


for(let i =0;i<5;i++){
        console.log(`O percentual que ${estados[i]} representa é: ${porcentagem(valoresEstados[i]).toFixed(2)}%`); 
}


