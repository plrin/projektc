var myGame = new Kiwi.Game();

var myState = new Kiwi.State('myState');

myState.preload = function(){
    Kiwi.State.prototype.preload.call(this);
    this.addSpriteSheet('characterSprite', 'spaceship.png', 143, 86);
    this.addImage('background', 'spaceground.png');
}

myState.create = function(){
 
    Kiwi.State.prototype.create.call(this);
 
    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['background'], 0, 0);
    this.character = new Kiwi.GameObjects.Sprite(this, this.textures['characterSprite'], 350, 330);
    
    // key settings
    this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.DOWN);
    this.upKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.UP);

    this.character.animation.add('idle', [0], 0.1, false);
    // name, index of pic, animationtime, loop
    this.character.animation.add('moveleft' [1], 0.1, false);
    this.character.animation.add('moveright' [2], 0.1, false);

    //start image
    this.facing = 'middle';

    this.character.animation.play('idle');
    this.addChild(this.background);
    this.addChild(this.character);

}

// moves
myState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    //move down
    if (this.downKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.y < 400) {
            this.character.transform.y += 3;
        }
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
    //move left
    else if (this.leftKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.x > 3) {
            this.character.transform.x -= 3;
        }
        if (this.character.animation.currentAnimation.name != 'moveleft') {
            this.character.animation.switchTo('moveleft');
        }
    }
    //move right
    else if (this.rightKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.x < 600) {
            this.character.transform.x += 3;
        }
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
    //move up
    else if (this.upKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.y > 3) {
            this.character.transform.y -= 3;
        };
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        };
    }
    else {
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
}

myGame.states.addState(myState);
myGame.states.switchState('myState');