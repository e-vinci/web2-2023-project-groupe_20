import Phaser from "phaser";

class GameOverScene extends Phaser.Scene{
    constructor() {
        super("gameOver")
    }

    create(){
        this.background = this.add.image(0,0, "gameMap");
        this.background.setOrigin(0,0);
        this.add.text(20,20, "THE END");

    }

}

export default GameOverScene