function Animal(nombre) {
	this.nombre = nombre;

	this.saludo = function(){

		return this.nombre;
	}
}

function Oso(nombre) {
	this.nombre = nombre;
}


var bocho = new Oso('');

Animal.prototype.patas = 0;

Animal.prototype.getPatas = function(){
	return this.patas;
};