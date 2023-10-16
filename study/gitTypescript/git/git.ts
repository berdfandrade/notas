import { GitI } from "./git-interface";

// Now let's implement this insterface in our `Repository` (Git) class

export class Git implements GitI {
    name :string 
    constructor(name : string){
        this.name = name 
    }

}





