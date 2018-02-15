function Sprite(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new Sprite(0, 0, 600, 600),
spriteBoneco = new Sprite(618, 16, 87, 87),

perdeu = new Sprite(603,478,397,358),
jogar = new Sprite(603,127,397,347),
novo = new Sprite(68,721,287,93),
spriteRecord = new Sprite(28,879,441,95),
spriteChao = new Sprite(0,604,600,54),

obstacle1 = new Sprite(662,867,50,120),
obstacle2 = new Sprite(719,867,50,120),
obstacle3 = new Sprite(779,867,50,120),
obstacle4 = new Sprite(839,867,50,120),
obstacle5 = new Sprite(898,867,50,120);
