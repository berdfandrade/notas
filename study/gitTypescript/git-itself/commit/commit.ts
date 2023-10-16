import {CommitI} from "./commit-interface"
import sha1 from 'sha1'

export class Commit implements CommitI {
	readonly id : string
	message : string
	constructor(message : string, parent: CommitI | null) {
		this.message = message
		this.id = sha1(message)
		this.parent = parent
	}
}


