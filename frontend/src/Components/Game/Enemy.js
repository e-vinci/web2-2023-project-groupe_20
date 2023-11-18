import Phaser from "phaser";

class Enemy extends Phaser.GameObjects.Sprite{
    constructor(scene, path) {
        super(scene, path.getStartPoint().x, path.getStartPoint().y, 'goblin');
        scene.add.existing(this);
        this.play("goblin_anim");
        this.flipX= true;
        this.setScale(3)

        this.path = path;
        this.follower = {t: 0, vec: new Phaser.Math.Vector2()};

        this.hp = 0;
    }

    update(time, delta){
        this.follower.t += 0.00005 * delta;

        this.path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);

    }

    startOnPath(){
        this.follower.t = 0;
        this.hp = 100;

        this.path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
    }

    receiveDamage(damage) {
        this.hp -= damage;

        if(this.hp <= 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

export default Enemy