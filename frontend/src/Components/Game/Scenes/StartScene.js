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
import pauseButtonSprite from "../../../assets/spriteSheets/UI/UIPauseButton.png"
import times2ButtonSprite from "../../../assets/spriteSheets/UI/UI2timeButton.png"
import campFireSprite from "../../../assets/spriteSheets/campFire.png"
import baseFlagSprite from "../../../assets/spriteSheets/baseFlag.png"
import starPng from "../../../assets/star.png"
import arrowPng from "../../../assets/arrow.png"
import campPng from "../../../assets/camp.png"
import slowingTower from "../../../assets/spriteSheets/slowingTower/slowingTowerWeapon.png"
import slowingTowerProjectile from "../../../assets/spriteSheets/slowingTower/slowingTowerProjectile.png"
import slowingTowerProjectileImpact from "../../../assets/spriteSheets/slowingTower/slowingTowerProjectileImpact.png"
import soundButtonSprite from "../../../assets/spriteSheets/UI/UISoundButton.png"
import mainMenuMusic from "../../../assets/audio/mainMusic.mp3"
import backTrackSound from "../../../assets/audio/backTrackSound.mp3"
import arrowSound from "../../../assets/audio/arrowSound.mp3"


class StartScene extends Phaser.Scene {
    constructor() {
        super("bootgame")
    }

    preload(){
        this.load.image("base", campPng);
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
        this.load.spritesheet("times2Button", times2ButtonSprite, {
            frameWidth: 16,
            frameHeight: 16
        })
        this.load.spritesheet("menuSoundButton",soundButtonSprite,{
            frameWidth:16,
            frameHeight:17
        })
        this.load.spritesheet("baseFlag", baseFlagSprite, {
            frameWidth: 32,
            frameHeight: 64
        })
        this.load.spritesheet("campFire", campFireSprite, {
            frameWidth: 32,
            frameHeight: 32
        })
        
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

        // Load menu sound
        
        this.menuMusic = this.sound.add("mainMenuMusic", {
            loop:true,
            volume:0.05
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
            key: "pauseButton_anim",
            frames: this.anims.generateFrameNames("pauseButton"),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key: "times2Button_anim",
            frames: this.anims.generateFrameNames("times2Button"),
            frameRate: 15,
            repeat: 0
        });
        this.anims.create({
            key:"soundButton_anim",
            frame: this.anims.generateFrameNames("menuSoundButton"),
            frameRate:15,
            repeat:0
        })

        this.anims.create({
            key: "campFire_anim",
            frames: this.anims.generateFrameNames("campFire"),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: "baseFlag_anim",
            frames: this.anims.generateFrameNames("baseFlag"),
            frameRate: 15,
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
            this.menuMusic.destroy()
        });

        this.soundButton = this.add.sprite(1230,50,"menuSoundButton").setFrame(2);
        this.soundButton.setScale(3);
        this.soundButton.setInteractive();
        this.soundButton.on("pointerover", () => {
            this.soundButton.setTint(0xe0e0e0);
        });
        
        this.soundButton.on("pointerout", () => {
            this.soundButton.setTint(0xFFFFFF);
        });

        this.soundButton.on("pointerdown", () => {
            this.soundButton.setFrame(1);
        });
        
        this.soundButton.on("pointerup", () => {
            this.soundButton.setFrame(0)
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

