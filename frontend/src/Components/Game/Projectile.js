import Phaser from "phaser";

class Projectile extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'arrow');
        
        this.dx = 0;
        this.dy = 0;
        this.lifeSpan = 0;
        this.speed = Phaser.Math.GetSpeed(600, 1);

        scene.add.existing(this);
        
    }

    update(time, delta){
        this.lifeSpan -= delta;

        this.x = this.dx * (this.speed * delta);
        this.y = this.dy * (this.speed * delta);

        if (this.lifeSpan <= 0 ){
            this.setActive(false);
            this.setVisible(false);
        }
    }

    fire(x, y, angle){
        this.setActive(true);
        this.setVisible(true);

        this.setPosition(x,y);

        this.dx = Math.cos(angle);
        this.dy = Math.sin(angle);

        this.lifeSpan = 300;
    }

}

export default Projectile