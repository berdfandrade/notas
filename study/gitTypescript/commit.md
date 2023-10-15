# Commit 

In simple words, a commit is a snapshot of the content of the files you staged. Let's start by creating out _Commit interface_. 

```typescript
// commit-interface.ts

export interface CommitI {
    id : string
    message : string
}
``` 

For generating our id, we're going to use the `sha1-library` to generate something close to the GIT hash, in this first moment let's use our message as the content to generate our id. 


```typescript
// commit.ts
import { CommitI } from "./domain/commit-interface";
import sha1 from 'sha1'
export class Commit implements CommitI {
  readonly id: string
  message: string
  constructor(message: string){
    this.message = message
    this.id = sha1(message)
  }
}
```


