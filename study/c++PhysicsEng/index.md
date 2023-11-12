# Game Physics Series 

link : https://allenchou.net/game-physics-series/

Here is a list of tutorial posts that I wrote to share what I have learned throughout my study of game physics simulation and game physics engine architecture.

### Game Physics : Introduction & Acknowledgments 

#### Terminologies

First, let's go through some terminologies that will be used throughout this series.

*Rigid Body* - An individual object that is simulated within the physics engine. As the name suggests, a rigid body is "rigid", in htat all pats beloging to the same rigid body do not distot, move, nor rotate relatively. A typical rigid body data structure would contain several physics properties: mass inertial tensor )or just moment of inertial in 2D), position, orientation, and velocity (both linear and angluar). Usually, you would also need the recirpocals (inverses) of mass and inertia tensor, so it is a good idea to precalculate them once and store them for each rigid body.

*Collider* - a "part" of a rigid body. For instance, a dumbell would consist of two weights and a rod connecting them; this counts as three colliders. Some might arge that the dumbbell as a whole is a single collider. This argument is valid; however, it is convenient to model a rigid body as multiple convex colliders "pieced" together rather then a single concave collider, the reason of which would be discussed later (I'm using Unity's terminology here. In Box2D they are called "fixtures" instead of "colliders".)

*Collision* - Two colliders are considered colling if they physically overlap. If two spheres are touching at one point, they collide. If two spheres are intersecting, they collide. 

*Contact* - Collision between two colliders is typically modeled as a collection of contact points, or just contacts for short.

*Contact Manifold* – The collection of contacts between two colliders is commonly know as the collider pair’s “contact manifold”. This is a simplification of the geometry that defines the intersection of two colliders.



