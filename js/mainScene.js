import Player from "./player.js";

export default class MainScene extends Phaser.Scene 
{
    constructor() 
    {
        super('MainScene');
    }

    preload() 
    {
        console.log('preload');
        Player.preload(this);
        this.load.image('tiles', 'assets/images/RPG Nature Tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/images/map.json');
    }

    create() 
    {
        console.log('create');

        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles');
        const layer1 = map.createLayer('圖塊層 1', tileset, 0, 0);
        const layer2 = map.createLayer('圖塊層 2', tileset, 0, 0);
        layer1.setCollisionByProperty({collides: true});
        this.matter.world.convertTilemapLayer(layer1);
        //this.player = new Player({scene:this, x:100, y:100, texture:'female', frame:'townsfolk_f_idle_1'});
        //this.tester = new Player({scene:this, x:100, y:100, texture:'female', frame:'townsfolk_f_idle_1'});
        //this.player.inputKeys = this.input.keyboard.addKeys('W,A,S,D');
        this.player = new Player({scene:this, x:100, y:100});
        this.player.inputKeys = this.input.keyboard.addKeys({
            up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    update() 
    {
        //console.log('update');     
        this.player.update();     
    }
}