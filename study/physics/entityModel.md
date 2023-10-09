# Entity as a model 

As the logic above shows, the physics entity stores nothing but raw data nad produces different variants of the data set. If you~re familiar with any of the MV* patterns, such as MVC or MVP, the entity represents the Model component of those patterns. The entity stores several pieces of data - all to represent the state of that object. For every step in the physics engine, those entities change, which ultimately changes the state of the enfgine as a whole. The differente groupings of the entity's state data are discussed in more depth later.

You might have noticed that the entity in the Entity JavaScript object scetion does not include a render or draw function to display the entity to the screen. By decoupling the physics logic and representations from the graphical representations, you can render out any graphical representation, thereby providing the power to skin the game entities. Despite the use of rectangles to represent the objects, as shown below, you aren't limited to rectangular images. Entities can have any image applied.

#### Bounding box and sprite

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig06.gif

# Position, velocity and acceleration: The positional data 

The entity includes _positional data_, which is information depiction how theentity can move in space. Positional data includes baisc logic that you wouldsee in Newtonian kinematic physics equations. Of these data points, the example entity is concerned about acceleration, velocity and position.

Velocity is the change in position over time, similarly, acceleration is the change in velocity over time. Calculation the change in position ends up being a faily straightfoward calculation, as shown below

### Postition equation 

```
p(n + 1) = v * t + p(n)
```

Where: 

- *p* is the position of the entity. This is often represents with x and y.
- *v* is the speed or velocity. This is the amount of position change over time.
- *t* is the amount of time that is passed. In JavaScript, this is measured in milliseconds.

Based on the equation above, you know that the entity's position will inevitably be impacted by the time applied to it. Similarly, the velocity is updated by acceleration, as shown below: 


#### Velocity equation 

```
v(n + 1) = a * t + v(n)
```

Where: 

- *v* is the speed or velocity. This is the amount of position chage over time. 

- *a* is the acceleration of the entity. This is the amount of velocity change over time.

- *t* is the amount of time that passed. In JavaScript, this is measured in milliseconds.

## Width and height: The spatial data

_Spatial data_ refers to the paramenters required to represent the hit area and space the object takes. Elements such as shape and size affect the spatial data. For our example platform, you'll take a "smoke and mirrors" approach to the hit area. (Smoke and mirrors,  a metaphor for deception or fraudulence is based on magician's illusions.)

It's common to use a hit area larger or smaller than the graphic or sprite representing the entity. Such hit areas often consititute a bounding box or rectangle. In the interest of simplicity and need for fewer calculations, the implementation will only use rectangles to test hit areas.

Rectangles, in graphics and physics, can be represented by four numbers. Use the upper left point fot position, and use the width for size, as illustratedbelow. 

#### Box representation

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig07.gif

The bounding boxes only need position and size, as all other parameters are depdent on those components. Other calculations that also help are calculations for midpoints and edges, both of wich are commonly used for collision calculations. 

## Restitution: The collision data

The final component of the entity is the collision data, or the information determining how the object should behave during collisions. For the example collisions will include only displacement and elastic collisions, so the requiremenst are fairly limited, as shown below. The elastic collisions follow the naming patterns used in Box2D and define bouciness _restitution_

Fully elastic collision example


https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig08.gif

All pf the data components provide the system with enough data to begin calculating all the changes that will occur over time in the example implementation.

# Advanced collision concepts

The entity is sufficient for the example system, but there are often other parameters used for various collision solving. This section brielfy discusses some of other types.

# Real-world values

In games, designers often model their worlds based on our world and measure things to the units in real-world space. Implementations that model their systems off of real world units such as meters, only need a scale factor to convert their data points to and from these distances. 

# Mass and force 

Mass and force make up a majority of physics engines, which might make you wonder why the example system does not. Because the examples system does not require a mass, you can rely on the fact that force is a product of mass and acceleration and assume the mass is one unit. You can see this calculation below. 

## Force equation working out mass 

```javascript

// Our mass is always equal to one
var mass = 1;

// Force = mass * acceleration
var force = mass * acceleration;

// We can work the mass out of the equation
// and it won't change anything
force = acceleration;


```

The calculations are outside the scope of this tutorial. The sum of all forces, or the conservation of energy, are two physics calculations that you can use to calculate different collisions involvin several moving entities rather than the singular entity used by the example system.

# Shapes and concavity 

The example system will support non-rotational bouding boxes, but sometimes more precise collision detection and solving are required. In some such cases, you shoul consider a polygonal approach, or include several bounding boxes to represent a single entity, as shown below.

#### Concave and convex 

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig09.gif

When a shape has a section broken out of it, you can end up with a shape that is concave. As shown above, concave shapes encompass shapes that have any side that pushes inwars towards the center. Concave shapes often require more precise and complex collision-detection algorithms. The other option, convex, are shapes that to not have any sides that push inward, toward the center. It is deciding on your shape support. 


