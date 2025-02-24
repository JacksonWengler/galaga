scene.setBackgroundImage(sprites.background.lilypads)
let Player = sprites.create(assets.image`bookself`, SpriteKind.Player)
let Bad = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
Bad.destroy()
let Projectile = sprites.create(assets.image`projectile`, SpriteKind.Projectile)
Projectile.destroy()
controller.moveSprite(Player,200,200)
Player.setStayInScreen(true)

Bad.setPosition(160, randint(5, 115))

controller.A.onEvent(ControllerButtonEvent.Pressed, function(){
    let Projectile = sprites.createProjectileFromSprite
    (assets.image`projectile`, Player,200,0)
})

game.onUpdateInterval(1000, function () {
    Bad = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    Bad.setPosition(160, randint(5, 115))
    Bad.setVelocity(-110,0)
    Bad.setFlag(SpriteFlag.AutoDestroy, true)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(){
    info.changeScoreBy(1)
    Bad.destroy
    (effects.smiles, 200)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function () {
    info.changeLifeBy(-1)
    Bad.destroy()
    scene.cameraShake(4, 500)
})