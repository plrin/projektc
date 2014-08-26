var gameState = new Kiwi.State('GameState');

//global variables
allowShoot = true;


gameState.create = function() {
 
    Kiwi.State.prototype.create.call(this); 

    //game stage size and bg color
    myGame.stage.resize(800,600);
    myGame.stage.color = '05ffd9';
 
    // create game elements
    this.character = new Doge(this, 200,200);
    this.mouse = this.game.input.mouse;
    // leap controller keep track of all movments
    //this.control = Kiwi.Plugins.LEAPController.createController();

    // key settings
    this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.Q);
    this.pauseKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ENTER);

    
    // timer for spawning nyan cat
    this.timer = this.game.time.clock.createTimer('spawnCat', 3, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnCat, this);
    // timer for spawning mexican cat
    this.timer = this.game.time.clock.createTimer('spawnMex', 5, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnMex, this);
    // timer for nyan cat shoot
    this.timer = this.game.time.clock.createTimer('catShoot', 3, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.catShoot, this);
    // timer for mexican cat bombing 
    this.timer = this.game.time.clock.createTimer('bombShoot', 5, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.bombShoot, this);
    // timer for spawning clouds
    this.timer = this.game.time.clock.createTimer('spawnCloud', 15, -1, true);
    this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_COUNT,this.spawnCloud, this);
    

    // Groups
    this.laserGroup = new Kiwi.Group(this);
    this.burgerGroup = new Kiwi.Group(this);
    this.catGroup = new Kiwi.Group(this);
    this.mexGroup = new Kiwi.Group(this);
    this.cakeGroup = new Kiwi.Group(this);
    this.cloudGroup = new Kiwi.Group(this);
    
    this.addChild(this.cloudGroup);
    this.addChild(this.laserGroup);
    this.addChild(this.burgerGroup);
    this.addChild(this.cakeGroup);
    this.addChild(this.catGroup);
    this.addChild(this.mexGroup);
    this.addChild(this.character);

    // setting time clock to 1 second
    this.game.time.clock.units = 1000;

    this.score = 0;

    //Creating HUD Widgets

    this.scoreBoard = new Kiwi.HUD.Widget.TextField(this.game, "Your score: 0", 10, 30);
    this.scoreBoard.style.fontFamily = "helvetica";

    //Adding HUD elements to defaultHUD
    this.game.huds.defaultHUD.addWidget(this.scoreBoard);
}

// function of the game engine
gameState.update = function(){

    // process and update game loop
    Kiwi.State.prototype.update.call(this);

    // Leap Control
  /*  if (this.control.controllerConnected) {
        this.leapControl();
    }
    else {
        //mouse control
        this.mouseControl();
    }

    this.checkCollisions();
*/
    // condition for shooting
    if ((this.shootKey.isDown) && (allowShoot == true)) {
        this.shoot();
    }
    // condition for pausing the game
    if (this.pauseKey.isDown) {
        this.timer = this.game.time.clock.pause('spawnCat');
        this.timer = this.game.time.clock.pause('spawnMex');
        this.timer = this.game.time.clock.pause('spawnCloud');
        this.timer = this.game.time.clock.pause('bombShoot');
        this.timer = this.game.time.clock.pause('catShoot');

        this.game.states.switchState("PauseState");
    }

    // test for without leap motion
    this.mouseControl();
    this.checkCollisions();
    


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
        this.laserGroup.addChild(new Laser(this, this.character.x + 33, this.character.y + 37, 100, 0));
        this.timer = this.game.time.clock.createTimer('shoot', 0.5, 1, true);
        this.timerEvent = this.timer.createTimerEvent(Kiwi.Time.TimerEvent.TIMER_STOP, this.enableShoot, this);
    }
}

gameState.spawnCat = function() {
    var h = Math.floor(Math.random() * 539);
    this.catGroup.addChild(new Cat(this, myGame.stage.width, h, -10, 0));
}

