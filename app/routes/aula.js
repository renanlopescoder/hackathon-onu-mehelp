module.exports = function (app){

	var api = app.app.api.aula;

	app.get('/listAula', api.lista);

	app.post('/createAula', api.create);

	app.post('/updateAula/:id', api.update);

	app.get('/:id', api.buscaPorId);

	app.delete('/removeAula/:id', api.removePorId);

	// app.get('*', routes.index);
};