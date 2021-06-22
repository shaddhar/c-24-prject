class Iron{
	constructor(x,y)
	{
	    var options = {
        restitution:0.1,
		friction:5,
		density:3
		}
		this.x=x;
		this.y=y;
		this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(this.x, this.y, 50,50, options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			var angle=this.body.angle;
            push()
			translate(pos.x,pos.y);
		    rotate(angle);
            rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("grey");
             rect(0,0,this.width,this.height);   
			
			
			pop()
	}

}