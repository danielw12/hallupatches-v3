$(document).ready(() => {
    $('#tooltipMail').tooltip({
        'placement': 'right'
    });
    $('#tooltipPhone').tooltip({
        'placement': 'right'
    });
    let fDP = new FormDataProvider(formItemsIds);

    $('#orderFormBtn').click((e) => {
        const formEl = document.getElementById('shippingForm').checkValidity();
        if (formEl) {
            fDP.readInputs();
        }
    });
});

$(document).ready(() => {
    $('#tooltipMail-2').tooltip({
        'placement': 'right'
    });
    $('#tooltipPhone-2').tooltip({
        'placement': 'right'
    });
    let fDP = new FormDataProvider(formItemsIds);

    $('#orderFormBtn').click((e) => {
        const formEl = document.getElementById('shippingForm').checkValidity();
        if (formEl) {
            fDP.readInputs();
        }
    });
});

var cw = $('.circle').width();
$('.circle').css({
    'height': cw + 16 + 'px'
});



$(document).ready(function () {
    $('.carousel').slick({

        rows: 1,
        slidesToShow: 3,
        slidesPerRow: 1,
        dots: true,
        prevArrow: '<a href="javascript:void(0)" class="slick-prev" style="display: block;"></a>',
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 994,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
    }
  ]

    });
});


$('.order-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 600);
});


/* popup */
setTimeout(function() {
    $('#exitpopup-modal').css('display','block');
},20000);

/*clock*/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
 
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 15 * 60 * 1000);
  initializeClock('clockdiv', deadline);
 initializeClock('clockdiv2', deadline);


