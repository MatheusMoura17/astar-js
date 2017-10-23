function Game(onStart,onUpdate){
	this._onStart  = onStart;
	this._onUpdate = onUpdate;
	this.elements;

	//fps dividido por 1
	this.deltaTime;

	//inicializa
	this.init=function(){
		//busca os elementos na tela
		this.elements=new GameElements();
		this.elements.findElements();

		//invoca a funcao start
		this._onStart();

		//loop principal
		var game=this;
		var lastLoop = new Date;
		window.setInterval(function(){

			//calcula o deltatime
			var thisLoop = new Date;
    		var fps = 1000 / (thisLoop - lastLoop);
    		lastLoop = thisLoop;
    		game.deltaTime=1/fps;

			//invoca o onUpdate
			game._onUpdate();
		},10);
	};
}