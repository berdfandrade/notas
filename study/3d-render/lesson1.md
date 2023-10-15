# Lesson 1: Casting rays from the camera to the image plane

In the real world, light rays originate at light sources, run unto objects, causing bounced rays to scatter in many directions. Some of the bounced rays enter our eyes-the camera-and these are the rays we see. If we were to simulate this faithfully, we would simulate many rays that we'd never see, which is a waste of computational power. Instead, in ray tracing, we go backwards; cast rays from the camera out into the world and see how they end up at the light sources.

<img title="asd" src=https://avikdas.com/build-your-own-raytracer/img/forward-and-backward-tracing.png> 

Even with backward tracing, how many rays do we cast nad which one? To answer this, we divide the image plane into small regions, one corresponding to each pixel in the output image. Then, we construct a ray starting at the camera and passing through the center of each region. 

<img title="ss" src=https://avikdas.com/build-your-own-raytracer/img/casting-ray-from-camera-to-image-plane.png>

The position of the camera is constant; we call it  $\overrightarrow{C}$