gameState.spawnMex = function() {
    this.mexGroup.addChild(new Mex(this, myGame.stage.width, 50, -10, 0));
}

gameState.spawnCloud = function() {
    var r = 100 - Math.floor(Math.random() * 100);
    this.cloudGroup.addChild(new Cloud(this, myGame.stage.width, r, -5, 0));
}


gameState.enableShoot = function() {
    allowShoot = true;
}

gameState.checkCollisions = function() {
    var cats = this.catGroup.members;
    var lasers = this.laserGroup.members;
    var burgers = this.burgerGroup.members;
    var mexCats = this.mexGroup.members;
    var cakes = this.cakeGroup.members;

    // collision between nyan cat and doge
    for (var i = 0; i < cats.length; i++) {
        if (cats[i].physics.overlaps(this.character)) {
			this.timer = this.game.time.clock.stop('spawnCat');
			this.timer = this.game.time.clock.stop('spawnMex');
        	this.timer = this.game.time.clock.stop('spawnCloud');
        	this.timer = this.game.time.clock.stop('bombShoot');
        	this.timer = this.game.time.clock.stop('catShoot');

            this.game.states.switchState("GameOverState");
        }  
    }

    // collision between burgers and doge
    // for (var i = 0; i < burgers.length; i++) {
    //     if (burgers[i].physics.overlaps(this.character)) {
    //         this.timer = this.game.time.clock.stop('spawnCat');
    //         this.timer = this.game.time.clock.stop('spawnMex');
    //         this.timer = this.game.time.clock.stop('spawnCloud');
    //         this.timer = this.game.time.clock.stop('bombShoot');
    //         this.timer = this.game.time.clock.stop('catShoot');

    //         this.game.states.switchState("GameOverState");
    //     }  
    // }

    // collision between mex cat and doge
    for (var i = 0; i < mexCats.length; i++) {
        if (mexCats[i].physics.overlaps(this.character)) {
            this.timer = this.game.time.clock.stop('spawnCat');
            this.timer = this.game.time.clock.stop('spawnMex');
            this.timer = this.game.time.clock.stop('spawnCloud');
            this.timer = this.game.time.clock.stop('bombShoot');
            this.timer = this.game.time.clock.stop('catShoot');

            this.game.states.switchState("GameOverState");
        }  
    }

    // collision between cake and doge
    for (var i = 0; i < cakes.length; i++) {
        if (cakes[i].physics.overlaps(this.character)) {
            this.timer = this.game.time.clock.stop('spawnCat');
            this.timer = this.game.time.clock.stop('spawnMex');
            this.timer = this.game.time.clock.stop('spawnCloud');
            this.timer = this.game.time.clock.stop('bombShoot');
            this.timer = this.game.time.clock.stop('catShoot');

            this.game.states.switchState("GameOverState");
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

    // collisions bewtween nyan cat and laser
   for (var i = 0; i < cats.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (cats[i].physics.overlaps(lasers[j])) {
                cats[i].destroy();
                lasers[j].destroy();
                this.score += 10;
                this.scoreBoard.text = "Your score: " + this.score;
                break;
            }
        }  
    }

    // collisions bewtween mex cat and laser
   for (var i = 0; i < mexCats.length; i++) {
        for (var j = 0; j < lasers.length; j++) {
            if (mexCats[i].physics.overlaps(lasers[j])) {
                mexCats[i].destroy();
                lasers[j].destroy();
                this.score += 10;
                this.scoreBoard.text = "Your score: " + this.score;
                break;
            }
        }  
    }


}   // collision function ends here

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

}

gameState.bombShoot = function() {
    var mexs = this.mexGroup.members;
    var numberMexs = mexs.length;
    var i = Math.floor(Math.random() * numberMexs) - 1;
    
    this.cakeGroup.addChild(new Cake(this, mexs[i+1].x, mexs[i+1].y, -10, 10));
}


/**********************
     here are the game objects
**********************/

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
