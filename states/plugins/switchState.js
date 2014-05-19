var myGame = new Kiwi.Game();
myGame.states.addState(loadingState);
myGame.states.addState(myState);
myGame.states.addState(gameoverState);

myGame.states.switchState("LoadingState");