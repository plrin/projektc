var myGame = new Kiwi.Game();
myGame.states.addState(loadingState);
myGame.states.addState(gameState);
myGame.states.addState(gameOverState);
//myGame.states.addState(pauseState);

myGame.states.switchState("LoadingState");