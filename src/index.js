import 'phaser';
import { assets } from './constants';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload () {
    this.load.image(assets.sky, 'assets/sky.png');
    this.load.image(assets.ground, 'assets/platform.png');
    this.load.image(assets.star, 'assets/star.png');
    this.load.image(assets.bomb, 'assets/bomb.png');
    this.load.spritesheet(
        assets.dude,
        'assets/dude.png',
        {
            frameWidth: 32,
            frameHeight: 48
        }
    );
}

function create () {
    this.add.image(400, 300, assets.sky);
    this.add.image(400, 300, assets.dude);
}

function update () {

}