import Phaser from "phaser";

class TutorialGameScene extends Phaser.Scene{
    constructor(){
        super("tutoGame");
    }

    create(){
        this.pauseButton = this.add.sprite(1230,50,"pauseButton");
        this.pauseButton.setScale(3);
        this.pauseButton.play("pauseButton_anim");
        this.pauseButton.setInteractive();
        this.pauseButton.on("pointerover", () => {
            this.pauseButton.setTint(0xe0e0e0);
        });
        
        this.pauseButton.on("pointerout", () => {
            this.pauseButton.setTint(0xFFFFFF);
        });
        
        this.pauseButton.on("pointerup", () => {
            this.pauseButton.play("pauseButton_anim");
            this.scene.resume('playGame');
            this.scene.stop();
        });
    }

}

export default TutorialGameScene