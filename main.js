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
var recordsBtn;
var state = 'run';
var text;
var bounds;
var bottomGround;
var currentSite = 2;
var ground;
var graphicsGround;
var headWindow;
var headWindowTween;
var numGroup;


var data = [{
    //stage 1
    stars: [{
        x: 360,
        y: 220
    }],

    blocks: [],

    bricks: [{
        index: 4,
    }],

    player: {
        x: 300,
        y: 200
    },

    flag: {
        x: 450,
        y: 220
    }
    //stage 2
}, {
    stars: [{
        x: 430,
        y: 300
    }],

    blocks: [{
        index: 4,
        x: 200,
        y: 400
    }],

    bricks: [{
        index: 3,
    }, {
        index: 4,
        x: 200,
        y: 450
    }],

    player: {
        x: 200,
        y: 350
    },

    flag: {
        x: 560,
        y: 350
    }
    //stage 3
}, {
    stars: [{
        x: 430,
        y: 300
    }],

    blocks: [{
        index: 4,
        x: 200,
        y: 400
    }],

    bricks: [{
        index: 3,
    }],

    player: {
        x: 200,
        y: 350
    },

    flag: {
        x: 560,
        y: 350
    }
    //stage 4
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
        y: 440
    }],

    bricks: [{
        index: 0,
    }, {
        index: 1,
    }, {
        index: 3,
    }, {
        index: 4,
    }],

    player: {
        x: 110,
        y: 390
    },

    flag: {
        x: 400,
        y: 340
    }
    //stage 5
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
        index: 4,
        x: 300,
        y: 100
    }, {
        index: 1,
        x: 580,
        y: 300
    }],

    bricks: [{
        index: 3,
    }, {
        index: 0,
    }, {
        index: 3,
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
    //stage 6
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
    }, {
        index: 1,
    }, {
        index: 2,
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
}, {}, {}, {}, {}];

function preload() {
    // game.load.spritesheet('block0', 'block0.png', 64, 32);
    // game.load.spritesheet('block1', 'block1.png', 64, 32);
    // game.load.spritesheet('block2', 'block2.png', 64, 32);
    // game.load.spritesheet('block3', 'block3.png', 64, 32);
    // game.load.spritesheet('block4', 'block4.png', 64, 32);

    // game.load.spritesheet('dude', 'dude.png', 32, 48);

    // game.load.spritesheet('brick0', 'brick0.png', 64, 32);
    // game.load.spritesheet('brick1', 'brick1.png', 64, 32);
    // game.load.spritesheet('brick2', 'brick2.png', 64, 32);
    // game.load.spritesheet('brick3', 'brick3.png', 64, 32)
    // game.load.spritesheet('brick4', 'brick4.png', 64, 32);

    // game.load.spritesheet('star', 'star.png', 64, 32);
    // game.load.spritesheet('start', 'start.png', 64, 32);
    // game.load.spritesheet('flag', 'flag.png', 28, 32);

    // game.load.spritesheet('ground', 'ground.png', 1000, 900);

    // game.load.spritesheet('build', 'build10.png', 108, 56);
    // game.load.spritesheet('run', 'run10.png', 108, 56);
    // game.load.spritesheet('recordsBtn', 'records.png', 124, 50);


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

    game.load.spritesheet('ground', 'png/ground.png', 1000, 900);

    game.load.spritesheet('build', 'png/build10.png', 108, 56);
    game.load.spritesheet('run', 'png/run10.png', 108, 56);
    game.load.spritesheet('recordsBtn', 'png/records.png', 124, 50);

}

