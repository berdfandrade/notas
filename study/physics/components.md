# Deciding on the components 

When using 2D, manu different and elaborate effects can be emulated or faked, as long as you have adequate handling of the engine. When building your game, consider what components you need. Decide wich pueces you need to build out and which ones you can avoid forcing your engine to calculate completely. Things like point gravity, ilustrated below, are harder to fake, while smaller hit areas can be easily accomplished. 

#### Point gravity

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig02.gif

## Building a physics engine

This section discusss what makes up a physics engine and how to decide which features to include.

The first major step in building a physics engine is to choose the featuresand the order of operations.

The first major step in building a a physics engine is to choose the features and the order of operations. Deciding on the features may sem trivial, but the features help form the physics engine components and could indicate areas that might be difficult. For the example application, you'll build an engine to a game like the one shown below.

### Plataforming game

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig03.gif

*The box indicate:*

- Player: Box containing diagonal lines 
- Win condition, goal: Solid, black box
- Normal platform: Solid-line box 
- Bouncy platform: Dashed-line box 

Simple programmer graphics aside, you canvisualize the features of the game. Players win when they reach the win condition/goal. The game is a platformer, sou you'll need some of the mst basci build blocks of a physics engine.

- Velocity, acceleration and gravity 
- Collision detection 
- Bouncy collisions 
- Normal collisions 

The positional attributes will be used to drive the player. The collision detection will allow for the player to reach the goal and move around the game. The collision types will allow the game to have different ground types. By only having one player and essentially one dynamic object in the game, you can tone down the amount of collisions in the code.

Now that the game's features and the physics aspects of the features are identified, you can begin mapping out the physics engine structure.


