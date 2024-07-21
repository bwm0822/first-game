import MainScene from './mainScene.js';

const config = {
    width:512,
    height:512,
    backgroundColor:'#999999',
    type:Phaser.AUTO,
    parent:'test',
    scene:[MainScene],
    scale:{zoom:2},
    physics:{
        default:'matter',
        matter:
        {
            debug:true,
            gravity:{y:0}
        }
    },  
    plugin:{
        scene:[
            {
                plugin:PhaserMatterCollisionPlugin,
                key:'matterCollision',
                mapping:'matterCollision',
            }
        ]
    }
};

const game = new Phaser.Game(config);