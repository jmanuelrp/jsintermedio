console.log('Bienvenido al curso');

var miObjeto = {
    cadena: 'unacadena',
    numero: 123
};

miObjeto.nuevoAtributo = 'nuevo';

var obj;

function Animal(nombre) {
	this.nombre = nombre;

	this.saludo = function(){

		return 'Hola! mi nombre es '+this.nombre;
	};
}
//function Oso(nombre){
var Oso = function(nombre, edad) {
	this.nombre = nombre;
	
	this.getEdad = function(){
        return edad;
	};
};

Oso.prototype = new Animal();

var pardo = new Oso('Pardo', 16);
var nuevo = new Oso('Panda',9);
nuevo.patas = 4;

Animal.prototype.patas = 0;

Animal.prototype.getPatas = function(uno, dos, tres){
	return this.patas;
};

Oso.prototype.getEdad = function(){
    return this.edad;
};

console.log('Oso', pardo);
console.log('Pertenece a "clase" Oso', nuevo instanceof Oso);
console.log('Pertenece a "clase" Animal', nuevo instanceof Animal);
console.log('Nombre del oso', nuevo.saludo.call(pardo));
console.log('Numero de patas', nuevo.getPatas.call(pardo,1,2,3));
console.log('Edad del oso', nuevo.getEdad.apply(pardo,[1,2,3]));
