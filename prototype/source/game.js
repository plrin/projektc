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

myState.preload = function() {
    Kiwi.State.prototype.preload.call(this);
    this.addSpriteSheet('characterSprite', 'images/spaceship.png', 143, 86);
    this.addSpriteSheet('foeSprite', 'images/foeship.png', 91, 86);
    this.addImage('background', 'images/spaceground.png');
    this.addImage('cannonBall', 'images/cannonBall.png');
}

myState.create = function() {
 
    Kiwi.State.prototype.create.call(this);    

    //game stage size and bg color
    myGame.stage.resize(800,600);
    myGame.stage.color = '273788';
 
    // loading game elements
    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['background'], 0, 0);
    this.character = new MySpaceship(this, 200,200);
    this.mouse = this.game.input.mouse;

    // key settings
    this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.DOWN);
    this.upKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.UP);
    this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Q);

    // animations 
    // name, index of pic, animationtime, loop
    this.character.animation.add('idle', [0], 0.1, false);
    this.character.animation.add('moveleft' [1], 0.1, false);
    this.character.animation.add('moveright' [2], 0.1, false);

    // timer for spawning foeships
    this.timer = this.game.time.clock.createTimer('spawnFoe', 5, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnFoe, this);

    // Groups
    this.bulletGroup = new Kiwi.Group(this);
    this.foeGroup = new Kiwi.Group(this);

    this.character.animation.play('idle');
    this.addChild(this.background);
    this.addChild(this.character);
    this.addChild(this.bulletGroup);
    this.addChild(this.foeGroup);

    this.game.time.clock.units = 1000;
}

// moves
myState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    this.mouseControl();
    this.checkCollisions();
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



// function for shooting a bullet
// creating a new object from bullet in a group
myState.shoot = function() {
    if (this.shootKey.isDown) {
        allowShoot = false;
        this.bulletGroup.addChild(new Bullet(this, this.character.x + 60, this.character.y - 10, 0,  -100 * this.character.scaleY));
        this.timer = this.game.time.clock.createTimer('shoot', .5, 1, true);
        this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.enableShoot, this);
    }
}

myState.spawnFoe = function() {
    var w = myGame.stage.width;
    var r = Math.floor(Math.random() * w);
    //var r = 100;
    this.foeGroup.addChild(new FoeSpaceship(this, r, 0, 0, 10));
}


myState.enableShoot = function() {
    allowShoot = true;
}

myState.checkCollisions = function() {
    var foes = this.foeGroup.members;
    var bullets = this.bulletGroup.members;
    for (var i = 0; i < foes.length; i++) {
        for (var j = 0; j < bullets.length; j++) {
            if (foes[i].physics.overlaps(bullets[j])) {
                foes[i].destroy();
                bullets[j].destroy();
                break;
            }
        }  
    }
}

var Bullet = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['cannonBall'], x, y, false);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;

    Bullet.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.y > myGame.stage.height || this.y < 0 ) {
            this.destroy();
        }
    }

}
Kiwi.extend(Bullet,Kiwi.GameObjects.Sprite);

var MySpaceship = function(state, x, y) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['characterSprite'], x, y);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

    MySpaceship.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
    }

}
Kiwi.extend(MySpaceship, Kiwi.GameObjects.Sprite);

var FoeSpaceship = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['foeSprite'], x ,y, false);
    
    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;

    FoeSpaceship.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.y > myGame.stage.height -100) {
            this.destroy();
        }
    }
}
Kiwi.extend(FoeSpaceship, Kiwi.GameObjects.Sprite);

myGame.states.addState(myState);
myGame.states.switchState('myState');