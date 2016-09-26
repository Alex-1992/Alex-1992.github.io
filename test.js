var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {
    preload: preload,
    create: create,
    update: update
});


var brick;
var block;
var hander;

function preload() {

    game.load.image('brick', 'png/brick0.png');
    game.load.image('block', 'png/block0.png');

}

function create() {
    //game.physics.startSystem(Phaser.Physics.BOX2D);
    //  This simply creates a sprite using the mushroom image we loaded above and positions it at 200 x 200
    brick = game.add.sprite(200, 200, 'brick');
    brick.inputEnabled = true;
    brick.input.enableDrag();
    game.physics.arcade.enableBody(brick);
    // brick.body.blocked.up = true;
    // brick.body.blocked.down = true;
    //hander = new Phaser.InputHandler(brick);


    block = game.add.sprite(400, 200, 'block');
    block.inputEnabled = true;
    block.input.enableDrag();
    game.physics.arcade.enableBody(block);
    //block.body.blocked = true;
}

function update() {

    game.physics.arcade.overlap(brick, block, testImpact);

}

function testImpact(target) {
    console.log(target);
    console.log('Impact');
    //console.log(target.body);
    //hander.stopDrag(game.input.activePointer);
}