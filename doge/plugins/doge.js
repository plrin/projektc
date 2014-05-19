/*
 * DOGE VERSION
 */

var myGame = new Kiwi.Game("dogeContainer","myGame",myState,{plugins:["LEAPController"]});
// create new state, contain logic for animation, controlling update
var myState = new Kiwi.State('myState');
// Leap Plugin

//global variables
allowShoot = true;

// load resources, give resource a reference

myState.preload = function() {
    Kiwi.State.prototype.preload.call(this);
    this.addSpriteSheet('doge', 'assets/doge.png', 80, 97);
    this.addSpriteSheet('nyan', 'assets/nyan.png', 91, 57);
    this.addSpriteSheet('mex', 'assets/mexcat.png', 100, 64);
    this.addImage('laser', 'assets/laser.png');
    this.addImage('burger', 'assets/burger.png');
    this.addImage('cloud', 'assets/cloud.png');
<<<<<<< HEAD
    this.addImage('boss', 'assets/BossCat.png');
    this.addImage('catLaser', 'assets/laser2.png');
=======
    this.addImage('cake', 'assets/cake.png');
>>>>>>> FETCH_HEAD
}

myState.create = function() {
 
    Kiwi.State.prototype.create.call(this); 

    //game stage size and bg color
    myGame.stage.resize(800,600);
    myGame.stage.color = '05ffd9';
 
    // loading game elements
    this.character = new Doge(this, 200,200);
    this.mouse = this.game.input.mouse;
    // leap controller keep track of all movments
    this.control = Kiwi.Plugins.LEAPController.createController();

    // key settings
    this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Q);

    
    // timer for spawning nyan cat
    this.timer = this.game.time.clock.createTimer('spawnCat', 3, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnCat, this);
    // timer for spawning mexican cat
    this.timer = this.game.time.clock.createTimer('spawnMex', 5, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnMex, this);
    // timer for cat shoot
    this.timer = this.game.time.clock.createTimer('catShoot', 4, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.catShoot, this);
    // timer for mexican cat bombing 
    this.timer = this.game.time.clock.createTimer('bombShoot', 5, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.bombShoot, this);
    // timer for spawning clouds
    this.timer = this.game.time.clock.createTimer('spawnCloud', 15, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnCloud, this);
    // timer for spawning Boss
    this.timer = this.game.time.clock.createTimer('spawnBoss', 10, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnBossCat, this);
    

    // Groups
    this.laserGroup = new Kiwi.Group(this);
    this.burgerGroup = new Kiwi.Group(this);
    this.catGroup = new Kiwi.Group(this);
    this.mexGroup = new Kiwi.Group(this);
    this.cakeGroup = new Kiwi.Group(this);
    this.cloudGroup = new Kiwi.Group(this);
    this.bossCatGroup = new Kiwi.Group(this);
    
    this.addChild(this.cloudGroup);
    this.addChild(this.laserGroup);
    this.addChild(this.burgerGroup);
    this.addChild(this.cakeGroup);
    this.addChild(this.catGroup);
<<<<<<< HEAD
    this.addChild(this.bossCatGroup);
=======
    this.addChild(this.mexGroup);
>>>>>>> FETCH_HEAD
    this.addChild(this.character);


    this.game.time.clock.units = 1000;

    this.score = 0;

    //Creating HUD Widgets

    this.scoreBoard = new Kiwi.HUD.Widget.TextField(this.game, "Your score: 0", 10, 30);
    this.scoreBoard.style.fontFamily = "helvetica";

    //Adding HUD elements to defaultHUD
    this.game.huds.defaultHUD.addWidget(this.scoreBoard);
}

// moves
myState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);

    // Leap Control
    if (this.control.controllerConnected) {
        this.leapControl();
    }
    else {
        //mouse control
        this.mouseControl();
    }

    this.checkCollisions();
    //this.shoot();

    if ((this.shootKey.isDown) && (allowShoot == true)) {
        this.shoot();
    }

}

myState.leapControl = function() {
    this.control.update();
    this.character.x = (this.control.hands[0].posX * 4) + 400;
    this.character.y = ((-1 * this.control.hands[0].posY) * 4) + 800;

}

myState.mouseControl = function() {
    this.xAxis = this.mouse.x - 35;
    this.yAxis = this.mouse.y - 60;
    this.character.transform.x = this.xAxis;
    this.character.transform.y = this.yAxis;
}


// function for shooting a bullet
// creating a new object from bullet in a group
myState.shoot = function() {
    if (this.shootKey.isDown) {
        allowShoot = false;
        this.laserGroup.addChild(new Laser(this, this.character.x + 33, this.character.y + 37, 100, 0));
        this.timer = this.game.time.clock.createTimer('shoot', 0.5, 1, true);
        this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.enableShoot, this);
    }
}

myState.spawnCat = function() {
    var h = Math.floor(Math.random() * 539);
    this.catGroup.addChild(new Cat(this, myGame.stage.width, h, -10, 0));
}

myState.spawnMex = function() {
    this.mexGroup.addChild(new Mex(this, myGame.stage.width, 50, -10, 0));
}

