(function (A) {
    if (!Array.prototype.forEach)
        A.forEach = A.forEach || function (action, that) {
            for (var i = 0, l = this.length; i < l; i++)
                if (i in this)
                    action.call(that, this[i], i, this);
        };

})(Array.prototype);

var
    mapObject,
    markers = [],
    markersData = {
        'OneDayTrek': [
            {
                name: 'Antara Gange',
                title: 'Antara Gange',
                location_latitude: 13.1424242,
                location_longitude: 78.0830514,
                map_image_url: '../Content/img/mapimg/antargange.jpg',
                name_point: 'Antara Gange',
                description_point: 'Antaragange is a famous hill spot near bangalore, Known for caves. The parking lot in the map above serves as the trek starting point as well.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Savanadurga',
                location_latitude: 12.9205893,
                location_longitude: 77.2944334,
                map_image_url: '../Content/img/mapimg/savanadurga.jpg',
                name_point: 'Savanadurga',
                description_point: 'Savandurga is in Karnataka state and 50 Km from the Bangalore city. Convenient to go from Bangalore',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },

            {
                name: 'Kabbaladurga Trek',
                location_latitude: 12.5006991,
                location_longitude: 77.2935393,
                map_image_url: '../Content/img/mapimg/kabbaldurga.jpg',
                name_point: 'Kabbaladurga Trek',
                description_point: ' The name of the site is a combination of the words Kabbalamma,who is the presiding deity of the temple and Durga, which means fort in the Hindi language.',
                get_directions_start_address: '',
                phone: '+91 9880223554',
                url_point: 'single_tour.html'
            },

             {
                name: 'Kunti Betta',
                location_latitude: 12.508356,
                location_longitude: 76.698089,
                map_image_url: '../Content/img/mapimg/kuntibetta.jpg',
                name_point: 'Kunti Betta',
                description_point: 'Kudremukh is the heaven in South India blessed with lush green meadows everywhere the charismatic effect of the place remains forever insight..',
                get_directions_start_address: '',
                phone: '+91 9880223554',
                url_point: 'single_tour.html'
            },

            {
                name: 'Makali Durga',
                location_latitude: 13.4005252,
                location_longitude: 77.5146453,
                map_image_url: '../Content/img/mapimg/makalidurga.jpg',
                name_point: 'Makali Durga',
                description_point: 'The Makalidurga trek is the nearest railway trek to Bangalore. It begins with a 2-km walk on the railway track from the station of Makalidurga.',
                get_directions_start_address: '',
                phone: '+91 9880223554',
                url_point: 'single_tour.html'
             },
            {
                name: 'Ramadevara Betta',
                title: 'Ramadevara Betta',
                location_latitude: 12.7528164,
                location_longitude: 77.3012102,
                map_image_url: '../Content/img/mapimg/rb1.jpg',
                name_point: 'Ramadevara Betta',
                description_point: 'Ramadevara betta,747 mts high and more famously referred to as "sholay Gudda, is a hill whose belt of rocks extends for 50 kms in the N-S direction.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            }


        ],

        'NightTrek': [
            {
                name: 'Antara Gange',
                title: 'Antara Gange',
                location_latitude: 13.1424242,
                location_longitude: 78.0830514,
                map_image_url: '../Content/img/mapimg/antargange.jpg',
                name_point: 'Antara Gange',
                description_point: 'Antaragange is a famous hill spot near bangalore, Known for caves. The parking lot in the map above serves as the trek starting point as well.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Savanadurga',
                location_latitude: 12.9205893,
                location_longitude: 77.2944334,
                map_image_url: '../Content/img/mapimg/savanadurga.jpg',
                name_point: 'Savanadurga',
                description_point: 'Savandurga is in Karnataka state and 50 Km from the Bangalore city. Convenient to go from Bangalore',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'HariHara Trekking',
                title: 'HariHara Trekking',
                location_latitude: 13.4478924,
                location_longitude: 77.7188382,
                map_image_url: '../Content/img/mapimg/harihara.jpg',
                name_point: 'HariHara Trekking',
                description_point: 'As fascinating the name is, the 2 joined peaks derive their names from the Pandavas and Kauravas. Its grassy hilltop rises 250 meters high and a flight of several sandy steps lead to the top.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },

            {
                name: 'Kabbaladurga Trek',
                location_latitude: 12.5006991,
                location_longitude: 77.2935393,
                map_image_url: '../Content/img/mapimg/kabbaldurga.jpg',
                name_point: 'Kabbaladurga Trek',
                description_point: ' The name of the site is a combination of the words Kabbalamma,who is the presiding deity of the temple and Durga, which means fort in the Hindi language.',
                get_directions_start_address: '',
                phone: '+91 9880223554',
                url_point: 'single_tour.html'
            },

            {
                name: 'Kunti Betta',
                location_latitude: 12.508356,
                location_longitude: 76.698089,
                map_image_url: '../Content/img/mapimg/kuntibetta.jpg',
                name_point: 'Kunti Betta',
                description_point: 'Kudremukh is the heaven in South India blessed with lush green meadows everywhere the charismatic effect of the place remains forever insight..',
                get_directions_start_address: '',
                phone: '+91 9880223554',
                url_point: 'single_tour.html'
            },

            {
                name: 'Makali Durga',
                location_latitude: 13.4005252,
                location_longitude: 77.5146453,
                map_image_url: '../Content/img/mapimg/makalidurga.jpg',
                name_point: 'Makali Durga',
                description_point: 'The Makalidurga trek is the nearest railway trek to Bangalore. It begins with a 2-km walk on the railway track from the station of Makalidurga.',
                get_directions_start_address: '',
                phone: '+91 9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Ramadevara Betta',
                title: 'Ramadevara Betta',
                location_latitude: 12.7528164,
                location_longitude: 77.3012102,
                map_image_url: '../Content/img/mapimg/rb1.jpg',
                name_point: 'Ramadevara Betta',
                description_point: 'Ramadevara betta,747 mts high and more famously referred to as "sholay Gudda, is a hill whose belt of rocks extends for 50 kms in the N-S direction.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Rangaswamy Betta',
                title: 'Rangaswamy Betta',
                location_latitude: 12.6939809,
                location_longitude: 76.5726422,
                map_image_url: '../Content/img/mapimg/rangaswamy.jpg',
                name_point: 'Rangaswamy Betta',
                description_point: 'The way they have been following throughout the years has turned into a standard trekking trail',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Narayana Giri',
                title: 'Narayana Giri',
                location_latitude: 12.6939809,
                location_longitude: 76.5726422,
                map_image_url: '../Content/img/mapimg/narayanagiri.jpg',
                name_point: 'Narayana Giri',
                description_point: '.Home to the temple of LaxmiNarayana which is open only in the weekends, with remains of the fort encircling the mountain can be seen from the peak.A vast number of natural caves can be explored on your way up.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            }

        ],
        'TwoDayTrek': [

            {
                name: 'Kodachadri',
                location_latitude: 13.8572394,
                location_longitude: 74.867367,
                map_image_url: '../Content/img/mapimg/kodachadri.jpg',
                name_point: 'Kodachadri',
                description_point: 'Kodachadri is located in Shimoga district and is perhaps one of the most spoken-about trails in Karnataka.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },

            {
                name: 'Brahmagiri Hills',
                location_latitude: 13.3557172,
                location_longitude: 77.6715159,
                map_image_url: '../Content/img/mapimg/brahmagiri.jpg',
                name_point: 'Brahmagiri Hills',
                description_point: 'Brahmagiri Hill located at the border between the Indian states of Karnataka and Kerala .',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Mullayana giri',
                location_latitude: 13.3057243,
                location_longitude: 75.7771991,
                map_image_url: '../Content/img/mapimg/mullayanagiri.jpg',
                name_point: 'Mullayanagiri',
                description_point: 'Set off for a trek to Mullayanagiri a majestic mountain located in the Western Ghats. Mullayanagiri is the highest peak in Karnataka.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
			{
				name: 'Bheemeshwari',
				location_latitude: 12.3122006,
				location_longitude: 77.274091,
				map_image_url: '../Content/img/mapimg/bheemeshwari.jpg',
				name_point: 'Bheemeshwari',
				description_point: 'It is easy 4-5 km trek through Bheemeshwari brings a sense of fulfilment toÂ the body and the soul.',
				get_directions_start_address: '',
				phone: '+91-9880223554',
				url_point: 'single_tour.html'
			}
			,
            	{
				name: 'Madhugiri Hill',
				location_latitude:13.6515542 , 
				location_longitude: 75.7771991,
				map_image_url: '../Content/img/mapimg/madhugiri.jpg',
				name_point: 'Madhugiri Hill',
				description_point: 'Madhugiri trek is in the Tumkur district. Madhugiri trek is named after the Madhugiri hill which translated to the Madhu (Honey) + Giri (Hill): Hill of the honey..',
				get_directions_start_address: '',
				phone: '+91 9880233554',
				url_point: 'single_tour.html'
			}
        ],
        'HandPicked': [

            {
                name: 'Agumbe Back Water',
                location_latitude: 13.3057243,
                location_longitude: 75.7771991,
                map_image_url: '../Content/img/mapimg/mullayanagiri.jpg',
                name_point: 'Mullayanagiri',
                description_point: 'Set off for a trek to Mullayanagiri a majestic mountain located in the Western Ghats. Mullayanagiri is the highest peak in Karnataka.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Kundari Hill',
                location_latitude: 12.3122006,
                location_longitude: 77.274091,
                map_image_url: '../Content/img/mapimg/bheemeshwari.jpg',
                name_point: 'Bheemeshwari',
                description_point: 'It is easy 4-5 km trek through Bheemeshwari brings a sense of fulfilment toÂ the body and the soul.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            }
            ,
            {
                name: 'Kavaledurga Trek',
                location_latitude: 13.6515542,
                location_longitude: 75.7771991,
                map_image_url: '../Content/img/mapimg/madhugiri.jpg',
                name_point: 'Madhugiri Hill',
                description_point: 'Madhugiri trek is in the Tumkur district. Madhugiri trek is named after the Madhugiri hill which translated to the Madhu (Honey) + Giri (Hill): Hill of the honey..',
                get_directions_start_address: '',
                phone: '+91 9880233554',
                url_point: 'single_tour.html'
            },
            {
                name: 'Dabbe Falls',
                location_latitude: 12.6106667,
                location_longitude: 77.3230117,
                map_image_url: '../Content/img/mapimg/thayeebetta.jpg',
                name_point: 'Thayee Betta',
                description_point: 'Thayee Betta Day trek is a standout amongst the most famous and thrilling trekking encounters one can swear by near Ramanagara.',
                get_directions_start_address: '',
                phone: '+91-9880223554',
                url_point: 'single_tour.html'
            }
        ]

    };

var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(12.9715987, 77.5945627),
    mapTypeId: google.maps.MapTypeId.ROADMAP,

    mapTypeControl: false,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    panControl: false,
    panControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scrollwheel: false,
    scaleControl: false,
    scaleControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    //hover:true;

    styles: [
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "hue": "#FFBB00"
                },
                {
                    "saturation": 43.400000000000006
                },
                {
                    "lightness": 37.599999999999994
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                {
                    "hue": "#FFC200"
                },
                {
                    "saturation": -61.8
                },
                {
                    "lightness": 45.599999999999994
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "hue": "#FF0300"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 51.19999999999999
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "hue": "#FF0300"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 52
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "hue": "#0078FF"
                },
                {
                    "saturation": -13.200000000000003
                },
                {
                    "lightness": 2.4000000000000057
                },
                {
                    "gamma": 1
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "hue": "#00FF6A"
                },
                {
                    "saturation": -1.0989010989011234
                },
                {
                    "lightness": 11.200000000000017
                },
                {
                    "gamma": 1
                }
            ]
        }
    ]
};
var
    marker;
mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
for (var key in markersData)
    markersData[key].forEach(function (item) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
            map: mapObject,
            icon: '../Content/img/pins/' + key + '.png',
        });

        if ('undefined' === typeof markers[key])
            markers[key] = [];
        markers[key].push(marker);
        google.maps.event.addListener(marker, 'click', (function () {
            closeInfoBox();
            getInfoBox(item).open(mapObject, this);
            mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
        }));


        /*ogle.maps.event.addListener(marker, 'mouseover', (function () {
            closeInfoBox();
            getTooltip(item).open(mapObject, this);
            mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
           }));*/


    });


