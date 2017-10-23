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

	var position=new Vector2(0,0);

	//Quando o jogo começa
	this.onStart=function(){
		console.log("game started");
		circle=gm.game.elements.circle;
		target=gm.game.elements.target;
		patchFinder=new PatchFinder(circle,target);
		patchFinder.start();
		position=patchFinder.findNextPosition();
	};


	//Frame update
	this.onUpdate=function(){	
		if(parseInt(circle.cx.baseVal.value)==parseInt(position.x) && parseInt(circle.cy.baseVal.value) == parseInt(position.y))
			position=patchFinder.findNextPosition();


		var tx = position.x - circle.cx.baseVal.value,
		    ty = position.y - circle.cy.baseVal.value,
		    dist = Math.sqrt(tx*tx+ty*ty),
		    rad = Math.atan2(ty,tx),
		    angle = rad/Math.PI * 180;;

		    velX = (tx/dist)*50*gm.game.deltaTime;
		    velY = (ty/dist)*50*gm.game.deltaTime;

		circle.cx.baseVal.value +=velX;
		circle.cy.baseVal.value +=velY;
	};

}