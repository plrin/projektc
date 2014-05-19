var gameoverState = new Kiwi.State('gameoverState');


gameoverState.create = function() {
 
    Kiwi.State.prototype.create.call(this); 

    //game stage size and bg color
    myGame.stage.resize(800,600);

    this.over = new Kiwi.GameObjects.StaticImage(this, this.textures['over'], 0, 0);
    
    this.addChild(this.over);

    // key settings
    this.pauseKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ENTER);

}

gameoverState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    
    this.over.alpha = 1;


    if (this.pauseKey.isDown) {
        this.timer = this.game.time.clock.start('spawnCat');
        this.timer = this.game.time.clock.start('spawnMex');
        this.timer = this.game.time.clock.start('spawnCloud');
        this.timer = this.game.time.clock.start('bombShoot');
        this.timer = this.game.time.clock.start('catShoot');

    	this.game.states.switchState("myState");
    }


}
