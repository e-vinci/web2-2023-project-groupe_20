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
    }

    update(time, delta){
        this.path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);

        this.follower.t += 0.00005 * delta;

        if(this.follower.t > 1) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

export default Enemy