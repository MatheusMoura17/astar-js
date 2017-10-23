function Game(){
	var onStart  = function(){};
	var onUpdate = function(){};
	var elements;


	this.init=function(){
		var game=this;
		//quando carregar a pagina invoca a funcao start e inicia o update
		window.load=new function(){

			game.elements=new GameElements();
			elements.findElements();

			game.onStart();
			window.setInterval(game.onUpdate,16);
		};
	};
}