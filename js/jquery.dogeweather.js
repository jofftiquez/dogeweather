//  wow
(function($) {
    //  such plugin
    $.doge = function(tings) {
        //  very jquery
        var doge = $('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');

        var suchcolors = [ 
            "#0066FF", "#FF3399", "#33CC33", "#FFFF99", "#FFFF75", "#8533FF", 
            "#33D6FF", "#FF5CFF", "#19D1A3", "#FF4719", "#197519", "#6699FF", "#4747D1",
            "#D1D1E0", "#FF5050", "#FFFFF0", "#CC99FF", "#66E0C2", "#FF4DFF", "#00CCFF",
        ];

        function randomFrom(arr){
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
        }
        
        //  much array
        //var tings = (['doge', 'shibe', 'excite', 'impress', 'skill', 'warn']);
        
        var r = function(arr) {
            if(!arr) arr = tings; return arr[Math.floor(Math.random() * arr.length)];
        };

        //Get Weather
        var id = $("#weather-id").text();
        var suchid = parseInt(id);
        var suchicon = $("#weather-icon").text();
        var suchdescription = $("#weather-desc").text();
        var temp = $("#degreesCelsius .number").text();
        var suchtemp = parseInt(temp);

        console.log(suchicon);
        console.log(suchtemp + "temp");

        if (suchtemp <= -30) {
            var suchwords = ["winter", "freeze", "polar vortex", "ridiculous", "hibernate", "climate change", "doom"];
        } else if (suchtemp > -30 && suchtemp <= -15) {
            var suchwords = ["cold", "freeze", "shiver", "ice", "yuck", "climate change", "popsicle"];
        } else if (suchtemp > -15 && suchtemp <= -7) {
            var suchwords = ["icy", "winter", "chill", "crisp", "brrrrr", "cool", "not okay"];
        } else if (suchtemp > -7 && suchtemp <= 0) {
            var suchwords = ["icy", "frost", "numb", "shiver", "brrr", "chilly", "below freezing point"];
        } else if (suchtemp > 0 && suchtemp <= 10) {
            var suchwords = ["chilly", "concern", "coat", "frosty", "uh oh", "brrrr", "almost freezing"];
        } else if (suchtemp > 10 && suchtemp <= 20) {
            var suchwords = ["moderate", "mild", "okay", "medium", "cool", "whatever", "brisk"];
        } else if (suchtemp > 20 && suchtemp <= 30) {
            var suchwords = ["heat", "warmth", "climate", "sweating", "balmy", "nice day", "ambient"];
        } else if (suchtemp > 30) {
            var suchwords = ["boiling", "bake", "melt", "dying", "suffer", "global warming", "tropical heat"];
        } else {
            var suchwords = ["concern", "climate", "degrees", "shrug", "wow", "celcius", "farenheit"];
        }

        console.log(suchtemp);

        //Clouds
        if(suchicon=="01d") {
            tings = $.extend(['clear', 'sky', 'lovely', 'amaze', 'wonderful','sun', 'weather'], suchwords);
        } else if(suchicon=="01n") {
            tings = $.extend(['night', 'amaze', 'clear', 'lovely', 'wonderful', 'sky', 'stars', 'moon', 'dark', 'weather'], suchwords);
        } else if(suchicon=="02d") {
            tings = $.extend(['cloud', 'okay', 'cumulus', 'amaze', 'sky', 'weather'], suchwords);
        } else if(suchicon=="02n") {
            tings = $.extend(['dark', 'cumulus', 'amaze', 'cloud', 'star', 'space', 'after dark', 'weather'], suchwords);
        } else if(suchicon=="03d") {
            tings = $.extend(['cloudy', 'scattered', 'overcast', 'weather'], suchwords);
        } else if(suchicon=="03n") {
            tings = $.extend(['cloud', 'scattered', 'clear sky', 'night time', 'weather'], suchwords);
        } else if(suchicon=="04d" || suchicon=="04n") {
            tings = $.extend(['gloomy', 'clouds', 'shady', 'boring', 'weather'], suchwords);
        } else if(suchicon=="09d") {
            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'weather'], suchwords);
        } else if(suchicon=="09n") {
            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'night', 'weather'], suchwords);
        } else if(suchicon=="10d") {
            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'weather'], suchwords);
        } else if(suchicon=="10n") {
            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'scary', 'dark cloud', 'night', 'weather'], suchwords);
        } else if(suchicon=="11d") {
            tings = $.extend(['thunder', 'loud', 'scare', 'bolt', 'lightning', 'terrible', 'hide', 'weather'], suchwords);
        } else if(suchicon=="11n") {
            tings = $.extend(['scary night', 'thunder', 'loud', 'crash', 'bolt', 'lightning', 'terrible', 'hide', 'weather'], suchwords);
        } else if(suchicon=="13d") {
            tings = $.extend(['snow', 'white', 'soft', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'weather'], suchwords);
        } else if(suchicon=="13n") {
            tings = $.extend(['snow', 'white', 'night time', 'slippery', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'weather'], suchwords);
        } else if(suchicon=="50d") {
            tings = $.extend(['mist', 'vapor', 'creepy', 'spook', 'blind', 'low visbility', 'darkness', 'gloomy', 'depress', 'weather'], suchwords);
        } else if(suchicon=="50n") {
            tings = $.extend(['mist', 'vapor', 'creepy', 'spook', 'blind', 'low visbility', 'darkness', 'gloomy', 'depress', 'weather'], suchwords);
        } else {
            var dogefix = [ 'wow', 'such weather', 'much doge'];
        }
        
        var dogefix = [
            'so wow', 'such ' + r(),
            'very ' + r(), 'much ' + r(),
            'so ' + r(),
            'wow'
        ];
        
        var very = doge.append('<div class="such overlay" />').children('.such.overlay').css({
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none'
        });
     
        interval = setInterval(function() {
            
            $('.such.overlay').append(
                '<span style="position: absolute; left: ' + Math.random()  *100 + '%;top: ' + Math.random()  *100 + '%;font-size: ' + Math.max(20, (Math.random() * 50 + 24)) + 'px; color:' + randomFrom(suchcolors) + ';">'
                    + r(dogefix) +
                '</span>');
                var suchnumber = $("span").length;
                if (suchnumber > 8 )
                {
                    $('.such span:nth-child(1)').remove();
                }
        }, 2300);

        $("#browser_geo" ).one('click', function(){
            console.log('clear');
            clearInterval(interval);
        });
    };
})(jQuery);