import {CommitI} from "./commit-interface"
import sha1 from 'sha1'

export class Commit implements CommitI { // Implements adiciona a interface a classe/ objeto, etc... 
	readonly id : string
	message : string
	constructor(message : string) {
		this.message = message
		this.id = sha1(message)
	}
}


