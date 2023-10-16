<<<<<<< HEAD
import { GitI } from "./git-interface";

// Now let's implement this insterface in our `Repository` (Git) class

export class Git implements GitI {
    name :string 
    constructor(name : string){
        this.name = name 
    }

}





=======
// git.ts 


import {GitI} from "./git-interface"

export class Git implements GitI {
	name : string 
	constructor(name : string) {
		this.name = name
	}
}


>>>>>>> 7f6d26091725fd27ad16c62fd8a51d5ff3c66c18
