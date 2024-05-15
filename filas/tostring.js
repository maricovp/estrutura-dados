@@ -1,5 +1,5 @@
let fila = [1, 2, 3];
fila.toString = function() {
    return thisjoin(', ');
    return this.join(', ');
};
console.log(fila.toString()); // Saída: "1, 2, 3"