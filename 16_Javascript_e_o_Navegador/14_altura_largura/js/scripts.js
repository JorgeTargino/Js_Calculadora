let elemento = document.querySelector('#titulo-principal');

console.log('largura' + elemento.offsetWidth); // Considera as bordas
console.log('altura' + elemento.offsetHeight);

console.log('largura' + elemento.clientWidth); // Não considera as bordas
console.log('altura' + elemento.clientHeight);