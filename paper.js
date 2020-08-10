class Paperball{
    constructor(x,y,diameter){
        var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2    }
    
    this.body = Bodies.circle(x,y,diameter);
    World.add (world,this.body);

}
}