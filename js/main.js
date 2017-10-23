/**
 * Created by wassim on 23/04/17.
 */

var len = 50;
var datas = new Array(len);
datas.fill(0);
var max = 84;




function pinger() {
    var url = document.getElementById("url").value;
    ping("http://" + url).then(function (delta) {
        var max = document.getElementById("maxi").value;
        console.log('Ping time was ' + String(delta) + ' ms', url);
        val = parseInt(delta);
        datas.push(val);
        if (val > max) {
            document.getElementById("ping").style.color = "crimson";
        }
        else {
            document.getElementById("ping").style.color = "whitesmoke";
        }
        datas.splice(0, 1);
        changeChart();
        $("#ping").html(delta + "ms")
    }).catch(function (err) {
        console.error('Could not ping remote URL', err);
    });
}
setInterval(pinger, 500);

document.getElementById("url").focus();

/**/