function create() {
    //console.log(localStorage.getItem("reached-level"));
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //game.stage.backgroundColor = 'blank';
    //game.stage.backgroundColor = '#FFFFCC';
    // localStorage.setItem("reached-level", '1');


    // if (localStorage.getItem("reached-level") == null) {
    //     localStorage.setItem("reached-level", currentSite);
    // } else {
    //     currentSite = parseInt(localStorage.getItem("reached-level"));
    // }


    bounds = new Phaser.Rectangle(0, 0, game.width, game.height * 0.9);
    //  Create a graphic so you can see the bounds
    var graphics = game.add.graphics(bounds.x, bounds.y);
    graphics.beginFill('black');
    graphics.drawRect(0, 0, bounds.width, bounds.height);
    graphics.endFill();
    game.physics.arcade.enableBody(bounds);
    

    //底部挡板
    // var graphicsGround = new Phaser.Graphics(this.game, 0, 0);
    // graphicsGround.beginFill(0xC3C3C3);
    // graphicsGround.drawRect(0, 0, game.width, game.height * 0.1);
    // graphicsGround.endFill();
    // bottomGround = game.add.sprite(0, game.height * 0.9, graphicsGround.generateTexture());

    // game.physics.arcade.enableBody(bottomGround);
    // bottomGround.body.immovable = true;

    //graphics1.drawRect(0, 0, 100, 100);


    button = game.add.sprite(game.width / 3, game.height * 0.93, 'run');
    button.anchor.x = 0.5;
    // game.physics.arcade.enableBody(button);
    // button.body.immovable = true;
    button.inputEnabled = true;
    button.events.onInputDown.add(buildAndRun);
    game.physics.arcade.enableBody(button);
    button.scale.setTo(0.8,0.6);
    button.body.immovable = true;


    recordsBtn = game.add.sprite(game.width / 3 * 2, game.height * 0.93, 'recordsBtn');
    recordsBtn.anchor.x = 0.5;
    //recordsBtn.index = 10;
    recordsBtn.inputEnabled = true;
    recordsBtn.events.onInputDown.add(checkSite);
    game.physics.arcade.enableBody(recordsBtn);
    recordsBtn.scale.setTo(0.8,0.6);
    recordsBtn.body.immovable = true;
    // buttonBounds = new Phaser.Rectangle(0, game.height * 0.85, game.width, game.height * 0.15);
    // //  Create a graphic so you can see the bounds
    // var buttonGraphics = game.add.graphics(buttonBounds.x, buttonBounds.y);
    // buttonGraphics.beginFill(0x333333);
    // buttonGraphics.drawRect(0, 0, buttonBounds.width, buttonBounds.height);
    // game.physics.arcade.enableBody(buttonBounds);
    // buttonBounds.immovable = true;


    //var ground1 = game.add.sprite(0, 530, 'ground');
    //var ground2 = game.add.sprite(0, 30, 'ground');

    player = game.add.sprite(10, 400, 'dude');
    game.physics.arcade.enableBody(player);

    // player.inputEnabled = true;
    // player.input.boundsRect = bounds;

    player.body.gravity.y = 350;
    // player.body.allowGravity = false;
    // player.body.immovable = true;

    player.body.bounce.y = 0.1;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    numGroup = game.add.group();
    numGroup.inputEnableChildren = true;
    numGroup.onChildInputDown.priorityID = 1000;
    numGroup.onChildInputDown.add(numDonw, this);

    loadSite();
}


function update() {
    game.physics.arcade.collide(player, bottomGround);
    //game.physics.arcade.collide(player, ground);
    game.physics.arcade.collide(player, flag, playerTouchFlag);
    game.physics.arcade.collide(player, rects, playerTouchBrick);
    //game.physics.arcade.collide(player, button);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    game.physics.arcade.collide(player, button);
    game.physics.arcade.collide(player, recordsBtn);

    
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
    console.log(stars.enableBody);
    if(stars.enableBody == true)
    star.destroy();
}

