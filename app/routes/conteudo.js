module.exports = function (app){

	var api = app.app.api.conteudo;

	app.get('/listConteudo', api.lista);

	app.post('/createConteudo', api.create);

	app.post('/updateConteudo/:id', api.update);

	app.get('/:id', api.buscaPorId);

	app.delete('/removeConteudo/:id', api.removePorId);
};