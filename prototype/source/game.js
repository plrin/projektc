/*
    9.4.14 created by Tan
    This is a prototype of our game using Kiwi.js engine

*/

// create new game object
var myGame = new Kiwi.Game();
// create new state, contain logic for animation, controlling update
var myState = new Kiwi.State('myState');

//global variables
allowShoot = true;

// load resources, give resource a reference

myState.preload = function(){
    Kiwi.State.prototype.preload.call(this);
    this.addSpriteSheet('characterSprite', 'images/spaceship.png', 143, 86);
    this.addImage('background', 'images/spaceground.png');
    this.addImage('cannonBall', 'images/cannonBall.png');
}

myState.create = function(){
 
    Kiwi.State.prototype.create.call(this);
    // initialize mouse
    this.mouse = this.game.input.mouse;

    //game stage size and bg color
    myGame.stage.resize(700,500);
    myGame.stage.color = '273788';
 
    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['background'], 0, 0);
    this.character = new Kiwi.GameObjects.Sprite(this, this.textures['characterSprite'], 200,200);
    
    // key settings
    this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.DOWN);
    this.upKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.UP);
    this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Q);

    this.character.animation.add('idle', [0], 0.1, false);
    // name, index of pic, animationtime, loop
    this.character.animation.add('moveleft' [1], 0.1, false);
    this.character.animation.add('moveright' [2], 0.1, false);

    //start image
    this.facing = 'middle';

    //adding groups
    this.bulletGroup = new Kiwi.Group(this);


    this.character.animation.play('idle');
    this.addChild(this.background);
    this.addChild(this.character);
    this.addChild(this.bulletGroup);

    this.game.time.clock.units = 250;
}

// moves
myState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    //this.keyControl();
    // moving character sprit by mouse postion
    this.mouseControl();
    //this.shoot();

    if ((this.shootKey.isDown) && (allowShoot == true)) {
        this.shoot();
    }

}


myState.mouseControl = function() {
    this.xAxis = this.mouse.x - 60;
    this.yAxis = this.mouse.y - 40;
    this.character.transform.x = this.xAxis;
    this.character.transform.y = this.yAxis;
}

myState.keyControl = function() {
    //move down
    if (this.downKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.y < 330) {
            this.character.transform.y += 10;
        }
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
    //move left
    else if (this.leftKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.x > 3) {
            this.character.transform.x -= 10;
        }
        if (this.character.animation.currentAnimation.name != 'moveleft') {
            this.character.animation.switchTo('moveleft');
        }
    }
    //move right
    else if (this.rightKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.x < 500) {
            this.character.transform.x += 10;
        }
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
    //move up
    else if (this.upKey.isDown) {
        this.facing = 'idle';
        if (this.character.transform.y > 3) {
            this.character.transform.y -= 10;
        };
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
    else if(this.mouse.isDown) {
        this.facing = 'idle';
        if (this.character.transform.y > 3) {
            this.character.transform.y -= 10;
        };
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
    else {
        if (this.character.animation.currentAnimation.name != 'idle') {
            this.character.animation.switchTo('idle');
        }
    }
}

// function for shooting a bullet
// creating a new object from bullet in a group
myState.shoot = function() {
    if (this.shootKey.isDown) {
        allowShoot = false;
        this.bulletGroup.addChild(new Bullet(this, this.character.x + 60, this.character.y - 10, 0,  -100 * this.character.scaleY));
        this.timer = this.game.time.clock.createTimer('shoot', 0.33, 1, true);
        this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.enableShoot, this);
    }
}

myState.enableShoot = function(){
    allowShoot = true;
}


var Bullet = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['cannonBall'], x, y, false);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;
    Bullet.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.y > myGame.stage.width || this.y < 0 ) {
            this.destroy();
        }
    }

}
Kiwi.extend(Bullet,Kiwi.GameObjects.Sprite);


myGame.states.addState(myState);
myGame.states.switchState('myState');