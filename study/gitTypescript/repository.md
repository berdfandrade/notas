# Repository

With everything settled, let's start to build our things =) 

A repository is the first thing that you create when you want to use GIT in your project, then we're going to start with it, considering that a Repository is everything that is going to wrap the features we're going to implement we're going to declare how out Git class will look like:

```typescript
// git-inteface.ts

export interface GitI {
    name: string; 
}

``` 

Now, let's implement this interface in out `Repository` (Git) class 


```typescript
// git.ts

import {GitI} from "./domain/git-interface";
export class Git implements GitI {
    name: string
    constructor (name : string) {
        this.name = name
    }
}
```

At this first moment, our repository will only have the responsibility of having the name of our repository. 

After creating the class, we can easily test it now with jest:

```typescript
// Git test file 

test('should return repo name properly', () => {
    const repo = new Git('first-repo');
    expect(repo.name).toEqual('first-repo')
}) 
```

This command is related to: 

```
git init 

```

`git init` initializes a repository, this means that this command creates all the files that will encapsulate everything and allow us to use other commands like `git log`. 


