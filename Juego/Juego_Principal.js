var juego = new phaser.Game(768, 1000, Phaser.AUTO);
var fondoJuego;
var estado_principal = {

        preload: function () {

            juego.load.image('fondo', 'Imagenes/juego.jpg');
            juego.load.image('Mario', 'Imagenes/Mario.png');
        },

        Create: function () {
            fondoJuego =  juego.add.tileSprite(0, 0, 200, 300, 'fondo');
            juego.add.sprite(0,0,'Mario');


        },
        update: function () {
            fondoJuego.tilePosition.x - =1;
        }

};
juego.state.add('Juego', estado_principal);
juego.State.start('Juego');
