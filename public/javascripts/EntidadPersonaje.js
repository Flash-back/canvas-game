function EntidadPersonaje(){

   this.t=1;
   this.id;
   this.nombre;

    this.constructor=function(contexto,xIni,yIni,id){
        this.constructorBase(contexto,xIni,yIni);
        this.id=id;
    };

    this.actualizarDibujo=function(n){
      /*if (n==1){
        console.log("Otro");
        console.log(this.contexto);
      }
      else
      {
        console.log("Yo");
        console.log(this.contexto);
      }*/
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