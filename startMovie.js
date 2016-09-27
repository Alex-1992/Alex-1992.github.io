
function startMovie(game) {
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
        }, 2500, "Linear", true);
        infotween.onComplete.add(function() {
            info.destroy();
            // target.alpha = 1;
        });
}