# Background

When rendering 3D graphics, there are two questions we want to answer: 

1 - How do we represent 3-dimensional world?
2 - How do we convert this representation into a 2-dimensional

We will build up the answers to these two questions in parallel.

At a minimum, we need a world populated with objects, i.e `geometry`. The world also contains `light sources`, hich scatter light rays onto geometry. Based on physical properties of the geometry, the light bounces off the geometry again and again, illuminating the scene. This is the basis of the `render equation`. 

https://avikdas.com/build-your-own-raytracer/img/light-bounces.png

To actually view this scene, we place a camera in the world. This is analogus to our eyes. Light rays bouncing off the geometry converge at the camera, and we record where those rays end up on an imaginary canvas called the `image plane`. IN doing so, we have to determine what is actually visible to each point on the image plane. 

https://avikdas.com/build-your-own-raytracer/img/perspective.png 

There are tow approaches to solving the visibility problem. THe conceptually simple approach is *ray tracing* which *simulates* light rays reaching the camera by sending out rays _from_ the camera, the tracing its path as it travels to a light source. This maps well to how light physically travels in the real world, making it simple to simulate real-world effects such as shadows and reflections. These effects are collectively known as *global illumination*. 

https://avikdas.com/build-your-own-raytracer/img/wikimedia-raytraced.png 

However, this simulation is slow. An alternate approach is *rasterization*. In this approach, we first *project* the geometry onto the image plane, then work directly on the perspective-corrected representation of the geometry. This approach can be implemented more efficiently, but at the cost of increased complexity. Global illumanation effects need to be special-cased one by one, often requiring multiple rendering passes and pre-computation ("baking")

https://avikdas.com/build-your-own-raytracer/img/rasterization.png

Ray tracing is usually used for offline rendering, such as in Pixal films and rasterization for realtime graphics, such as games. The latter is the approach used bu GPUs.

In this course, we will focus on ray focus on ray tracing. It closely mirrors the intuition we have about how light interacts with the world, and we can avoid the more complicated math in the initial stages of development. This lets us build up out renderer in small pieces. The concepts we will use are foundation, so they carry over to real-time rendering techniques, which approximate the same light transport in different ways. 


