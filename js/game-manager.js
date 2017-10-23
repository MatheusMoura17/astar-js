function GameManager(){

	this.game;
	this.counter=0;

	//invoca o inicializador
	this.init=function(){
		this.counter=0;
		this.game=new Game(this.onStart,this.onUpdate);
		this.game.init();
	};

	//Quando o jogo começa
	this.onStart=function(){
		console.log("game started");
	};

	//Frame update
	this.onUpdate=function(){
		circle=gm.game.elements.circle;
		circle.cx.baseVal.value += 50*gm.game.deltaTime;
	};

}