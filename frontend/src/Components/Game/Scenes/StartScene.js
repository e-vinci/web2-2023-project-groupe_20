import Phaser from "phaser";

/* import musicMenu from "../.." */


class StartScene extends Phaser.Scene {
    constructor() {
        super("bootgame")
    }

    create(){

        // Button to next Scene
        const button = this.add.text(this.scale.width/2, this.scale.height/1.5, 'Start',
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

        const settingButton = this.add.text(this.scale.width/2, this.scale.height/1.5+50, 'Setting',
        {
            fontFamily: 'Candara, Arial',
            fontSize: '48px',
            color: '#ffffff',
            fontStyle: 'bold',

        }).setOrigin(0.5);
        settingButton.setInteractive();
        settingButton.on('pointerover',() => {settingButton.setFontSize(60);});
        settingButton.on('pointerout', () => {settingButton.setFontSize(48); });
        settingButton.on('pointerdown',()=> {
            this.scene.start('setting');
        })

    }
}


export default StartScene;

