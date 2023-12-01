import Phaser from "phaser";
import Enemy from "./Enemy";
import Tower from "./Towers/Tower";
import slowingTower from "./Towers/slowingTower";
import Projectile from "./Projectile";

const placementTilesData = [0, 0, 0, 342, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 342, 0, 0, 0, 0, 342, 0, 0, 0, 0, 0, 0, 0, 342, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342,
    0, 0, 0, 0, 342, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342, 0, 0, 0, 342, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 342, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 342,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


class GameScene extends Phaser.Scene {
    constructor(){
        super("playGame");
        this.wave = 0;
        this.waveText = null;
        this.currency = 250;
    }
    
    create(){
        this.background = this.add.image(0,0, "gameMap");
        this.background.setOrigin(0,0);
        this.add.text(20,20, "GameScene");
        this.map = placementTilesData;
        this.playerLives = 1;
        this.nextWaveTime = 0;
        
        this.waveText = this.add.text(20, 20, `Wave: ${this.wave}`, {
            fontFamily: 'Arial',
            fontSize: '24px',
            color: '#ffffff',
            fontStyle: 'bold'
        });
        this.currencyText = this.add.text(10,10, `Currency: ${this.currency}`,{
            fontSize: '20px',
            fill: '#ffffff'
        });


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
        this.createGroup();
        
        this.totalEnemies = 5;
        this.nextEnemy = 0;

        this.input.on('pointerdown', pointer => this.placeTowers(pointer));
        this.showTowerRange();
        this.showTowerPlacement();

        this.physics.add.overlap(this.enemiesGroup, this.projectiles, (enemy, projectile) =>
            this.damageEnemy(enemy,projectile)
        );

        this.startNextWave();
    
    }
    

    update(time, delta) {
        if(this.totalEnemies > 0 && time > this.nextEnemy){
            const enemy = new Enemy(this, this.path1);
            this.enemiesGroup.add(enemy);
            if (enemy){
                enemy.setActive(true);
                enemy.setVisible(true);
                enemy.startOnPath();

                this.nextEnemy = time + Phaser.Math.Between(200,1000);
                this.totalEnemies --;
            }
        }

        this.checkEnemiesReachedEnd();

        if(this.totalEnemies === 0 && this.enemiesGroup.countActive() === 0){
            this.startNextWave();
        }
    }

    startNextWave(){
        this.wave++;

        this.totalEnemies = this.wave * 2;
        this.nextEnemy = 0;

        this.waveText.setText(`Wave: ${this.wave}`);
    }



    canPlaceTower(i,j){
        if(this.map){
            const index = i * 20 + j;
            return this.map[index] === 342;
        }
        return false;
    }
    

    placeTowers(pointer) {
        const i = Math.floor(pointer.y / 64);
        const j = Math.floor(pointer.x / 64);
        const towerCost = 125;

       if (this.canPlaceTower(i,j) && this.currency >= towerCost){
        this.currency -= towerCost;
        this.currencyText.setText(`Currency: ${this.currency}`);

        const index = i * 20 + j;
        let tower = this.towers.getFirstDead();
        if(!tower){
            tower = new Tower(this, 0, 0, this.map);
            this.towers.add(tower);
        }
        tower.setActive(true);
        tower.setVisible(true);
        tower.place(i,j);
       }
    }

    showTowerRange() {
        this.input.on("pointermove", pointer => {
          const hoveredTower = this.getHoveredTower(pointer);
    
          if (hoveredTower) {
            hoveredTower.showRange(true);
          } else {
            const towers = this.towers.getChildren();
            for (const tower of towers ){
                tower.showRange(false);
            }
          }
        });
    }

    showTowerPlacement() {
        this.cursor = this.add.image(32, 32, "star");
        this.cursor.setScale(2);
        this.cursor.alpha = 1;
    
        this.input.on("pointermove", pointer => {
          const i = Math.floor(pointer.y / 64);
          const j = Math.floor(pointer.x / 64);
    
          if (this.canPlaceTower(i, j)) {
            this.cursor.setPosition(j * 64 + 32, i * 64 + 32);
            this.cursor.alpha = 0.8;
          } else {
            this.cursor.alpha = 0;
          }
        });
    }

    createGroup(){
        this.enemiesGroup = this.physics.add.group({
            classType: Enemy,
            runChildUpdate: true
        });

        this.towers = this.add.group({
            classType: Tower,
            runChildUpdate: true
        });

        this.projectiles = this.physics.add.group({
            classType: Projectile,
            runChildUpdate: true
        });

        this.towers.children.iterate(tower => {
            tower.createRangeGraphics();
        });
    }


    checkEnemiesReachedEnd(){
        const enemiesTab = this.enemiesGroup.getChildren();
        for (let i = 0; i < enemiesTab.length; i++) {
            const enemy = enemiesTab[i];
            if (enemy.active && enemy.follower.t >= 1){
                this.playerLives--;
                enemy.setActive(false);
                enemy.setVisible(false);
                enemy.healthBar.destroy();
            }
            
        }
        if(this.playerLives === 0){
            this.gameOver();
        }
    }

    addProjectile(x, y , angle){
        const projectile = new Projectile(this, 0, 0);
        this.projectiles.add(projectile);
        projectile.fire(x, y, angle);
    }

    getEnemy(x, y , distance){
        const enemyUnits = this.enemiesGroup.getChildren();
        for (const enemy of enemyUnits){
            if (enemy.active && Phaser.Math.Distance.Between(x, y, enemy.x, enemy.y) <= distance) {
                return enemy;
            }
        }
        return false;
    }

    getTowerAt(i, j) {
        const towers = this.towers.getChildren();
        for (const tower of towers) {
            const towerI = Math.floor(tower.y / 64);
            const towerJ = Math.floor(tower.x / 64);
            if (towerI === i && towerJ === j) {
                return tower;
            }
        }
        return null;
    }

    getHoveredTower(pointer) {
        const i = Math.floor(pointer.y / 64);
        const j = Math.floor(pointer.x / 64);
    
        const towers = this.towers.getChildren();
        for (const tower of towers) {
            const towerI = Math.floor(tower.y / 64);
            const towerJ = Math.floor(tower.x / 64);
            if (towerI === i && towerJ === j) {
                return tower;
            }
        }
    
        return null;
    }

    damageEnemy(enemy, projectile){
        this.damage = 30;
        const reward = 15;
        if (enemy.active === true && projectile.active === true) {
            projectile.setActive(false);
            projectile.setVisible(false);

            enemy.recieveDamage(this.damage);

            if(!enemy.active) {
                this.currency += reward;
                this.currencyText.setText(`Currency: ${this.currency}`);
                
            }
        }
    }



    gameOver(){
        this.scene.start("gameOver");
    }



}

export default GameScene;