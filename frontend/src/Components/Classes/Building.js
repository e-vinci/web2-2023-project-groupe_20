class Building {
    constructor( {position = {x: 0, y: 0} }){
        this.position = position;
    }

    draw() {
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, 64, 64);
        
    }
}

export default Building