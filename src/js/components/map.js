const mapHideBtn = $('.map__hide');

if(window.matchMedia('(max-width: 768px)').matches){

    mapHideBtn.on('click', function(){
        const mapInfo = $(this).parent();
        let mapInfoHeight = mapInfo.height();
        mapInfo.css('max-height', 0);

        if(mapInfoHeight > 0) {
            $(mapInfo).animate({ 'max-height': 0 }, 'slow').addClass('hide');
        } else {
            $(mapInfo).animate({ 'max-height': '45vh' }, 'slow').removeClass('hide');
        }
    });

} else {

    mapHideBtn.on('click', function(){
        const mapInfo = $(this).parent();
        let mapInfoWidth = mapInfo.width();
        
        if(mapInfoWidth > 0) {
            $(mapInfo).animate({ width: 0 }, 'slow').addClass('hide');
        } else {
            $(mapInfo).animate({ width: 512 }, 'slow').removeClass('hide');
        }
    });

}

