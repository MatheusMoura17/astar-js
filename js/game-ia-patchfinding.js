function PatchFinder(current,target){
	this.current=current;
	this.target=target;

	this.currentElement;
	this.targetElement;

	this.start=function(){
		this.targetElement=gm.game.physicsRegion.findApprox(this.target.cx.baseVal.value,this.target.cy.baseVal.value);
		this.currentElement=gm.game.physicsRegion.findApprox(this.current.cx.baseVal.value,this.current.cy.baseVal.value);
	};

	this.findNextPosition=function(){
		var i=this.currentElement.indexX;
		var j=this.currentElement.indexY;

		var regions=gm.game.physicsRegion.matrix;

		var contour=[];

		//for(var ii=0;ii<regions.length;ii++){
		//	for(var jj=0;jj<regions[ii].length;jj++){
		//		regions[ii][jj].cost=10+this.targetElement.distanceOf(regions[ii][jj].middleX,regions[ii][jj].middleY);
		//		regions[ii][jj].drawCost();
		//	}
		//}

		//superior
		if(j-1>=0 && !regions[i][j-1].static && !regions[i][j-1].used){
			regions[i][j-1].cost=10+this.targetElement.distanceOf(regions[i][j-1].middleX,regions[i][j-1].middleY);
			regions[i][j-1].select();
			regions[i][j-1].drawCost();
			contour.push(regions[i][j-1]);
		}
		//inferior
		if(j+1<regions[i].length && !regions[i][j+1].static && !regions[i][j+1].used){
			regions[i][j+1].cost=10+this.targetElement.distanceOf(regions[i][j+1].middleX,regions[i][j+1].middleY);
			regions[i][j+1].select();
			regions[i][j+1].drawCost();
			contour.push(regions[i][j+1])
		}
		//direita
		if(i+1<regions.length && !regions[i+1][j].static && !regions[i+1][j].used){
			regions[i+1][j].cost=10+this.targetElement.distanceOf(regions[i+1][j].middleX,regions[i+1][j].middleY);
			regions[i+1][j].select();
			regions[i+1][j].drawCost();
			contour.push(regions[i+1][j])
		}
		//esquerda
		if(i-1>0 && !regions[i-1][j].static && !regions[i-1][j].used){
			regions[i-1][j].cost=10+this.targetElement.distanceOf(regions[i-1][j].middleX,regions[i-1][j].middleY);
			regions[i-1][j].select();
			regions[i-1][j].drawCost();
			contour.push(regions[i-1][j])
		}
		//superior direita
		//if(i-1>0 && j+1<regions.length && !regions[i-1][j+1].static){
		//	regions[i-1][j+1].cost=14+regions[i-1][j+1].distanceOf(this.targetElement.indexX,this.targetElement.indexY);
		//	regions[i-1][j+1].select();
		//	regions[i-1][j+1].drawCost();
		//	contour.push(regions[i-1][j+1])
		//}

		//superior esquerda
		//inferior direita
		//inferior esquerda
		//console.log(contour);

		this.currentElement.selectPatch();

		var lastMinorCost=contour[0].cost;
		var bestElement=contour[0];
		for(var k=0;k<contour.length;k++){
			if(contour[k].cost<lastMinorCost){
				bestElement=contour[k];
				lastMinorCost=contour[k].cost;
			}
		}
		this.currentElement.used=true;
		this.currentElement=bestElement;
		return new Vector2(bestElement.middleX,bestElement.middleY);

	};

}

function Vector2(x, y) {
	this.x = (x === undefined) ? 0 : x;
	this.y = (y === undefined) ? 0 : y;
}