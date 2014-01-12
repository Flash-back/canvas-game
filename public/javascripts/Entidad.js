function Entidad(){
    this.x;
    this.y;
   
    this.ancho;
    this.alto;
    this.imagen;
   
    this.constructorBase=function(imagenIni,anchoIni, altoIni,xIni,yIni){
        this.x=xIni;
        this.y=yIni;
    };
   
    this.dibujar=function(contexto){
       /* alert(this.imagen.toString());
        contexto.drawImage(this.imagen,this.x, this.y, this.ancho, this.alto);*/
    };
}