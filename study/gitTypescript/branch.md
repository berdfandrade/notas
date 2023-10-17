# Branch

Branches are how we can separate code in Git.

Let me give you an example, you're in a team with 2 other developers working in the same code base that is hosted on the cloud. You already have a feature ready to go to production and you need to generate a build with that feature and need to send this to your code base on cloud. On another hand your colleagues were developing a test feature, that should not go to production, but they need to send it to the cloud. Branches can solve this easily, a branch is a clone of a code base where you can do whatever chages you want, without messing up the original one, avoiding conflicts and separating responsibilities with specific branches.

In this example, we could create two branches one would only accept code that is ready for production and another branch is a test branch, or a develop branch.

So at the end of the day, the branch is pointing to one modification, we save modifications in the shape of commits, this means that a branch points to a commit, that points to another commit, and so on. 

In the image below, you can consider that the code that could be delivered to production is in *master* and we can consider the branch *testing* as where this can be tested with no description, both branches points to the same commit. 

<img src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*SXxT-U0jMuwrgPhCysl1Gw.png'>

Now consider that your colleagues pushed their changes to the testing branch, this is what will look like: 

<img src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*aRHfkgJF-CXGXKlV9GQcjQ.png'>


