$(function () {
    setTimeout(function () {
        $.notify({
            // options
            icon: '../Content/kodachadri/kodachadri13.jpg',
            title: '<h4 style="text-color:green;"> Most Viewed Tour</h4> ',
            message: "<p><h4>Kodachadri</h4><br>Natural marvel in Shimoga is renown for its waterfalls and peaks,Rubbing shoulders with Tunga river</p><a href=\"../TwoDayTrekking/KodachadriTrek\" target=\"_blank\" class=\"btn_1\">Read more</a> "
        }, {
                // settings
                icon_type: 'image',
                type: 'info',
                delay: 5000,
                timer: 3000,
                z_index: 9999,
                showProgressbar: false,
                placement: {
                    from: "bottom",
                    align: "right"
                },
                animate: {
                    enter: 'animated bounceInUp',
                    exit: 'animated bounceOutDown'
                },
            });
    }, 7000); // change the start delay

});