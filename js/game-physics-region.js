var regionSize=25;

var colisors=[ //colisor 1
			  "0x2","0x3",
			  "1x2","1x3",
			  "2x2","2x3",
			  "3x2","3x3",
			  "4x2","4x3",
			  "5x2","5x3",
			  "6x2","6x3",
			  "7x2","7x3",
			  "8x2","8x3",
			  "9x2","9x3",
			  "10x2","10x3",
			  "11x2","11x3",

			   //colisor 2
			  "4x12","4x13","4x14","4x15","4x16","4x17",
			  "5x12","5x13","5x14","5x15","5x16","5x17",
			  "6x12","6x13","6x14","6x15","6x16","6x17",
			  "7x12","7x13","7x14","7x15","7x16","7x17",
			  "8x12","8x13","8x14","8x15","8x16","8x17",
			  "9x12","9x13","9x14","9x15","9x16","9x17",

			  //colisor 3
			  "12x12","12x13","12x14","12x15","12x16","12x17",
			  "13x12","13x13","13x14","13x15","13x16","13x17",
			  "14x12","14x13","14x14","14x15","14x16","14x17",
			  "15x12","15x13","15x14","15x15","15x16","15x17",
			  "16x12","16x13","16x14","16x15","16x16","16x17",
			  "17x12","17x13","17x14","17x15","17x16","17x17"];

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
				this.matrix[i][j]=new RegionMember(i*regionSize,j*regionSize,i,j);
				this.matrix[i][j].static=colisors.includes(j+"x"+i);
				this.matrix[i][j].drawMaker();
				this.matrix[i][j].drawMakerMiddle();
			}
		}
	};

	//encontra o ponto mais proximo de um item
	this.findApprox=function(itemX,itemY){
		var bestDistance=this.matrix[0][0].distanceOf(itemX,itemY);
		var bestI=0;
		var bestJ=0;
		for(var i=0;i<this.matrix.length;i++){
			for(var j=0;j<this.matrix[i].length;j++){
				//instancia um RegionMember para o elemento
				var distance=this.matrix[i][j].distanceOf(itemX,itemY);
				if(distance<bestDistance){
					bestDistance=distance;
					bestI=i;
					bestJ=j;
				}
			}
		}
		return this.matrix[bestI][bestJ];
	};
}

//um quadrado de uma região
function RegionMember(x, y,indexX,indexY){
	//posição do pivot
	this.indexX=indexX;
	this.indexY=indexY;
	this.middleX=x+(regionSize/2);
	this.middleY=y+(regionSize/2);
	this.static;	
	this.maker;
	this.cost;
	this.used;

	this.select=function(){
		this.maker.setAttribute("stroke","green");
		this.maker.setAttribute("fill","rgba(0,255,0,0.2)");
	};

	this.selectPatch=function(){
		this.maker.setAttribute("stroke","blue");
		this.maker.setAttribute("fill","rgba(0,0,255,0.2)");
	};

	//desenha o quadrado na tela
	this.drawMaker=function(){
		this.maker= document.createElementNS('http://www.w3.org/2000/svg', "rect");
		this.maker.setAttribute("x",x);
		this.maker.setAttribute("y",y);
		this.maker.setAttribute("width",regionSize);
		this.maker.setAttribute("height",regionSize);
		this.maker.setAttribute("stroke","black");
		this.maker.setAttribute("stroke-width","1");
		this.maker.setAttribute("fill","none");
		gm.game.elements.container.appendChild(this.maker);
	};

	//exibe o custo no quadro
	this.drawCost=function(){
		var costText= document.createElementNS('http://www.w3.org/2000/svg', "text");
		//costText.setAttribute("value",this.cost);
		costText.setAttribute("x",x+3);
		costText.setAttribute("y",y+20);
		costText.setAttribute("font-size","8px");
		var textNode = document.createTextNode(parseInt(this.cost));
  		costText.appendChild(textNode);
		gm.game.elements.container.appendChild(costText);
	};

	//desenha o pivot na tela
	this.drawMakerMiddle=function(){
		var middle= document.createElementNS('http://www.w3.org/2000/svg', "circle");
		middle.setAttribute("cx",this.middleX);
		middle.setAttribute("cy",this.middleY);
		//desenha uma bola maior caso o item seja estatico (colisor)
		if(this.static){
			middle.setAttribute("r",2);
			middle.setAttribute("fill","black");
		}
		else{
			middle.setAttribute("r",1);
			middle.setAttribute("fill","none");
		}
		middle.setAttribute("stroke","black");
		middle.setAttribute("stroke-width","1");
		gm.game.elements.container.appendChild(middle);
	};

	//calcula a distancia entre o item e uma coordenada
	this.distanceOf=function(itemX,itemY){
		//return Math.sqrt(Math.abs((this.middleX-itemX)^2) + Math.abs((this.middleY-itemY)^2));
		return Math.abs((this.middleX-itemX))+Math.abs((this.middleY-itemY))
	};

}