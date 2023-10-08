// Collision Decorator Pattern Abstraction 

// These methods describe the attributes necessary for the resulting collision calculations

const Collision = {
 	/*
	Elastic collisions refer to the simple cast where two
	entities collide and a transfer of energy is performed
	to calculate the resulting speed we will follow Box2D's
	example of using restituition to represent
	"bouciness"
	  */

	elastic: function(restitution){
		this.restitution || .2;
	}, 

	displace: function() {
	/* While not supported in this engine the displacement 
	   collisions */ 
	}
} 
