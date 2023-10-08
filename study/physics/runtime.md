# Selectiong the correct engine runtime 

Physics engines come in two main forms: high-precision and real-time. High precision engines are used to simulate difficult or critical physics calculations: real-time engines are the types you see in video games. For the physics engine in the example, you'll use a real-time engine that infinitely runs its engine calculations until required to stop. 

Real-time engines offer tow options for controlling the physics engine timing: 

- *Static*: Always provides the engine with non-changing amount of time that is expected to pass every frame. Static real-time engines run at different speeds on different computers, so it's common that they behave differently.

- *Dynamic*: Feeds an elapsed time to the engine.

The example physics engine in the article needs to be running continuosly, so you need to set up an infinite loop to run against the engine. This processing patter is called _game loop_. For this article, each one of the operations you'll run in that loop is called a _step_. Use the `requestAnimationFrame` API to use the dynamic option. The `requestAnimationFrame`. it uses a polyfill housed on the Khronos Group CVS Repository.

`requestAnimFrame` with polyfill

```javascript
// Call requestAnimFrame with a parameter of the
// game loop function to call 

requestAnimFrame(loopstep)
``` 

## Physics engine loop

deciding on the order of operations within the loop might seem simple but it is not a trivial decision. While several different options are available for this step, you'll design the engine based on the features identified thus far, as shown in the *Physics loop step*.

*Physics loop step*

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig04.gif

The section below showns that the step performs the calculation so that it does each type of calculation in a single pass. The other approach for thiscalculation would be to individually perform each object's calculations, but that generally produces odd results due to dependecies on other calculations.

#### Physics loop step pseudocode

```
1 User Interaction 
2 Positional Logic
3 Detect Collisions 
4 Resolve Collisions 
```

Now that you have the workflow, the features, and a decision on the type ofengine to build, you can start building the pieces

### Rigid body physics

Physics, as a science is very vast and includes several different kinds of calculations. Newtonian physics makes up the common position, velocity and acceleration calculations, while electromagnetism makes up magnets or eletricity and can be used to emulate gravity in a physics system. Each of these areas of physics are great in their own right, but the level of complexity, for those calculations goes beyond the scope of this tutorial.

When deciding on your physics system, the construction of the engine depends upon the type of calculations you want to do. The example engine will implement rigid body physics, or physics that does not deform. With rigid body physics you can avoid calculating force-based deformities that you would see in soft body dynamics or extra force modifications that you would see in any sort of multi-gravitational system.
