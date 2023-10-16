export interface CommitI {
	id:string
	message:string
	parent : CommitI | null
	getCommitLog(): => string[]{
		let commitAux: CommitI | null = this;
		const history: string[];
		while(commitAux) {
			history.push(commitAux.id)
			commitAux = commitAux.parent
		}

	} 

	return history
}



