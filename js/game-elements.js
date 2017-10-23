function GameElements(){
	this.container;
	this.circle;

	//busca os elementos no body da pagina
	this.findElements=function(){
		this.container=document.getElementById("game-container");
		this.circle=document.getElementById("circle");
	};
}