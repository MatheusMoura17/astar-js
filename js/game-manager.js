function GameManager(){

	this.game;

	//invoca o inicializador
	this.init=function(){
		this.game=new Game(this.onStart,this.onUpdate);
		this.game.init();
	};

	//Quando o jogo começa
	this.onStart=function(){
		console.log("gane started");
	};

	//Frame update
	this.onUpdate=function(){
		console.log("game update");
	};

}