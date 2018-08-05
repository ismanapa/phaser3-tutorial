import 'phaser';
import { assets } from './constants';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
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

var platforms;

function create () {
    this.add.image(400, 300, assets.sky);
    
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 560, assets.ground).setScale(2).refreshBody();

    platforms.create(600, 400, assets.ground);
    platforms.create(50, 250, assets.ground);
    platforms.create(750, 220, assets.ground);
}

function update () {

}