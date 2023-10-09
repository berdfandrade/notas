# Collison detector

The second major step fot the physics engine is the detection and resolution of collisions, A collision detector does exactly what the name implies. The collision detector for this tutorial will be simple and will include calculations to find wheather a rectangle collides with another rectangle, but the objects often can collide with various types of objects, as shown below. 

#### Collision detector collidRecct test

```javascript
// Rect collision tests the edges of each rect to
// test whether the objects are overlapping the other
CollisionDetector.prototype.collideRect =
    function(collider, collidee) {

    // Store the collider and collidee edges
    var l1 = collider.getLeft();
    var t1 = collider.getTop();
    var r1 = collider.getRight();
    var b1 = collider.getBottom();

    var l2 = collidee.getLeft();
    var t2 = collidee.getTop();
    var r2 = collidee.getRight();
    var b2 = collidee.getBottom();

    // If the any of the edges are beyond any of the
    // others, then we know that the box cannot be
    // colliding
    if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
        return false;
    }

    // If the algorithm made it here, it had to collide
    return true;
};
```

The following image showns the collision algorithm used to test the bounding boxes. The algorithm uses logic to determine if all of the edges are outside the bounds of the other rectangle in order to determine collision success. This collision detection doesn't support other shapes, but it's sufficient for illustration purposes.

#### Collision detection example 

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig10.gif

The single moving entity situation solves the issue of determining which objects to collide with. When building a collision-detection algorithm, it helps to prune off unnecessary entities.

# Collision solver 

The last part of the collision pipeline is the solver. Once a collision is encountered, entities must calculate their resolved location so the colliding entities are no longer colliding and the new directions are handled. In the example, you have objects that either completely absorb the force applied upon impact or reflect some of the force applied upon collision. The solver includes methods for the displacement calculations and for the elastic collisions mentioned previously.

As shown below, the solver resolutions change the direction and position of the player. The example solver will first move the player back to the point where the collsion first started in the direction from which the entity was coming. 

### Collision solve displacement diagram 

https://s3.us.cloud-object-storage.appdomain.cloud/developer/default/tutorials/wa-build2dphysicsengine/images/fig11.gif

The solver equation will then modify the velocity of the entity. The displacement algorithm will remove the velocity, and the elastic one will use the resituition mentioned earlier to dampen and reflect the playe'r velocity, as sown below. 

#### Displacement collision resolution 


