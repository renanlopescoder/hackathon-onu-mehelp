var mongoose = require('mongoose');

//Função construtora criando Schema usando banco orientado a documento
var schema = mongoose.Schema({
	//Atributos do documento
	titulo : {
		type: String,
		required: true
	},
	userId : {
		type: String,
		required: true
	},
  	conteudo : {
		type: String,
		required: true
	}
});

//Compilando schema

mongoose.model('Conteudo', schema);
