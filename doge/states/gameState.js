var gameState = new Kiwi.State('GameState');

//global variables
allowShoot = true;
allowBossShoot = false;
allowSpawnCat = true;
allowSpawnMex = true;
allowCatShoot = true;
allowBombShoot = true;
bossExist = false;
gameSpeed = 0.8;


gameState.create = function() {
 
    Kiwi.State.prototype.create.call(this); 

    //game stage size and bg color
    myGame.stage.resize(800,600);
    myGame.stage.color = '05ffd9';
 
    // create game elements
    this.character = new Doge(this, 200,200);
    this.mouse = this.game.input.mouse;
    // leap controller keep track of all movments
    this.control = Kiwi.Plugins.LEAPController.createController();

    // key settings
    this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Q);
    this.pauseKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ENTER);
    
    // timer for spawning clouds
    this.timer = this.game.time.clock.createTimer('spawnCloud', 10, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnCloud, this);
    // timer for spawning Boss
    this.timer = this.game.time.clock.createTimer('spawnBoss', 30, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnBossCat, this);

    // Groups
    this.laserGroup = new Kiwi.Group(this);
    this.burgerGroup = new Kiwi.Group(this);
    this.catGroup = new Kiwi.Group(this);
    this.mexGroup = new Kiwi.Group(this);
    this.cakeGroup = new Kiwi.Group(this);
    this.cloudGroup = new Kiwi.Group(this);
    this.bossCatGroup = new Kiwi.Group(this);
    this.bossLaserGroup = new Kiwi.Group(this);
    
    this.addChild(this.cloudGroup);
    this.addChild(this.laserGroup);
    this.addChild(this.burgerGroup);
    this.addChild(this.cakeGroup);
    this.addChild(this.catGroup);
    this.addChild(this.mexGroup);
    this.addChild(this.character);
    this.addChild(this.bossCatGroup);
    this.addChild(this.bossLaserGroup);

    // setting time clock to 1 second
    this.game.time.clock.units = 1000;

    this.score = 0;

    //Creating HUD Widgets

    this.scoreBoard = new Kiwi.HUD.Widget.TextField(this.game, "Your score:", 10, 30);
    this.scoreBoard.style.fontFamily = "helvetica";

    //Adding HUD elements to defaultHUD
    this.game.huds.defaultHUD.addWidget(this.scoreBoard);
}

// function of the game engine
gameState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);

    // Leap Control and mouse control
    if (this.control.controllerConnected) {
        this.leapControl();
    }
    else {
        this.mouseControl();
    }

    // test without leap motion
    // this.mouseControl();

    this.checkCollisions();

    // condition for shooting
    if ((this.shootKey.isDown) && (allowShoot == true)) {
        this.shoot();
    }
    // condition for BossShooting
    if (allowBossShoot == true) {
        this.bossShoot();
    }
    this.scoreBoard.text = "Score: " + this.score;
    // condition for Cat spawning
    if (allowSpawnCat == true) {
        allowSpawnCat = false;
        this.spawnCat();
    }
    // condition for Mex spawning
    if (allowSpawnMex == true) {
        allowSpawnMex = false;
        this.spawnMex();
    }
    // condition for Cat shooting
    if (allowCatShoot == true) {
        allowCatShoot = false;
        this.catShoot();
    }
    // condition for Mex shooting
    if (allowBombShoot == true) {
        allowBombShoot = false;
        this.bombShoot();
    }
    // condition for pausing the game
    //not supported correctly in this version of engine
    // if (this.pauseKey.isDown) {
    //     gameSpeed = 1;
    //     this.timer = this.game.time.clock.pause('spawnCat');
    //     this.timer = this.game.time.clock.pause('spawnMex');
    //     this.timer = this.game.time.clock.pause('spawnCloud');
    //     this.timer = this.game.time.clock.pause('bombShoot');
    //     this.timer = this.game.time.clock.pause('catShoot');

    //     this.game.states.switchState("PauseState");
    // }

   
}

/***************************
  functions starting here
***************************/

gameState.leapControl = function() {
    this.control.update();
    this.character.x = (this.control.hands[0].posX * 4) + 400;
    this.character.y = ((-1 * this.control.hands[0].posY) * 4) + 800;

}

gameState.mouseControl = function() {
    this.xAxis = this.mouse.x - 35;
    this.yAxis = this.mouse.y - 60;
    this.character.transform.x = this.xAxis;
    this.character.transform.y = this.yAxis;
}


