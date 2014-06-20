var pauseState = new Kiwi.State('PauseState');

pauseState.create = function() {
 
    Kiwi.State.prototype.create.call(this); 

    //game stage size and bg color
    myGame.stage.resize(800,600);

    this.pauseGame = new Kiwi.GameObjects.StaticImage(this, this.textures['pause'], 0, 0);
    
    this.addChild(this.pauseGame);

    // key settings
    this.pauseKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ENTER);

}

pauseState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    
    this.pauseGame.alpha = 1;


    if (this.pauseKey.isDown) {
        this.timer = this.game.time.clock.resume('spawnCat');
        this.timer = this.game.time.clock.resume('spawnMex');
        this.timer = this.game.time.clock.resume('spawnCloud');
        this.timer = this.game.time.clock.resume('bombShoot');
        this.timer = this.game.time.clock.resume('catShoot');

    	this.game.states.switchState("GameState");
    }


}
