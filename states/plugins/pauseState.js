var pauseState = new Kiwi.State('pauseState');


pauseState.create = function() {
 
    Kiwi.State.prototype.create.call(this); 

    //game stage size and bg color
    myGame.stage.resize(800,600);

    this.pause = new Kiwi.GameObjects.StaticImage(this, this.textures['pause'], 0, 0);
    
    this.addChild(this.pause);

    // key settings
    this.pauseKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ENTER);

}

pauseState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    
    this.pause.alpha = 1;


    if (this.pauseKey.isDown) {
    	this.game.states.switchState("myState");
    }


}
