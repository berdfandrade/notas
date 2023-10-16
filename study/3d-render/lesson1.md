# Lesson 1: Casting rays from the camera to the image plane

In the real world, light rays originate at light sources, run unto objects, causing bounced rays to scatter in many directions. Some of the bounced rays enter our eyes-the camera-and these are the rays we see. If we were to simulate this faithfully, we would simulate many rays that we'd never see, which is a waste of computational power. Instead, in ray tracing, we go backwards; cast rays from the camera out into the world and see how they end up at the light sources.

<img title="asd" src=https://avikdas.com/build-your-own-raytracer/img/forward-and-backward-tracing.png> 

Even with backward tracing, how many rays do we cast nad which one? To answer this, we divide the image plane into small regions, one corresponding to each pixel in the output image. Then, we construct a ray starting at the camera and passing through the center of each region. 

<img title="ss" src=https://avikdas.com/build-your-own-raytracer/img/casting-ray-from-camera-to-image-plane.png>

The position of the camera is constant; we call it  $\overrightarrow{c}$. The image plane is represented by the positions of its four corners, call them $\overrightarrow{x_{1}}$, $\overrightarrow{x_{2}}$, $\overrightarrow{x_{3}}$ and $\overrightarrow{x_{4}}$. Suppose we have a point $\overrightarrow{p}$ on the image plane. This point is some percentage $\alpha\in[0,1]$ (between 0 and 1 inclusive) of the distance horizontally between the left and right edges of the image plane. Similarly, it's some percentage $\beta\in [0,1]$ of the distance vertically between the top and bottom edges of the image plane. 

To find $\overrightarrow{p}$, we linearly interpolate (or lerp for short) a distance of a $\alpha$ between $\overrightarrow{x_{1}}$  and $\overrightarrow{x_{2}}$. This gives us a point $\alpha$ percent along the way on the line segment between the two vectors. We do this again between $\overrightarrow{x_{3}}$  and $\overrightarrow{x_{4}}$, giving us a point $\alpha$ percent along the way on the line segment between these two vectors. Then, we take the two resulting points and lerp a distance of $\beta$ between them. This is known as *bilinear interpolation*


 




