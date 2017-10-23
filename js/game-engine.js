function Game(){
	var onStart  = function(){};
	var onUpdate = function(){};
	var elements;

	//inicializa
	this.init=function(){
		var game=this;
		//quando carregar a pagina invoca a funcao start e inicia o update
		window.load=new function(){

			//busca os elementos na tela
			game.elements=new GameElements();
			game.elements.findElements();

			game.onStart();
			window.setInterval(game.onUpdate,16);
		};
	};
}