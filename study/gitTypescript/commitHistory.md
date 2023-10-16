# Commit history

After creating our _commit class_, we can now relate commits to each other with a commit history.

The history is a relation between older commits and newer commits where a new commits are added to the head of the list and older commits are more close to the tail. 

Let's start by adding some new functionalities to the _Commit interface:_

```typescript
// commit-interface.ts 

export interface CommitI {
    id: string
    message : string 
    parent CommitI | null
    / * Returns commit history */
    getCommitLog: () => string[]; 
}
```

You can notice that we've added two new things in the Commit interface, the parent property, and the `getCommitLog` function.

The parent property is how're going to relate commits to each other, Git uses *Linked lists* to keep the commit history of a branch. 

A Linked list is a data structure that is essentially a sequence of elements in memory that are related (linked) to each other (doubly) or to the next element (simple): 

<img title="Linked list" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*8hw28GEk3Qab08DoPwb_eg.png">

The `Head` is where the Linked list starts and the last item of the list will points to null. 

In our implementation will be basically the same, but when appeding new commits to out list of commits we're going to set the new commit as the Headof the list. 

Before we create out `getCommitLog` function let's modify our constructor a bit: 

```typescript
import sha1 from 'sha1'
export class Commit implements CommitI {
  readonly id: string
  parent: CommitI | null
  message: string
  constructor(message: string, parent: CommitI | null){
    this.message = message
    this.id = sha1(message)
    this.parent = parent
  }
}
```

Let's start creating the `parent` commit and initialzing it in our constructor, the class or file that will create an instace of the `Commit` class will be responsible to give the information about what commit is related for this instance. 

Now, we can make our commit history and create the `getCommitLog` in the `Commit` class. 

```typescript
getCommitLog(): string[] {
    let commitAux : CommitI | null = this;
    const history: string[] = [];
    while(commitAux) {
        history.push(commitAux.id);
        commitAux = commitAux.parent
    }
    return history; 
}
``` 


