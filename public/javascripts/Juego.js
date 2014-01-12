function Juego() {

	this.canvas;
	this.personaje;

	this.constructor=function(idCanvas){
		this.canvas=document.getElementById(idCanvas);
		this.canvas.width=800;
		this.canvas.height=400;
		this.canvas.style.backgroundColor="green";
		this.canvas.style.marginLeft="200px";
		this.canvas.style.borderRadius="15px";
		this.contexto=this.canvas.getContext('2d');
		this.personaje = new EntidadPersonaje();
		/*socket.on('movimiento', function(data){
          if (data.eje == 'x'){
          	personajeDibujar(90,100);
          }
     	});*/
	}

	this.iniciar=function() {
		this.personaje.constructor(this.contexto,50,10);
		//this.personaje.dibujar(personajeDatos.parado1);
		var temp = this.personaje;
		setInterval(function(){temp.actualizarDibujo()},700);
		//personaje = new EntidadPersonaje();
		//personaje.constructor(this,10,10);
		//personaje.dibujar(this.contexto);		
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

	this.a=function (obj)
	{
	  var msg = '';

	  for (var property in obj)
	  {
	    if (typeof obj[property] == 'function')
	    {
	      var inicio = obj[property].toString().indexOf('function');
	      var fin = obj[property].toString().indexOf(')')+1;
	      var propertyValue=obj[property].toString().substring(inicio,fin);
	      msg +=(typeof obj[property])+' '+property+' : '+propertyValue+' ;\n';
	    }
	    else if (typeof obj[property] == 'unknown')
	    {
	      msg += 'unknown '+property+' : unknown ;\n';
	    }
	    else
	    {
	      msg +=(typeof obj[property])+' '+property+' : '+obj[property]+' ;\n';
	    }
	  }
	  return msg;
	}
}