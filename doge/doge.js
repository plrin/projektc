/*
 * DOGE VERSION
 */

var myGame = new Kiwi.Game();
// create new state, contain logic for animation, controlling update
var myState = new Kiwi.State('myState');

//global variables
allowShoot = true;

// load resources, give resource a reference

myState.preload = function() {
    Kiwi.State.prototype.preload.call(this);
    this.addSpriteSheet('doge', 'doge.png', 110, 100);
    this.addSpriteSheet('nyan', 'nyan.png', 100, 61);
    this.addImage('laser', 'laser.png');
}

myState.create = function() {
 
    Kiwi.State.prototype.create.call(this);    

    //game stage size and bg color
    myGame.stage.resize(800,600);
    myGame.stage.color = '05ffd9';
 
    // loading game elements
    this.character = new Doge(this, 200,200);
    this.mouse = this.game.input.mouse;

    // key settings
    this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.RIGHT);
    this.downKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.DOWN);
    this.upKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.UP);
    this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Q);

    
    // timer for spawning foeships
    this.timer = this.game.time.clock.createTimer('spawnCat', 1, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnCat, this);

    // Groups
    this.laserGroup = new Kiwi.Group(this);
    this.catGroup = new Kiwi.Group(this);

    this.addChild(this.character);
    this.addChild(this.laserGroup);
    this.addChild(this.catGroup);

    this.game.time.clock.units = 250;
}

// moves
myState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);
    //this.keyControl();
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
        this.laserGroup.addChild(new Laser(this, this.character.x + 33, this.character.y + 37, 100, 0));
        this.timer = this.game.time.clock.createTimer('shoot', 0.33, 1, true);
        this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.enableShoot, this);
    }
}

myState.spawnCat = function() {
    var w = myGame.stage.height;
    var r = Math.floor(Math.random() * w);
    //var r = 100;
    this.catGroup.addChild(new Cat(this, myGame.stage.width, r, -10, 0));
}


myState.enableShoot = function() {
    allowShoot = true;
}

myState.checkCollisions = function() {
    var cats = this.catGroup.members;
    var lasers = this.laserGroup.members;
    for (var i = 0; i < cats.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (cats[i].physics.overlaps(lasers[j])) {
                cats[i].destroy();
                lasers[j].destroy();
                break;
            }
        }  
    }
}

var Laser = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['laser'], x, y, false);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;

    Laser.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.x > myGame.stage.width || this.x < 0 ) {
            this.destroy();
        }
    }

}
Kiwi.extend(Laser, Kiwi.GameObjects.Sprite);

var Doge = function(state, x, y) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['doge'], x, y);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

    Doge.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
    }

}
Kiwi.extend(Doge, Kiwi.GameObjects.Sprite);

var Cat = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['nyan'], x ,y, false);
    
    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;

    Cat.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.x < 100) {
            this.destroy();
        }
    }
}
Kiwi.extend(Cat, Kiwi.GameObjects.Sprite);

myGame.states.addState(myState);
myGame.states.switchState('myState');