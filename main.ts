let points = 0;
let isRunning = true;
let gamePlayer = game.createSprite(2, 4);
let gameBall = game.createSprite(randint(0, 4), 0);

basic.forever(function () {
    basic.pause((points > 5) ? (points > 10) ? 100 : 250 : 500)
    console.log("Forever: Ticking!");
    if (isRunning) {
        console.log("Forever: Game is running!");
        let y = gameBall.get(LedSpriteProperty.Y);
        console.log("Forever: gameBall Y= "+y)
        if (y == 4) {
        }
    } else {
        console.log("Forever: Game isn't running, score is "+points+"!");
        basic.showNumber(points);
    }
})