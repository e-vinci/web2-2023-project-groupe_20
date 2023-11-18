import Phaser from "phaser";
import towerDefenseMap from "../../assets/TowerDefenseMap.png"
import enemy1 from "../../assets/spriteSheets/S_Goblin_walk.png"


class StartScene extends Phaser.Scene {
    constructor() {
        super("bootgame")
    }

    preload(){
        this.load.image("gameMap", towerDefenseMap);
        this.load.spritesheet("goblin", enemy1,{
            frameWidth: 48,
            frameHeight: 48
        })
    }

    create(){
        // Load map
        this.background = this.add.image(0,0, "gameMap");
        this.background.setOrigin(0,0);
        this.add.text(20,20, "Hello World");

        // Sprite's animations
        this.anims.create({
            key: "goblin_anim",
            frames: this.anims.generateFrameNames("goblin"),
            frameRate: 10,
            repeat: -1
        });

        // Button to next Scene
        const button = this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'COMMENCER',
            {
                fontFamily: 'Candara, Arial',
                fontSize: '48px',
                color: '#ffffff',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);
        button.setInteractive();
        button.on('pointerover', () => { button.setFontSize(60); });
        button.on('pointerout', () => { button.setFontSize(48); });
        button.on('pointerdown', () => {
            this.scene.start('playGame');
        });

    }
}


export default StartScene;

