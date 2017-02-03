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
  	valor : {
		type: String,
		required: true
	}
	dataDisponivel : {
		type: String,
		required: true
	},
	horaInicio : {
		type: String,
		required: true
	},
	horaFim : {
		type: String,
		required: true
	}
});

//Compilando schema

mongoose.model('Aula', schema);
