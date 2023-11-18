import Phaser from "phaser";
import Enemy from "./Enemy";


class GameScene extends Phaser.Scene {
    constructor(){
        super("playGame");
    }
    
    create(){
        this.background = this.add.image(0,0, "gameMap");
        this.background.setOrigin(0,0);
        this.add.text(20,20, "GameScene");

        // Path number 1 white
        const path1 = new Phaser.Curves.Path(147.166666666667,856)
        path1.lineTo(161.833333333333, 542.666666666667);
        path1.lineTo(545.166666666667, 545.333333333333);
        path1.lineTo(560,94.6666666666667);
        path1.lineTo(1120.83333333333,93.3333333333333);
        path1.lineTo(1119.16666666667,678.666666666667);
        path1.lineTo(739.166666666667,676);

        const graphics = this.add.graphics();
        graphics.lineStyle(3, 0xffffff, 1);
        path1.draw(graphics);

        // Path number 2 green
        const path2 = new Phaser.Curves.Path(96, -32)
        path2.lineTo(96, 164);
        path2.lineTo(480, 164);
        path2.lineTo(480, 544);

        const graphics2 = this.add.graphics();
        graphics2.lineStyle(2, 0x00ff00, 1);
        path2.draw(graphics2);

        const enemy1 = new Enemy(this,path1);
        this.enemiesGroup = this.add.group({ classType: Enemy, runChildUpdate: true});
        this.enemiesGroup.add(enemy1);
    }

}

export default GameScene;