myState.spawnBossCat = function() {
    this.bossCatGroup.addChild(new BossCat(this, (myGame.stage.width * 0.5) - 100, myGame.stage.height, 0, -10));
    //create Timer to stop Boss from moving
    this.timer = this.game.time.clock.createTimer('stopBoss', 3, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.stopBossCat, this);

}

myState.spawnCloud = function() {
    var r = 100 - Math.floor(Math.random() * 100);
    this.cloudGroup.addChild(new Cloud(this, myGame.stage.width, r, -5, 0));
}

myState.stopBossCat = function(){
    var boss = this.bossCatGroup.members;
    var i = 0;
    boss[i].physics.velocity.y = 0;
}


myState.enableShoot = function() {
    allowShoot = true;
}

myState.checkCollisions = function() {
    var cats = this.catGroup.members;
    var lasers = this.laserGroup.members;
    var burgers = this.burgerGroup.members;
    var boss = this.bossCatGroup.members;

    //Laser Collisions
    //Cats
    for (var i = 0; i < cats.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (cats[i].physics.overlaps(lasers[j])) {
                cats[i].destroy();
                lasers[j].destroy();
                this.score += 100;
                this.scoreBoard.text = "Your score: " + this.score;
                break;
            }
        }  
    }
    //Boss
    for (var i = 0; i < boss.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (boss[i].physics.overlaps(lasers[j])) {
                if (boss[i].bossLife == 0){
                    boss[i].destroy();
                } 
                else if (boss[i].bossLife >= 1){
                    boss[i].bossLife -= 1;
                }
                lasers[j].destroy();
                this.score += 10;
                this.scoreBoard.text = "Your score: " + this.score;
                break;
            }
        }  
    }

    for (var i = 0; i < cats.length; i++) {
        if (cats[i].physics.overlaps(this.character)) {
            cats[i].destroy();
            //this.character.destroy();
        }  
    }
/*
    for (var i = 0; i < burgers.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (burgers[i].physics.overlaps(lasers[j])) {
                burgers[i].destroy();
                lasers[j].destroy();
            }
        }
    }
*/
}

myState.catShoot = function() {
    var cats = this.catGroup.members;
    var numberCats = cats.length;
    var i = Math.floor(Math.random() * numberCats) - 1;
    // centerPoint is the position of the cat, start point of bullet
    var centerPoint = new Kiwi.Geom.Point(cats[i+1].x, cats[i+1].y);
    // current position of the mouse/character
    var characterPoint = new Kiwi.Geom.Point(this.character.x, this.character.y);
    // w = angle from cat to mouse
    var w = centerPoint.angleTo(characterPoint);
    this.burgerGroup.addChild(new Burger(this, cats[i+1].x, cats[i+1].y, w));

}

myState.bombShoot = function() {
    var mexs = this.mexGroup.members;
    var numberMexs = mexs.length;
    var i = Math.floor(Math.random() * numberMexs) - 1;
    
    this.cakeGroup.addChild(new Cake(this, mexs[i+1].x, mexs[i+1].y, -10, 10));
}


var Burger = function(state, x, y, angle) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['burger'], x, y, false);

    this.angle = angle + (Math.PI / 2);
    this.speed = 6;
    this.rotation = -(angle);

    Burger.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        
        this.x += -1 * (Math.cos(this.angle) * this.speed);
        this.y += (Math.sin(this.angle) * this.speed);
        
        if (this.x > myGame.stage.width || this.x < 0 || this.y > myGame.stage.height || this.y < 0) {
            this.destroy();
        }
    }
}
Kiwi.extend(Burger, Kiwi.GameObjects.Sprite);

var Cake = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['cake'], x, y, false);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;

    Cake.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.y > 500) {
            this.destroy();
        }
    }
}
Kiwi.extend(Cake, Kiwi.GameObjects.Sprite);


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

        if (this.x < -90) {
            this.destroy();
        }
    }
}
Kiwi.extend(Cat, Kiwi.GameObjects.Sprite);

<<<<<<< HEAD
var BossCat = function(state, x, y, xVelo, yVelo, bossLife) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['boss'], x ,y, false);
=======
var Mex = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['mex'], x ,y, false);
>>>>>>> FETCH_HEAD
    
    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;
<<<<<<< HEAD
    this.bossLife = 10;

    BossCat.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.x < 100) {
=======

    Mex.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.x < -90) {
>>>>>>> FETCH_HEAD
            this.destroy();
        }
    }
}
<<<<<<< HEAD
Kiwi.extend(BossCat, Kiwi.GameObjects.Sprite);
=======
Kiwi.extend(Mex, Kiwi.GameObjects.Sprite);
>>>>>>> FETCH_HEAD

var Cloud = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['cloud'], x ,y, false);
    
    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;

    Cloud.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.x < -100) {
            this.destroy();
        }
    }
}
Kiwi.extend(Cloud, Kiwi.GameObjects.Sprite);

myGame.states.addState(myState);
myGame.states.switchState('myState');