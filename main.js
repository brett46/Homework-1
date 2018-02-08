$(document).ready( function() {

    let picNames = ['landingpage.png', 'Mock Screenshot 2.PNG', 'Mock Screenshot.PNG'];
    var picNameIndex = 0;
    var urlName = '';
    var animateObj = {
        'left': '+=200px',
        'content': '',
    }
    
    $('#Liam').click( function() {
        alert('This persons name is Liam');
    });
    $('#Asher').click( function() {
        alert('This persons name is Asher');
    });
    $('#Brett').click( function() {
        alert('This persons name is Brett');
    });

    $('.pics').animate({
        left: '-=500px',
    });  
    
    $('.slideshow-img').click(function() {

        picNameIndex += 1;
        urlName = picNames[ picNameIndex % 3 ];

        $(this).animate({
            'left': '-=100px',
            'opacity': '0',
        }).animate({
            'left': '+=200px'
        }, function() {
            $(this).empty().append('<img class="img-slide" src="' + urlName + '" height="450" width="500"></img>');
        }).animate({
            'left': '-=100px',
            'opacity': '1',
        });

    });
    
});

