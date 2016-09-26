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
    brick.events.onDragUpdate.add(callback);
    brick.events.onDragStop.add(dragStop);
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

    //game.physics.arcade.overlap(brick, block, testImpact);

}

function testImpact(target1, target2) {
    //target1.events.onDragUpdate.add(callback, this, 0, 'lazer', 100);
    // console.log(target);
    // console.log(target.body.overlapX,target.body.overlapY);
    target1.alpha = 0.5;
    console.log('Impact');
    // if( target1.position.x > target2.position.x - 96){
    //     target1.position.x = target2.position.x - 96;
    // }
    // if( target1.position.y > target2.position.y - 16){
    //     target1.position.y = target2.position.y - 16;
    // }
    // console.log(target1.position.x,target1.position.y);
    // console.log(target1.body.prev);
    // target1.position.x = target1.body.prev.x;
    // target1.position.y = target1.body.prev.y;
    
    //target1.body.x 


    //console.log(target.body);
    //hander.stopDrag(game.input.activePointer);
    // console.log(target.body);
    // hander.stopDrag(game.input.activePointer);
}
function callback(aa){
    aa.alpha = 1;
    game.physics.arcade.overlap(brick, block, testImpact);
    //console.log('aaaaaaaaaaaaaaaaaaaaaa')
    console.log(arguments);
    // console.log('999999999999999999999999999999999999999999999999')
    // console.log(aa)
    // console.log(target)
    // console.log(bb)
    //console.log(target.body.touching);
    // if(target.body.touching == 'none'){
    // console.log('11111111111111111111111111')
        
    //     target.events.onDragUpdate.remove(callback);
    //     target.alpha = 1;
    // }else{
    //     target.alpha = 0.5;
    // }
}

function dragStop(a){
    console.log('aaaaaaaa')
    console.log(a.alpha)
}