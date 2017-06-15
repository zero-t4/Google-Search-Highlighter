document.addEventListener("DOMContentLoaded", function() {

    var messAtached = false;

    if (window.location.href.includes('google')) {
        setInterval(highlighter, 300);
    } else {
    	console.log('not a google ☹️');
    	return;
    }

    function highlighter() {

        document.querySelectorAll('em').forEach(function(i) {
            i.style = 'background: yellow; font-size: 1.2em;';
        });

        if (document.querySelectorAll('em').length != 0 && messAtached == false) {
            var mess = document.createElement('span');
            mess.innerHTML = 'Made by <a style="text-decoration: none; color: #BADA55" href="https://github.com/zero-t4">Nadir</a> 😁';
            mess.style = "font-size: 10px;";
            setTimeout( function() {
                document.body.appendChild(mess);
            }, 500);
            messAtached = true;
        }

    }

});
