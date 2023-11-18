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

        this.lives = 3;

        // Path number 1 white
        const path1 = new Phaser.Curves.Path(147.166666666667,856)
        path1.lineTo(161.833333333333, 542.666666666667);
        path1.lineTo(545.166666666667, 545.333333333333);
        path1.lineTo(560,94.6666666666667);
        path1.lineTo(1120.83333333333,93.3333333333333);
        path1.lineTo(1119.16666666667,678.666666666667);
        path1.lineTo(739.166666666667,676);
        this.path1 = path1;

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

        
        this.enemiesGroup = this.add.group({
            classType: Enemy,
            runChildUpdate: true
        });
        this.totalEnemies = 5;

      /*  const numEnemies = 5;
        const delayBetweenEnemies = 1000;

        for (let i = 0; i < numEnemies; i++) {
            const enemy = new Enemy(this, path1);
            this.enemiesGroup.add(enemy);
      
            // Add a delay between creating each enemy
            this.time.addEvent({
              delay: i * delayBetweenEnemies,
              callback: () => {
                enemy.setActive(true).setVisible(true);
              },
              callbackScope: this,
            });
        } */
        this.nextEnemy = 0;
    
    }

    update(time, delta) {
        if(this.totalEnemies > 0 && time > this.nextEnemy){
            const enemy = new Enemy(this, this.path1);
            this.enemiesGroup.add(enemy);
            if (enemy){
                enemy.setActive(true);
                enemy.setVisible(true);
                enemy.startOnPath();

                this.nextEnemy = time + 2000;
                this.totalEnemies --;
            }
        }

        this.checkEnemiesReachedEnd();
    }

    checkEnemiesReachedEnd(){
        const enemiesTab = this.enemiesGroup.getChildren();
        for (let i = 0; i < enemiesTab.length; i++) {
            const enemy = enemiesTab[i];
            if (enemy.active && enemy.follower.t >= 1){
                this.lives--;
                enemy.setActive(false);
                enemy.setVisible(false);
            }
            
        }
        if(this.lives === 0){
            this.gameOver();
        }
    }

    gameOver(){
        this.scene.start("gameOver");
    }

}

export default GameScene;