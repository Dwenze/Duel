import Network from './network';
let Duel = function(window, element) {
	return (function(window, element) {
		var instance = {};
		instance.clear = function() {
			this.ctx.fillStyle = '#bbb';
			this.ctx.fillRect(0,0,this.width,this.height);
		}
		instance.test = function() {
			this.ctx.fillStyle = 'blue';
			this.ctx.font = '50px';
			this.ctx.fillRect(100,100,100,100);
			this.ctx.fillText("12345", 100,100,100,100);
		}
		instance.resize = function(box) {
			this.canvas.width = box.width;
			this.canvas.height = box.height;
			this.width = box.width;
			this.height = box.height;
		}
		instance.init = function() {
			this.canvas = element;
			this.canvas.width = window.document.documentElement.clientWidth;
			this.canvas.height = window.document.documentElement.clientHeight;
			this.width = this.canvas.width;
			this.height = this.canvas.height;
			this.ctx = this.canvas.getContext('2d');
		}
		instance.start = function() {
			let w = window;
			this.requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
			(this.main = () => {
      			this.clear();
				this.test();
				this.requestAnimationFrame(this.main);
			})();
		}
		return instance;
	})(window, element);
}


// console.log(document);
// let getSingle = function(fn) {
// 	var result;
// 	return function () {
// 		return result || (result = fn.apply(this, arguments));
// 	}
// }
// let Duel = getSingle(function () {
// 		var canvas = document.querySelector('canvas');
// 		canvas.width = document.documentElement.clientWidth;
// 		canvas.height = document.documentElement.clientHeight;
// 		var ctx = canvas.getContext('2d');
// 		var test = ()=>{ctx.fillText('HELLO WORLD', 100, 100);}
// 	});
// console.log(this.$refs);
// Duel().test();
// let Movements = getSingle(function () {
// 	let ms = [{
// 		name: '普通攻击',
// 		cost: 1,
// 		type: 'attack',
// 		graphID: 0,
// 		animationID: 0
// 	}];
// 	for (let i = 0; i < ms.length; ++i) {
// 		let m = ms[i];
// 		this.name = m.name;
// 		this.cost = m.cost;
// 		this.type = m.type;
// 		this.graphID = m.graphID;
// 		this.animationID = m.animationID;
// 	}
// })

// function player() {

// }
export default Duel;