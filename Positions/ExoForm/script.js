window.onload = function(){
    document.getElementById('btn').onclick= function(){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var font = document.getElementById('font');
        var popup = document.getElementById('popup');
        font.style.display = "block";
        font.style.height = winH+"px";
        popup.style.left = (winW/2) - (550 * .5)+"px";
        popup.style.top = "35%";
        popup.style.display = "block";
        document.getElementById('logg').innerHTML = "You're logged in";
        document.getElementById('OkBtn').innerHTML = "Ok";
        return false;
    };
    document.getElementById('OkBtn').onclick = function (){
        document.getElementById('popup').style.display = 'none';
        document.getElementById('font').style.display = 'none';
    };
};