function hideAllMarkers() {
    for (var key in markers)
        markers[key].forEach(function (marker) {
            marker.setMap(null);
        });
};

function toggleMarkers(category) {
    hideAllMarkers();
    closeInfoBox();

    if ('undefined' === typeof markers[category])
        return false;
    markers[category].forEach(function (marker) {
        marker.setMap(mapObject);
        marker.setAnimation(google.maps.Animation.DROP);

    });
};

function closeInfoBox() {
    $('div.infoBox').remove();
};

function getInfoBox(item) {
    return new InfoBox({
        content:
        '<div class="marker_info" id="marker_info">' +
        '<img src="' + item.map_image_url + '" alt="Image"/>' +
        '<h3>' + item.name_point + '</h3>' +
        '<span>' + item.description_point + '</span>' +
        '<div class="marker_tools">' +
        '<form action="http://maps.google.com/maps" method="get" target="_blank" style="display:inline-block""><input name="saddr" value="' + item.get_directions_start_address + '" type="hidden"><input type="hidden" name="daddr" value="' + item.location_latitude + ',' + item.location_longitude + '"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Directions</button></form>' +
        '<a href="tel://' + item.phone + '" class="btn_infobox_phone">' + item.phone + '</a>' +
        '</div>' +
        '<a href="' + item.url_point + '" class="btn_infobox">Details</a>' +
        '</div>',
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(10, 125),
        closeBoxMargin: '5px -20px 2px 2px',
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        isHidden: false,
        alignBottom: true,
        pane: 'floatPane',
        enableEventPropagation: true
    });
};