function playerTouchFlag() {
    flag.destroy();
    if (stars.total == 0) {
        //console.log("congratulation!");
        //player.body.velocity.x = 0;
        button.events.onInputDown.remove(buildAndRun);
        recordsBtn.events.onInputDown.remove(checkSite);

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

    } else {
        //console.log("you must collect all the starts before get the flag!");
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



    //alert('congratulation!');
}

function playerTouchBrick(dis, dis2) {
    //console.log("playerTouchBrick"+state);
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
    if (headWindowTween) {
        headWindowTween.to({
            y: 0
        }, 300, "Linear", true);
        headWindowTween = null;
        //game.input.onDown.remove(packUpHeadWindow);
    }

    player.x = data[currentSite - 1].player.x;
    player.y = data[currentSite - 1].player.y;
    //player.body.reset(10, 400);
    //player.stopVelocity();
    player.body.velocity.set(0, 0);
    if (state == 'run') {
        //stars.enableBody = false;
        player.body.immovable = false;
        player.body.allowGravity = true;
        //run模式
        //console.log('run');
        rects.ignoreChildInput = true;
        //rects.enableBody = true;

        //player.body.velocity.x = 150;
        button.loadTexture('build', 0);
        putStarsandBlocks(currentSite);
        state = 'build';
        return;

    }


    if (state == 'build') {
        stars.enableBody = false;
        player.body.immovable = true;
        player.body.allowGravity = false;
        //build模式
        //console.log('build');
        rects.ignoreChildInput = false;
        //rects.enableBody = false;
        //player.body.immovable = true;
        button.loadTexture('run', 0);
        putStarsandBlocks(currentSite);

        state = 'run';
        return;
    }
}

function resetPlayer() {
    location.reload();
}

function putStarsandBlocks(siteNum) {
   

    if (flag.visible == false) {
        flag = game.add.sprite(data[siteNum - 1].flag.x, data[siteNum - 1].flag.y, 'flag');
        game.physics.arcade.enableBody(flag);
        //flag.body.mess = 0;
    }

    // 148 25  411 185
    stars.enableBody = true;
    for (var i = 0; i < data[siteNum - 1].stars.length; i++) {
        var s = stars.create(data[siteNum - 1].stars[i].x, data[siteNum - 1].stars[i].y, 'star');
    }
    

    //blocks.enableBody = true;
    //rects.inputEnabled = true;
    for (var i = 0; i < data[siteNum - 1].blocks.length; i++) {
        var b = rects.create(data[siteNum - 1].blocks[i].x, data[siteNum - 1].blocks[i].y, 'block' + data[siteNum - 1].blocks[i].index);
        b.name = 'brick' + data[siteNum - 1].blocks[i].index;
        b.body.immovable = true;
    }
    //rects.input.boundsRect = bounds;

}

function loadSite(siteNum) {
    var dataNum;
    //bounds = new Phaser.Rectangle(0, game.height * 0.85, game.width, game.height * 0.15);
    if (siteNum) {
        dataNum = siteNum;
    } else {
        dataNum = currentSite;
    }

    // if (rects)
    //     rects.destroy();
    // if (stars)
    //     stars.destroy();

    //flag.reset(data[currentSite - 1].flag.x, data[currentSite - 1].flag.y);
    //button.reset(data[currentSite - 1].button.x, data[currentSite - 1].button.y);
    flag = game.add.sprite(data[dataNum - 1].flag.x, data[dataNum - 1].flag.y, 'flag');
    game.physics.arcade.enableBody(flag);
    //flag.body.mess = 0;



    player.reset(data[dataNum - 1].player.x, data[dataNum - 1].player.y);
    player.visible = true;
    player.body.immovable = true;
    player.body.allowGravity = false;
    //player.input.boundsRect = bounds;

    rects = game.add.group();
    rects.enableBody = true;
    //放下brick
    for (var i = 0; i < data[dataNum - 1].bricks.length; i++) {
        var x = game.width / (data[dataNum - 1].bricks.length + 1) * (i + 1);
        var y = game.height * 0.05;
        // data[dataNum - 1].bricks[i].x = x;
        // data[dataNum - 1].bricks[i].y = y;
       
        var r = rects.create(x, y, 'brick' + data[dataNum - 1].bricks[i].index);
        r.data.x = x;
        r.data.y = y;
        r.anchor.set(0.5);
        r.name = 'brick' + data[dataNum - 1].bricks[i].index;
        r.body.immovable = true;

        r.inputEnabled = true;
        r.input.enableSnap(4, 4, true, true);
        r.input.enableDrag();
        r.input.boundsRect = bounds;
        r.events.onDragUpdate.add(dragUpdate);
        r.events.onDragStop.add(dragStop);
        //r.input.boundsRect = bounds;

    }
    //console.log(data);
    stars = game.add.group();
    putStarsandBlocks(dataNum);

}

function startNextStage() {
    currentSite++;
    // player.body.immovable = true;
    // player.body.allowGravity = false;
    //rects.ignoreChildInput = false;
    //rects.enableBody = false;
    //player.body.immovable = true;
    if (localStorage.getItem("reached-level") == null || (currentSite > parseInt(localStorage.getItem("reached-level")))) {
        localStorage.setItem("reached-level", currentSite);
    }
    //console.log(localStorage.getItem("reached-level"));
    button.loadTexture('run', 0);
    state = 'run';

    text.destroy();

    button.events.onInputDown.add(buildAndRun);
    recordsBtn.events.onInputDown.add(checkSite);

    loadSite();
}

function clearSite() {
    if (rects)
        rects.destroy();
    if (stars)
        stars.destroy();
    // if (button)
    //     button.destroy();
    if (flag)
        flag.destroy();
    //player.visible = false;
}

function checkSite() {
    // headWindow = game.add.sprite(0, game.height, 'ground');
    // headWindow.scale.setTo(2, 6);

    // var tween = game.add.tween(headWindow);
    // tween.to({
    //     y: game.height * 0.9
    // }, 1000, "Linear", true);
    if (headWindowTween) {
        console.log('收起');
        headWindowTween.to({
            y: 0
        }, 300, "Linear", true);
        headWindowTween = null;
        //game.input.onDown.remove(packUpHeadWindow);
    } else {

        headWindow = game.add.sprite(0, 0, 'ground');
        headWindow.anchor.y = 1;
        //headWindow.scale.setTo(2, 6);

        //var lastLine = Math.ceil(parseInt(localStorage.getItem("reached-level")) / 10);
        var lastLine = Math.ceil(data.length / 10);
        var highestLevel = parseInt(localStorage.getItem("reached-level"));
        //console.log(highestLevel);
        var currentNum = 1;
        var lastLineNumber = data.length % 10 == 0 ? 10 : data.length % 10;

        //console.log(data.length);
        //console.log(lastLineNumber);
        //console.log(lastLine);
        for (var i = 0; i < lastLine; i++) {
            for (var j = 0; j < 10; j++) {
                // if (i == (lastLine - 1) && j + 1 > lastLineNumber)
                //     break;
                //console.log(currentNum);
                var color = currentNum > highestLevel ? "#808080" : "#000000";
                var font = '30px Arial';
                if (currentNum == currentSite)
                    font = '40px Arial';
                var style = {
                    font: font,
                    fill: color,
                    align: "center"
                };
                //console.log(style);
                var num = (i == (lastLine - 1) ? lastLineNumber : 10);
                //console.log(j);
                // var num = game.add.text(0, 0, j, style);
                // num.alignIn(headWindow, Phaser.TOP_CENTER, -i * game.height * 0.01, -j * game.width * 0.01);

                //var num = numGroup.create(data[currentSite - 1].stars[i].x, data[currentSite - 1].stars[i].y, 'star');
                // console.log('~~~~~~~~~~~~~~');
                //var num = game.add.text(j * 80 + 50, 100, j + 1, style);


                var numText = new Phaser.Text(game, game.width / (num + 1) * (j + 1), -25, currentNum, style);
                //var numText = numGroup.createText(game ,game.width / (num + 1) * (j + 1), -25, currentNum, style);
                numText.anchor.y = 1;
                numGroup.addChild(numText);
                numText.inputEnabled = true;
                numText.priorityID = 5;
                numText.events.onInputUp.add(numDonw, this);
                headWindow.addChild(numText);
                currentNum++;
                //var numText = game.add.text(game.width / (num + 1) * (j + 1), 120, j + 1, style);


                //num.alignIn(headWindow, Phaser.TOP_CENTER, -i * game.height * 0.01, -j * game.width * 0.01);
            }
        }

        console.log('放下');
        headWindowTween = game.add.tween(headWindow);
        headWindowTween.to({
            y: game.height * 0.15
        }, 300, "Linear", true);

        game.input.onDown.add(packUpHeadWindow);

    }


    // console.log(localStorage.getItem("reached-level"));
    // console.log(currentSite);
    //tween.onComplete.add(startNextStage);

    // ground = game.add.sprite(0, game.height * 0.9, 'ground');
    // ground.scale.setTo(2, 6);
    // game.physics.arcade.enableBody(ground);
    // ground.body.immovable = true;
    // console.log('111111111111111111111111111111111');
}

function numDonw(siteNum) {
    if (parseInt(siteNum.text) > parseInt(localStorage.getItem("reached-level")))
        return;
    //game.input.onDown.remove(packUpHeadWindow);
    headWindowTween.to({
        y: 0
    }, 300, "Linear", true);
    headWindowTween.onComplete.add(tweenFinish, this, null, parseInt(siteNum.text));
    headWindowTween = null;
    // clearSite();
    // loadSite(parseInt(siteNum.text));
}

function tweenFinish(a, b, num) {
    clearSite();
    loadSite(num);
    currentSite = num;
}

function packUpHeadWindow() {
    if(!headWindowTween){
        game.input.onDown.remove(packUpHeadWindow);
        return;
    }

    if (game.input.activePointer.y > game.height * 0.15 && game.input.activePointer.y < game.height * 0.9) {
        headWindowTween.to({
            y: 0
        }, 300, "Linear", true);
        headWindowTween = null;

        game.input.onDown.remove(packUpHeadWindow);
    }

    //console.log(game.input.activePointer.x, game.input.activePointer.y);
}


function dragUpdate(target){
    target.alpha = 1;
    game.physics.arcade.overlap(target, rects, function(){
        target.alpha = 0.5;
    });
    game.physics.arcade.overlap(target, flag, function(){
        target.alpha = 0.5;
    });
    game.physics.arcade.overlap(target, stars, function(){
        target.alpha = 0.5;
    });
    game.physics.arcade.overlap(target, player, function(){
        target.alpha = 0.5;
    });
}

function dragStop(target){

    if(target.alpha != 1){
        
        game.add.tween(target).to( {x:target.data.x, y:target.data.y }, 500, null, true);
        target.alpha = 1;
        var style = {
            font: "30px Arial",
            fill: "#66CCFF",
            align: "center"
        };
        var info = game.add.text(game.world.centerX, game.world.centerY, " bricks can not overlap with other things! ", style);
        info.anchor.set(0.5);
        info.alpha = 1;

        var infotween = game.add.tween(info);
        infotween.to({
            alpha: 0.5
        }, 1500, "Linear", true);
        infotween.onComplete.add(function() {
            info.destroy();
            // target.alpha = 1;
        });
    }
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