// git.ts 


import {GitI} from "./git-interface"

export class Git implements GitI {
	name : string 
	constructor(name : string) {
		this.name = name
	}
}


