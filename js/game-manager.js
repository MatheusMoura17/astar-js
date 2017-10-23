function GameManager(){

	var game=new Game();

	//Quando o jogo começa
	game.onStart=function(){
		console.log("game started");
		game.elements.circle.cx+=100;
	};

	//Frame update
	game.onUpdate=function(){
		console.log("game update");
	};

	//invoca o inicializador
	this.init=function(){
		game.init();
	};
}