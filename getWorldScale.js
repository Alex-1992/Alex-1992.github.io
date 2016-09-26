function calculateWorldInfo() {
    var standardWidth  = 750;    // designed width
    var standardHeight = 1125;  // designed height
    var canvasWidth    = window.innerWidth;
    var canvasHeight   = window.innerHeight;
    let standardRatio  = standardHeight / standardWidth;  // 标准宽高比
    let currentRatio   = canvasHeight / canvasWidth;

    let minRatio = 4.0 / 3.0;  // 支持的最小高宽比
    let maxRatio = 1280 / 680;  // 支持的最大高宽比
    currentRatio = Math.min(Math.max(currentRatio, minRatio), maxRatio);

    // console.log("currentRatio:", currentRatio);
    // 计算适合的长宽值
    let width, height;
    if (currentRatio < standardRatio) {
        height = standardHeight;
        width  = height / currentRatio;
    } else {
        width  = standardWidth;
        height = width * currentRatio;
    }
    // 计算缩放值
    let targetScale = 1;
    if (currentRatio < standardRatio) {
        // fixed_height
        // console.log("fixed_height");
        targetScale = canvasHeight / standardHeight;
    } else {
        // fixed_width
        // console.log("fixed_width");
        targetScale = canvasWidth / standardWidth;
    }

    return {
        width: width,
        height: height,
        scale: targetScale,
    }
}
let worldSize = calculateWorldInfo();
this.scale.setGameSize(worldSize.width, worldSize.height);
this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
this.scale.setUserScale(worldSize.scale, worldSize.scale);