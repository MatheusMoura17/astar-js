function Game(){
	var onStart  = function(){};
	var onUpdate = function(){};
	var elements;

	//inicializa
	this.init=function(){
		//busca os elementos na tela
		this.elements=new GameElements();
		this.elements.findElements();

		//invoca a funcao start e inicia o update
		this.onStart();
		window.setInterval(this.onUpdate,16);
	};
}