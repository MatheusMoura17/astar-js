function Game(){
	var onStart  = function(){};
	var onUpdate = function(){};


	this.init=function(){
		//quando carregar a pagina invoca a funcao start
		window.load=this.onStart();
	};
}