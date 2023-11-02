class Projectile {
    constructor({position= {x: 0, y: 0}, enemies}) {
        this.position = position;
        this.enemies = enemies;
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw(){
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');
        c.beginPath();
        c.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
        c.fillStyle = 'orange';
        c.fill();
    }

    update(){
        this.draw();

        const enemy = this.enemies[0];
        const angle = Math.atan2(
            enemy.center.y - this.position.y, 
            enemy.center.x - this.position.x
        );
        this.velocity.x = Math.cos(angle);
        this.velocity.y = Math.sin(angle);

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

    }

}

export default Projectile