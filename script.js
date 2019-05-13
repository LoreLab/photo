$(document).ready(function(){//pour animer le button ferme quand medium
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
    //pendant le scroll pr que le menu reste sticky a niveau de >200 et le menu diminue de size
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        }else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
// pour l'image de la photo
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if (position >=650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        }else{
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    // pour animer quand on click sur les onglets
    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
         if (value === 'all') {
             $('.filter').show(300);
         }else{
             $('.filter').not('.' +value).hide(300);
             $('.filter').show('.' +value).show(300);
         }
    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if (position >= 4300) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    });
});






























