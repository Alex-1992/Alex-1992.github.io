// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { create: create });
//1334x750  1125 750
var game = new Phaser.Game(900, 600, Phaser.CANVAS, 'phaser', {
    preload: preload,
    create: create,
    update: update
});

var player;
var facing = 'right';
var rects;
var blocks;
var stars;
var flag;
var button;
var state = 'run';
var text;
var currentSite = 1;

var data = [{
    //stage 1
    stars: [{
        x: 430,
        y: 300
    }],

    blocks: [],

    bricks: [{
        index: 3,
        x: 200,
        y: 450
    }, {
        index: 4,
        x: 200,
        y: 450
    }],

    player: {
        x: 200,
        y: 350
    },
    button: {
        x: 200,
        y: 400
    },
    flag: {
        x: 550,
        y: 350
    }
    //stage 2
}, {
    stars: [{
        x: 450,
        y: 220
    }, {
        x: 450,
        y: 340
    }, {
        x: 470,
        y: 270
    }],

    blocks: [{
        index: 0,
        x: 550,
        y: 380
    }, {
        index: 3,
        x: 200,
        y: 300
    }, {
        index: 4,
        x: 100,
        y: 450
    }],

    bricks: [{
        index: 0,
        x: 550,
        y: 380
    }, {
        index: 1,
        x: 200,
        y: 300
    }, {
        index: 3,
        x: 100,
        y: 450
    }, {
        index: 4,
        x: 100,
        y: 450
    }],

    player: {
        x: 10,
        y: 400
    },
    button: {
        x: 0,
        y: 450
    },
    flag: {
        x: 400,
        y: 340
    }
    //stage 3
}, {
    stars: [{
        x: 400,
        y: 220
    }, {
        x: 410,
        y: 340
    }, {
        x: 310,
        y: 340
    }, {
        x: 210,
        y: 440
    }],

    blocks: [{
        index: 1,
        x: 550,
        y: 450
    }, {
        index: 1,
        x: 580,
        y: 300
    }],

    bricks: [{
        index: 0,
        x: 550,
        y: 380
    }, {
        index: 1,
        x: 200,
        y: 300
    }, {
        index: 3,
        x: 100,
        y: 450
    }],

    player: {
        x: 310,
        y: 50
    },
    button: {
        x: 300,
        y: 100
    },
    flag: {
        x: 310,
        y: 380
    }
}, {
    //stage 4
    stars: [{
        x: 550,
        y: 200
    }, {
        x: 250,
        y: 200
    }, {
        x: 600,
        y: 270
    }],

    blocks: [{
        index: 1,
        x: 508,
        y: 310
    }, {
        index: 2,
        x: 320,
        y: 300
    }, {
        index: 3,
        x: 140,
        y: 300
    }],

    bricks: [{
        index: 0,
        x: 550,
        y: 380
    }, {
        index: 1,
        x: 200,
        y: 300
    }, {
        index: 2,
        x: 100,
        y: 450
    }],

    player: {
        x: 50,
        y: 250
    },
    button: {
        x: 40,
        y: 300
    },
    flag: {
        x: 370,
        y: 380
    }
}];

function preload() {
    game.load.spritesheet('block0', 'png/block0.png', 64, 32);
    game.load.spritesheet('block1', 'png/block1.png', 64, 32);
    game.load.spritesheet('block2', 'png/block2.png', 64, 32);
    game.load.spritesheet('block3', 'png/block3.png', 64, 32);
    game.load.spritesheet('block4', 'png/block4.png', 64, 32);

    game.load.spritesheet('dude', 'png/dude.png', 32, 48);

    game.load.spritesheet('brick0', 'png/brick0.png', 64, 32);
    game.load.spritesheet('brick1', 'png/brick1.png', 64, 32);
    game.load.spritesheet('brick2', 'png/brick2.png', 64, 32);
    game.load.spritesheet('brick3', 'png/brick3.png', 64, 32);
    game.load.spritesheet('brick4', 'png/brick4.png', 64, 32);

    game.load.spritesheet('star', 'png/star.png', 64, 32);
    game.load.spritesheet('start', 'png/start.png', 64, 32);
    game.load.spritesheet('flag', 'png/flag.png', 28, 32);

    // game.load.spritesheet('build', 'png/build.png', 124, 50);
    // game.load.spritesheet('run', 'png/run.png', 124, 50);
    // game.load.spritesheet('wall', 'png/wall.png', 800, 16);

    game.load.spritesheet('build', 'png/build1.png', 124, 50);
    game.load.spritesheet('run', 'png/run1.png', 124, 50);

}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = 'blank';
    //game.stage.backgroundColor = '#FFFFCC';

    //var wall1 = game.add.sprite(0, 530, 'wall');
    //var wall2 = game.add.sprite(0, 30, 'wall');

    player = game.add.sprite(10, 400, 'dude');
    game.physics.arcade.enableBody(player);
    player.body.gravity.y = 350;

    player.body.bounce.y = 0.1;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    loadSite();
}

