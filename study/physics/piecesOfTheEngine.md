# Pieces of the engine

Physics engines are fairly complex computationally but are rather simple to structure once you know the pattern. The section Physics loop step pseudocode includes a high-level loop step pseudocode. Each calculation in that step can consist of its own object of API. The engine object graph consists of the following main components: 

- Physics entity
- Collision detector 
- Collision solver 
- Physics engine

The _entity_, which is the object, body or model that the engine acts upon, is the least active. The equivalent in Box2D is a b2Body class. The _detector_ and _solver_ work in concert by first collisions between entities and then passing over the collisions to the solver. Collisions are then converted into modifications applied to any entities the collisions are acting on. 

Physics engines, while ecompassing the engine in its entirety, essentially manage, prepare and communicate with each component through each phase in the system. The section below shows the relationship between each element in the physics engine. 

#### Physics engine

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig05.gif

The four components make up the main force behind our engine. The first component you'll implement is the physics entity, which will represent every object on the screen!
