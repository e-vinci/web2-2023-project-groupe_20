import Phaser from "phaser";
import menuBG from "../../../assets/menuBG.png"
import towerDefenseMap from "../../../assets/TowerDefenseMap.png"
import goblinSprite from "../../../assets/spriteSheets/S_Goblin_walk.png"
import wolfSprite from "../../../assets/spriteSheets/S_Wolf.png"
import hobGoblinSprite from "../../../assets/spriteSheets/S_HobGoblin.png"
import towerSprite from "../../../assets/spriteSheets/tower.png"
import crossbowSprite from "../../../assets/spriteSheets/crossbow.png"
import crossbowArrowSprite from "../../../assets/spriteSheets/crossbowArrow.png"
import arrowImpactSprite from "../../../assets/spriteSheets/arrowImpact.png"
import pauseButtonSprite from "../../../assets/spriteSheets/UIPauseButton.png"
import starPng from "../../../assets/star.png"
import arrowPng from "../../../assets/arrow.png"

class PreloadScene extends Phaser.Scene {

    constructor(){
        super('preloadScene')
    }

    preload(){
        this.load.image("gameMenu",menuBG);
        this.load.image("gameMap", towerDefenseMap);
        this.load.image("arrow", arrowPng);
        this.load.image("star", starPng);
        this.load.spritesheet("goblin", goblinSprite,{
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet("wolf", wolfSprite,{
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet("hobGoblin", hobGoblinSprite,{
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet("tower", towerSprite, {
            frameWidth: 70,
            frameHeight: 130
        });
        this.load.spritesheet("crossbow", crossbowSprite, {
            frameWidth: 96,
            frameHeight: 96
        }); 
        this.load.spritesheet("crossbowArrow", crossbowArrowSprite, {
            frameWidth: 8,
            frameHeight: 34
        }); 
        this.load.spritesheet("arrowImpact", arrowImpactSprite, {
            frameWidth: 64,
            frameHeight: 64
        }); 
        this.load.spritesheet("pauseButton", pauseButtonSprite, {
            frameWidth: 16,
            frameHeight: 16
        })
        
    }

    create(){

        const sizeMap = {
            width : 1280,
            height:768
        }

        // Load map
        this.background = this.add.image(0,0, "gameMenu");
        this.background.setDisplayOrigin(0,0)

        // Sprite's animations
        this.anims.create({
            key: "goblin_anim",
            frames: this.anims.generateFrameNames("goblin"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "wolf_anim",
            frames: this.anims.generateFrameNames("wolf"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "hobGoblin_anim",
            frames: this.anims.generateFrameNames("hobGoblin"),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: "tower_anim",
            frames: this.anims.generateFrameNames("tower"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "crossbow_anim",
            frames: this.anims.generateFrameNames("crossbow"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "crossbowArrow_anim",
            frames: this.anims.generateFrameNames("crossbowArrow"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "arrowImpact_anim",
            frames: this.anims.generateFrameNames("arrowImpact"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "pauseButton_anim",
            frames: this.anims.generateFrameNames("pauseButton"),
            frameRate: 15,
            repeat: 0
        });
    }

    
}

export default PreloadScene;