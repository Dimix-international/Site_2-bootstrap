$(function(){
    baguetteBox.run('.item-2__image');/* Скрипт для перещелкивания картинок при использовании baguetbox. Класс с галерей картинок*/

    /*Скрипт для прелоадера*/
    $(window).on('load',function(){ /*Обращаемся к объекту window. Когда он загружен*/
        $('.preloader').delay(500).fadeOut('slow',function(){ /*Наш объект preloader с задержкой 0,5 секунды плавно скрывается*/
            $(this).attr('style','display: none !important'); /*Т.к. объект имеет дисплей флекс, необходимо перебить его, чтобы прелоадер исчезал*/
        });
    });

     /*Скрипт для кнопки прокрутки вверх*/
    $(window).scroll(function(){/*Отмлеживаем событие скрола и проверяем сколько сверху у нас пикселей*/
        if ($(this).scrollTop() > 300) { /*Если больше 300 пикселей*/
            $('.scrolltop').fadeIn(); /*То наша кнопка будет показываться*/
        } else {
            $('.scrolltop').fadeOut();/*Если меньше то остается скрыта*/
        }
    });

    $('.scrolltop').click(function(){/*Функция при клике перемещение вверх*/
        $('html, body').animate({scrollTop : 0},800);/*Поднимаем страничку вверх до 0 за 800 миллисекунд*/
        return false; /*Отмена дефолтного поведения*/
    });

    /*Скрипт для клика по иконке и выпадает меню*/
    $('.search').on('click', function(){
        $('.nav-main__form').slideToggle();
    });

    $('.carousel').carousel({ /*Скрипт для изменения интервала слайдера*/
  interval: 3000
    });

});



/*Скрипт привязки картинки к видео для его воспроизведения*/
function onYouTubeIframeAPIReady() {
    var iStatus;

    oPlayer = new YT.Player('videoPlayer', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    var $playButton = $('#videoPlayBtn');
    $playButton.on("click", function() {
        if (iStatus == YT.PlayerState.PLAYING) {
            $playButton.show();
            oPlayer.pauseVideo();
            iStatus = YT.PlayerState.PAUSED;
        } else {
            oPlayer.playVideo();
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    });

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PAUSED) {
            $playButton.show();
            iStatus = YT.PlayerState.PAUSED;
        } else if (event.data == YT.PlayerState.PLAYING) {
            iStatus = YT.PlayerState.PLAYING;
            $playButton.hide();
        }
    }
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*  конец*/






