function EntidadPersonaje(){

   this.t=1;
    this.constructor=function(contexto,xIni,yIni){
        this.constructorBase(contexto,xIni,yIni);
    };

    this.actualizarDibujo=function(){
        //this.contexto.clearRect(103,100,27,48);
        this.contexto.clearRect(this.x+3,this.y,27,48);
        if (this.t==0) {
          this.dibujar(personajeDatos.parado1);
          this.t++;
        }
        else{
           this.dibujar(personajeDatos.parado2);
           this.t--;
        }
    }

}
EntidadPersonaje.prototype = new Entidad();