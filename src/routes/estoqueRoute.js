const express = require('express');
const router = express.Router();
const controller = require('../controllers/estoqueController')
const authMiddleware = require('../middleware/auth')


/**
 * @api {POST} /estoque Cria um novo produto
 * @apiName post
 * @apiGroup estoque
 *
 * @apiSuccess {String} _id Id do produto, criado automaticamente pelo mongoDB.
 * @apiSuccess {String} descricao Descrição do produto.
 * @apiSuccess {String} unidMedida Unidade de medida do produto.
 * @apiSuccess {String} dataVencimento Data de vencimento do produto.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
        "_id": "5df3f107d84dd116307f9971",
        "descricao": "Tapioca",
        "unidMedida": "gr",
        "dataVencimento": "2019-12-15T03:00:00.000Z"
    }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       "error": 'Registration Failed: ' + err
 *     }
 */

router.post('/', controller.post)

/**
 * @api {GET} /estoque Retorna os produtos cadastrados
 * @apiName get
 * @apiGroup estoque
 *
 * @apiSuccess {String} _id Id do produto, criado automaticamente pelo mongoDB.
 * @apiSuccess {String} descricao Descrição do produto.
 * @apiSuccess {String} unidMedida Unidade de medida do produto.
 * @apiSuccess {String} dataVencimento Data de vencimento do produto.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
        "_id": "5df3f107d84dd116307f9971",
        "descricao": "Tapioca",
        "unidMedida": "gr",
        "dataVencimento": "2019-12-15T03:00:00.000Z"
    }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       "error": err
 *     }
 */
router.get('/', controller.get)

/**
 * @api {GET} /estoque/VencendoProximosSeteDias Retorna um array com os produtos que irão vencer nos próximos 7 dias
 * @apiName getVencendo
 * @apiGroup estoque
 *
 * @apiSuccess {String} retorno Descrição do produto retornado
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
        "Cookie",
        "Tapioca"
        ]
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       "error": err
 *     }
 */
router.get('/VencendoProximosSeteDias', controller.getVencendo)

/**
 * @api {GET} /estoque/dias/:id Retorna os dias para o vencimento de um item filtrado pelo id
 * @apiName getDias
 * @apiGroup estoque
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} mensagem A mensagem é retornada dependendo da condição de validade do produto.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     
 *       O produto Tapioca vence em 9 dias.
 * ou
 * 
 *     HTTP/1.1 200 OK
 *     
 *       O produto Tapioca vence hoje ou já está vencido!.
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       "error": err
 *     }
 */
router.get('/dias/:_id', controller.getDias)

router.use(authMiddleware)

/**
 * @api {PUT} /estoque/:id Atualiza um item filtrado por seu id utilizando os dados passados no corpo da requisição
 * @apiName put
 * @apiGroup estoque
 *
 * @apiParam {Number} id Users unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Produto atualizado com sucesso"
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       "error": err
 *     }
 */
router.put('/:_id', controller.put)

/**
 * @api {DELETE} /estoque/:id Deleta o item filtrado por seu id
 * @apiName delete
 * @apiGroup estoque
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Produto removido!"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 BAD REQUEST
 *     {
 *       "error": err
 *     }
 */
router.delete('/:_id', controller.delete)


module.exports = router