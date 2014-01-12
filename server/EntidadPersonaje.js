function EntidadPersonaje(){
   // this.velocidadMovimiento=75;
    this.juego;
   
    this.constructor=function(juego,xIni,yIni){
        this.constructorBase(32,32,'images/personaje',xIni,yIni);
        //this.juego=juego;
        //this.dx=-this.velocidadMovimiento;
    };

    /*this.mover=function(delta){
        if (this.dx<0 && this.x<10)
        {
            this.juego.actualizaLogica();
        }
        if (this.dx>0 && this.x>juego.getAnchuraCanvas()-(this.ancho+10))
        {
            this.juego.actualizaLogica();
        }
        this.moverBase(delta);
    };*/

}
EntidadPersonaje.prototype = new Entidad();