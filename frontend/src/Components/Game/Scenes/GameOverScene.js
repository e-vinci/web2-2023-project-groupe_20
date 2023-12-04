import Phaser from "phaser";

class GameOverScene extends Phaser.Scene{
    constructor() {
        super("gameOver")
    }

    create(){
        this.background = this.add.image(0,0, "gameMap");
        this.background.setOrigin(0,0);
        this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, "GAME OVER").setOrigin(0.5);

    }

}

export default GameOverScene