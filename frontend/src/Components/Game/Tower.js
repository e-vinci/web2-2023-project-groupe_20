import Phaser from "phaser";

class Tower extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, map) {
        super(scene, x, y, "tower");
        this.nextTic = 0;
        this.map = map;

        this.scene.add.existing(this);
        this.play("tower_anim");

    }

    place(i, j) {
        this.y = i * 64 + 64 / 2;
        this.x = j * 64 + 64 / 2;
        const index = i * 20 + j;
        this.map[index] = 1;
        
    }

    update(time, delta){
        if (time > this.nextTic) {
            this.nextTic = time + 1000;
        }
    }

}

export default Tower