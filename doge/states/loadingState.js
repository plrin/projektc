var loadingState = new Kiwi.State('LoadingState');
 
loadingState.preload = function(){
 
    Kiwi.State.prototype.preload.call(this);
    this.addSpriteSheet('doge', 'assets/doge.png', 80, 97);
    this.addSpriteSheet('nyan', 'assets/nyan.png', 91, 57);
    this.addSpriteSheet('mex', 'assets/mexcat.png', 100, 64);
    this.addImage('laser', 'assets/laser.png');
    this.addImage('pause', 'assets/pause.png');
    this.addImage('over', 'assets/gameover.png');
    this.addImage('pause', 'assets/pause.png');

    // these assets will be replaced 
    this.addImage('burger', 'assets/burger.png');
    this.addImage('cloud', 'assets/cloud.png');
    this.addImage('cake', 'assets/cake.png');

}
 
loadingState.create = function(){
    Kiwi.State.prototype.create.call(this);

    //Switching to main game state
    this.game.states.switchState("GameState");
}