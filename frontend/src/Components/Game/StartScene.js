import Phaser from "phaser";
import menuBG from "../../assets/menuBG.png"
import towerDefenseMap from "../../assets/TowerDefenseMap.png"
import enemy1Sprite from "../../assets/spriteSheets/S_Goblin_walk.png"
import towerSprite from "../../assets/spriteSheets/tower.png"
import starPng from "../../assets/star.png"
import arrowPng from "../../assets/arrow.png"
import crossbowSprite from "../../assets/spriteSheets/crossbow.png"
import crossbowArrowSprite from "../../assets/spriteSheets/crossbowArrow.png"
import arrowImpactSprite from "../../assets/spriteSheets/arrowImpact.png"
import slowingTower from "../../assets/spriteSheets/slowingTower/slowingTowerWeapon.png"
import slowingTowerProjectile from "../../assets/spriteSheets/slowingTower/slowingTowerProjectile.png"
import slowingTowerProjectileImpact from "../../assets/spriteSheets/slowingTower/slowingTowerProjectileImpact.png"
import soundIcon from "../../assets/soundIcon.png"
import mainMenuMusic from "../../assets/audio/mainMusic.mp3"
import backTrackSound from "../../assets/audio/backTrackSound.mp3"
import arrowSound from "../../assets/audio/arrowSound.mp3"


class StartScene extends Phaser.Scene {
    constructor() {
        super("bootgame")
    }

    preload(){
        this.load.image("gameMenu",menuBG);
        this.load.image("gameMap", towerDefenseMap);
        this.load.image("arrow", arrowPng);
        this.load.image("star", starPng);
        this.load.image("soundIcon",soundIcon)
        this.load.spritesheet("goblin", enemy1Sprite,{
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
        this.load.spritesheet("slowingTower",slowingTower,{
            frameWidth:96,
            frameHeight:96
        })
        this.load.spritesheet("slowingTowerProjectile", slowingTowerProjectile, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("slowingTowerProjectileImpact", slowingTowerProjectileImpact, {
            frameWidth: 64,
            frameHeight: 64
        }); 

        this.load.audio("mainMenuMusic",[mainMenuMusic])
        this.load.audio("backTrackSound",[backTrackSound])
        this.load.audio("arrowSound",[arrowSound])
    }

    create(){

        const sizeMap = {
            width : 1280,
            height:768
        }

        // Load Menu
        this.background = this.add.image(0,0, "gameMenu");
        this.background.setDisplayOrigin(0,0)
        /* this.background.setOrigin(0,0) */

        // Load sound
        
        this.menuMusic = this.sound.add("mainMenuMusic", {
            loop:true
        })
        this.menuMusic.play()
        this.backTrackSound = this.sound.add("backTrackSound",{
            loop:true
        })


        // Sprite's animations
        this.anims.create({
            key: "goblin_anim",
            frames: this.anims.generateFrameNames("goblin"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "tower_anim",
            frames: this.anims.generateFrameNames("tower"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key:"slowingTower_anim",
            frames: this.anims.generateFrameNames("slowingTower"),
            frameRate:25,
            repeat:-1
        })

        this.anims.create({
            key: "crossbow_anim",
            frames: this.anims.generateFrameNames("crossbow"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "slowingTowerWeapon_anim",
            frames : this.anims.generateFrameNames("slowingTowerWeapon"),
            framesRate:25,
            repeat:-1
        })

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
            key: "slowingTowerWeaponImpact_anim",
            frames: this.anims.generateFrameNames("slowingTowerWeaponImpact"),
            frameRate: 25,
            repeat: -1
        });

        // Button to next Scene
        const button = this.add.text(this.scale.width/2, this.scale.height/1.5, 'Start',
            {
                fontFamily: 'Candara, Arial',
                fontSize: '48px',
                color: '#ffffff',
                fontStyle: 'bold'
                
            }
        ).setOrigin(0.5);
        button.setInteractive();
        button.on('pointerover', () => { button.setFontSize(60); });
        button.on('pointerout', () => { button.setFontSize(48); });
        button.on('pointerdown', () => {
            this.scene.start('playGame');
            this.menuMusic.stop()
            this.backTrackSound.play()
        });

        const soundIconButton = this.add.image(0, 0, "soundIcon");
        soundIconButton.setInteractive();
        soundIconButton.setDisplayOrigin(0, 0);
        soundIconButton.setPosition(sizeMap.width - 100, sizeMap.height - 750);
        
        soundIconButton.on('pointerdown',()=>{
            
            if(this.menuMusic.isPlaying){
                this.menuMusic.stop()
            }else{
                this.menuMusic.play()
            }
            
        })
        this.menuMusic.isPlaying = this.menuMusic.isPaused
    }
}


export default StartScene;