// function for shooting a bullet
// creating a new object from bullet in a group
gameState.shoot = function() {
    if (this.shootKey.isDown) {
        allowShoot = false;
        this.laserGroup.addChild(new Laser(this, this.character.x + 33, this.character.y + 37, (100 * gameSpeed), 0));
        this.timer = this.game.time.clock.createTimer('shoot', (0.5 - (0.05 * gameSpeed)), 1, true);
        this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.enableShoot, this);
    }
}

gameState.spawnCat = function() {
    var h = Math.floor(Math.random() * 539);
    this.catGroup.addChild(new Cat(this, myGame.stage.width, h, (-10 * gameSpeed), 0));
    // timer for spawning nyan cat
    this.timer = this.game.time.clock.createTimer('spawnCat', (3 - (0.3 * (2 * gameSpeed))), 1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP,this.enableSpawnCat, this);
}

gameState.spawnMex = function() {
    this.mexGroup.addChild(new Mex(this, myGame.stage.width, 50, (-10 * gameSpeed), 0));
    // timer for spawning mexican cat
    this.timer = this.game.time.clock.createTimer('spawnMex', (5 - (0.5 * (2 * gameSpeed))), 1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP,this.enableSpawnMex, this);
}

gameState.spawnBossCat = function() {
    this.bossCatGroup.addChild(new BossCat(this, (myGame.stage.width * 0.5) - 100, myGame.stage.height, 0, -10));
    //create Timer to stop Boss from moving
    this.timer = this.game.time.clock.createTimer('stopBoss', 3, 1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP,this.stopBossCat, this);
    allowBossShoot = true;
    bossExist = true;
}

gameState.stopBossCat = function(){
    var boss = this.bossCatGroup.members;
        for (var i = 0; i < boss.length; i++){
            boss[i].physics.velocity.y = 0;
    }
}

gameState.spawnCloud = function() {
    var r = 100 - Math.floor(Math.random() * 100);
    this.cloudGroup.addChild(new Cloud(this, myGame.stage.width, r, -5 * gameSpeed, 0));
}

/******************************************
*** Condition functions for timer events ***
******************************************/

gameState.enableShoot = function() {
    allowShoot = true;
}
gameState.enableBossShoot = function() {
    allowBossShoot = true;
}
gameState.enableCatShoot = function() {
    allowCatShoot = true;
}
gameState.enableBombShoot = function() {
    allowBombShoot = true;
}
gameState.enableSpawnCat = function() {
    allowSpawnCat = true;
}
gameState.enableSpawnMex = function() {
    allowSpawnMex = true;
}

//Checking all Collisions
gameState.checkCollisions = function() {
    var cats = this.catGroup.members;
    var lasers = this.laserGroup.members;
    var burgers = this.burgerGroup.members;
    var bossLasers = this.bossLaserGroup.members;
    var mexCats = this.mexGroup.members;
    var cakes = this.cakeGroup.members;
    var boss = this.bossCatGroup.members;

    // collision between nyan cat and doge
    for (var i = 0; i < cats.length; i++) {
        if (cats[i].physics.overlaps(this.character)) {
			this.dead();
        }  
    }

    // collision between boss and doge
    for (var i = 0; i < boss.length; i++) {
        if(boss[i] > 0){
            if (boss[i].physics.overlaps(this.character)) {
                this.dead();
            }  
        }
    }

    // collision between bossLaser and doge
    for (var i = 0; i < bossLasers.length; i++) {
        if (bossLasers[i].physics.overlaps(this.character)) {
            this.dead();
        }  
    }

    //Collision between Boss and laser + life calculation
    for (var i = 0; i < boss.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (boss[i].physics.overlaps(lasers[j])) {
                boss[i].bossLife -= 1;
                lasers[j].destroy();
                break;
            }
        }  
    }

    // collision between mex cat and doge
    for (var i = 0; i < mexCats.length; i++) {
        if (mexCats[i].physics.overlaps(this.character)) {
            this.dead();
        }  
    }

    // collision between cake and doge
    for (var i = 0; i < cakes.length; i++) {
        if (cakes[i].physics.overlaps(this.character)) {
            this.dead();
        }  
    }

    // collision between burgers and doge
    for (var i = 0; i < burgers.length; i++) {
        if (burgers[i].physics.overlaps(this.character)) {
            this.dead();
        }  
    }

    // collision between burgers and lasers
    for (var i = 0; i < burgers.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (lasers[j].physics.overlaps(burgers[i])) {
                burgers[i].destroy();
                lasers[j].destroy();
            }
        }
    }

    // collision between cakes and lasers
    for (var i = 0; i < cakes.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (lasers[j].physics.overlaps(cakes[i])) {
                cakes[i].destroy();
                lasers[j].destroy();
            }
        }
    }

    // collisions between nyan cat and laser
   for (var i = 0; i < cats.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (cats[i].physics.overlaps(lasers[j])) {
                cats[i].destroy();
                lasers[j].destroy();
                this.score += 10;
                break;
            }
        }  
    }

    // collisions between mex cat and laser
   for (var i = 0; i < mexCats.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (mexCats[i].physics.overlaps(lasers[j])) {
                mexCats[i].destroy();
                lasers[j].destroy();
                this.score += 10;
                break;
            }
        }  
    }


}
// collision function ends here

