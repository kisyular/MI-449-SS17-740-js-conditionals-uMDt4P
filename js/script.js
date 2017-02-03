var para = 'After a long night of beautiful dreams, you wake up. You try to adjust yourself but you found your left-hand and left-leg tied up with chains. Suddenly, an old Television turns on. For a couple of five minutes, it produces a static and buzzing sound. Finally, the graphics in the TV set becomes blurry and clear alternating. An unrecognizable face comes on the screen and issues instruction. Let’s play a game! Behind you, there is a saw-blade, you can use it to cut the hands off or you can use it to cut your either tied leg or hand and set yourself free. The choice is yours. CONTINUE?'

var paraAbove18 = 'This game involves strong language (no curse words or offensive words). Do you want to CONTINUE?'

var paraH = 'You finished chopping your left-hand off. A strong wave of unbearable pain hits you and autonomous reflex causes you to throw the saw away. In the room, there are two keys. One is blue and the other is red. CONTINUE?'

var paraL = 'You finished chopping your left-leg off. You start limping across the room. A surge of pain is emanating from the wound. You see two doors, one is Black and the other is White. CONTINUE?'

var paraHB = ' You pick up the blue key. Welcome to Freedom. END.'

var paraHR = 'You pick up the Red key and you start walking through the tiny corridor. You picked the wrong key. You cannot return for the blue one. You have been given another chance, but this time you have to open the door with PIN. Guess the PIN Correctly. CONTINUE?'

var paraHRC = 'You choose the right PIN. PUSH the door to OPEN. You Eascaped?'

var paraHRW = 'You entered wrong PIN. Game Over'

var paraLB = 'You enter through the black door. Outside the door, there are paramedics waiting to help you. You Eascaped. END'

var error = 'Wrong Entry. Execution Halted. GAME OVER'
var cancelled = 'We hoped you would Continue. Execution Halted. GAME OVER'

var ans = window.confirm(para)
if (ans) {
  if (window.confirm(paraAbove18)) {
    var year = window.prompt('To confirm you are older above, enter the YEAR you were born eg (2001, 1983, 1901, etc)')
    if (year !== null && year !== undefined && year.length === 4) {
      year = parseInt(year)
      if ((2017 - year) > 18) {
        window.alert('You are Over 18. Click OK to continue')
        var leghand = window.prompt('To cut your leg enter(L) and to cut your hand enter (H)')
        if (leghand !== null || leghand !== undefined) {
          leghand = leghand.toLowerCase()
          leghand = leghand.trim()
          if (leghand === 'h') {
            if (window.confirm(paraH)) {
              var bluered = window.prompt('Enter B to pick the Blue key and R to pick the Red key ')
              if (bluered !== null || bluered !== undefined) {
                bluered = bluered.toLowerCase()
                bluered = bluered.trim()
                if (bluered === 'b') {
                  window.alert(paraHB)
                } else if (bluered === 'r') {
                  if (window.confirm(paraHR)) {
                    var pin = window.prompt('Enter the pin below. PIN HINT: sort the list (8, 0, 6, 7) ')
                    if (pin !== null || pin !== undefined) {
                      pin = pin.toLowerCase()
                      pin = pin.trim()
                      if (pin === '0678') {
                        window.alert(paraHRC)
                      } else {
                        window.alert(paraHRW)
                      }
                    } else {
                      window.alert(error)
                    }
                  } else {
                    window.alert(cancelled)
                  }
                } else {
                  window.alert(error)
                }
              } else {
                window.alert(error)
              }
            } else {
              window.alet(cancelled)
            }
          } else if (leghand === 'l') {
            if (window.confirm(paraL)) {
              var blackwhite = window.prompt('Enter W to open the White door or B to open the Black door ')
              if (blackwhite !== null && blackwhite !== undefined) {
                blackwhite = blackwhite.toLowerCase()
                blackwhite = blackwhite.trim()
                if (blackwhite === 'b') {
                  window.alert(paraLB)
                } else if (blackwhite === 'w') {
                  window.alert('You chose the wrong door (: Game Over')
                } else {
                  window.alert(error)
                }
              } else {
                window.alert(error)
              }
            }
          } else {
            window.alert(error)
          }
        } else {
          window.alert(error)
        }
      } else {
        window.alert('You are below 18 Years. Program Halted!')
      }
    } else {
      window.alert('You did not enter your YEAR of Birth Correctly. Suggestions: Enter your YEAR in 4-Digit format (2011, 1993), You did not type anything, etc')
    }
  } else {
    window.alert('Thanks for not entering an Over18 Game')
  }
} else {
  window.alert(cancelled)
}
