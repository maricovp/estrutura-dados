let meuArray = [1, "dois",{nome: "joão"}, [4, 5, 6], function() { return "Função dentro de um array";}];
console.log(meuarray[0]); 
console.log(meuarray[2]);
meuArray.push(7);
console.log(meuArray);
meuarray.forEach(function(elemento){
    console.log(elemento);
});

