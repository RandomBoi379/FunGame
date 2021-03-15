namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const ded = SpriteKind.create()
    export const h = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
function true_end () {
    mySprite5 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . c c c a a c c c . . . . 
        . . . c c c a a a a c c c . . . 
        . . c c c a a a a a a c c c . . 
        . . c c a a a a a a a a a c . . 
        . . c a a c c c c c c a a c . . 
        . . c c c c a a a a c c c c . . 
        . c c a c f f a a f f c a c c . 
        . c a a a f f a a f f a a a c . 
        . . c a a a a a a a a a a c . . 
        . . . c a a a a a a a a c . . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c . . c c . . . . . 
        `, SpriteKind.ded)
    mySprite5.follow(mySprite, 60)
    story.spriteSayText(mySprite5, "get noob", 2, 0, story.TextSpeed.Slow)
}
function _ () {
    mySprite5 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . c c c a a c c c . . . . 
        . . . c c c a a a a c c c . . . 
        . . c c c a a a a a a c c c . . 
        . . c c a a a a a a a a a c . . 
        . . c a a c c c c c c a a c . . 
        . . c c c c a a a a c c c c . . 
        . c c a c f f a a f f c a c c . 
        . c a a a f f a a f f a a a c . 
        . . c a a a a a a a a a a c . . 
        . . . c a a a a a a a a c . . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c . . c c . . . . . 
        `, SpriteKind.h)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(9, 3))
    story.spriteSayText(mySprite5, "wait a minute", 2, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite5, "u killed me with ur hacc", 2, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite5, "bruv can u stop use hacc pls", 2, 0, story.TextSpeed.Normal)
    story.showPlayerChoices("ok no hacc", "omu a wa mu shinderu")
    if (story.checkLastAnswer("ok no hacc")) {
        story.spriteSayText(mySprite5, "gfu", 2, 0, story.TextSpeed.Normal)
        story.spriteSayText(mySprite5, "haha now i get hacc bacc", 2, 0, story.TextSpeed.Normal)
        blockSettings.writeString("hacc", "")
        game.over(true, effects.dissolve)
    } else if (story.checkLastAnswer("omu a wa mu shinderu")) {
        story.spriteSayText(mySprite, "omu a wa mu shinderu", 4, 0, story.TextSpeed.Slow)
        story.spriteSayText(mySprite5, "NANI!?!?!?!?!?", 15, 0, story.TextSpeed.Normal)
        story.spriteSayText(mySprite, "*anger*", 4, 0, story.TextSpeed.Slow)
        for (let index = 0; index < 100; index++) {
            effects.blizzard.startScreenEffect()
            pause(10)
        }
        story.spriteSayText(mySprite5, "oh oh stinky", 15, 0, story.TextSpeed.Normal)
        game.over(true, effects.smiles)
    }
}
function bad_end () {
    mySprite5 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . c c c a a c c c . . . . 
        . . . c c c a a a a c c c . . . 
        . . c c c a a a a a a c c c . . 
        . . c c a a a a a a a a a c . . 
        . . c a a c c c c c c a a c . . 
        . . c c c c a a a a c c c c . . 
        . c c a c f f a a f f c a c c . 
        . c a a a f f a a f f a a a c . 
        . . c a a a a a a a a a a c . . 
        . . . c a a a a a a a a c . . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c . . c c . . . . . 
        `, SpriteKind.Enemy)
    mySprite5.follow(mySprite)
    story.spriteSayText(mySprite5, "get noob", 2, 0, story.TextSpeed.Slow)
}
function good_end () {
    mySprite5 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . c c c a a c c c . . . . 
        . . . c c c a a a a c c c . . . 
        . . c c c a a a a a a c c c . . 
        . . c c a a a a a a a a a c . . 
        . . c a a c c c c c c a a c . . 
        . . c c c c a a a a c c c c . . 
        . c c a c f f a a f f c a c c . 
        . c a a a f f a a f f a a a c . 
        . . c a a a a a a a a a a c . . 
        . . . c a a a a a a a a c . . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . a a c a a a a a a c a a . . 
        . . . . . c c c c c c . . . . . 
        . . . . . c c . . c c . . . . . 
        `, SpriteKind.Projectile)
    story.spriteSayText(mySprite5, "get noob", 2, 0, story.TextSpeed.Slow)
    mySprite5.follow(mySprite)
}
function load_everything () {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setStayInScreen(true)
    mySprite3.setStayInScreen(true)
    behavouir = true
    hp = 10
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    story.startCutscene(function () {
        otherSprite.follow(sprite, 0)
        story.spriteSayText(otherSprite, "bruh i wish i never gave the minion the sword. ", 2, 0, story.TextSpeed.Fast)
        animation.runImageAnimation(
        sprite,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......22...feeeeffeeef.
            .......2ff.fe2222eeffff.
            .......f44ff2effff222ef.
            ........4f55ffeeefffffff
            .........f5ffe44fbe44eff
            ..........f77eddf14d4eef
            ..........f7fdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..22.....fffeeefffffffff
            ..2fff...fee44fbbe44efef
            ..ff44ff..feddfbb4d4eef.
            ....4f55feefddddd4eeef..
            .....f5f7ddee2222222f...
            ......ff7dd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........f.eeddd4eeef..
            ..fffffffffeddee2222f...
            ...24578bafedd44e444f...
            ....fffffff.eeeefffff...
            ..........f...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............fff22eddf..
            .............f7f22fee...
            ............f5ff4444f...
            ...........4f55fffff....
            ..........f44f..fff.....
            ..........2ff...........
            ..........22............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        false
        )
        pause(1000)
        story.spriteSayText(otherSprite, "owwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", 2, 0, story.TextSpeed.VeryFast)
        otherSprite.destroy(effects.disintegrate, 2000)
        pause(2000)
        game.splash("Hacc crystal gained")
        blockSettings.writeString("hacc", "use hacc against him")
        game.over(true)
    })
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.writeString("hacc", "lmfao")
})
function create_boss () {
    mySprite.ay = 500
    scene.setBackgroundColor(9)
    tiles.setTilemap(tilemap`level1`)
    mySprite2.destroy()
    mySprite3 = sprites.create(img`
        . . . f f f f f f f f f f . . . 
        . . . f c a c c c c a c f . . . 
        . . . f c c a c c a c c f . . . 
        . . . f c c c c c c c c f . . . 
        . . . f f f f f f f f f f . . . 
        . b b f c c c c c c c c f b b . 
        . b b f c c c c c c c c f b b . 
        . b b f c c c c c c c c f b b . 
        . b b f c c c c c c c c f b b . 
        . b b f c c c c c c c c f b b . 
        . c c f c c c c c c c c f c c . 
        . c c f c c c c c c c c f c c . 
        . . . f f f f f f f f f f . . . 
        . . . . b b . . . . b b . . . . 
        . . . . b b . . . . b b . . . . 
        . . . . c c . . . . c c . . . . 
        `, SpriteKind.Boss)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 5))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(13, 5))
    tiles.centerCameraOnTile(tiles.getTileLocation(11, 5))
    story.startCutscene(function () {
        story.spriteSayText(mySprite3, "I will kill you because my master told me to.", 15, 0, story.TextSpeed.VeryFast)
        story.spriteSayText(mySprite, "bruv i did nothing man", 1, 0)
        story.spriteSayText(mySprite3, "Get dunked on.", 15, 0, story.TextSpeed.VeryFast)
        story.spriteSayText(mySprite, "not the sansd dunderale reference!", 1, 0, story.TextSpeed.Fast)
        load_everything()
        story.cancelCurrentCutscene()
    })
}
function ded_cutscene () {
    mySprite3.setKind(SpriteKind.Food)
    story.cancelSpriteMovement(mySprite3)
    behavouir = false
    story.startCutscene(function () {
        story.spriteSayText(mySprite3, "nooooooooooooooooooooooo", 15, 0, story.TextSpeed.Fast)
        story.spriteSayText(mySprite3, "stop use hacc man", 15, 0, story.TextSpeed.Fast)
        if (blockSettings.readString("hacc") == "lmfao") {
            story.spriteSayText(mySprite, "HAHA TRASH XD I USE HACC", 1, 0, story.TextSpeed.Normal)
        } else {
            story.spriteSayText(mySprite, "im not tho", 1, 0, story.TextSpeed.Normal)
        }
        story.spriteSayText(mySprite3, "you need to mouth shut", 15, 0, story.TextSpeed.Fast)
        mySprite4 = sprites.create(img`
            f 2 2 f . . . . . . . . . . . . 
            2 2 f 4 f . . . . . . . . . . . 
            2 f 4 4 f f . . . . . . . . . . 
            f 4 4 f 5 5 f . . . . . . . . . 
            . f f 5 5 f 7 f . . . . . . . . 
            . . f 5 f 7 7 f f . . . . . . . 
            . . . f 7 7 f 8 8 f . . . . . . 
            . . . . f f 8 8 f b f . . . . . 
            . . . . . f 8 f b b f f . . . . 
            . . . . . . f b b f a a f . . . 
            . . . . . . . f f a a f f . . . 
            . . . . . . . . f a f f 1 1 . . 
            . . . . . . . . . f f 1 1 f f . 
            . . . . . . . . . . . 1 f 1 f f 
            . . . . . . . . . . . . f f 1 f 
            . . . . . . . . . . . . . f f 1 
            `, SpriteKind.Sword)
        tiles.placeOnTile(mySprite4, tiles.locationOfSprite(mySprite3))
        mySprite3.destroy(effects.disintegrate, 2000)
        story.spriteSayText(mySprite, "XD trash lmao bad camper teamer XD", 1, 0, story.TextSpeed.Fast)
        controller.moveSprite(mySprite, 100, 0)
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword, function (sprite, otherSprite) {
    otherSprite.destroy()
    story.showPlayerChoices("Destroy Void Man", "Run away", blockSettings.readString("hacc"))
    if (story.checkLastAnswer("Destroy Void Man")) {
        good_end()
    } else if (story.checkLastAnswer("Run away")) {
        bad_end()
    } else if (story.checkLastAnswer("use hacc against him")) {
        true_end()
    } else if (story.checkLastAnswer("lmfao")) {
        _()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ded, function (sprite, otherSprite) {
    story.startCutscene(function () {
        otherSprite.follow(sprite, 0)
        story.spriteSayText(otherSprite, "wtf man why u have haccs", 2, 0, story.TextSpeed.Fast)
        animation.runImageAnimation(
        sprite,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......22...feeeeffeeef.
            .......2ff.fe2222eeffff.
            .......f44ff2effff222ef.
            ........4f55ffeeefffffff
            .........f5ffe44fbe44eff
            ..........f77eddf14d4eef
            ..........f7fdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..22.....fffeeefffffffff
            ..2fff...fee44fbbe44efef
            ..ff44ff..feddfbb4d4eef.
            ....4f55feefddddd4eeef..
            .....f5f7ddee2222222f...
            ......ff7dd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........f.eeddd4eeef..
            ..fffffffffeddee2222f...
            ...24578bafedd44e444f...
            ....fffffff.eeeefffff...
            ..........f...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............fff22eddf..
            .............f7f22fee...
            ............f5ff4444f...
            ...........4f55fffff....
            ..........f44f..fff.....
            ..........2ff...........
            ..........22............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        false
        )
        pause(1000)
        story.spriteSayText(otherSprite, "oh yeah u used weird time travel", 2, 0, story.TextSpeed.VeryFast)
        story.spriteSayText(otherSprite, "this is garbage", 2, 0, story.TextSpeed.VeryFast)
        story.spriteSayText(otherSprite, "scam world", 2, 0, story.TextSpeed.VeryFast)
        story.spriteSayText(otherSprite, "why didnt i use hacc crystal in past ;-;", 2, 0, story.TextSpeed.VeryFast)
        story.spriteSayText(sprite, "lmfao bad trash baby rager XD", 1, 0, story.TextSpeed.Normal)
        otherSprite.destroy(effects.blizzard, 5000)
        pause(5000)
        game.splash("hacc crystal gone")
        blockSettings.writeString("hacc", "lmfao")
        game.over(true, effects.hearts)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.zapped.play()
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        sprite.vy = -300
        music.thump.play()
        if (blockSettings.readString("hacc") == "lmfao") {
            hp = 0
        } else {
            hp += -1
        }
        if (hp == 0) {
            ded_cutscene()
        }
    } else {
        behavouir = false
        story.cancelSpriteMovement(otherSprite)
        controller.moveSprite(sprite, 0, 0)
        story.spriteSayText(sprite, "bruv i hate u so much", 1, 0, story.TextSpeed.Fast)
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c 2 2 2 2 2 2 c f f . . 
            . . f c 2 f f f f f f 2 c f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c 2 2 2 2 2 2 c f f . . 
            . . f c 2 f f f f f f 2 c f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e c f 2 2 2 2 2 2 f c e . . 
            . . c d f 2 2 2 2 2 2 f d c . . 
            . . c c f c c 5 5 c c f c c . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c 2 2 2 2 2 2 c f f . . 
            . . f c 2 f f f f f f 2 c f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e c 1 f d d f 1 c e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e c c c c e e f . . . 
            . . e c f 2 2 2 2 2 2 f c e . . 
            . . c d f 2 2 2 2 2 2 f d c . . 
            . . c c f c c 5 5 c c f c c . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c 2 2 2 2 2 2 c f f . . 
            . . f c 2 f f f f f f 2 c f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f c f c c f c f e f f . 
            . f b e c 1 f d d f 1 c e b f . 
            . . f b e d d d d d d e b f . . 
            . . . f b e c c c c e b f . . . 
            . . b c f 2 2 2 2 2 2 f c b . . 
            . . c b f 2 2 2 2 2 2 f b c . . 
            . . c c f c c 5 5 c c f c c . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c 2 2 2 2 2 2 c f f . . 
            . . f c 2 f f f f f f 2 c f . . 
            . . f f f f b b b b f f f f . . 
            . f f b f c f c c f c f b f f . 
            . f b b c 1 f d d f 1 c b b f . 
            . . f b b d d d d d d b b f . . 
            . . . f b b c c c c b b f . . . 
            . . b c f 2 2 2 2 2 2 f c b . . 
            . . c b f 2 2 2 2 2 2 f b c . . 
            . . c c f c c b b c c f c c . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c 2 2 2 2 2 2 c f f . . 
            . . f c 2 f f f f f f 2 c f . . 
            . . f f f f b b b b f f f f . . 
            . f f b f c f c c f c f b f f . 
            . f b b c 1 f c c f 1 c b b f . 
            . . f b b c c c c c c b b f . . 
            . . . f b b c c c c b b f . . . 
            . . b c f a a a 2 2 2 f c b . . 
            . . c b f a a 2 2 2 2 f b c . . 
            . . c c f c c b b c c f c c . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c 2 2 2 2 2 2 c f f . . 
            . . f c 2 f f f f f f 2 c f . . 
            . . f f f f b b b b f f f f . . 
            . f f b f c 1 c c 1 c f b f f . 
            . f b b c a 1 c c 1 a c b b f . 
            . . f b b c c c c c c b b f . . 
            . . . f b b c c c c b b f . . . 
            . . b c f a a a a a a f c b . . 
            . . c b f a a a a a a f b c . . 
            . . c c f c c b b c c f c c . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f a a f f f . . . . 
            . . . f f f a a a a f f f . . . 
            . . f f f c c c c c c f f f . . 
            . . f f c a a a a a a c f f . . 
            . . f c a f f f f f f a c f . . 
            . . f f f f b b b b f f f f . . 
            . f f b f c 1 c c 1 c f b f f . 
            . f b b c a 1 c c 1 a c b b f . 
            . . f b b c c c c c c b b f . . 
            . . . f b b c c c c b b f . . . 
            . . b c f a a a a a a f c b . . 
            . . c b f a a a a a a f b c . . 
            . . c c f c c b b c c f c c . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        500,
        false
        )
        pause(500 * 9)
        sprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        otherSprite.destroy()
        create_boss()
    }
})
let mySprite4: Sprite = null
let hp = 0
let behavouir = false
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(45, 43)
story.setPagePauseLength(500, 500)
story.startCutscene(function () {
    story.spriteSayText(mySprite, "Where am I?", 1, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite, "I guess this is the Void...", 1, 0, story.TextSpeed.Fast)
    story.spriteSayText(mySprite2, "Oh boy it is.", 10, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite, "Oh no...", 1, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite2, "You will be enveloped very soon...", 10, 0, story.TextSpeed.Fast)
    story.spriteSayText(mySprite, "What did I do?", 1, 0, story.TextSpeed.Normal)
    story.spriteSayText(mySprite2, "I need power ok stop bully man.", 10, 0, story.TextSpeed.Fast)
    pause(2000)
    create_boss()
    story.cancelCurrentCutscene()
})
forever(function () {
    if (behavouir) {
        story.spriteMoveToLocation(mySprite3, mySprite.x, 90, 80)
        pause(200)
    }
})
