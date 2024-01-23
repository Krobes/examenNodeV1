function multiplicar(base){
    let tabla = [];
    for(let i = 1; i<=10; i++){
        tabla.push(i * base);
    }
    return tabla;
}

module.exports = {
    multiplicar
}