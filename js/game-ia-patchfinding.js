function PatchFinder(current,target){
	this.current=current;
	this.target=target;

	this.currentElement;
	this.targetElement;

	this.start=function(){
		this.targetElement=gm.game.physicsRegion.findApprox(this.target.cx.baseVal.value,this.target.cy.baseVal.value);
	};

	this.findNextPosition=function(){
		this.currentElement=gm.game.physicsRegion.findApprox(this.current.cx.baseVal.value,this.current.cy.baseVal.value);
		var i=this.currentElement.indexX;
		var j=this.currentElement.indexY;

		var regions=gm.game.physicsRegion.matrix;

		var contour=[];

		//superior
		if(i-1>0 && !regions[i-1][j].static){
			regions[i-1][j].cost=10+regions[i-1][j].distanceOf(this.targetElement.indexX,this.targetElement.indexY);
			regions[i-1][j].select();
			contour.push(regions[i-1][j]);
		}
		//inferior
		if(i+1<regions[i].length && !regions[i+1][j].static){
			regions[i+1][j].cost=10+regions[i+1][j].distanceOf(this.targetElement.indexX,this.targetElement.indexY);
			regions[i+1][j].select();
			contour.push(regions[i+1][j])
		}
		//direita
		if(j+1<regions.length && !regions[i][j+1].static){
			regions[i][j+1].cost=10+regions[i][j+1].distanceOf(this.targetElement.indexX,this.targetElement.indexY);
			regions[i][j+1].select();
			contour.push(regions[i][j+1])
		}
		//esquerda
		if(j-1>0 && !regions[i][j-1].static){
			regions[i][j-1].cost=10+regions[i][j-1].distanceOf(this.targetElement.indexX,this.targetElement.indexY);
			regions[i][j-1].select();
			contour.push(regions[i][j-1])
		}
		//superior direita
		if(i-1>0 && j+1<regions.length && !regions[i-1][j+1].static){
			regions[i-1][j+1].cost=10+regions[i-1][j+1].distanceOf(this.targetElement.indexX,this.targetElement.indexY);
			regions[i-1][j+1].select();
			contour.push(regions[i-1][j+1])
		}

		//superior esquerda
		//inferior direita
		//inferior esquerda
		//console.log(contour);

		this.currentElement.selectPatch();

		var lastMinorCost=contour[0].cost;
		var bestElement=contour[0];
		for(var k=0;k<contour.length;k++){
			if(contour[k]<lastMinorCost){
				bestElement=contour[k];
				lastMinorCost=contour[k].cost;
			}
		}
		return new Vector2(bestElement.middleX,bestElement.middleY);

	};

}

function Vector2(x, y) {
	this.x = (x === undefined) ? 0 : x;
	this.y = (y === undefined) ? 0 : y;
}