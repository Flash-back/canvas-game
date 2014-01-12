function Entidad(){

    this.x;
    this.y;
    this.contexto;
   
    this.constructorBase=function(contexto,xIni,yIni){
        this.x=xIni;
        this.y=yIni;
        this.contexto=contexto;
    };
   
    this.dibujar = function(sprite){
        var imageTemp = new Image();
        imageTemp.src = 'images/'+sprite.image;
        this.contexto.drawImage(imageTemp,sprite.x,sprite.y,sprite.swidth,sprite.sheight,this.x,this.y,sprite.width,sprite.height);
    };

    this.setX= function(value){
        this.x=value;
    }

    this.setY= function(value){
        this.y=value;
    }
}