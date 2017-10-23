function Game(onStart,onUpdate){
	this._onStart  = onStart;
	this._onUpdate = onUpdate;
	this.elements;

	//inicializa
	this.init=function(){
		//busca os elementos na tela
		this.elements=new GameElements();
		this.elements.findElements();

		//invoca a funcao start e inicia o update
		this._onStart();
		window.setInterval(this._onUpdate,16);
	};
}