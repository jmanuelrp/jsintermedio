function Animal(nombre) {
	this.nombre = nombre;

	this.saludo = function(){

		return 'Hola! mi nombre es '+this.nombre;
	};
}

function Oso(nombre) {
	this.nombre = nombre;
}

var pardo = new Oso('Pardo');

Animal.prototype.patas = 0;

Animal.prototype.getPatas = function(){
	return this.patas;
};

console.log('Oso', pardo);
console.log('Pertenece a "clase" Oso', pardo instanceof Oso);
console.log('Nombre del oso', pardo.nombre);
console.log('Numero de patas', pardo.getPatas());