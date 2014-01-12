function Juego() {

	this.canvas;

	this.constructor=function(idCanvas){
		this.canvas=document.getElementById(idCanvas);
		this.canvas.width=800;
		this.canvas.height=400;
		this.canvas.style.backgroundColor="green";
		this.canvas.style.marginLeft="200px";
		this.canvas.style.borderRadius="15px";
		this.contexto=this.canvas.getContext('2d');
		socket.on('movimiento', function(data){
          if (data.eje == 'x'){
          	personajeDibujar(90,100);
          }
     	});
	}

	this.iniciar=function() {
		//personaje = new EntidadPersonaje();
		//personaje.constructor(this,10,10);
		//personaje.dibujar(this.contexto);		
	}

	this.movimiento=function(key) {
		if (key=='37') {
			socket.emit('movimiento', {'eje':'x','cantidad':-10});
		}
		else if (key=='38') {
			
		}
		else if (key=='39') {
			
		}
		else if (key=='40') {

		}
	}
}