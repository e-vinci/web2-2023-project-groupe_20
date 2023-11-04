import waypoints1 from '../Data/waypoint';

class Enemy {
    constructor({position = { x:0 , y:0 }}) {
        this.position = position
        this.width = 100;
        this.height = 100;
        this.waypointIndex = 0;
        this.center = {     // Align the enemy to the center of the coordinate (not in top left-corner)
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
        this.radius = 50;
        this.health = 100;
    }

    draw() {
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');
        c.fillStyle = 'red';
        // c.fillRect(this.position.x, this.position.y,this.width,this.height);
        c.beginPath();
        c.arc(this.center.x, this.center.y, this.radius, 0, Math.PI *2);
        c.fill();
        // Enemy HP
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y - 15, this.width , 10);

        c.fillStyle = 'green';
        c.fillRect(this.position.x, this.position.y - 15, this.width * this.health / 100, 10);
    }

    update() {
        this.draw();
        
        
        const waypoint = waypoints1[this.waypointIndex] // Waypoints Array from waypoints.js
        const yDistance = waypoint.y - this.center.y;
        const xDistance = waypoint.x - this.center.x;
        const angle = Math.atan2(yDistance, xDistance);  
        this.position.x += Math.cos(angle);
        this.position.y += Math.sin(angle);
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }


        if (
            Math.round(this.center.x) === Math.round(waypoint.x) &&
            Math.round(this.center.y) === Math.round(waypoint.y) &&
            this.waypointIndex < waypoints1.length -1
            ) {
            this.waypointIndex++;
        }
    }
}

export default Enemy;