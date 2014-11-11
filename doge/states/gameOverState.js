var gameOverState = new Kiwi.State('GameOverState');


gameOverState.create = function() {
 
    Kiwi.State.prototype.create.call(this); 

    //game stage size and bg color
    myGame.stage.resize(800,600);

    this.over = new Kiwi.GameObjects.StaticImage(this, this.textures['over'], 0, 0);
    
    this.addChild(this.over);

    // key settings
    this.resumeKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ENTER);

}

gameOverState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    
    this.over.alpha = 1;


    if (this.resumeKey.isDown) {
        this.timer = this.game.time.clock.start('spawnCat');
        this.timer = this.game.time.clock.start('spawnMex');
        this.timer = this.game.time.clock.start('spawnCloud');
        this.timer = this.game.time.clock.start('bombShoot');
        this.timer = this.game.time.clock.start('catShoot');

        allowSpawnCat = true;
        allowSpawnMex = true;
        allowCatShoot = true;
        allowBombShoot = true;

    	this.game.states.switchState("GameState");
    }


}
