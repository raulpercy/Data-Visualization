var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var Simulacion = function()
{
	
}
Simulacion.prototype.dibujarlinea = function(xi,yi,xf,yf)
{
	this.xi = xi;
	this.xf = xf;
	this.yi = yi;
	this.yf = yf;
	context.moveTo(xi,yi);
	context.lineTo(xf,yf);
	context.stroke();
}
Simulacion.prototype.dibujarpunto = function(x,y)
{
	this.x=x;
	this.y=y;
	context.fillRect(x,y,1,1);
}
Simulacion.prototype.dibujarbarras = function(ancho,y,espacio)
{
	this.y=y;
	this.ancho=ancho;
	context.beginPath();
	context.strokeStyle="rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
	context.moveTo(ancho,500);
	context.lineTo(ancho,500-y);
	context.lineWidth=espacio;
	context.stroke();
}
Simulacion.prototype.dibujarlineas = function(ancho,y)
{
	this.y=y;
	this.ancho=ancho;
	context.lineTo(ancho,500-y);
	context.lineWidth=1;
	context.stroke();
}
Simulacion.prototype.dibujarejes = function()
{

	for(i=0; i<=500;i+=10)
	{
		context.font = "9px Arial";
		context.fillText(Math.round((i/500)*100)/100,500,500-i);
	}
}