const mongoose = require('mongoose');

const ProdutosSchema = new mongoose.Schema({
    descricao: { type: String },
    unidMedida: { type: String },
    dataVencimento: { type: Date }
}, {
    versionKey: false
})

const Estoque = mongoose.model('Estoque', ProdutosSchema);

module.exports = Estoque;