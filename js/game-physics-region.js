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
				this.matrix[i][j].drawMaker();
				this.matrix[i][j].drawMakerMiddle();
			}
		}
	};
}

//um quadrado de uma região
function RegionMember(x, y){
	//posição do pivot
	this.middleX=x+(regionSize/2);
	this.middleY=y+(regionSize/2);

	//desenha o quadrado na tela
	this.drawMaker=function(){
		var maker= document.createElementNS('http://www.w3.org/2000/svg', "rect");
		maker.setAttribute("x",x);
		maker.setAttribute("y",y);
		maker.setAttribute("width",regionSize);
		maker.setAttribute("height",regionSize);
		maker.setAttribute("stroke","black");
		maker.setAttribute("stroke-width","1");
		maker.setAttribute("fill","none");
		gm.game.elements.container.appendChild(maker);
	};

	//desenha o pivot na tela
	this.drawMakerMiddle=function(){
		var middle= document.createElementNS('http://www.w3.org/2000/svg', "circle");
		middle.setAttribute("cx",this.middleX);
		middle.setAttribute("cy",this.middleY);
		middle.setAttribute("r",1);
		middle.setAttribute("stroke","red");
		middle.setAttribute("stroke-width","1");
		middle.setAttribute("fill","none");
		gm.game.elements.container.appendChild(middle);
	};


}