gameState.dead = function() {
    this.timer = this.game.time.clock.stop('spawnCat');
    this.timer = this.game.time.clock.stop('spawnMex');
    this.timer = this.game.time.clock.stop('spawnCloud');
    this.timer = this.game.time.clock.stop('bombShoot');
    this.timer = this.game.time.clock.stop('catShoot');

    this.game.states.switchState("GameOverState");
}
//Nyan Cat attack
gameState.catShoot = function() {
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
    // timer for nyan cat shoot
    this.timer = this.game.time.clock.createTimer('catShoot', (3 - (0.3 * (2 * gameSpeed))), 1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP,this.enableCatShoot, this);
}
//Mex Cat attack
gameState.bombShoot = function() {
    var mexs = this.mexGroup.members;
    var numberMexs = mexs.length;
    var i = Math.floor(Math.random() * numberMexs) - 1;
    
    this.cakeGroup.addChild(new Cake(this, mexs[i+1].x, mexs[i+1].y, -10 * gameSpeed, 10 * gameSpeed));
    // timer for mexican cat bombing 
    this.timer = this.game.time.clock.createTimer('bombShoot', (5 - (0.5 * (2 * gameSpeed))), 1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP,this.enableBombShoot, this);
}
//Boss attack
gameState.bossShoot = function() {
    var boss = this.bossCatGroup.members;
    var i = boss.length;
    if (bossExist == true) {
        // Shot from the middle eye of the boss to the top
        this.bossLaserGroup.addChild(new BossLaser(this, boss[i-1].x+143, boss[i-1].y+75, 0));
        // Shot from the mid right eye of the boss to the right
        this.bossLaserGroup.addChild(new BossLaser(this, boss[i-1].x+182, boss[i-1].y+75, 90));
        // Shot from the mid left eye of the boss to the left
        this.bossLaserGroup.addChild(new BossLaser(this, boss[i-1].x+105, boss[i-1].y+75, -90));
        // Shot from the top right eye of the boss to the top right
        this.bossLaserGroup.addChild(new BossLaser(this, boss[i-1].x+165, boss[i-1].y+42, 135));
        // Shot from the top left eye of the boss to the top left
        this.bossLaserGroup.addChild(new BossLaser(this, boss[i-1].x+115, boss[i-1].y+42, -135));
        this.timer = this.game.time.clock.createTimer('BossShoot', 2, 1, true);
        this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.enableBossShoot, this);
        allowBossShoot = false;
    }
}

/**********************
     here are the game objects
**********************/

var Burger = function(state, x, y, angle) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['burger'], x, y, false);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.angle = angle + (Math.PI / 2);
    this.speed = 5 * gameSpeed;
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

var BossLaser = function(state, x, y, angle) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['bossLaser'], x, y, false);

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.angle = angle + (Math.PI / 2);
    this.speed = 3 * gameSpeed;
    this.rotation = angle;

    BossLaser.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        
        this.x += -1 * (Math.cos(this.angle) * this.speed);
        this.y += (Math.sin(this.angle) * this.speed);
        
        if (this.x > myGame.stage.width || this.x < 0 || this.y > myGame.stage.height || this.y < 0) {
            this.destroy();
        }
    }
}
Kiwi.extend(BossLaser, Kiwi.GameObjects.Sprite);

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

var BossCat = function(state, x, y, xVelo, yVelo, bossLife) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['boss'], x ,y, false);
    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;
    this.bossLife = 10;

    BossCat.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.bossLife == 0){
            this.destroy();
            this.score += 50;
            bossExist = false;
            gameSpeed = gameSpeed * 1.2;
        }
    }
}
Kiwi.extend(BossCat, Kiwi.GameObjects.Sprite);

var Mex = function(state, x, y, xVelo, yVelo) {
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['mex'], x ,y, false);
    
    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    this.physics.velocity.x = xVelo;
    this.physics.velocity.y = yVelo;

    Mex.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();

        if (this.x < -90) {
            this.destroy();
        }
    }
}
Kiwi.extend(Mex, Kiwi.GameObjects.Sprite);

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
