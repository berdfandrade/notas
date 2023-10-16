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
In this first moment, we're not going to set the author for this commit, you can do it if you want to, but I will not focus on how we're going to track commits by a user.

New, let's test our commit class, to verify if our id is being generated with the proper hash, keep in mind that for a specific string the output will always be the same, in that way the string `message` will always be: 

`6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d`


```typescript
test('should create a commit with correct hash and message', ()=> {
    const commit = new Commit('message', null)
    expect(commit.message).toEqual('message')
    expect(commit.id).toEqual(sha1(commit.message)) 
});
```

A simplistic way to see how Git knows how a file has changed and how he's able to get staged is by comparing the hashes, Let's see it in an example:

```typescript
// index.ts
export * from './git'
export * from './commit'
``` 

We can consider that this specific file is no more than a formatted string so this formatted string will generate a specific hash, if we make this test and take the content of this file and put it on the sha1 function, it's going to return this specific hash: 

```typescript
const sha = sha1(fs.readFileSync('./index.ts), {enconding: 'utf-8'})
console.log(sha)

// sha = 0280670383ddc7cd6640f60f6e4a10eb1799f807
```

Now, if we modify our file and add a new line, we expect that this function will generate to us, this hash: 

```typescript
// index.ts
export * from "./git"
export * from "./commit"
export * from './branch'const sha = sha1(fs.readFileSync('./index.ts', {encoding: 'utf-8'}))
console.log(sha)
// sha = 84d89b5dbc2a304b1564d1761a68e8938ee7ea07
```

You're going to notice that the hash has changed, this is what GIT does to know that a file changed. 


