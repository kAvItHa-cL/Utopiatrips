$(gift).click(function () {
    new $.popup({
        title: '',
        Content: '<div style="text-align:center;"><div class="text-center"><img src="http://res.cloudinary.com/dbwdz71fb/image/upload/v1522143360/gift.jpg" alt="Image" data-retina="true"></div><form><h5 id="pop_msg">Gift yourself an adventurous experience with us.<br />Grab Flat 10% cashback this weekend</h5><p class="text-center add_bottom_30"><a href="../TwoDayTrekking/GokarnaTrek" class="btn_1 medium" >Book Now  </a> </p></form></div>',
        html: true,
        autoclose: true,
        closeOverlay: true,
        closeEsc: true,
        buttons: false,
        timeout: 5000
    });
});