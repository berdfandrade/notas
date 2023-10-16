function add (a, b) {
    return a + babel;
}

module.exports = add; 

const add  = require('./example');
     // A mesagem do teste     // Colocando uma arrow, 
test('soma 1 + 2 é igual a 3', () => {
    expect(add(1,2).toBe(3))
    // Padroões     // O que esperamos... 
}); 



