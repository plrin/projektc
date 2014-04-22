/// <reference path="../src/WebGL.d.ts" />
declare module Kiwi.Animations.Tweens.Easing {
    class Back {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Bounce {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Circular {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Cubic {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Elastic {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Exponential {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Linear {
        public objType(): string;
        static None(k: any): any;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Quadratic {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Quartic {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Quintic {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens.Easing {
    class Sinusoidal {
        public objType(): string;
        static In(k: any): number;
        static Out(k: any): number;
        static InOut(k: any): number;
    }
}
declare module Kiwi.Animations.Tweens {
    class TweenManager {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _tweens;
        public getAll(): Animations.Tween[];
        public removeAll(): void;
        public create(object: any): Animations.Tween;
        public add(tween: Animations.Tween): Animations.Tween;
        public remove(tween: Animations.Tween): void;
        public update(): boolean;
    }
}
declare module Kiwi.Animations {
    class Tween {
        constructor(object: any, game?: Kiwi.Game);
        public objType(): string;
        private _game;
        private _manager;
        private _object;
        private _valuesStart;
        private _valuesEnd;
        private _duration;
        private _delayTime;
        private _startTime;
        private _easingFunction;
        private _interpolationFunction;
        private _chainedTweens;
        private _onStartCallback;
        private _onStartContext;
        private _onStartCallbackFired;
        private _onUpdateCallback;
        private _onUpdateContext;
        private _onCompleteCallback;
        private _onCompleteCalled;
        private _onCompleteContext;
        public isRunning: boolean;
        public to(properties: any, duration?: number, ease?: any, autoStart?: boolean): Tween;
        public start(): Tween;
        public stop(): Tween;
        public setParent(value: Kiwi.Game): void;
        public delay(amount: number): Tween;
        public easing(easing: any): Tween;
        public interpolation(interpolation: any): Tween;
        public chain(tween: Tween): Tween;
        public onStart(callback: any, context: any): Tween;
        public onUpdate(callback: any, context: any): Tween;
        public onComplete(callback: any, context: any): Tween;
        public update(time: any): boolean;
    }
}
declare module Kiwi {
    class Camera {
        constructor(game: Kiwi.Game, id: number, name: string, x: number, y: number, width: number, height: number);
        public width: number;
        public height: number;
        public objType(): string;
        public fitToStage: boolean;
        public transform: Kiwi.Geom.Transform;
        private _updatedStageSize(width, height);
        public _game: Kiwi.Game;
        public id: number;
        public name: string;
        private _visible;
        public visible : boolean;
        private _dirty;
        public dirty : boolean;
        public update(): void;
        public render(): void;
    }
}
declare module Kiwi {
    class CameraManager {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _cameras;
        private _nextCameraID;
        public defaultCamera: Kiwi.Camera;
        public boot(): void;
        public create(name: string, x: number, y: number, width: number, height: number): Kiwi.Camera;
        public remove(camera: Kiwi.Camera): boolean;
        public update(): boolean;
        public render(): boolean;
        public removeAll(): void;
    }
}
declare module Kiwi {
    class Component {
        constructor(owner: Kiwi.IChild, name: string);
        public objType(): string;
        public owner: Kiwi.IChild;
        public game: Kiwi.Game;
        public name: string;
        public active: boolean;
        public dirty: boolean;
        public preUpdate(): void;
        public update(): void;
        public postUpdate(): void;
        public destroy(): void;
    }
}
declare module Kiwi {
    class ComponentManager {
        constructor(type: number, owner: any);
        public objType(): string;
        private _owner;
        private _type;
        public _components: any;
        public hasComponent(value: string): boolean;
        public hasActiveComponent(value: string): boolean;
        public getComponent(value: string): any;
        public add(component: Kiwi.Component): any;
        public addBatch(...paramsArr: any[]): void;
        public removeComponent(component: Kiwi.Component, destroy?: boolean): boolean;
        public removeComponentByName(name: string, destroy?: boolean): boolean;
        public removeAll(destroy?: boolean): void;
        public preUpdate(): void;
        public update(): void;
        public postUpdate(): void;
        public preRender(): void;
        public render(): void;
        public postRender(): void;
    }
}
declare module Kiwi {
    class Entity implements Kiwi.IChild {
        constructor(state: Kiwi.State, x: number, y: number);
        public glRenderer: Kiwi.Renderers.Renderer;
        public transform: Kiwi.Geom.Transform;
        private _parent;
        public parent : Kiwi.Group;
        public x : number;
        public y : number;
        public scaleX : number;
        public scaleY : number;
        public rotation : number;
        public rotPointX : number;
        public rotPointY : number;
        public childType(): number;
        private _alpha;
        public alpha : number;
        private _visible;
        public visible : boolean;
        public width: number;
        public height: number;
        public atlas: Kiwi.Textures.TextureAtlas;
        public cellIndex: number;
        public components: Kiwi.ComponentManager;
        public game: Kiwi.Game;
        public state: Kiwi.State;
        public id: string;
        public name: string;
        private _exists;
        public exists : boolean;
        private _active;
        public active : boolean;
        private _willRender;
        public willRender : boolean;
        private _inputEnabled;
        public inputEnabled : boolean;
        private _clock;
        public clock : Kiwi.Time.Clock;
        private _dirty;
        public dirty : boolean;
        public objType(): string;
        public update(): void;
        public render(camera: Kiwi.Camera): void;
        public renderGL(gl: WebGLRenderingContext, camera: Kiwi.Camera, params?: any): void;
        public destroy(immediate?: boolean): void;
    }
}
declare module Kiwi {
    class Game {
        constructor(domParent?: string, name?: string, state?: any, options?: any);
        private _renderOption;
        public renderOption : number;
        private _deviceTargetOption;
        public deviceTargetOption : number;
        private _debugOption;
        public debugOption : number;
        public debug : boolean;
        public renderer: IRenderManager;
        public huds: Kiwi.HUD.HUDManager;
        public objType(): string;
        private _startup;
        public id: number;
        public audio: Kiwi.Sound.AudioManager;
        public browser: Kiwi.System.Browser;
        public fileStore: Kiwi.Files.FileStore;
        public input: Kiwi.Input.InputManager;
        public cameras: Kiwi.CameraManager;
        public pluginManager: Kiwi.PluginManager;
        public loader: Kiwi.Files.Loader;
        public raf: Kiwi.Utils.RequestAnimationFrame;
        public stage: Kiwi.Stage;
        public states: Kiwi.StateManager;
        public time: Kiwi.Time.ClockManager;
        public tweens: Kiwi.Animations.Tweens.TweenManager;
        public rnd: Kiwi.Utils.RandomDataGenerator;
        private _frameRate;
        private _interval;
        private _delta;
        private _lastTime;
        public frameRate : number;
        private start();
        private loop();
    }
}
declare module Kiwi {
    class Group implements Kiwi.IChild {
        constructor(state: Kiwi.State, name?: string);
        public objType(): string;
        public childType(): number;
        public name: string;
        public transform: Kiwi.Geom.Transform;
        private _parent;
        public parent : Group;
        public x : number;
        public y : number;
        public scaleX : number;
        public scaleY : number;
        public rotation : number;
        public components: Kiwi.ComponentManager;
        public game: Kiwi.Game;
        public state: Kiwi.State;
        public id: string;
        public members: Kiwi.IChild[];
        public numChildren(): number;
        private _dirty;
        public dirty : boolean;
        public contains(child: Kiwi.IChild): boolean;
        public containsDescendant(child: Kiwi.IChild): boolean;
        public containsAncestor(descendant: Kiwi.IChild, ancestor: Group): boolean;
        public addChild(child: Kiwi.IChild): Kiwi.IChild;
        public addChildAt(child: Kiwi.IChild, index: number): Kiwi.IChild;
        public addChildBefore(child: Kiwi.IChild, beforeChild: Kiwi.IChild): Kiwi.IChild;
        public addChildAfter(child: Kiwi.IChild, beforeChild: Kiwi.IChild): Kiwi.IChild;
        public getChildAt(index: number): Kiwi.IChild;
        public getChildByName(name: string): Kiwi.IChild;
        public getChildByID(id: string): Kiwi.IChild;
        public getChildIndex(child: Kiwi.IChild): number;
        public removeChild(child: Kiwi.IChild, destroy?: boolean): Kiwi.IChild;
        public removeChildAt(index: number): Kiwi.IChild;
        public removeChildren(begin?: number, end?: number, destroy?: boolean): number;
        public setChildIndex(child: Kiwi.IChild, index: number): boolean;
        public swapChildren(child1: Kiwi.IChild, child2: Kiwi.IChild): boolean;
        public swapChildrenAt(index1: number, index2: number): boolean;
        public replaceChild(oldChild: Kiwi.IChild, newChild: Kiwi.IChild): boolean;
        public forEach(context: any, callback: any, ...params: any[]): void;
        public forEachAlive(context: any, callback: any, ...params: any[]): void;
        public setAll(componentName: string, property: string, value: any): void;
        public callAll(componentName: string, functionName: string, args?: any[]): void;
        public update(): void;
        private _exists;
        public exists : boolean;
        private _active;
        public active : boolean;
        public render(camera: Kiwi.Camera): void;
        public removeFirstAlive(destroy?: boolean): Kiwi.IChild;
        public getFirstAlive(): Kiwi.IChild;
        public getFirstDead(): Kiwi.IChild;
        public countLiving(): number;
        public countDead(): number;
        public getRandom(start?: number, length?: number): Kiwi.IChild;
        public clear(): void;
        private _willRender;
        public willRender : boolean;
        public destroy(immediate?: boolean, destroyChildren?: boolean): void;
        private _tempRemoveChildren;
    }
}
declare module Kiwi {
    class PluginManager {
        constructor(game: Kiwi.Game, plugins: string[]);
        private static _availablePlugins;
        static availablePlugins : any;
        static register(plugin: any): void;
        public objType : string;
        private _game;
        private _plugins;
        private _bootObjects;
        public validatePlugins(): void;
        public pluginIsRegistered(pluginName: string): boolean;
        private _createPlugins();
        public boot(): void;
        public update(): void;
    }
}
declare module Kiwi {
    class State extends Kiwi.Group {
        constructor(name: string);
        public objType(): string;
        public childType(): number;
        public config: Kiwi.StateConfig;
        public game: Kiwi.Game;
        public textureLibrary: Kiwi.Textures.TextureLibrary;
        public audioLibrary: Kiwi.Sound.AudioLibrary;
        public dataLibrary: Kiwi.Files.DataLibrary;
        public textures: any;
        public audio: any;
        public data: any;
        public boot(): void;
        public setType(value: number): void;
        public init(...paramsArr: any[]): void;
        public preload(): void;
        public loadProgress(percent: number, bytesLoaded: number, file: Kiwi.Files.File): void;
        public loadComplete(): void;
        public loadUpdate(): void;
        public create(...paramsArr: any[]): void;
        public preUpdate(): void;
        public update(): void;
        public postUpdate(): void;
        public postRender(): void;
        public shutDown(): void;
        public addImage(key: string, url: string, storeAsGlobal?: boolean, width?: number, height?: number, offsetX?: number, offsetY?: number): void;
        public addSpriteSheet(key: string, url: string, frameWidth: number, frameHeight: number, storeAsGlobal?: boolean, numCells?: number, rows?: number, cols?: number, sheetOffsetX?: number, sheetOffsetY?: number, cellOffsetX?: number, cellOffsetY?: number): void;
        public addTextureAtlas(key: string, imageURL: string, jsonID?: string, jsonURL?: string, storeAsGlobal?: boolean): void;
        public addJSON(key: string, url: string, storeAsGlobal?: boolean): void;
        public addAudio(key: string, url: string, storeAsGlobal?: boolean): void;
        private _trackingList;
        public addToTrackingList(child: Kiwi.IChild): void;
        public removeFromTrackingList(child: Kiwi.IChild): void;
        public destroyUnused(): number;
        public destroy(deleteAll?: boolean): void;
        private _destroyChildren(child);
    }
}
declare module Kiwi {
    interface IChild {
        render(camera: Kiwi.Camera): any;
        update(): any;
        childType(): number;
        id: string;
        name: string;
        game: Kiwi.Game;
        state: Kiwi.State;
        components: Kiwi.ComponentManager;
        dirty: boolean;
        active: boolean;
        exists: boolean;
        willRender: boolean;
        parent: Kiwi.Group;
        transform: Kiwi.Geom.Transform;
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        destroy(...params: any[]): any;
    }
}
declare module Kiwi {
    class Signal {
        private _bindings;
        private _prevParams;
        static VERSION: string;
        public memorize: boolean;
        private _shouldPropagate;
        public active: boolean;
        public objType(): string;
        public validateListener(listener: any, fnName: any): void;
        private _registerListener(listener, isOnce, listenerContext, priority);
        private _addBinding(binding);
        private _indexOfListener(listener, context);
        public has(listener: any, context?: any): boolean;
        public add(listener: any, listenerContext?: any, priority?: number): Kiwi.SignalBinding;
        public addOnce(listener: any, listenerContext?: any, priority?: number): Kiwi.SignalBinding;
        public remove(listener: any, context?: any): any;
        public removeAll(): void;
        public getNumListeners(): number;
        public halt(): void;
        public dispatch(...paramsArr: any[]): void;
        public forget(): void;
        public dispose(): void;
        public toString(): string;
    }
}
declare module Kiwi {
    class SignalBinding {
        constructor(signal: Kiwi.Signal, listener: any, isOnce: boolean, listenerContext: any, priority?: number);
        public objType(): string;
        private _listener;
        private _isOnce;
        public context: any;
        private _signal;
        public priority: number;
        public active: boolean;
        public params: any;
        public execute(paramsArr?: any[]): any;
        public detach(): any;
        public isBound(): boolean;
        public isOnce(): boolean;
        public getListener(): any;
        public getSignal(): Kiwi.Signal;
        public _destroy(): void;
        public toString(): string;
    }
}
declare module Kiwi {
    class Stage {
        constructor(game: Kiwi.Game, name: string);
        public objType(): string;
        static DEFAULT_WIDTH: number;
        static DEFAULT_HEIGHT: number;
        private _alpha;
        public alpha : number;
        private _x;
        public x : number;
        private _y;
        public y : number;
        private _width;
        public width : number;
        private _height;
        public height : number;
        public onResize: Kiwi.Signal;
        private _scale;
        public scale : number;
        public offset: Kiwi.Geom.Point;
        private _game;
        public name: string;
        public domReady: boolean;
        public _color: string;
        public color : string;
        private _normalizedColor;
        public normalizedColor : any;
        public gl: WebGLRenderingContext;
        public ctx: CanvasRenderingContext2D;
        public canvas: HTMLCanvasElement;
        public debugCanvas: HTMLCanvasElement;
        public dctx: CanvasRenderingContext2D;
        public container: HTMLDivElement;
        public boot(dom: Kiwi.System.Bootstrap): void;
        private _windowResized(event);
        private _createCompositeCanvas();
        public resize(width: number, height: number): void;
        private _createDebugCanvas();
        public clearDebugCanvas(color?: string): void;
        public toggleDebugCanvas(): void;
    }
}
declare module Kiwi.Components {
    class AnimationManager extends Kiwi.Component {
        constructor(entity: Kiwi.Entity);
        public onPlay: Kiwi.Signal;
        public onStop: Kiwi.Signal;
        public onUpdate: Kiwi.Signal;
        public onChange: Kiwi.Signal;
        private entity;
        private _atlas;
        private _animations;
        public currentAnimation: Kiwi.Animations.Animation;
        public isPlaying : boolean;
        public objType(): string;
        public add(name: string, cells: number[], speed: number, loop?: boolean, play?: boolean): Kiwi.Animations.Animation;
        public createFromSequence(sequence: Kiwi.Animations.Sequence, play?: boolean): Kiwi.Animations.Animation;
        public play(name?: string): Kiwi.Animations.Animation;
        public playAt(index: number, name?: string): Kiwi.Animations.Animation;
        private _play(name, index?);
        public stop(): void;
        public pause(): void;
        public resume(): void;
        public switchTo(val: any, play?: boolean): void;
        public nextFrame(): void;
        public prevFrame(): void;
        private _setCurrentAnimation(name);
        public update(): void;
        public currentCell : number;
        public frameIndex : number;
        public length : number;
        public getAnimation(name: string): Kiwi.Animations.Animation;
        public updateCellIndex(): void;
        public destroy(): void;
    }
}
declare module Kiwi.Components {
    class Box extends Kiwi.Component {
        constructor(parent: Kiwi.Entity, x?: number, y?: number, width?: number, height?: number);
        public entity: Kiwi.Entity;
        public objType(): string;
        public dirty: boolean;
        private _hitboxOffset;
        public hitboxOffset : Kiwi.Geom.Point;
        private _rawHitbox;
        public rawHitbox : Kiwi.Geom.Rectangle;
        private _transformedHitbox;
        private _worldHitbox;
        public hitbox : Kiwi.Geom.Rectangle;
        public worldHitbox : Kiwi.Geom.Rectangle;
        private _rawBounds;
        public rawBounds : Kiwi.Geom.Rectangle;
        private _rawCenter;
        public rawCenter : Kiwi.Geom.Point;
        private _transformedCenter;
        public center : Kiwi.Geom.Point;
        private _transformedBounds;
        private _worldBounds;
        public bounds : Kiwi.Geom.Rectangle;
        public worldBounds : Kiwi.Geom.Rectangle;
        private _rotateRect(rect, useWorldCoords?);
        private _rotateHitbox(rect, useWorldCoords?);
        public draw(ctx: CanvasRenderingContext2D): void;
        public extents(topLeftPoint: Kiwi.Geom.Point, topRightPoint: Kiwi.Geom.Point, bottomRightPoint: Kiwi.Geom.Point, bottomLeftPoint: Kiwi.Geom.Point): Kiwi.Geom.Rectangle;
        public destroy(): void;
    }
}
declare module Kiwi.Components {
    class Input extends Kiwi.Component {
        constructor(owner: Kiwi.IChild, box: Components.Box, enabled?: boolean);
        public objType(): string;
        private _box;
        private _onEntered;
        private _onLeft;
        private _onDown;
        private _onUp;
        private _onDragStarted;
        private _onDragStopped;
        public onEntered : Kiwi.Signal;
        public onLeft : Kiwi.Signal;
        public onDown : Kiwi.Signal;
        public onUp : Kiwi.Signal;
        public onDragStarted : Kiwi.Signal;
        public onDragStopped : Kiwi.Signal;
        public onRelease : Kiwi.Signal;
        public onPress : Kiwi.Signal;
        private _enabled;
        public enabled : boolean;
        private _isDown;
        private _isUp;
        private _withinBounds;
        private _outsideBounds;
        private _justEntered;
        public isDown : boolean;
        public isUp : boolean;
        public withinBounds : boolean;
        public outsideBounds : boolean;
        private _isDragging;
        private _distance;
        private _tempDragDisabled;
        private _dragEnabled;
        private _dragDistance;
        private _dragSnapToCenter;
        public isDragging : boolean;
        public dragDistance : number;
        private _nowDown;
        private _nowUp;
        private _nowEntered;
        private _nowLeft;
        private _nowDragging;
        public enableDrag(snapToCenter?: boolean, distance?: number): void;
        public disableDrag(): void;
        public update(): void;
        private _updateTouch();
        private _evaluateTouchPointer(pointer);
        private _updateMouse();
        private _evaluateMousePointer(pointer);
        public toString(): string;
        public destroy(): void;
    }
}
declare module Kiwi.Components {
    class Sound extends Kiwi.Component {
        constructor(parent: any);
        public objType(): string;
        private _audio;
        public addSound(name: string, key: string, volume?: number, loop?: boolean): Kiwi.Sound.Audio;
        public removeSound(name: string): void;
        public getSound(name: string): Kiwi.Sound.Audio;
        private _validate(name);
        public play(name: string): void;
        public stop(name: string): void;
        public pause(name: string): void;
        public resume(name: string): void;
        public destroy(): void;
    }
}
declare module Kiwi.Components {
    class ArcadePhysics extends Kiwi.Component {
        constructor(entity: Kiwi.Entity, box?: Components.Box);
        public transform: Kiwi.Geom.Transform;
        public box: Components.Box;
        public immovable: boolean;
        public velocity: Kiwi.Geom.Point;
        public mass: number;
        public elasticity: number;
        public acceleration: Kiwi.Geom.Point;
        public drag: Kiwi.Geom.Point;
        public maxVelocity: Kiwi.Geom.Point;
        public angularVelocity: number;
        public angularAcceleration: number;
        public angularDrag: number;
        public maxAngular: number;
        public moves: boolean;
        public touching: number;
        public wasTouching: number;
        public allowCollisions: number;
        public last: Kiwi.Geom.Point;
        private _solid;
        private _callbackFunction;
        private _callbackContext;
        public isTouching(value: number): boolean;
        public solid(value?: boolean): boolean;
        public setCallback(callbackFunction: any, callbackContext: any): void;
        public parent: Kiwi.Entity;
        static separate(object1: Kiwi.Entity, object2: Kiwi.Entity): boolean;
        static separateX(object1: Kiwi.Entity, object2: Kiwi.Entity): boolean;
        static separateY(object1: Kiwi.Entity, object2: Kiwi.Entity): boolean;
        static separateTiles(object: Kiwi.Entity, layer: Kiwi.GameObjects.Tilemap.TileMapLayer, tiles: any): boolean;
        static separateTilesX(object: Kiwi.Entity, layer: Kiwi.GameObjects.Tilemap.TileMapLayer, tile: any): boolean;
        static separateTilesY(object: Kiwi.Entity, layer: any, tile: any): boolean;
        public overlapsTiles(gameObject: Kiwi.Entity, separateObjects?: boolean, collisionType?: number): boolean;
        public overlaps(gameObject: Kiwi.Entity, separateObjects?: boolean): boolean;
        public overlapsGroup(group: Kiwi.Group, separateObjects?: boolean): boolean;
        public overlapsArray(array: any[], separateObjects?: boolean): boolean;
        static computeVelocity(velocity: number, acceleration?: number, drag?: number, max?: number): number;
        public updateMotion(): void;
        public update(): void;
        public destroy(): void;
        public objType(): string;
        static collide(gameObject1: Kiwi.Entity, gameObject2: Kiwi.Entity, seperate?: boolean): boolean;
        static collideGroup(gameObject: Kiwi.Entity, group: Kiwi.Group, seperate?: boolean): boolean;
        static collideGroupGroup(group1: Kiwi.Group, group2: Kiwi.Group, seperate?: boolean): boolean;
        static overlaps(gameObject1: Kiwi.Entity, gameObject2: Kiwi.Entity, separateObjects?: boolean): boolean;
        static overlapsObjectGroup(gameObject: Kiwi.Entity, group: Kiwi.Group, separateObjects?: boolean): boolean;
        static overlapsGroupGroup(group1: Kiwi.Group, group2: Kiwi.Group, separateObjects?: boolean): boolean;
        static overlapsArrayGroup(array: any[], group: Kiwi.Group, separateObjects?: boolean): boolean;
        static updateInterval: number;
        static LEFT: number;
        static RIGHT: number;
        static UP: number;
        static DOWN: number;
        static NONE: number;
        static CEILING: number;
        static FLOOR: number;
        static WALL: number;
        static ANY: number;
        static OVERLAP_BIAS: number;
    }
}
declare module Kiwi.Files {
    class Loader {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _fileList;
        private _loadList;
        private _onProgressCallback;
        private _onCompleteCallback;
        private _calculateBytes;
        private _fileTotal;
        private _currentFile;
        private _bytesTotal;
        private _bytesLoaded;
        private _bytesCurrent;
        private _fileChunk;
        private _percentLoaded;
        private _complete;
        public boot(): void;
        public init(progress?: any, complete?: any, calculateBytes?: boolean): void;
        public addImage(key: string, url: string, width?: number, height?: number, offsetX?: number, offsetY?: number, storeAsGlobal?: boolean): void;
        public addSpriteSheet(key: string, url: string, frameWidth: number, frameHeight: number, numCells?: number, rows?: number, cols?: number, sheetOffsetX?: number, sheetOffsetY?: number, cellOffsetX?: number, cellOffsetY?: number, storeAsGlobal?: boolean): void;
        public addTextureAtlas(key: string, imageURL: string, jsonID: string, jsonURL: string, storeAsGlobal?: boolean): void;
        public addAudio(key: string, url: string, storeAsGlobal?: boolean, onlyIfSupported?: boolean): void;
        public addJSON(key: string, url: string, storeAsGlobal?: boolean): void;
        public addXML(key: string, url: string, storeAsGlobal?: boolean): void;
        public addBinaryFile(key: string, url: string, storeAsGlobal?: boolean): void;
        public addTextFile(key: string, url: string, storeAsGlobal?: boolean): void;
        public startLoad(): void;
        private getNextFileSize();
        private addToBytesTotal(file);
        private nextFile();
        private fileLoadProgress(file);
        private fileLoadComplete(file);
        public getBytesLoaded(): number;
        public getPercentLoaded(): number;
        public calculateBytes(value?: boolean): boolean;
        public complete(): boolean;
    }
}
declare module Kiwi.Files {
    class DataLibrary {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        public data: any;
        public clear(): void;
        public add(dataFile: Files.File): void;
        public rebuild(fileStore: Files.FileStore, state: Kiwi.State): void;
    }
}
declare module Kiwi.Files {
    class File {
        constructor(game: Kiwi.Game, dataType: number, path: string, name?: string, saveToFileStore?: boolean, storeAsGlobal?: boolean);
        public objType(): string;
        public ownerState: Kiwi.State;
        private _tags;
        public addTag(tag: string): void;
        public removeTag(tag: string): void;
        public hasTag(tag: string): boolean;
        static IMAGE: number;
        static SPRITE_SHEET: number;
        static TEXTURE_ATLAS: number;
        static AUDIO: number;
        static JSON: number;
        static XML: number;
        static BINARY_DATA: number;
        static TEXT_DATA: number;
        private _game;
        private _xhr;
        private _fileStore;
        private _saveToFileStore;
        private _useTagLoader;
        public dataType: number;
        public key: string;
        public fileName: string;
        public filePath: string;
        public fileType: string;
        public fileExtension: string;
        public fileURL: string;
        public fileSize: number;
        public ETag: string;
        public lastModified: string;
        public timeStarted: number;
        public timeFinished: number;
        public duration: number;
        public hasError: boolean;
        public success: boolean;
        public error: any;
        public onCompleteCallback: any;
        public onProgressCallback: any;
        public lastProgress: number;
        public percentLoaded: number;
        public data: any;
        public metadata: any;
        public isTexture : boolean;
        public isAudio : boolean;
        public isData : boolean;
        public load(onCompleteCallback?: any, onProgressCallback?: any, customFileStore?: Files.FileStore, maxLoadAttempts?: number, timeout?: number): void;
        private start();
        private stop();
        private tagLoader();
        private tagLoaderOnReadyStateChange(event);
        private tagLoaderOnError(event);
        private tagLoaderProgressThrough(event);
        private tagLoaderAudioLocked();
        private tagLoaderOnLoad(event);
        public status: number;
        public statusText: string;
        public bytesLoaded: number;
        public bytesTotal: number;
        public readyState: number;
        public timeOutDelay: number;
        public hasTimedOut: boolean;
        public timedOut: number;
        public attemptCounter: number;
        public maxLoadAttempts: number;
        public buffer: any;
        private xhrLoader();
        private xhrOnReadyStateChange(event);
        private xhrOnLoadStart(event);
        private xhrOnAbort(event);
        private xhrOnError(event);
        private xhrOnTimeout(event);
        private xhrOnProgress(event);
        private xhrOnLoad(event);
        private processFile();
        private createBlob();
        private revoke();
        private parseComplete();
        public maxHeadLoadAttempts: number;
        public getFileDetails(callback?: any, maxLoadAttempts?: number, timeout?: number): void;
        private sendXHRHeadRequest(timeout);
        private xhrHeadOnTimeout(event);
        private xhrHeadOnError(event);
        private getXHRResponseHeaders(event);
        private completeXHRHeadRequest(outcome);
        public toString(): string;
    }
}
declare module Kiwi.Files {
    class FileStore {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _files;
        private _size;
        public boot(): void;
        public getFile(key: string): Files.File;
        public getFilesByTag(tag: string): Object;
        public removeFilesByTag(tag: string): number;
        public keys : string[];
        public size(): number;
        public addFile(key: string, value: Files.File): boolean;
        public exists(key: string): boolean;
        public removeStateFiles(state: Kiwi.State): void;
        public removeFile(key: string): boolean;
    }
}
declare module Kiwi {
    class StateConfig {
        constructor(parent: Kiwi.State, name: string);
        public objType(): string;
        private _state;
        public name: string;
        public isPersistent: boolean;
        public isCreated: boolean;
        public isInitialised: boolean;
        public isReady: boolean;
        public hasPreloader: boolean;
        public runCount: number;
        public type: number;
        public initParams: any;
        public createParams: any;
        public reset(): void;
    }
}
declare module Kiwi {
    class StateManager {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _states;
        public current: Kiwi.State;
        private _newStateKey;
        private checkKeyExists(key);
        private checkValidState(state);
        public addState(state: any, switchTo?: boolean): boolean;
        public boot(): void;
        private setCurrentState(key);
        private bootNewState();
        public switchState(key: string, state?: any, initParams?: any, createParams?: any): boolean;
        private getState(key);
        private checkPreload();
        private callCreate();
        private checkInit();
        private onLoadProgress(percent, bytesLoaded, file);
        private onLoadComplete();
        public rebuildLibraries(): void;
        public update(): void;
        public postRender(): void;
    }
}
declare module Kiwi.GameObjects {
    class Sprite extends Kiwi.Entity {
        constructor(state: Kiwi.State, atlas: Kiwi.Textures.TextureAtlas, x?: number, y?: number, enableInput?: boolean);
        public objType(): string;
        private _isAnimated;
        public animation: Kiwi.Components.AnimationManager;
        public box: Kiwi.Components.Box;
        public input: Kiwi.Components.Input;
        public update(): void;
        public render(camera: Kiwi.Camera): void;
        public renderGL(gl: WebGLRenderingContext, camera: Kiwi.Camera, params?: any): void;
    }
}
declare module Kiwi.GameObjects {
    class StaticImage extends Kiwi.Entity {
        constructor(state: Kiwi.State, atlas: Kiwi.Textures.TextureAtlas, x?: number, y?: number);
        public objType(): string;
        public box: Kiwi.Components.Box;
        public render(camera: Kiwi.Camera): void;
        public renderGL(gl: WebGLRenderingContext, camera: Kiwi.Camera, params?: any): void;
    }
}
declare module Kiwi.GameObjects {
    class Textfield extends Kiwi.Entity {
        constructor(state: Kiwi.State, text: string, x?: number, y?: number, color?: string, size?: number, weight?: string, fontFamily?: string);
        public objType(): string;
        private _text;
        private _fontWeight;
        private _fontSize;
        private _fontColor;
        private _fontFamily;
        private _textAlign;
        private _baseline;
        public text : string;
        public color : string;
        public fontWeight : string;
        public fontSize : number;
        public fontFamily : string;
        static TEXT_ALIGN_CENTER: string;
        static TEXT_ALIGN_RIGHT: string;
        static TEXT_ALIGN_LEFT: string;
        public textAlign : string;
        private _canvas;
        private _ctx;
        private _tempDirty;
        private _renderText();
        public render(camera: Kiwi.Camera): void;
        public renderGL(gl: WebGLRenderingContext, camera: Kiwi.Camera, params?: any): void;
    }
}
declare module Kiwi.GameObjects.Tilemap {
    class TileType {
        constructor(tilemap: Tilemap.TileMap, index: number, cellIndex?: number);
        public allowCollisions: number;
        public properties: any;
        public tilemap: Tilemap.TileMap;
        public index: number;
        public cellIndex: number;
        public objType(): string;
    }
}
declare module Kiwi.GameObjects.Tilemap {
    class TileMap {
        constructor(state: Kiwi.State, tileMapData?: any, atlas?: Kiwi.Textures.TextureAtlas, startingCell?: number);
        public orientation: string;
        public tileTypes: Tilemap.TileType[];
        public layers: Tilemap.TileMapLayer[];
        public state: Kiwi.State;
        public game: Kiwi.Game;
        public tileWidth: number;
        public tileHeight: number;
        public width: number;
        public height: number;
        public widthInPixels : number;
        public heightInPixels : number;
        public properties: any;
        public createFromFileStore(tileMapData: any, atlas: Kiwi.Textures.TextureAtlas, startingCell?: number): boolean;
        private _generateTypesFromTileset(tilesetData, atlas, startingCell);
        public setTo(tileWidth: number, tileHeight: number, width: number, height: number): void;
        public createTileType(cell?: number): Tilemap.TileType;
        public createTileTypes(cells: number[]): Tilemap.TileType[];
        public createTileTypesByRange(cellStart: number, range: number): Tilemap.TileType[];
        public setCell(type: number, cell: number): void;
        public setCellsByRange(typeStart: number, cellStart: number, range: number): void;
        public createNewLayer(name: string, atlas: Kiwi.Textures.TextureAtlas, data?: number[], w?: number, h?: number, x?: number, y?: number, tw?: number, th?: number): Tilemap.TileMapLayer;
        public createNewObjectLayer(): void;
        public createNewImageLayer(): void;
        public getLayerByName(name: string): Tilemap.TileMapLayer;
        public getLayer(num: number): Tilemap.TileMapLayer;
        public objType(): string;
    }
}
declare module Kiwi.GameObjects.Tilemap {
    class TileMapLayer extends Kiwi.Entity {
        constructor(tilemap: Tilemap.TileMap, name: string, atlas: Kiwi.Textures.TextureAtlas, data: number[], tw: number, th: number, x?: number, y?: number, w?: number, h?: number);
        public physics: Kiwi.Components.ArcadePhysics;
        public childType(): number;
        public objType(): string;
        public tilemap: Tilemap.TileMap;
        public properties: any;
        public width: number;
        public height: number;
        public tileWidth: number;
        public tileHeight: number;
        public atlas: Kiwi.Textures.TextureAtlas;
        public widthInPixels : number;
        public heightInPixels : number;
        private _data;
        public countTiles(type?: number): number;
        public tileData : number[];
        public getIndexFromXY(x: number, y: number): number;
        public getTileFromXY(x: number, y: number): Tilemap.TileType;
        public getIndexFromCoords(x: number, y: number): number;
        public getTileFromCoords(x: number, y: number): Tilemap.TileType;
        public getIndexesByType(type: number): number[];
        public setTile(x: number, y: number, tileType: number): boolean;
        public setTileByIndex(index: number, tileType: number): void;
        public randomizeTiles(types?: number[], x?: number, y?: number, width?: number, height?: number): void;
        public fill(type: number, x?: number, y?: number, width?: number, height?: number): void;
        public replaceTiles(typeA: number, typeB: number, x?: number, y?: number, width?: number, height?: number): void;
        public swapTiles(typeA: number, typeB: number, x?: number, y?: number, width?: number, height?: number): void;
        public getOverlappingTiles(entity: Kiwi.Entity, collisionType?: number): any;
        public getCollidableTiles(x?: number, y?: number, width?: number, height?: number, collisionType?: number): any;
        public update(): void;
        private _maxX;
        private _maxY;
        private _startX;
        private _startY;
        private _temptype;
        private _calculateBoundaries(camera, matrix);
        public render(camera: Kiwi.Camera): boolean;
        public renderGL(gl: WebGLRenderingContext, camera: Kiwi.Camera, params?: any): void;
    }
}
declare module Kiwi.Geom {
    class AABB {
        constructor(cx: number, cy: number, width: number, height: number);
        public objType(): string;
        public cx: number;
        public cy: number;
        public halfWidth: number;
        public halfHeight: number;
        public height : number;
        public width : number;
        public draw(ctx: CanvasRenderingContext2D): AABB;
        public setPosition(cx: number, cy: number): AABB;
        public setPositionPoint(pos: Geom.Point): AABB;
        public toRect(): Geom.Rectangle;
        public fromRect(rect: Geom.Rectangle): AABB;
    }
}
declare module Kiwi.Geom {
    class Circle {
        constructor(x?: number, y?: number, diameter?: number);
        public objType(): string;
        private _diameter;
        private _radius;
        public x: number;
        public y: number;
        public diameter : number;
        public radius : number;
        public circumference : number;
        public bottom : number;
        public left : number;
        public right : number;
        public top : number;
        public area : number;
        public isEmpty : boolean;
        public clone(output?: Circle): Circle;
        public copyFrom(source: Circle): Circle;
        public copyTo(target: Circle): Circle;
        public distanceTo(target: any, round?: boolean): number;
        public equals(toCompare: Circle): boolean;
        public intersects(toIntersect: Circle): boolean;
        public circumferencePoint(angle: number, asDegrees?: boolean, output?: Geom.Point): Geom.Point;
        public offset(dx: number, dy: number): Circle;
        public offsetPoint(point: Geom.Point): Circle;
        public setTo(x: number, y: number, diameter: number): Circle;
        public toString(): string;
    }
}
declare module Kiwi.Geom {
    class Ray {
        constructor(x1?: number, y1?: number, x2?: number, y2?: number);
        public objType(): string;
        public x1: number;
        public y1: number;
        public x2: number;
        public y2: number;
        public clone(output?: Ray): Ray;
        public copyFrom(source: Ray): Ray;
        public copyTo(target: Ray): Ray;
        public setTo(x1?: number, y1?: number, x2?: number, y2?: number): Ray;
        public angle : number;
        public slope : number;
        public yIntercept : number;
        public isPointOnRay(x: number, y: number): boolean;
        public toString(): string;
    }
}
declare module Kiwi.Geom {
    class Intersect {
        public objType(): string;
        static distance(x1: number, y1: number, x2: number, y2: number): number;
        static distanceSquared(x1: number, y1: number, x2: number, y2: number): number;
        static lineToLine(line1: Geom.Line, line2: Geom.Line, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineToLineSegment(line1: Geom.Line, seg: Geom.Line, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineToRawSegment(line: Geom.Line, x1: number, y1: number, x2: number, y2: number, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineToRay(line1: Geom.Line, ray: Geom.Ray, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineToCircle(line: Geom.Line, circle: Geom.Circle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineToRectangle(line: any, rect: Geom.Rectangle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineSegmentToLineSegment(line1: Geom.Line, line2: Geom.Line, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineSegmentToRay(line1: Geom.Line, ray: Geom.Ray, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineSegmentToCircle(seg: Geom.Line, circle: Geom.Circle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static lineSegmentToRectangle(seg: Geom.Line, rect: Geom.Rectangle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static rayToRectangle(ray: Geom.Ray, rect: Geom.Rectangle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static rayToLineSegment(rayx1: any, rayy1: any, rayx2: any, rayy2: any, linex1: any, liney1: any, linex2: any, liney2: any, output?: Geom.IntersectResult): Geom.IntersectResult;
        static circleToCircle(circle1: Geom.Circle, circle2: Geom.Circle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static circleToRectangle(circle: Geom.Circle, rect: Geom.Rectangle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static circleContainsPoint(circle: Geom.Circle, point: Geom.Point, output?: Geom.IntersectResult): Geom.IntersectResult;
        static pointToRectangle(point: Geom.Point, rect: Geom.Rectangle, output?: Geom.IntersectResult): Geom.IntersectResult;
        static rectangleToRectangle(rect1: Geom.Rectangle, rect2: Geom.Rectangle, output?: Geom.IntersectResult): Geom.IntersectResult;
    }
}
declare module Kiwi.Geom {
    class IntersectResult {
        public objType(): string;
        public result: boolean;
        public x: number;
        public y: number;
        public x1: number;
        public y1: number;
        public x2: number;
        public y2: number;
        public width: number;
        public height: number;
        public setTo(x1: number, y1: number, x2?: number, y2?: number, width?: number, height?: number): void;
    }
}
declare module Kiwi.Geom {
    class Line {
        constructor(x1?: number, y1?: number, x2?: number, y2?: number);
        public objType(): string;
        public x1: number;
        public y1: number;
        public x2: number;
        public y2: number;
        public clone(output?: Line): Line;
        public copyFrom(source: Line): Line;
        public copyTo(target: Line): Line;
        public setTo(x1?: number, y1?: number, x2?: number, y2?: number): Line;
        public length : number;
        public getY(x: number): number;
        public angle : number;
        public slope : number;
        public perpSlope : number;
        public yIntercept : number;
        public isPointOnLine(x: number, y: number): boolean;
        public isPointOnLineSegment(x: number, y: number): boolean;
        public intersectLineLine(line: any): Geom.IntersectResult;
        public perp(x: number, y: number, output?: Line): Line;
        public toString(): string;
    }
}
declare module Kiwi.Geom {
    class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        public objType(): string;
        public a: number;
        public b: number;
        public c: number;
        public d: number;
        public tx: number;
        public ty: number;
        public setTo(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix;
        public setFromTransform(tx: number, ty: number, scaleX: number, scaleY: number, rotation: number): Matrix;
        public prepend(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix;
        public prependMatrix(m: Matrix): Matrix;
        public append(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix;
        public appendMatrix(m: Matrix): Matrix;
        public setPosition(x: number, y: number): Matrix;
        public setPositionPoint(p: any): Matrix;
        public getPosition(output?: Geom.Point): Geom.Point;
        public identity(): Matrix;
        public rotate(radians: number): Matrix;
        public translate(tx: number, ty: number): Matrix;
        public scale(scaleX: number, scaleY: number): Matrix;
        public transformPoint(pt: any): any;
        public invert(): Matrix;
        public copyFrom(m: Matrix): Matrix;
        public copyTo(m: Matrix): Matrix;
        public clone(): Matrix;
        public toString : string;
    }
}
declare module Kiwi.Geom {
    class Point {
        constructor(x?: number, y?: number);
        public objType(): string;
        public x: number;
        public y: number;
        public polar(distance: number, angle: number): Point;
        public add(toAdd: Point, output?: Point): Point;
        public addTo(x?: number, y?: number): Point;
        public subtractFrom(x?: number, y?: number): Point;
        public invert(): Point;
        public clamp(min: number, max: number): Point;
        public clampX(min: number, max: number): Point;
        public clampY(min: number, max: number): Point;
        public clone(output?: Point): Point;
        public copyFrom(source: Point): Point;
        public copyTo(target: Point): Point;
        public angleTo(target: Point): number;
        public angleToXY(x: number, y: number): number;
        public distanceTo(target: Point, round?: boolean): number;
        public distanceToXY(x: number, y: number, round?: boolean): number;
        static distanceBetween(pointA: Point, pointB: Point, round?: boolean): number;
        static polar(length: number, angle: number): Point;
        public distanceCompare(target: Point, distance: number): boolean;
        public equals(toCompare: Point): boolean;
        static interpolate(pointA: Point, pointB: Point, f: number): Point;
        public offset(dx: number, dy: number): Point;
        public setTo(x: number, y: number): Point;
        public subtract(point: Point, output?: Point): Point;
        public getCSS(): string;
        public toString(): string;
    }
}
declare module Kiwi.Geom {
    class Rectangle {
        constructor(x?: number, y?: number, width?: number, height?: number);
        public objType(): string;
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public bottom : number;
        public center : Geom.Point;
        public bottomRight : Geom.Point;
        public left : number;
        public right : number;
        public size : Geom.Point;
        public volume : number;
        public perimeter : number;
        public top : number;
        public topLeft : Geom.Point;
        public clone(output?: Rectangle): Rectangle;
        public contains(x: number, y: number): boolean;
        public containsPoint(point: Geom.Point): boolean;
        public containsRect(rect: Rectangle): boolean;
        public copyFrom(source: Rectangle): Rectangle;
        public copyTo(target: Rectangle): Rectangle;
        public equals(toCompare: Rectangle): boolean;
        public inflate(dx: number, dy: number): Rectangle;
        public inflatePoint(point: Geom.Point): Rectangle;
        public intersection(toIntersect: Rectangle, output?: Rectangle): Rectangle;
        public intersects(toIntersect: Rectangle): boolean;
        public overlap(rect: Rectangle): any;
        public isEmpty(): boolean;
        public offset(dx: number, dy: number): Rectangle;
        public offsetPoint(point: Geom.Point): Rectangle;
        public setEmpty(): Rectangle;
        public setTo(x: number, y: number, width: number, height: number): Rectangle;
        public union(toUnion: Rectangle, output?: Rectangle): Rectangle;
        public scale(x: number, y: number, translation: Geom.Point): Rectangle;
        public toString(): string;
    }
}
declare module Kiwi.Geom {
    class Transform {
        constructor(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, rotPointX?: number, rotPointY?: number);
        public objType(): string;
        private _x;
        public x : number;
        private _y;
        public y : number;
        private _scaleX;
        public scaleX : number;
        private _scaleY;
        public scaleY : number;
        private _rotation;
        public rotation : number;
        private _rotPointX;
        public rotPointX : number;
        private _rotPointY;
        public rotPointY : number;
        private _matrix;
        public matrix : Geom.Matrix;
        private _cachedConcatenatedMatrix;
        public worldX : number;
        public worldY : number;
        private _parent;
        public parent : Transform;
        public setPosition(x: number, y: number): Transform;
        public setPositionFromPoint(point: Geom.Point): Transform;
        public translatePositionFromPoint(point: Geom.Point): Transform;
        public getPositionPoint(output?: Geom.Point): Geom.Point;
        public scale : number;
        public setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, rotPointX?: number, rotPointY?: number): Transform;
        public getParentMatrix(): Geom.Matrix;
        public getConcatenatedMatrix(): Geom.Matrix;
        public transformPoint(point: Geom.Point): Geom.Point;
        public copyFrom(source: Transform): Transform;
        public copyTo(destination: Transform): Transform;
        public clone(output?: Transform): Transform;
        public checkAncestor(transform: Transform): boolean;
        public toString : string;
    }
}
declare module Kiwi.Geom {
    class Vector2 {
        constructor(x?: number, y?: number);
        public objType(): string;
        public x: number;
        public y: number;
        static fromAngle(angle: number): Vector2;
        static randomRadius(radius: number): Vector2;
        static fromPoint(point: Geom.Point): Vector2;
        public add(vector2: Vector2): Vector2;
        public addX(vector2: Vector2): Vector2;
        public addY(vector2: Vector2): Vector2;
        public subtract(vector2: Vector2): Vector2;
        public multiply(vector2: Vector2): Vector2;
        public multiplyScalar(scalar: number): Vector2;
        public dot(vector2: Vector2): number;
        public lenSqr(): number;
        public len(): number;
        public unit(): Vector2;
        public floor(): Vector2;
        public ceil(): Vector2;
        public round(): Vector2;
        public clamp(min: Vector2, max: Vector2): Vector2;
        public perp(): Vector2;
        public neg(): Vector2;
        public equal(vector2: Vector2): boolean;
        public point(): Geom.Point;
        public clear(): Vector2;
        public clone(output?: Vector2): Vector2;
        public copyFrom(source: Vector2): Vector2;
        public copyTo(target: Vector2): Vector2;
        public setTo(x: number, y: number): Vector2;
        public toString(): string;
    }
}
declare module Kiwi.Geom {
    class Random {
        static randomPointCirclePerimeter(): Geom.Point;
        static randomPointCircle(): Geom.Point;
        static randomPointSquare(): Geom.Point;
        static randomPointSquarePerimeter(): Geom.Point;
    }
}
declare module Kiwi.HUD {
    class HUDDisplay {
        constructor(game: Kiwi.Game, name: string);
        public objType(): string;
        private _device;
        private _manager;
        public container: HTMLDivElement;
        public name: string;
        private _game;
        private _widgets;
        public addWidget(widget: HUD.HUDWidget): boolean;
        public removeWidget(widget: HUD.HUDWidget): boolean;
        public removeAllWidgets(): void;
        private removeFromContainer(widget);
        public update(): void;
        public show(): void;
        public hide(): void;
        public class : string;
    }
}
declare module Kiwi.HUD {
    class HUDManager {
        constructor(game: Kiwi.Game);
        private _game;
        private _device;
        private _supported;
        public supported : boolean;
        private _hudContainer;
        public boot(): void;
        public objType(): string;
        private _huds;
        private _defaultHUD;
        private _currentHUD;
        public defaultHUD : HUD.HUDDisplay;
        public setHUD(hud: HUD.HUDDisplay): void;
        public showHUD(hud?: HUD.HUDDisplay): void;
        public hideHUD(hud?: HUD.HUDDisplay): void;
        public createHUD(name: string, switchTo?: boolean): HUD.HUDDisplay;
        public removeHUD(hud: HUD.HUDDisplay): boolean;
        private addToContainer(hud);
        private removeFromContainer(hud);
        public update(): void;
    }
}
declare module Kiwi.HUD {
    class HUDWidget {
        constructor(game: Kiwi.Game, name: string, x: number, y: number);
        public objType(): string;
        public _manager: HUD.HUDManager;
        public _device: number;
        public game: Kiwi.Game;
        public style : any;
        public onCoordsUpdate: Kiwi.Signal;
        private _x;
        public x : number;
        private _y;
        public y : number;
        public components: Kiwi.ComponentManager;
        public container: HTMLDivElement;
        public name: string;
        public tempElement: HTMLElement;
        private _tempParent;
        private _tempContainer;
        public setTemplate(main: string, element?: string, ...paramsArr: any[]): void;
        public removeTemplate(): void;
        public class : string;
        public update(): void;
        public destroy(): void;
    }
}
declare module Kiwi.HUD.Widget {
    class TextField extends HUD.HUDWidget {
        constructor(game: Kiwi.Game, text: string, x: number, y: number);
        public objType(): string;
        private _text;
        private _textField;
        public setTemplate(main: string, field?: string): void;
        public removeTemplate(): void;
        public text : string;
        private _prefix;
        private _suffix;
        public suffix : string;
        public prefix : string;
        public _updateText(): void;
    }
}
declare module Kiwi.HUD.Widget {
    class Bar extends HUD.HUDWidget {
        constructor(game: Kiwi.Game, current: number, max: number, x: number, y: number, width?: number, height?: number, color?: string);
        public objType(): string;
        private _width;
        public width : number;
        private _height;
        public height : number;
        private _horizontal;
        public bar: HTMLElement;
        private _bar;
        public counter: HUD.HUDComponents.Counter;
        public horizontal : boolean;
        public vertical : boolean;
        public setTemplate(main: string, innerbar?: string): void;
        public removeTemplate(): void;
        public updateCSS(): void;
    }
}
declare module Kiwi.HUD.Widget {
    class Icon extends HUD.HUDWidget {
        constructor(game: Kiwi.Game, atlas: Kiwi.Textures.TextureAtlas, x: number, y: number);
        public atlas: Kiwi.Textures.TextureAtlas;
        private _cellIndex;
        public cellIndex : number;
        public width : number;
        public height : number;
        public icon: HTMLElement;
        public _removeCSS(): void;
        public _applyCSS(): void;
        public setTemplate(main: string, icon?: string): void;
        public removeTemplate(): void;
    }
}
declare module Kiwi.HUD.Widget {
    class IconBar extends HUD.HUDWidget {
        constructor(game: Kiwi.Game, atlas: Kiwi.Textures.TextureAtlas, current: number, max: number, x: number, y: number);
        public objType(): string;
        public iconGap: number;
        public atlas: Kiwi.Textures.TextureAtlas;
        private width;
        private height;
        private _horizontal;
        public counter: HUD.HUDComponents.Counter;
        private _icons;
        private _amountChanged();
        private _addIcon();
        private _removeIcon(icon);
        public horizontal : boolean;
        public vertical : boolean;
    }
}
declare module Kiwi.HUD.Widget {
    class BasicScore extends Widget.TextField {
        constructor(game: Kiwi.Game, x: number, y: number, initial?: number);
        public objType(): string;
        public counter: HUD.HUDComponents.Counter;
        public _updateText(): void;
    }
}
declare module Kiwi.HUD.Widget {
    class Button extends Widget.TextField {
        constructor(game: Kiwi.Game, text: string, x: number, y: number);
        public objType(): string;
        public input: HUD.HUDComponents.WidgetInput;
    }
}
declare module Kiwi.HUD.Widget {
    class Time extends Widget.TextField {
        constructor(game: Kiwi.Game, format: string, x: number, y: number);
        public time: HUD.HUDComponents.Time;
        public objType(): string;
        public pause(): void;
        public stop(): void;
        public start(): void;
        public resume(): void;
        public update(): void;
    }
}
declare module Kiwi.HUD.Widget {
    class Menu extends HUD.HUDWidget {
        constructor(game: Kiwi.Game, x: number, y: number);
        public objType(): string;
        private _menuItems;
        public setIconStyle(index: string, value: string): void;
        private _styles;
        public menuItems : Widget.MenuItem[];
        public createMenuItem(text: string, x: number, y: number): Widget.MenuItem;
        public addMenuItem(item: Widget.MenuItem): Widget.MenuItem;
        public addMenuItems(items: Widget.MenuItem[]): void;
        public getMenuItem(val: number): Widget.MenuItem;
        public setTemplate(main: string, sub?: string): void;
        public removeTemplate(): void;
        public update(): void;
    }
}
declare module Kiwi.HUD.Widget {
    class MenuItem extends Widget.Button {
        constructor(game: Kiwi.Game, text: string, x: number, y: number);
        public objType(): string;
        public menu: Widget.Menu;
    }
}
declare module Kiwi.HUD.HUDComponents {
    class Counter extends Kiwi.Component {
        constructor(owner: any, current: number, max?: number, min?: number);
        public objType(): string;
        private _current;
        private _max;
        private _min;
        public updated: Kiwi.Signal;
        public max : number;
        public min : number;
        public current : number;
        public decrease(val?: number): number;
        public increase(val?: number): number;
        public currentPercent(): number;
    }
}
declare module Kiwi.HUD.HUDComponents {
    class WidgetInput extends Kiwi.Component {
        constructor(owner: any, container: HTMLElement);
        public objType(): string;
        public onUp: Kiwi.Signal;
        public onDown: Kiwi.Signal;
        public onOver: Kiwi.Signal;
        public onOut: Kiwi.Signal;
        private _container;
        public setElement(container: HTMLElement): void;
        private _addEvents();
        private _removeEvents();
        private _binds;
        private _active;
        private _up(evt);
        private _down(evt);
        private _over(evt);
        private _out(evt);
    }
}
declare module Kiwi.HUD.HUDComponents {
    class Time extends Kiwi.Component {
        constructor(owner: any, format?: string);
        public objType(): string;
        public clock: Kiwi.Time.Clock;
        public isRunning : boolean;
        public pause(): void;
        public stop(): void;
        public start(): void;
        public resume(): void;
        private _format;
        public format : string;
        public countDown: boolean;
        private _displayString;
        private _currentTime;
        public currentTime : number;
        private _timeBefore;
        public setTime(milli: number, sec?: number, minutes?: number): void;
        public addTime(milli: number, sec?: number, minutes?: number): void;
        public removeTime(milli: number, sec?: number, minutes?: number): void;
        public speed: number;
        public getTime(): string;
    }
}
declare module Kiwi.Sound {
    class AudioManager {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _volume;
        private _muted;
        private _sounds;
        public channels: number;
        public noAudio: boolean;
        public usingWebAudio: boolean;
        public usingAudioTag: boolean;
        public context: any;
        public masterGain: any;
        private _muteVolume;
        private _locked;
        private _unlockedSource;
        public locked : boolean;
        public boot(): void;
        private _unlocked();
        public mute : boolean;
        public volume : number;
        public isRegistered(sound: Sound.Audio): boolean;
        public registerSound(sound: Sound.Audio): boolean;
        public add(key: string, volume?: number, loop?: boolean): Sound.Audio;
        public remove(sound: Sound.Audio, destroy?: boolean): void;
        public playAll(): void;
        public stopAll(): void;
        public pauseAll(): void;
        public resumeAll(destroy?: boolean): void;
        public update(): void;
    }
}
declare module Kiwi.Sound {
    class Audio {
        constructor(game: Kiwi.Game, key: string, volume: number, loop: boolean);
        public id: string;
        private _playable;
        public playable : boolean;
        public objType(): string;
        private _game;
        public context: any;
        public masterGainNode: any;
        public gainNode: any;
        private _usingAudioTag;
        private _usingWebAudio;
        private _muted;
        private _volume;
        private _loop;
        public key: string;
        private _file;
        private _sound;
        public ready: boolean;
        public totalDuration: number;
        public duration: number;
        private _buffer;
        private _decoded;
        private _muteVolume;
        public isPlaying: boolean;
        public paused: boolean;
        private _pending;
        private _startTime;
        private _currentTime;
        private _stopTime;
        private _markers;
        private _currentMarker;
        public onPlay: Kiwi.Signal;
        public onStop: Kiwi.Signal;
        public onPause: Kiwi.Signal;
        public onResume: Kiwi.Signal;
        public onLoop: Kiwi.Signal;
        public onMute: Kiwi.Signal;
        private _setAudio();
        private _decode();
        public volume : number;
        public mute : boolean;
        public addMarker(name: string, start: number, stop: number, loop?: boolean): void;
        public removeMarker(name: string): void;
        public play(marker?: string, forceRestart?: boolean): void;
        public stop(): void;
        public pause(): void;
        public resume(): void;
        public update(): void;
        public destroy(): void;
    }
}
declare module Kiwi.Sound {
    class AudioLibrary {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        public audio: any;
        public clear(): void;
        public rebuild(fileStore: Kiwi.Files.FileStore, state: Kiwi.State): void;
        public add(audioFile: Kiwi.Files.File): void;
    }
}
declare module Kiwi.Animations {
    class Animation {
        constructor(name: string, sequence: Animations.Sequence, clock: Kiwi.Time.Clock, parent: Kiwi.Components.AnimationManager);
        public objType(): string;
        private _parent;
        public name: string;
        private _sequence;
        private _loop;
        public loop : boolean;
        private _frameIndex;
        public frameIndex : number;
        public currentCell : number;
        private _speed;
        public speed : number;
        private _clock;
        private _startTime;
        private _reverse;
        public reverse : boolean;
        private _tick;
        private _isPlaying;
        public isPlaying : boolean;
        private _onStop;
        public onStop : Kiwi.Signal;
        private _onPlay;
        public onPlay : Kiwi.Signal;
        private _onUpdate;
        public onUpdate : Kiwi.Signal;
        private _onLoop;
        public onLoop : Kiwi.Signal;
        private _start(index?);
        public play(): void;
        public playAt(index: number): void;
        public pause(): void;
        public resume(): void;
        public stop(): void;
        public nextFrame(): void;
        public prevFrame(): void;
        public update(): void;
        private _validateFrame(frame);
        public length : number;
        public destroy(): void;
    }
}
declare module Kiwi.Animations {
    class Sequence {
        constructor(name: string, cells: number[], speed?: number, loop?: boolean);
        public name: string;
        public cells: number[];
        public speed: number;
        public loop: boolean;
    }
}
declare module Kiwi.Input {
    class Key {
        constructor(manager: Input.Keyboard, keycode: number, event?: KeyboardEvent);
        public preventDefault: boolean;
        public game: Kiwi.Game;
        public objType(): string;
        private _manager;
        public keyCode: number;
        public isDown: boolean;
        public isUp: boolean;
        public altKey: boolean;
        public ctrlKey: boolean;
        public shiftKey: boolean;
        public timeDown: number;
        public duration : number;
        public timeUp: number;
        public repeats: number;
        public update(event: KeyboardEvent): void;
        public justPressed(duration?: number): boolean;
        public justReleased(duration?: number): boolean;
        public reset(): void;
    }
}
declare module Kiwi.Input {
    class Keyboard {
        constructor(game: Kiwi.Game);
        public objType(): string;
        public game: Kiwi.Game;
        private _keys;
        public keys : Input.Key[];
        public justPressedRate: number;
        public justReleasedRate: number;
        public boot(): void;
        public update(): void;
        public onKeyUp: Kiwi.Signal;
        public onKeyDown: Kiwi.Signal;
        public onKeyDownOnce: Kiwi.Signal;
        public start(): void;
        public stop(): void;
        private _keyPressed(event);
        private _keyReleased(event);
        public addKey(keycode: number, preventDefault?: boolean): Input.Key;
        public justPressed(keycode: any, duration?: number): boolean;
        public justReleased(keycode: any, duration?: number): boolean;
        public isDown(keycode: number): boolean;
        public isUp(keycode: number): boolean;
        public reset(): void;
    }
}
declare module Kiwi.Input {
    class Keycodes {
        public objType(): string;
        static A: number;
        static B: number;
        static C: number;
        static D: number;
        static E: number;
        static F: number;
        static G: number;
        static H: number;
        static I: number;
        static J: number;
        static K: number;
        static L: number;
        static M: number;
        static N: number;
        static O: number;
        static P: number;
        static Q: number;
        static R: number;
        static S: number;
        static T: number;
        static U: number;
        static V: number;
        static W: number;
        static X: number;
        static Y: number;
        static Z: number;
        static ZERO: number;
        static ONE: number;
        static TWO: number;
        static THREE: number;
        static FOUR: number;
        static FIVE: number;
        static SIX: number;
        static SEVEN: number;
        static EIGHT: number;
        static NINE: number;
        static NUMPAD_0: number;
        static NUMPAD_1: number;
        static NUMPAD_2: number;
        static NUMPAD_3: number;
        static NUMPAD_4: number;
        static NUMPAD_5: number;
        static NUMPAD_6: number;
        static NUMPAD_7: number;
        static NUMPAD_8: number;
        static NUMPAD_9: number;
        static NUMPAD_MULTIPLY: number;
        static NUMPAD_ADD: number;
        static NUMPAD_ENTER: number;
        static NUMPAD_SUBTRACT: number;
        static NUMPAD_DECIMAL: number;
        static NUMPAD_DIVIDE: number;
        static F1: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static F10: number;
        static F11: number;
        static F12: number;
        static F13: number;
        static F14: number;
        static F15: number;
        static COLON: number;
        static EQUALS: number;
        static UNDERSCORE: number;
        static QUESTION_MARK: number;
        static TILDE: number;
        static OPEN_BRACKET: number;
        static BACKWARD_SLASH: number;
        static CLOSED_BRACKET: number;
        static QUOTES: number;
        static BACKSPACE: number;
        static TAB: number;
        static CLEAR: number;
        static ENTER: number;
        static SHIFT: number;
        static CONTROL: number;
        static ALT: number;
        static CAPS_LOCK: number;
        static ESC: number;
        static SPACEBAR: number;
        static PAGE_UP: number;
        static PAGE_DOWN: number;
        static END: number;
        static HOME: number;
        static LEFT: number;
        static UP: number;
        static RIGHT: number;
        static DOWN: number;
        static INSERT: number;
        static DELETE: number;
        static HELP: number;
        static NUM_LOCK: number;
    }
}
declare module Kiwi.Input {
    class InputManager {
        constructor(game: Kiwi.Game);
        public objType(): string;
        public onDown: Kiwi.Signal;
        public onUp: Kiwi.Signal;
        public game: Kiwi.Game;
        public mouse: Input.Mouse;
        public keyboard: Input.Keyboard;
        public touch: Input.Touch;
        private _pointers;
        public pointers : Input.Pointer[];
        public boot(): void;
        private _onDownEvent(x, y, timeDown, timeUp, duration, pointer);
        private _onUpEvent(x, y, timeDown, timeUp, duration, pointer);
        public onPressed : Kiwi.Signal;
        public onReleased : Kiwi.Signal;
        public update(): void;
        public reset(): void;
        public position: Kiwi.Geom.Point;
        public isDown: boolean;
        public x : number;
        public y : number;
    }
}
declare module Kiwi.Input {
    class Mouse {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _domElement;
        static LEFT_BUTTON: number;
        static MIDDLE_BUTTON: number;
        static RIGHT_BUTTON: number;
        public onDown: Kiwi.Signal;
        public onUp: Kiwi.Signal;
        public onWheel: Kiwi.Signal;
        private _cursor;
        public cursor : Input.MouseCursor;
        public boot(): void;
        public isDown : boolean;
        public isUp : boolean;
        public duration : number;
        public x : number;
        public y : number;
        public wheelDeltaX : number;
        public wheelDeltaY : number;
        public ctrlKey : boolean;
        public shiftKey : boolean;
        public altKey : boolean;
        public button : number;
        public update(): void;
        public start(): void;
        public stop(): void;
        private onMouseDown(event);
        private onMouseMove(event);
        private onMouseUp(event);
        private onMouseWheel(event);
        public justPressed(duration?: number): boolean;
        public justReleased(duration?: number): boolean;
        public reset(): void;
    }
}
declare module Kiwi.Input {
    class Touch {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _domElement;
        private _fingers;
        public fingers : Input.Finger[];
        public finger1: Input.Finger;
        public finger2: Input.Finger;
        public finger3: Input.Finger;
        public finger4: Input.Finger;
        public finger5: Input.Finger;
        public finger6: Input.Finger;
        public finger7: Input.Finger;
        public finger8: Input.Finger;
        public finger9: Input.Finger;
        public finger10: Input.Finger;
        public latestFinger: Input.Finger;
        public isDown: boolean;
        public isUp: boolean;
        public touchDown: Kiwi.Signal;
        public touchUp: Kiwi.Signal;
        public touchCancel: Kiwi.Signal;
        public boot(): void;
        public start(): void;
        private consumeTouchMove(event);
        public x : number;
        public y : number;
        private _maxPointers;
        public maximumPointers : number;
        private onTouchStart(event);
        private onTouchCancel(event);
        private onTouchEnter(event);
        private onTouchLeave(event);
        private onTouchMove(event);
        private onTouchEnd(event);
        public update(): void;
        public stop(): void;
        public reset(): void;
    }
}
declare module Kiwi.Input {
    class Pointer {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        public game : Kiwi.Game;
        public id: number;
        public x: number;
        public y: number;
        public clientX: number;
        public clientY: number;
        public pageX: number;
        public pageY: number;
        public screenX: number;
        public screenY: number;
        public point: Kiwi.Geom.Point;
        public circle: Kiwi.Geom.Circle;
        public isDown: boolean;
        public isUp: boolean;
        public withinGame: boolean;
        public active: boolean;
        public timeDown: number;
        public timeUp: number;
        public duration: number;
        public frameDuration: number;
        public justPressedRate: number;
        public justReleasedRate: number;
        public startPoint: Kiwi.Geom.Point;
        public endPoint: Kiwi.Geom.Point;
        public start(event: any): void;
        public stop(event: any): void;
        public move(event: any): void;
        public justPressed(duration?: number): boolean;
        public justReleased(duration?: number): boolean;
        public reset(): void;
        public update(): void;
    }
}
declare module Kiwi.Input {
    class MouseCursor extends Input.Pointer {
        public objType(): string;
        public wheelDeltaX: number;
        public wheelDeltaY: number;
        public ctrlKey: boolean;
        public shiftKey: boolean;
        public altKey: boolean;
        public button: number;
        public start(event: any): void;
        public stop(event: any): void;
        public wheel(event: any): void;
    }
}
declare module Kiwi.Input {
    class Finger extends Input.Pointer {
        constructor(game: Kiwi.Game);
        public objType(): string;
        public start(event: any): void;
        public stop(event: any): void;
        public leave(event: any): void;
        public reset(): void;
    }
}
interface IRenderManager {
    render(camera: Kiwi.Camera): any;
    boot(): any;
    initState(state: Kiwi.State): any;
    endState(state: Kiwi.State): any;
    numDrawCalls: number;
    requestRendererInstance(rendererID: string, params?: any): any;
    requestSharedRenderer(rendererID: string, params?: any): any;
}
declare module Kiwi.Renderers {
    class CanvasRenderer implements IRenderManager {
        constructor(game: Kiwi.Game);
        public boot(): void;
        public objType(): string;
        private _game;
        private _currentCamera;
        public _recurse(child: Kiwi.IChild): void;
        public requestRendererInstance(rendererID: string, params?: any): Renderers.Renderer;
        public requestSharedRenderer(rendererID: string, params?: any): Renderers.Renderer;
        public initState(state: Kiwi.State): void;
        public endState(state: Kiwi.State): void;
        public numDrawCalls: number;
        public render(camera: Kiwi.Camera): void;
    }
}
declare var mat2d: any, mat3: any, vec2: any, vec3: any, mat4: any;
declare module Kiwi.Renderers {
    class GLRenderManager implements IRenderManager {
        constructor(game: Kiwi.Game);
        public boot(): void;
        public objType(): string;
        private _game;
        private _textureManager;
        private _shaderManager;
        private _stageResolution;
        private _currentRenderer;
        private _cameraOffset;
        private _entityCount;
        public numDrawCalls: number;
        private _maxItems;
        public mvMatrix: Float32Array;
        private _currentTextureAtlas;
        public addTexture(gl: WebGLRenderingContext, atlas: Kiwi.Textures.TextureAtlas): void;
        private _sharedRenderers;
        public addSharedRenderer(rendererID: string, params?: any): boolean;
        public requestSharedRenderer(rendererID: string, params?: any): Renderers.Renderer;
        public requestRendererInstance(rendererID: string, params?: any): Renderers.Renderer;
        private _init();
        public initState(state: Kiwi.State): void;
        public endState(state: Kiwi.State): void;
        public render(camera: Kiwi.Camera): void;
        private _recurse(gl, child, camera);
        private _processEntity(gl, entity, camera);
        private _flushBatch(gl);
        private _switchRenderer(gl, entity);
        private _switchTexture(gl, entity);
    }
}
declare module Kiwi.Shaders {
    class ShaderManager {
        constructor();
        private _shaderPairs;
        public currentShader : Shaders.ShaderPair;
        private _currentShader;
        public init(gl: WebGLRenderingContext, defaultShaderID: string): void;
        public requestShader(gl: WebGLRenderingContext, shaderID: string): Shaders.ShaderPair;
        public shaderExists(gl: WebGLRenderingContext, shaderID: string): boolean;
        private _addShader(gl, shaderID);
        private _loadShader(gl, shader);
        private _useShader(gl, shader);
    }
}
declare module Kiwi.Renderers {
    class GLTextureWrapper {
        constructor(gl: WebGLRenderingContext, atlas: Kiwi.Textures.TextureAtlas, upload?: boolean);
        public textureAtlas: Kiwi.Textures.TextureAtlas;
        private _numBytes;
        public numBytes : number;
        private _created;
        public created : boolean;
        private _uploaded;
        public uploaded : boolean;
        public texture: WebGLTexture;
        public image: HTMLImageElement;
        public createTexture(gl: WebGLRenderingContext): boolean;
        public uploadTexture(gl: WebGLRenderingContext): boolean;
        public refreshTexture(gl: WebGLRenderingContext): void;
        public deleteTexture(gl: WebGLRenderingContext): boolean;
    }
}
declare module Kiwi.Renderers {
    class GLTextureManager {
        constructor();
        static DEFAULT_MAX_TEX_MEM_MB: number;
        public maxTextureMem: number;
        private _usedTextureMem;
        public usedTextureMem : number;
        private _numTexturesUsed;
        public numTexturesUsed : number;
        public numTextureWrites: number;
        private _textureWrapperCache;
        private _addTextureToCache(glTexture);
        private _deleteTexture(gl, idx);
        private _uploadTexture(gl, glTextureWrapper);
        public uploadTextureLibrary(gl: WebGLRenderingContext, textureLibrary: Kiwi.Textures.TextureLibrary): void;
        public uploadTexture(gl: WebGLRenderingContext, textureAtlas: Kiwi.Textures.TextureAtlas): void;
        public clearTextures(gl: WebGLRenderingContext): void;
        public useTexture(gl: WebGLRenderingContext, glTextureWrapper: Renderers.GLTextureWrapper): boolean;
        private _freeSpace(gl, numBytesToRemove);
    }
}
declare module Kiwi.Renderers {
    class GLArrayBuffer {
        constructor(gl: WebGLRenderingContext, _itemSize?: number, items?: number[], upload?: boolean);
        private _created;
        public created : boolean;
        private _uploaded;
        public uploaded : boolean;
        public items: number[];
        public buffer: WebGLBuffer;
        public itemSize: number;
        public numItems: number;
        public clear(): void;
        public createBuffer(gl: WebGLRenderingContext): boolean;
        public uploadBuffer(gl: WebGLRenderingContext, items: number[]): boolean;
        public deleteBuffer(gl: WebGLRenderingContext): boolean;
        static squareVertices: number[];
        static squareUVs: number[];
        static squareCols: number[];
    }
}
declare module Kiwi.Renderers {
    class GLElementArrayBuffer {
        constructor(gl: WebGLRenderingContext, _itemSize?: number, _indices?: number[], init?: boolean);
        public indices: number[];
        public buffer: WebGLBuffer;
        public itemSize: number;
        public numItems: number;
        public clear(): void;
        public init(gl: WebGLRenderingContext): WebGLBuffer;
        public refresh(gl: WebGLRenderingContext, indices: number[]): WebGLBuffer;
        static square: number[];
    }
}
declare module Kiwi.Renderers {
    class Renderer {
        constructor(gl: WebGLRenderingContext, shaderManager: Kiwi.Shaders.ShaderManager);
        static RENDERER_ID: string;
        public mvMatrix: Float32Array;
        public loaded: boolean;
        public shaderManager: Kiwi.Shaders.ShaderManager;
        public enable(gl: WebGLRenderingContext, params?: any): void;
        public disable(gl: WebGLRenderingContext): void;
        public clear(gl: WebGLRenderingContext, params: any): void;
        public draw(gl: WebGLRenderingContext): void;
        public updateStageResolution(gl: WebGLRenderingContext, res: Float32Array): void;
        public updateTextureSize(gl: WebGLRenderingContext, size: Float32Array): void;
    }
}
declare module Kiwi.Renderers {
    class TextureAtlasRenderer extends Renderers.Renderer {
        constructor(gl: WebGLRenderingContext, shaderManager: Kiwi.Shaders.ShaderManager, params?: any);
        static RENDERER_ID: string;
        public enable(gl: WebGLRenderingContext, params?: any): void;
        public disable(gl: WebGLRenderingContext): void;
        public shaderPair: Kiwi.Shaders.TextureAtlasShader;
        public clear(gl: WebGLRenderingContext, params: any): void;
        public draw(gl: WebGLRenderingContext): void;
        private _maxItems;
        public xyuvBuffer: Renderers.GLArrayBuffer;
        public indexBuffer: Renderers.GLElementArrayBuffer;
        public alphaBuffer: Renderers.GLArrayBuffer;
        private _generateIndices(numQuads);
        public updateStageResolution(gl: WebGLRenderingContext, res: Float32Array): void;
        public updateTextureSize(gl: WebGLRenderingContext, size: Float32Array): void;
        public addToBatch(gl: WebGLRenderingContext, entity: Kiwi.Entity, camera: Kiwi.Camera): void;
        public concatBatch(xyuvItems: number[], alphaItems: number[]): void;
    }
}
declare module Kiwi.Shaders {
    class ShaderPair {
        constructor();
        static RENDERER_ID: string;
        public init(gl: WebGLRenderingContext): void;
        public loaded: boolean;
        public vertShader: WebGLShader;
        public fragShader: WebGLShader;
        public shaderProgram: WebGLProgram;
        public attach(gl: WebGLRenderingContext, vertShader: WebGLShader, fragShader: WebGLShader): WebGLProgram;
        public compile(gl: WebGLRenderingContext, src: string, shaderType: number): WebGLShader;
        public fragSource: any[];
        public vertSource: any[];
    }
}
declare module Kiwi.Shaders {
    class TextureAtlasShader extends Shaders.ShaderPair {
        constructor();
        public init(gl: WebGLRenderingContext): void;
        public attributes: any;
        public uniforms: any;
        public fragSource: string[];
        public vertSource: string[];
    }
}
declare module Kiwi.System {
    class Bootstrap {
        private _callback;
        private _domParent;
        private _createContainer;
        public isReady: boolean;
        public container: HTMLDivElement;
        public input: HTMLDivElement;
        public objType(): string;
        public boot(domParent: string, callback?: any, createContainer?: boolean): void;
        public ready(): void;
        private _setupContainer(id?);
    }
}
declare module Kiwi.System {
    class Browser {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        public boot(): void;
        public getOffsetPoint(element: any, output?: Kiwi.Geom.Point): Kiwi.Geom.Point;
    }
}
declare module Kiwi.System {
    class Device {
        constructor();
        public objType(): string;
        public iOS: boolean;
        public android: boolean;
        public chromeOS: boolean;
        public linux: boolean;
        public macOS: boolean;
        public windows: boolean;
        public canvas: boolean;
        public file: boolean;
        public fileSystem: boolean;
        public localStorage: boolean;
        public webGL: boolean;
        public worker: boolean;
        public blob: boolean;
        public touch: boolean;
        public css3D: boolean;
        public arora: boolean;
        public chrome: boolean;
        public epiphany: boolean;
        public firefox: boolean;
        public ie: boolean;
        public ieVersion: number;
        public mobileSafari: boolean;
        public midori: boolean;
        public opera: boolean;
        public safari: boolean;
        public webApp: boolean;
        public audioData: boolean;
        public webaudio: boolean;
        public ogg: boolean;
        public mp3: boolean;
        public wav: boolean;
        public m4a: boolean;
        public iPhone: boolean;
        public iPhone4: boolean;
        public iPad: boolean;
        public pixelRatio: number;
        private _checkOS();
        private _checkFeatures();
        private _checkBrowser();
        private _checkAudio();
        private _checkDevice();
        private _checkCSS3D();
        public getAll(): string;
    }
}
declare module Kiwi.Textures {
    class TextureAtlas {
        constructor(name: string, type: number, cells: any, image: any, sequences?: Kiwi.Animations.Sequence[]);
        public objType(): string;
        public name: string;
        public dirty: boolean;
        public image: any;
        public cells: any;
        public sequences: Kiwi.Animations.Sequence[];
        public cellIndex: number;
        private _type;
        static SINGLE_IMAGE: number;
        static SPRITE_SHEET: number;
        static TEXTURE_ATLAS: number;
        public type : number;
        public glTextureWrapper: Kiwi.Renderers.GLTextureWrapper;
        public readJSON(atlasJSON: any): void;
    }
}
declare module Kiwi.Textures {
    class TextureLibrary {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        public textures: any;
        public clear(): void;
        public add(atlas: Textures.TextureAtlas): void;
        public addFromFile(imageFile: Kiwi.Files.File): void;
        private _rebuildImage(imageFile);
        private _buildTextureAtlas(imageFile);
        private _buildSpriteSheet(imageFile);
        private _buildImage(imageFile);
        public rebuild(fileStore: Kiwi.Files.FileStore, state: Kiwi.State): void;
    }
}
declare module Kiwi.Textures {
    class SpriteSheet extends Textures.TextureAtlas {
        constructor(name: string, texture: any, cellWidth: number, cellHeight: number, numCells?: number, rows?: number, cols?: number, sheetOffsetX?: number, sheetOffsetY?: number, cellOffsetX?: number, cellOffsetY?: number);
        public objType(): string;
        private cellWidth;
        private cellHeight;
        private numCells;
        private _rows;
        public rows : number;
        private _cols;
        public cols : number;
        private sheetOffsetX;
        private sheetOffsetY;
        private cellOffsetX;
        private cellOffsetY;
        public generateAtlasCells(): any[];
    }
}
declare module Kiwi.Textures {
    class SingleImage extends Textures.TextureAtlas {
        constructor(name: string, image: any, width?: number, height?: number, offsetX?: number, offsetY?: number);
        public objType(): string;
        private width;
        private height;
        private offsetX;
        private offsetY;
        public generateAtlasCells(): any[];
    }
}
declare module Kiwi.Time {
    class Clock {
        constructor(manager: Time.ClockManager, master: Time.MasterClock, name: string, units?: number);
        public objType(): string;
        private timers;
        private _timeFirstStarted;
        public elapsedSinceFirstStarted(): number;
        private _timeLastStarted;
        public started(): number;
        public elapsed(): number;
        private _timeLastStopped;
        public elapsedSinceLastStopped(): number;
        private _timeLastPaused;
        public elapsedSinceLastPaused(): number;
        private _timeLastUnpaused;
        public elapsedSinceLastUnpaused(): number;
        private _totalPaused;
        private _isRunning;
        public isRunning(): boolean;
        private _isStopped;
        public isStopped(): boolean;
        private _isPaused;
        public isPaused(): boolean;
        private _elapsedState;
        public manager: Time.ClockManager;
        public master: Time.MasterClock;
        public name: string;
        public units: number;
        public addTimer(timer: Time.Timer): Clock;
        public createTimer(name: string, delay?: number, repeatCount?: number, start?: boolean): Time.Timer;
        public removeTimer(timer?: Time.Timer, timerName?: string): boolean;
        public checkExists(name: string): boolean;
        public stopAllTimers(): Clock;
        public convertToMilliseconds(time: number): number;
        public update(): void;
        public start(): Clock;
        public pause(): Clock;
        public resume(): Clock;
        public stop(): Clock;
        public toString(): string;
    }
}
declare module Kiwi.Time {
    class ClockManager {
        constructor(game: Kiwi.Game);
        public objType(): string;
        private _game;
        private _clocks;
        private master;
        public clock: Time.Clock;
        public boot(): void;
        public addClock(name: string, units?: number): Time.Clock;
        public getClock(name: string): Time.Clock;
        public update(): void;
        public now(): number;
        public delta(): number;
    }
}
declare module Kiwi.Time {
    class MasterClock {
        constructor();
        public objType(): string;
        private _started;
        public time: number;
        public now: number;
        public delta: number;
        public elapsed(): number;
        public totalElapsedSeconds(): number;
        public update(): void;
        public elapsedSince(since: number): number;
        public elapsedSecondsSince(since: number): number;
        public reset(): void;
    }
}
declare module Kiwi.Time {
    class Timer {
        constructor(name: string, clock: Time.Clock, delay: number, repeatCount?: number);
        public objType(): string;
        private _currentCount;
        public currentCount(): number;
        private _startEvents;
        private _countEvents;
        private _stopEvents;
        private _clock;
        private _timeLastCount;
        private _isRunning;
        public isRunning(): boolean;
        private _isStopped;
        public isStopped(): boolean;
        private _isPaused;
        public isPaused(): boolean;
        public name: string;
        public delay: number;
        public repeatCount: number;
        private processEvents(type);
        public update(): void;
        public start(): Timer;
        public stop(): Timer;
        public pause(): Timer;
        public resume(): Timer;
        public addTimerEvent(event: Time.TimerEvent): Time.TimerEvent;
        public createTimerEvent(type: number, callback: any, context: any): Time.TimerEvent;
        public removeTimerEvent(event: Time.TimerEvent): boolean;
        public clear(type?: number): void;
        public toString(): string;
    }
}
declare module Kiwi.Time {
    class TimerEvent {
        constructor(type: number, callback: any, context: any);
        public objType(): string;
        static TIMER_START: number;
        static TIMER_COUNT: number;
        static TIMER_STOP: number;
        private _callback;
        private _callbackContext;
        public type: number;
        public run(): void;
    }
}
declare module Kiwi.Utils {
    class Canvas {
        constructor(width: number, height: number, visible?: boolean, offScreen?: boolean);
        private _width;
        public width : number;
        private _height;
        public height : number;
        public objType(): string;
        public domElement: HTMLCanvasElement;
        public context: CanvasRenderingContext2D;
        private _visible;
        private _offScreen;
        private _clearMode;
        static CLEARMODE_NONE: number;
        static CLEARMODE_CLEARRECT: number;
        static CLEARMODE_FILLRECT: number;
        static CLEARMODE_FILLRECT_ALPHA: number;
        public bgColor: string;
        private _updatedSize();
        public destroy(): void;
        public visible : boolean;
        public clearMode : number;
        public clear(): void;
        public saveAsPNG(): string;
        public toString(): string;
    }
}
declare module Kiwi.Utils {
    class Common {
        static defaultCompare(a: any, b: any): number;
        public objType(): string;
        static defaultEquals(a: any, b: any): boolean;
        static defaultTostring(item: any): any;
        static isFunction(func: any): boolean;
        static isNumeric(value: any): boolean;
        static isUndefined(obj: any): boolean;
        static isString(obj: any): boolean;
        static reverseCompareFunction(compareFunction: any): (a: any, b: any) => number;
        static compareToEquals(compareFunction: any): (a: any, b: any) => boolean;
        static shuffleArray(array: any): any;
        static base2Sizes: number[];
        static convertToBase2(image: any): any;
    }
}
declare module Kiwi.Utils {
    class GameMath {
        public objType(): string;
        static PI: number;
        static PI_2: number;
        static PI_4: number;
        static PI_8: number;
        static PI_16: number;
        static TWO_PI: number;
        static THREE_PI_2: number;
        static E: number;
        static LN10: number;
        static LN2: number;
        static LOG10E: number;
        static LOG2E: number;
        static SQRT1_2: number;
        static SQRT2: number;
        static DEG_TO_RAD: number;
        static RAD_TO_DEG: number;
        static B_16: number;
        static B_31: number;
        static B_32: number;
        static B_48: number;
        static B_53: number;
        static B_64: number;
        static ONE_THIRD: number;
        static TWO_THIRDS: number;
        static ONE_SIXTH: number;
        static COS_PI_3: number;
        static SIN_2PI_3: number;
        static CIRCLE_ALPHA: number;
        static ON: boolean;
        static OFF: boolean;
        static SHORT_EPSILON: number;
        static PERC_EPSILON: number;
        static EPSILON: number;
        static LONG_EPSILON: number;
        static computeMachineEpsilon(): number;
        static fuzzyEqual(a: number, b: number, epsilon?: number): boolean;
        static fuzzyLessThan(a: number, b: number, epsilon?: number): boolean;
        static fuzzyGreaterThan(a: number, b: number, epsilon?: number): boolean;
        static fuzzyCeil(val: number, epsilon?: number): number;
        static fuzzyFloor(val: number, epsilon?: number): number;
        static average(...args: any[]): number;
        static slam(value: number, target: number, epsilon?: number): number;
        static percentageMinMax(val: number, max: number, min?: number): number;
        static sign(n: number): number;
        static truncate(n: number): number;
        static shear(n: number): number;
        static wrap(val: number, max: number, min?: number): number;
        static arithWrap(value: number, max: number, min?: number): number;
        static clamp(input: number, max: number, min?: number): number;
        static snapTo(input: number, gap: number, start?: number): number;
        static snapToFloor(input: number, gap: number, start?: number): number;
        static snapToCeil(input: number, gap: number, start?: number): number;
        static snapToInArray(input: number, arr: number[], sort?: boolean): number;
        static roundTo(value: number, place?: number, base?: number): number;
        static floorTo(value: number, place?: number, base?: number): number;
        static ceilTo(value: number, place?: number, base?: number): number;
        static interpolateFloat(a: number, b: number, weight: number): number;
        static radiansToDegrees(angle: number): number;
        static degreesToRadians(angle: number): number;
        static angleBetween(x1: number, y1: number, x2: number, y2: number): number;
        static normalizeAngle(angle: number, radians?: boolean): number;
        static nearestAngleBetween(a1: number, a2: number, radians?: boolean): number;
        static normalizeAngleToAnother(dep: number, ind: number, radians?: boolean): number;
        static normalizeAngleAfterAnother(dep: number, ind: number, radians?: boolean): number;
        static normalizeAngleBeforeAnother(dep: number, ind: number, radians?: boolean): number;
        static interpolateAngles(a1: number, a2: number, weight: number, radians?: boolean, ease?: any): number;
        static logBaseOf(value: number, base: number): number;
        static GCD(m: number, n: number): number;
        static LCM(m: number, n: number): number;
        static factorial(value: number): number;
        static gammaFunction(value: number): number;
        static fallingFactorial(base: number, exp: number): number;
        static risingFactorial(base: number, exp: number): number;
        static binCoef(n: number, k: number): number;
        static risingBinCoef(n: number, k: number): number;
        static chanceRoll(chance?: number): boolean;
        static maxAdd(value: number, amount: number, max: number): number;
        static minSub(value: number, amount: number, min: number): number;
        static wrapValue(value: number, amount: number, max: number): number;
        static randomSign(): number;
        static isOdd(n: number): boolean;
        static isEven(n: number): boolean;
        static wrapAngle(angle: number): number;
        static angleLimit(angle: number, min: number, max: number): number;
        static linearInterpolation(v: any, k: any): number;
        static bezierInterpolation(v: any, k: any): number;
        static catmullRomInterpolation(v: any, k: any): number;
        static linear(p0: any, p1: any, t: any): number;
        static bernstein(n: any, i: any): number;
        static catmullRom(p0: any, p1: any, p2: any, p3: any, t: any): any;
        static difference(a: number, b: number): number;
    }
}
declare module Kiwi.Utils {
    class RandomDataGenerator {
        constructor(seeds?: string[]);
        public objType(): string;
        private s0;
        private s1;
        private s2;
        private c;
        private _data;
        private uint32();
        private fract32();
        private rnd();
        private hash(data);
        public sow(seeds?: string[]): void;
        public integer(): number;
        public frac(): number;
        public real(): number;
        public integerInRange(min: number, max: number): number;
        public realInRange(min: number, max: number): number;
        public normal(): number;
        public uuid(): string;
        public pick(array: any): any;
        public weightedPick(array: any): any;
        public word(): string;
        public words(quantity?: number): string;
        public sentence(): String;
        public sentences(quantity?: number): string;
        public timestamp(min?: number, max?: number): number;
        public angle(): number;
    }
}
declare module Kiwi.Utils {
    class RequestAnimationFrame {
        constructor(callback: any);
        public objType(): string;
        private _callback;
        public setCallback(callback: any): void;
        private _timeOutID;
        private _isSetTimeOut;
        public isUsingSetTimeOut(): boolean;
        public isUsingRAF(): boolean;
        public lastTime: number;
        public currentTime: number;
        public isRunning: boolean;
        public start(callback?: any): void;
        public stop(): void;
        public RAFUpdate(): void;
        public SetTimeoutUpdate(): void;
    }
}
declare module Kiwi {
    var VERSION: string;
    var RENDERER_CANVAS: number;
    var RENDERER_WEBGL: number;
    var TARGET_BROWSER: number;
    var TARGET_COCOON: number;
    var DEBUG_ON: number;
    var DEBUG_OFF: number;
    var DEVICE: System.Device;
    var STATE: number;
    var GROUP: number;
    var ENTITY: number;
    var CAMERA: number;
    var HUD_WIDGET: number;
    var TILE_LAYER: number;
    class GameManager {
        public objType(): string;
        private static _games;
        static register(game: Kiwi.Game): number;
        static total(): number;
    }
    var Plugins: {};
    var extend: Function;
}
