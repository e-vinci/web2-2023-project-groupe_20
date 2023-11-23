import Phaser from "phaser";

class Enemy extends Phaser.GameObjects.Sprite{
    constructor(scene, path) {
        super(scene, path.getStartPoint().x, path.getStartPoint().y, 'goblin');
        scene.add.existing(this);
        this.play("goblin_anim");
        this.flipX= true;
        this.setScale(3);

        this.path = path;
        this.follower = {t: 0, vec: new Phaser.Math.Vector2()};
        this.hp = 0;
        this.maxHp = 100;

        this.healthBarHeight = 5;
        this.healthBarWidth = 50;


        scene.physics.world.enable(this);
        this.body.setSize(20,20);

      /*  // To be able to see every hitboxes (projectiles included !)
        this.body.debugBodyColor = 0xFF0000;
        scene.physics.add.existing(this);
        scene.physics.world.createDebugGraphic(); */

    }

    update(time, delta){
        this.follower.t += 0.00005 * delta;

        this.path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);

        this.healthBar.setPosition(this.x - this.healthBarWidth / 2, this.y - this.height / 2 - 10);

    }

    startOnPath(){
        this.follower.t = 0;
        this.hp = 100;

        this.path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
        this.drawnHealthBar();
    }

    recieveDamage(damage) {
        this.hp -= damage;

        if(this.hp <= 0) {
            this.setActive(false);
            this.setVisible(false);
        }
        this.drawnHealthBar();
    }

    drawnHealthBar(){
        if(this.healthBar) {
            this.healthBar.destroy();
        }

        this.healthBar = this.scene.add.graphics();
        this.healthBar.fillStyle(0x808080);
        this.healthBar.fillRect(0, 0, this.healthBarWidth, this.healthBarHeight);

        this.healthBar.fillStyle(0x00ff00);
        const width = (this.hp / this.maxHp) * this.healthBarWidth;
        this.healthBar.fillRect(0, 0, width, this.healthBarHeight);
    }
}

export default Enemy