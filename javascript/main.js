

var Agent = (params) =>{
	let self = {}
	let canvas = document.getElementById("myCanvas");
	self.type = 'agent';
	self.color = "#0095DD";

	self.radius = 15;
	self.x = Math.random() * (canvas.width - self.radius);
	self.y = Math.random() * (canvas.height - self.radius);

	self.sensor_radius = self.radius * 2;
	self.alive = true;
	self.xdr = 1
	self.ydr = 1
	self.updateState = () =>{
		if (self.x + self.radius >  canvas.width)
			self.xdr = -1;
		if(self.x <= self.radius)
			self.xdr = 1;
		if (self.y + self.radius > canvas.height)
			self.ydr = -1;
		if(self.y <= self.radius)
			self.ydr = 1;
	self.x += self.xdr;
	self.y += self.ydr;

	}
	return self;
}
var Food = () =>{
	let self = {};
	let canvas = document.getElementById("myCanvas");
	self.type = "food"
	self.radius = 3;
	self.color = "#678248";
	self.x = Math.random() * canvas.width ;
	self.y = Math.random() * canvas.height;
	self.radius = 2;
	self.alive = true;
	self.updateState = () =>{
	//nothing
	};
	return self;
}

var spacialHash = (cell_size) => {
	let self = {};
	self.spacial_hash = {};
	self.cell_size = cell_size;
	self.contents = {};
	self.hashMe = (object) =>{
		let x_int = parseInt(object.x / self.cell_size);
		let y_int = parseInt(object.y / self.cell_size);
		return [x_int,y_int];
	}
	self.InsertObject = (object) =>{
		let [x_int, y_int] = self.hashMe(object);
		let str_key = toString(x_int) + toString(y_int);
		let spacial_hash = self.spacial_hash;

	}

	return self;
}

//var canvas = document.getElementById("myCanvas");
//var x = canvas.width/2;
//var y = canvas.height-30;
//
//var dx = 2;
//var dy = -2;

const createObjectContainer = (params) =>{
	self = {};
	let canvas = document.getElementById("myCanvas");
	self.object_array = [];
	self.PushObject = (object) =>{
	self.agent_array.push(object);
	};
	self.collision_hash_array = [];
	let num_hashes_rows = canvas.height	/ 10
	let num_hashes_cols = canvas.width / 10
	for(let i = 0; i < num_hashes_rows; i++){
		for(let i = 0; i < num_hashes_cols; i++){
		}
	}
	return self;
}
let global_object_container_object = createObjectContainer();
var global_object_container = [];
for (var i=0; i<100; i++){
	global_object_container.push(Food());
	}

//let globalAgentContainer = createAgentContainer();
let agent_1 = Agent();
agent_1.x = 200;
agent_1.y = 1;
global_object_container.push(agent_1);
//let agent_2 = Agent();
//agent_2.x = 200;
//agent_2.y = 50;
//global_object_container.push(agent_2);



let collision_hash = {};
function draw() {
	let canvas = document.getElementById("myCanvas");
	let ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//console.log("container", globalAgentContainer.agent_array);

	global_object_container.forEach(object=>{
		ctx.beginPath();
		ctx.arc(object.x, object.y, object.radius, 0, Math.PI*2); ctx.fillStyle = object.color;
		ctx.fill();
		ctx.closePath();
		object.updateState()
		})
    }
   setInterval(draw, 10);

var Game = function(){
	this.canvas = document.querySelector("myCanvas");
	this.ctx = this.canvas.getContext("2d");
	this.width = this.canvas.width;
	this.height = this.canvas.height;
}
window.onload = function(){
	alert('test');
	var start = function(){
		Neuvol = new Neuroevolution({
			population:50,
			network:[2, [2], 1],
		});
	}

}
