function Juego() {

	this.canvas;
	this.personaje;
	this.personajes;

	this.constructor=function(idCanvas){
		this.canvas=document.getElementById(idCanvas);
		this.canvas.width=800;
		this.canvas.height=400;
		this.canvas.style.backgroundColor="green";
		this.canvas.style.marginLeft="200px";
		this.canvas.style.borderRadius="15px";
		this.contexto=this.canvas.getContext('2d');
		this.datosPersonaje;
		this.personaje = new EntidadPersonaje();
		this.jugadores;
		/*socket.on('movimiento', function(data){
          if (data.eje == 'x'){
          	personajeDibujar(90,100);
          }
     	});*/
	}

	this.iniciar=function(usuario,jugadores) {
		this.personaje.constructor(this.contexto,usuario.x,usuario.y,usuario.id);
		this.datosPersonaje=usuario;
		var temp = this.personaje;
		

		this.jugadores=jugadores;
		/*var temp2 = this.cargarJugador;
		this.jugadores.forEach(function(jugador) {
			if (jugador != usuario){
		    	temp2(jugador);
		    }
		    else {
		    	console.log("Foreach");
		    }
		});*/
		setInterval(function(){temp.actualizarDibujo(0)},700);
		//this.personaje.dibujar(personajeDatos.parado1);
		//personaje = new EntidadPersonaje();
		//personaje.constructor(this,10,10);
		//personaje.dibujar(this.contexto);		
	}

	this.cargarJugador=function(jugador) {
		console.log("Cargando jugador");
		console.log(jugador);
		var tempPersonaje = new EntidadPersonaje();
		tempPersonaje.constructor(this.contexto,jugador.x,jugador.y,jugador.id);
		//
		
		setInterval(function(){tempPersonaje.actualizarDibujo(1)},700);
	}

	this.movimiento=function(key) {
		if (key=='37') {
			//socket.emit('movimiento', {'eje':'x','cantidad':-10});
			this.personaje.setX(this.personaje.x-27);
			this.contexto.clearRect(this.personaje.x+30,this.personaje.y,27,48);
			this.personaje.dibujar(personajeDatos.parado1);
		}
		else if (key=='38') {
			this.personaje.setY(this.personaje.y-27);
			this.contexto.clearRect(this.personaje.x+3,this.personaje.y+27,27,48);
			this.personaje.dibujar(personajeDatos.parado1);
		}
		else if (key=='39') {
			this.personaje.setX(this.personaje.x+27);
			this.contexto.clearRect(this.personaje.x-24,this.personaje.y,27,48);
			this.personaje.dibujar(personajeDatos.parado1);
		}
		else if (key=='40') {
			this.personaje.setY(this.personaje.y+27);
			this.contexto.clearRect(this.personaje.x+3,this.personaje.y-27,27,48);
			this.personaje.dibujar(personajeDatos.parado1);
		}
	}

}