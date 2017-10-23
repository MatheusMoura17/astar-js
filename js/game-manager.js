function GameManager(){

	this.game;
	this.counter=0;

	var patchFinder;

	var circle;

	//invoca o inicializador
	this.init=function(){
		this.counter=0;
		this.game=new Game(this.onStart,this.onUpdate);
		this.game.init();
	};

	//Quando o jogo começa
	this.onStart=function(){
		console.log("game started");
		circle=gm.game.elements.circle;
		target=gm.game.elements.target;
		patchFinder=new PatchFinder(circle,target);
		patchFinder.start();
	};

	//Frame update
	this.onUpdate=function(){	
		var position=patchFinder.findNextPosition();

		var angle = Math.atan(position.y, position.x);

		var magnitude = 20.0;
		var velX = Math.cos(angle) * magnitude;
		var velY = Math.sin(angle) * magnitude;

		circle.cx.baseVal.value +=velX*gm.game.deltaTime;
		circle.cy.baseVal.value +=velY*gm.game.deltaTime;
	};

}