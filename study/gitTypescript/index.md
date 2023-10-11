# Creating Git in Typescript

link: https://betterprogramming.pub/build-your-own-git-with-typescript-64571ae7c6d0

# What we’re going to build

In this article, we’re going to build 6 basic features, for a better explanation than the one I’m going to give you here, please check the official documentation, you can start here.

    Repository
    Commit
    Commit chaining
    Branching
    Stage a file
    User input and commands

# Configuring a project 

Let's start configuring our project with some dependencies

```javascript
{
  "name": "my-own-git",
  "version": "1.0.0",
  "description": "My own git is a experience",
  "main": "index.ts",
  "scripts": {
    "test": "jest --watch",
    "start": "ts-node index.ts"
  },
  "keywords": [
    "my-own-git"
  ],
  "author": "maaxg",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.18.13",
    "@babel/preset-env": "^7.18.10",
    "@babel/preset-typescript": "^7.18.6",
    "@types/jest": "^28.1.7",
    "@types/sha1": "^1.1.3",
    "babel-jest": "^28.1.3",
    "jest": "^28.1.3",
    "ts-jest": "^28.0.8",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4"
  },
  "dependencies": {
    "sha1": "^1.1.1"
  }
}
```