function update() {
    game.physics.arcade.collide(player, flag, touchFlag);
    game.physics.arcade.collide(player, rects, impact);
    game.physics.arcade.collide(player, button);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    //player.body.velocity.x = 0;

    if (player.body.velocity.x > 0) {

        if (facing != 'right') {
            player.animations.play('right');
            facing = 'right';
        }
    }
    if (player.body.velocity.x < 0) {

        if (facing != 'left') {
            player.animations.play('left');
            facing = 'left';
        }
    }
    if (player.body.velocity.x == 0) {

        player.animations.stop();
        player.frame = 4;
        facing = 'idle';
    }

    // if (jumpButton.isDown && player.body.velocity.y <= 0 && game.time.now > jumpTimer) {
    //     player.body.velocity.y = -250;
    //     jumpTimer = game.time.now + 750;
    // }

}

function collectStar(player, star) {
    // console.log(stars);
    star.destroy();
}

function touchFlag() {
    flag.destroy();
    if (stars.total == 0) {
        console.log("congratulation!");
        player.body.velocity.x = 0;
    } else {
        console.log("you must collect all the starts before get the flag!");
        var style = {
            font: "30px Arial",
            fill: "#66CCFF",
            align: "center"
        };
        var info = game.add.text(game.world.centerX, game.world.centerY, "- collect all the starts before get the flag! -", style);
        info.anchor.set(0.5);
        info.alpha = 1;

        var infotween = game.add.tween(info);
        infotween.to({
            alpha: 0.7
        }, 3500, "Linear", true);
        infotween.onComplete.add(function() {
            info.destroy();
        });
        return;
    }

    var style = {
        font: "55px Arial",
        fill: "#FFFFCC",
        align: "center"
    };
    text = game.add.text(game.world.centerX, game.world.centerY, "- walkman -\nstage " + (currentSite + 1), style);
    text.anchor.set(0.5);
    text.alpha = 1;

    var tween = game.add.tween(text);
    tween.to({
        alpha: 0.1
    }, 2500, "Linear", true);
    tween.onComplete.add(startNextStage);

    clearSite();

    //alert('congratulation!');
}

function impact(dis, dis2) {
    //console.log("impact"+state);
    if (state == 'run') {
        return;
    }
    if (dis2.name == 'brick0') {
        //console.log(dis.x, dis.y);
        if (dis2.body.touching.up == true) {
            player.body.velocity.x = -150;
        }

    }
    if (dis2.name == 'brick1') {
        if (dis2.body.touching.up == true) {
            player.body.velocity.y = -250;
            player.body.velocity.x = -150;
        }

    }

    if (dis2.name == 'brick2') {
        if (dis2.body.touching.up == true) {
            player.body.velocity.y = -250;
            //player.body.velocity.x = 0;
        }

    }

    if (dis2.name == 'brick3') {
        if (dis2.body.touching.up == true) {
            player.body.velocity.y = -250;
            player.body.velocity.x = 150;
        }

    }

    if (dis2.name == 'brick4') {
        if (dis2.body.touching.up == true) {
            player.body.velocity.x = 150;
        }
    }


}

function buildAndRun() {
    player.x = data[currentSite - 1].player.x;
    player.y = data[currentSite - 1].player.y;
    //player.body.reset(10, 400);
    //player.stopVelocity();
    player.body.velocity.set(0, 0);
    if (state == 'run') {
        //run模式
        //console.log('run');
        rects.ignoreChildInput = true;
        //rects.enableBody = true;

        player.body.velocity.x = 150;
        button.loadTexture('build', 0);
        putStarsandBlocks();
        state = 'build';
        return;

    }


    if (state == 'build') {
        //build模式
        //console.log('build');
        rects.ignoreChildInput = false;
        //rects.enableBody = false;
        //player.body.immovable = true;
        button.loadTexture('run', 0);
        putStarsandBlocks();

        state = 'run';
        return;
    }
}

function resetPlayer() {
    location.reload();
}

