function Region(){

	this.matrix;

	//cria um conjunto de regiões
	this.generate=function(sizeX,sizeY){
		//gera a matriz
		this.matrix=new Array (sizeX);
		for(var i=0;i<this.matrix.length;i++){
			this.matrix[i]=new Array(sizeY);
			for(var j=0;j<this.matrix[i].length;j++){
				//instancia um RegionMember para o elemento
				//this.matrix[i][j]=new RegionMember('<circle cx="'+i+'" cy="'+j+'" r="5" fill="black" />');
			}
		}
	};
}

//um quadrado de uma região
function RegionMember(maker){
	this.maker=maker;

	//document.a
}