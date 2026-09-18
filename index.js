const { calcularTotal } = require('./carrinho');

console.log("=== EXECUTANDO TESTEX MANUAIS (CAIXA PRETA) ===\n");

//ct-01: frete gratis na borda (subtotal = 100)
try {
    const res1 = calcularTotal([{ preco: 100, quantidade: 1}], null);
    console.log(`[CT-01] Esp: 100 | Obtido: ${res1} -> ${res1 === 100.00 ? 'PASSOU' : 'FALHOU'}`);
} catch (e) {
    console.log(`[CT-01] Erro: ${e.message}`);
}

// CT-02: Cupom de Desconto 10%
try {
    const res2 = calcularTotal([{ preco: 50, quantidade: 1}], "PROMO10");
    console.log(`[CT-02] Esp: 60 | Obtido: ${res2} -> ${res2 === 60.00 ? 'PASSOU' : 'FALHOU'}`);
} catch (e) {
    console.log(`[CT-02] Erro: ${e.message}`);
}

// CT-03: quantidade negativa
try {
    const res3 = calcularTotal([{ preco: 10, quantidade: -2}], null);
    console.log(`[CT-03] Esp: ERRO | Obtido: ${res3} -> 'FALHOU (NÃO GEROU ERRO)'`);
} catch (e) {
    console.log(`[CT-03] Esp: ERRO | obtido: ERRO (${e.message}) -> PASSOU`);
}

//CT-04: Arredondamento de Centvos
try {
    const res4 = calcularTotal([{ preco: 33.333, quantidade: 1 }], null);
    console.log(`[CT-04] Esp: 48,33 | Obtido: ${res4} -> ${res4 === 48.33 ? 'PASSOU' : 'FALHOU'}`);
} catch (e) {
    console.log(`[CT-04] Erro: ${e.message}`)
}

//CT-05: Carrinho Vazio
try {
    calcularTotal([], null);
    console.log(`[CT-05] Esp: Erro | Obtido: Sem Erro -> FALHOU`);
} catch (e) {
    console.log(`[CT-05] Esp: Erro | Obtido: Erro (${e.message}) -> PASSOU`);
}

//CT-06: frete pago (subtotal < 100)
try {
 const res6 = calcularTotal([{ preco: 80, quantidade: 1 }], null);
 console.log(`[CT-06] Esp: 95 | Obtido: ${res6} -> ${res6 === 95.00 ? 'PASSOU' : 'FALHOU'}`);
} catch (e) {
    console.log(`[CT-06] Erro: ${e.message}`);
}