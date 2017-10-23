var regionSize=25;

function RegionManager(){

	this.matrix;

	//cria um conjunto de regiões
	this.generate=function(sizeX,sizeY){
		//gera a matriz
		this.matrix=new Array (sizeX);
		for(var i=0;i<this.matrix.length;i++){
			this.matrix[i]=new Array(sizeY);
			for(var j=0;j<this.matrix[i].length;j++){
				//instancia um RegionMember para o elemento
				this.matrix[i][j]=new RegionMember(i*regionSize,j*regionSize);
			}
		}
	};
}

//um quadrado de uma região
function RegionMember(x, y){
	this.middleX=x+(regionSize/2);
	this.middleY=y+(regionSize/2);

	this.maker= document.createElementNS('http://www.w3.org/2000/svg', "rect");

	this.maker.setAttribute("x",x);
	this.maker.setAttribute("y",y);
	this.maker.setAttribute("width",regionSize);
	this.maker.setAttribute("height",regionSize);
	this.maker.setAttribute("stroke","black");
	this.maker.setAttribute("stroke-width","1");
	this.maker.setAttribute("fill","none");

	gm.game.elements.container.appendChild(this.maker);

	var middle= document.createElementNS('http://www.w3.org/2000/svg', "circle");

	middle.setAttribute("cx",this.middleX);
	middle.setAttribute("cy",this.middleY);
	middle.setAttribute("r",1);
	middle.setAttribute("stroke","red");
	middle.setAttribute("stroke-width","1");
	middle.setAttribute("fill","none");

	gm.game.elements.container.appendChild(middle);
}