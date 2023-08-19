//Used for programming cpu ai, Now for other stuff.
var power1 = 0;
var power = 0;
function powerRound(barr) {
    for(let i = 0; i < barr; i++) {
    //    for(let b = 0; i < 1000; i++) {
        var power = Math.ceil(Math.random() * 9);
        if (power == 1) {
            //document.getElementById("div1mm").style.backgroundColor = "cyan";
            console.log(power);
            var myTimeout = setTimeout( function() {
                //document.getElementById("div1mm").style.backgroundColor = "rgb(130, 130, 130)";
            }, 1000)
        } 
        if (power == 2) {
            //document.getElementById("div3mm").style.backgroundColor = "cyan";
            console.log(power);
            var myTimeout = setTimeout( function() {
                //document.getElementById("div3mm").style.backgroundColor = "rgb(130, 130, 130)";
            }, 1000)
        } 
        if (power == 3) {
            //document.getElementById("div3mm").style.backgroundColor = "cyan";
            console.log(power);
            var myTimeout = setTimeout( function() {
                //document.getElementById("div3mm").style.backgroundColor = "rgb(130, 130, 130)";
            }, 1000)
        } 
        if (power == 4) {
            //document.getElementById("div4mm").style.backgroundColor = "cyan";
            console.log(power);
            var myTimeout = setTimeout( function() {
                //document.getElementById("div4mm").style.backgroundColor = "rgb(130, 130, 130)";
            }, 1000)
        } 
        if (power == 5) {
                //document.getElementById("div5mm").style.backgroundColor = "cyan";
                console.log(power);
                var myTimeout = setTimeout( function() {
                    //document.getElementById("div5mm").style.backgroundColor = "rgb(130, 130, 130)";
                }, 1000)
        }
        if (power == 6) {
                //document.getElementById("div6mm").style.backgroundColor = "cyan";
                console.log(power);
                var myTimeout = setTimeout( function() {
                    //document.getElementById("div6mm").style.backgroundColor = "rgb(130, 130, 130)";
                }, 1000)
        }
        if (power == 7) {
                //document.getElementById("div7mm").style.backgroundColor = "cyan";
                console.log(power);
                var myTimeout = setTimeout( function() {
                    //document.getElementById("div7mm").style.backgroundColor = "rgb(130, 130, 130)";
                }, 1000)
        }
        if (power == 8) {
                //document.getElementById("div8mm").style.backgroundColor = "cyan";
                console.log(power);
                var myTimeout = setTimeout( function() {
                    //document.getElementById("div8mm").style.backgroundColor = "rgb(130, 130, 130)";
                }, 1000)
        }
        if (power == 9) {
                //document.getElementById("div9mm").style.backgroundColor = "cyan";
                console.log(power);
                var myTimeout = setTimeout( function() {
                    //document.getElementById("div9mm").style.backgroundColor = "rgb(130, 130, 130)";
                }, 1000)
        }
        console.log(power1);
        addEventListener("click")
        document.getElementById("div1mm").addEventListener("click", function () {
            if (power === 1) {
                console.log("you win!");
            }else {
                console.log("you lose!");
            };
        })
    }
}
// }
powerRound(2);
