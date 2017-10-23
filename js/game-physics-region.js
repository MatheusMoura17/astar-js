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
				this.matrix[i][j]=new RegionMember(i*regionSize,j*regionSize);
				this.matrix[i][j].static=colisors.includes(j+"x"+i);
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
	this.static;

	

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
		//desenha uma bola maior caso o item seja estatico (colisor)
		if(this.static){
			middle.setAttribute("r",2);
			middle.setAttribute("fill","red");
		}
		else{
			middle.setAttribute("r",1);
			middle.setAttribute("fill","none");
		}
		middle.setAttribute("stroke","red");
		middle.setAttribute("stroke-width","1");
		gm.game.elements.container.appendChild(middle);
	};


}