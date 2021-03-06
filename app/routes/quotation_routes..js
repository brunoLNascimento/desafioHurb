const quotation = require('../controllers/quotation_controllers')
    
module.exports = function(server) {	
    //quotation, rota para consultar cotação e salvar no banco
    server.get('/quotation/:coinFrom/:coinTo?/:amount?', quotation.quotation)
    
    //getQuotation, rota para consultar cotação com paginação
    server.get('/findQuotation/:page/:id?', quotation.getQuotation)

    //remove, rota para exclusão lógica
    server.delete('/removeQuotation/:id', quotation.remove)

    //remove, rota para exclusão lógica teste
    server.delete('/removetest/:id', quotation.removetest)
    
    
}