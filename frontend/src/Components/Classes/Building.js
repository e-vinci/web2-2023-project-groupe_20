import Projectile from "./Projectile";

class Building {
    constructor( {position = {x: 0, y: 0}}){
        this.position = position;
        this.width = 64;
        this.height = 64;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
        this.projectiles = []
        this.radius = 150;
        this.target = undefined;
        this.frames = 0;
        
    }

    draw() {
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, 64, 64);

        c.beginPath();
        c.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = 'rgba(0,0,255,0.2)'; 
        c.fill();
        
    }
    

    update() {
        this.draw();
        if (this.frames % 100 === 0 && this.target){
            this.projectiles.push(
                new Projectile({
                    position: {
                        x: this.center.x,
                        y: this.center.y,
                    },
                    enemy: this.target
                })
            )
        }
        this.frames++;
    }

    setEnemy(enemy){
        this.target = enemy;
    }
}

export default Building