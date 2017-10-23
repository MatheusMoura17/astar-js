function Game(){
	var onStart  = function(){};
	var onUpdate = function(){};


	this.init=function(){
		var game=this;
		//quando carregar a pagina invoca a funcao start e inicia o update
		window.load=new function(){
			game.onStart();
			window.setInterval(game.onUpdate,16);
		};
	};
}