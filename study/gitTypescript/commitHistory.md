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


What this function is doing is returning an array of ids (Our hashes), you can customize this as you like, with an array of hashes I was already satisfied with, if you want to add the whole class or just a custom object, please do it,  and (...)

New let's understand what is happening line by line, let's start with `commitAux`, this is auxiliary variable of `Commit` type or `null`, so it can be the Head, Tail, or any element of our list. In the first moment, it will receive as value our own class. The other variable we have is `history` in this variable we're going to keep the ids of our list. 

Now, we can look directly into our while loop that receive as condition the `commitAux` this means that will keep looping while `commitAux` is not null, inside while loop we're adding the `commitAux.id` into `history` and set a new value to `commitAux` will be `null`, while loop will be over and will return our array: 

<image title='hash' src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*vv9xNK_TdVhQgk2P3DxJmQ.png'>

I will let to test this specific part of the code when we implement the Branch class, so let's continue with our experiment 
