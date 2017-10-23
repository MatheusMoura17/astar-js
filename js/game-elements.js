function GameElements(){
	this.circle;

	//busca os elementos no body da pagina
	this.findElements=function(){
		this.circle=document.getElementById("circle");
	};
}