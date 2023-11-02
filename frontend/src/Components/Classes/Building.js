import Projectile from "./Projectile";

class Building {
    constructor( {position = {x: 0, y: 0}, enemies }){
        this.position = position;
        this.width = 64;
        this.height = 64;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
        this.projectiles = [
            new Projectile({
                position: {
                    x: this.center.x,
                    y: this.center.y,
                },
                enemies
            })
        ]
        
    }

    draw() {
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, 64, 64);
        
    }
}

export default Building