# Introdution 

2D games come in many different shapes and sizes. In somes cases, building your own 2D physics engine, which provides an approximate simulation of systems such as collision detection, is a good choice - especially when using JavaScript. Developing a robust physic engine for any platform is difficult, but often a simpler, concise engine is more suitable. If you're in need of a slimmed-down version of a popular physics engine, building one from scratch, withou all the bells and whutles, can get the job done efficiently.

In this article, explre one implementation of a physics engine to build thebasic framework of a platforming game. Use existing physics engines, such as Box2D, to compare with the example implementation. Code snippets show how the components interact. (...)

## Why simpler?

In game development, simpler can mean a lot of things. With a physics engine, simpler usually refers to the complexity of the calculations. Complexity becomes more relevant after you identify the lowest common denominator for your game. Complexity, in terms of calculation, means that the processing may take longer or that the math for the physics may be difficult. To follow along with this article, you will not need a working knowledge of calculus.

Since JavaScript works well with HTML5 canvas, you'll often see physics applied to a canvas-based game. In some cases, such as mobile platform like iOS or Android, the graphics from canvas become a dominating factor in your game. Building to a smaller resource platform means you need to queeze as much processing as possible to leave enough room for the CPU to perform expensive graphics computations.

## CPU utilization 

Processing is the main reason to move from a well-tested, robust library to a home-grown, concise solution. The processing to be concerned about is called _CPU utilization_. CPU utilization is the amount of processing that's avaible, or that's being used, during your program's of game's runtime. Physics engines can take up as much CPU processing as the other parts of your game. Simpler choices mean less CPU utilization.

When running games, you typically aim for a target of 30-60 frames per second, which means your game's loop must fit within 33-16 milliseconds. The example CPU utilization loop steps showns an example. When a more complex solution is followed., it means compromising other features that may take uo some of the CPU utilization of your game. Shaving off COU usage from any of your game components, whenever possible, helps in the long run.

#### Example CPU utilization loop step

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig01.gif


