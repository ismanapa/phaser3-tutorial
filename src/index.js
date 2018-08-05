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

function preload() {
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
var player;

function create() {
    this.add.image(400, 300, assets.sky);

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 560, assets.ground).setScale(2).refreshBody();

    platforms.create(600, 400, assets.ground);
    platforms.create(50, 250, assets.ground);
    platforms.create(750, 220, assets.ground);

    player = this.physics.add.sprite(100, 450, assets.dude);

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers(assets.dude, { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: assets.dude, frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers(assets.dude, { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}

function update() {

}