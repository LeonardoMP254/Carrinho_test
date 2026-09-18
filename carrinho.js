function calcularTotal(itens, cupom) {

    let subtotal = 0;

    // Validação do carrinho vazio
    if (itens.length === 0) {
        throw new Error("Carrinho inválido");
    }

    for (let i = 0; i < itens.length; i++) {

        // BUG 1 CORRIGIDO:
        // Valida quantidade menor ou igual a 0
        // e preço negativo
        if (itens[i].quantidade <= 0 || itens[i].preco < 0) {
            throw new Error("Carrinho inválido");
        }

        // Cálculo do subtotal
        subtotal += itens[i].preco * itens[i].quantidade;
    }

    let desconto = 0;

    // BUG 2 CORRIGIDO:
    // Aplica 10% de desconto
    if (cupom === "PROMO10") {
        desconto = subtotal * 0.10;
    }

    let frete = 15;

    // BUG 3 CORRIGIDO:
    // R$ 100 ou mais tem frete grátis
    if (subtotal >= 100) {
        frete = 0;
    }

    let total = subtotal - desconto + frete;

    // BUG 4 CORRIGIDO:
    // Mantém apenas 2 casas decimais
    // e transforma o resultado em NUMBER
    return Number(total.toFixed(2));
}

module.exports = { calcularTotal };