function putStarsandBlocks() {
    stars.enableBody = true;

    if (flag.visible == false) {
        flag = game.add.sprite(data[currentSite - 1].flag.x, data[currentSite - 1].flag.y, 'flag');
        game.physics.arcade.enableBody(flag);
        //flag.body.mess = 0;
    }

    // 148 25  411 185
    for (var i = 0; i < data[currentSite - 1].stars.length; i++) {
        var s = stars.create(data[currentSite - 1].stars[i].x, data[currentSite - 1].stars[i].y, 'star');
    }

    //blocks.enableBody = true;
    for (var i = 0; i < data[currentSite - 1].blocks.length; i++) {
        var b = rects.create(data[currentSite - 1].blocks[i].x, data[currentSite - 1].blocks[i].y, 'block' + data[currentSite - 1].blocks[i].index);
        b.name = 'brick' + data[currentSite - 1].blocks[i].index;
        b.body.immovable = true;
    }
}

function loadSite() {

    // if (rects)
    //     rects.destroy();
    // if (stars)
    //     stars.destroy();

    //flag.reset(data[currentSite - 1].flag.x, data[currentSite - 1].flag.y);
    //button.reset(data[currentSite - 1].button.x, data[currentSite - 1].button.y);
    flag = game.add.sprite(data[currentSite - 1].flag.x, data[currentSite - 1].flag.y, 'flag');
    game.physics.arcade.enableBody(flag);
    //flag.body.mess = 0;


    button = game.add.sprite(data[currentSite - 1].button.x, data[currentSite - 1].button.y, 'run');
    game.physics.arcade.enableBody(button);
    button.body.immovable = true;
    button.inputEnabled = true;
    button.events.onInputDown.add(buildAndRun);

    player.reset(data[currentSite - 1].player.x, data[currentSite - 1].player.y);
    player.visible = true;

    rects = game.add.group();
    rects.enableBody = true;
    for (var i = 0; i < data[currentSite - 1].bricks.length; i++) {
        var r = rects.create(game.width / (data[currentSite - 1].bricks.length + 1) * (i + 1), 20, 'brick' + data[currentSite - 1].bricks[i].index);
        r.anchor.set(0.5);
        r.name = 'brick' + data[currentSite - 1].bricks[i].index;
        r.body.immovable = true;
        r.inputEnabled = true;
        r.input.enableDrag();

    }

    stars = game.add.group();
    putStarsandBlocks();



}

function startNextStage() {
    currentSite++;
    text.destroy();
    loadSite();
}

function clearSite() {
    if (rects)
        rects.destroy();
    if (stars)
        stars.destroy();
    if (button)
        button.destroy();
    if (flag)
        flag.destroy();
    player.visible = false;
}
// function pickTile(sprite, pointer) {

//     var x = game.math.snapToFloor(pointer.x, 32, 0);
//     var y = game.math.snapToFloor(pointer.y, 32, 0);

//     currentTileMarker.x = x;
//     currentTileMarker.y = y;

//     x /= 32;
//     y /= 32;

//     currentTile = x + (y * 25);

// }

// function updateMarker() {

//     marker.x = layer.getTileX(game.input.activePointer.worldX) * 32;
//     marker.y = layer.getTileY(game.input.activePointer.worldY) * 32;

//     if (game.input.mousePointer.isDown && marker.y > 32) {
//         map.putTile(currentTile, layer.getTileX(marker.x), layer.getTileY(marker.y), layer);
//     }

// }

//function createTileSelector() {

//  Our tile selection window
//var tileSelector = game.add.group();

//var tileSelectorBackground = game.make.graphics();
// tileSelectorBackground.beginFill(0x000000, 0.8);
// tileSelectorBackground.drawRect(0, 0, 800, 66);
// tileSelectorBackground.endFill();

//tileSelector.add(tileSelectorBackground);

//var tileStrip = tileSelector.create(1, 1, bmd);
//tileStrip.inputEnabled = true;
//tileStrip.events.onInputDown.add(pickTile, this);

//  Our painting marker
// marker = game.add.graphics();
// marker.lineStyle(2, 0x000000, 1);
// marker.drawRect(0, 0, 128, 32);

// //  Our current tile marker
// currentTileMarker = game.add.graphics();
// currentTileMarker.lineStyle(1, 0xffffff, 1);
// currentTileMarker.drawRect(0, 0, 128, 32);

// tileSelector.add(currentTileMarker);

//}



// spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//     spaceKey.onDown.add(togglePause, this);