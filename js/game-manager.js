function GameManager(){

	var game=new Game();

	//Quando o jogo começa
	game.onStart=function(){
		console.log("game stated");
	}

	//Frame update
	game.onUpdate=function(){
		console.log("game update");
	}

	game.init();
}