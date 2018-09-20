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
                location_latitude: 13.142332,
                location_longitude: 78.100456,
                map_image_url: '../Content/img/mapimg/antargange.jpg',
                name_point: 'Antara Gange',
                description_point: 'Antaragange is a famous hill spot near bangalore, Known for caves. The parking lot in the map above serves as the trek starting point as well.',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/AntharagangeTrek'
            },
            {
                name: 'Savanadurga',
                location_latitude: 12.9205893,
                location_longitude: 77.2944334,
                map_image_url: '../Content/img/mapimg/savanadurga.jpg',
                name_point: 'Savanadurga',
                description_point: 'Savandurga is in Karnataka state and 50 Km from the Bangalore city. Convenient to go from Bangalore',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/SavandurgaTrek'
            },

        

             {
                name: 'Kunti Betta',
                location_latitude: 12.508356,
                location_longitude: 76.698089,
                map_image_url: '../Content/img/mapimg/kuntibetta.jpg',
                name_point: 'Kunti Betta',
                description_point: 'Kunti Betta is a picturesque hill in the quaint town of Padavapura. This 3 hour trek is ideal for trekkers; nature lovers, thrill seeking couples and backpackers will enjoy this adventure.',
                get_directions_start_address: '',
                phone: '+91 8197993224',
                url_point: '../OneDayTrekking/KuntiBettaTrek'
            },

            {
                name: 'Makali Durga',
                location_latitude: 13.4005252,
                location_longitude: 77.5146453,
                map_image_url: '../Content/img/mapimg/makalidurga.jpg',
                name_point: 'Makali Durga',
                description_point: 'The Makalidurga trek is the nearest railway trek to Bangalore. It begins with a 2-km walk on the railway track from the station of Makalidurga.',
                get_directions_start_address: '',
                phone: '+91 8197993224',
                url_point: '../OneDayTrekking/MaklidurgaTrek'
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
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/RamadevaraBettaTrek'
            }


        ],

        'NightTrek': [
            {
                name: 'Antara Gange',
                title: 'Antara Gange',
                location_latitude: 13.142332,
                location_longitude: 78.100456,
                map_image_url: '../Content/img/mapimg/antargange.jpg',
                name_point: 'Antara Gange',
                description_point: 'Antaragange is a famous hill spot near bangalore, Known for caves. The parking lot in the map above serves as the trek starting point as well.',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/AntharagangeTrek'
                
            },
            {
                name: 'Savanadurga',
                location_latitude: 12.9205893,
                location_longitude: 77.2944334,
                map_image_url: '../Content/img/mapimg/savanadurga.jpg',
                name_point: 'Savanadurga',
                description_point: 'Savandurga is in Karnataka state and 50 Km from the Bangalore city. Convenient to go from Bangalore',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/SavandurgaTrek'
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
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/HariHaraTrek'
            },

            {
                name: 'Kabbaladurga Trek',
                location_latitude: 12.5006991,
                location_longitude: 77.2935393,
                map_image_url: '../Content/img/mapimg/kabbaldurga.jpg',
                name_point: 'Kabbaladurga Trek',
                description_point: ' The name of the site is a combination of the words Kabbalamma,who is the presiding deity of the temple and Durga, which means fort in the Hindi language.',
                get_directions_start_address: '',
                phone: '+91 8197993224',
                url_point: '../OneDayTrekking/KabbalDurgaTrek'
            },

            {
                name: 'Kunti Betta',
                location_latitude: 12.508356,
                location_longitude: 76.698089,
                map_image_url: '../Content/img/mapimg/kuntibetta.jpg',
                name_point: 'Kunti Betta',
                description_point: 'Kunti Betta is a picturesque hill in the quaint town of Padavapura. This 3 hour trek is ideal for trekkers; nature lovers, thrill seeking couples and backpackers will enjoy this adventure.',
                get_directions_start_address: '',
                phone: '+91 8197993224',
                url_point: '../OneDayTrekking/KuntiBettaTrek'
            },

            {
                name: 'Makali Durga',
                location_latitude: 13.4005252,
                location_longitude: 77.5146453,
                map_image_url: '../Content/img/mapimg/makalidurga.jpg',
                name_point: 'Makali Durga',
                description_point: 'The Makalidurga trek is the nearest railway trek to Bangalore. It begins with a 2-km walk on the railway track from the station of Makalidurga.',
                get_directions_start_address: '',
                phone: '+91 8197993224',
                url_point: '../OneDayTrekking/MaklidurgaTrek'
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
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/RamadevaraBettaTrek'
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
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/RangaswamyBettaTrek'
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
                phone: '+91-8197993224',
                url_point: '../OneDayTrekking/NarayanagiriTrek'
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
                phone: '+91-8197993224',
                url_point: '../TwoDayTrekking/KodachadriTrek'
            },

            {
                name: 'Brahmagiri Hills',
                location_latitude: 12.3868244,
                location_longitude: 75.4907241,
                 map_image_url: '../Content/img/mapimg/brahmagiri.jpg',
                name_point: 'Brahmagiri Hills',
                description_point: 'Brahmagiri Hill located at the border between the Indian states of Karnataka and Kerala .',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../TwoDayTrekking/BhramagiriHillsTrek'
            },
            {
                name: 'Mullayana giri',
                location_latitude: 13.3057243,
                location_longitude: 75.7771991,
                map_image_url: '../Content/img/mapimg/mullayanagiri.jpg',
                name_point: 'Mullayanagiri',
                description_point: 'Set off for a trek to Mullayanagiri a majestic mountain located in the Western Ghats. Mullayanagiri is the highest peak in Karnataka.',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../TwoDayTrekking/MullayanagiriTrek'
            },
            {
                name: 'Gokarna',
                location_latitude: 14.5478586,
                location_longitude: 74.318841,
                map_image_url: '../Content/img/mapimg/gokarna.jpg',
                name_point: 'Gokarna',
                description_point: 'The Kumta to Gokarna beach trek is a 20 km long hike.The trek starts from Kumta beach, and goes all the way up to Gokarna beach, passing over 15 beaches en route.',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../TwoDayTrekking/GokarnaTrek'
            },
            {
                name: 'Sakleshpur',
                location_latitude: 12.9441511,
                location_longitude: 75.7865653,
                map_image_url: '../Content/img/mapimg/sakleshpur.jpg',
                name_point: 'Sakleshpur',
                description_point: 'Sakleshpur is frequented by trek enthusiasts and people who are interested in outdoor camping. From the mountain, one can avail views of the surrounding rice terraces. ',
                get_directions_start_address:'',
                phone: '+91-8197993224',
                url_point: '../TwoDayTrekking/SakleshpurTrek'
            },
            {
                name: 'Kumara Parvatha',
                location_latitude: 12.6618681,
                location_longitude: 75.6866337,
                map_image_url: '../Content/img/mapimg/kumaraparvatha.jpg',
                name_point: 'Kumara Parvatha',
                description_point: 'Kumara Parvatha also known as Pushpagiri is the third tallest peak in the western ghats of Karnataka and is one of the most beautiful peaks in the whole of western ghats.',
                get_directions_start_address:'',
                phone: '+91-8197993224',
                url_point: '../TwoDayTrekking/KumaraParvathaTrek'
            },
            {
                name: 'Thadiyandamol',
                location_latitude: 12.2171273,
                location_longitude: 75.6088059,
                map_image_url: '../Content/img/mapimg/thadiyandamol.jpg',
                name_point: 'Thadiyandamol',
                description_point: 'A breathtaking sunrise with puffs of clouds dotting the sky, verdant forests and a stunning view of the valley – Thadiyandamol, the tallest peak in Kodagu district, is a tourists paradise.',
                get_directions_start_address:'',
                phone: '+91-8197993224',
                url_point: '../TwoDayTrekking/ThadiyandamolTrek'
            }

			/*{
				name: 'Bheemeshwari',
				location_latitude: 12.3122006,
				location_longitude: 77.274091,
				map_image_url: '../Content/img/mapimg/bheemeshwari.jpg',
				name_point: 'Bheemeshwari',
				description_point: 'It is easy 4-5 km trek through Bheemeshwari brings a sense of fulfilment toÂ the body and the soul.',
				get_directions_start_address: '',
				phone: '+91-8197993224',
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
			}*/
        ],
        'HandPicked': [


            
            {
                name: 'Kundadri',
                location_latitude: 13.555281,
                location_longitude: 75.1691305,
                map_image_url: '../Content/img/mapimg/kundadri.png',
                name_point: 'Kundadri',
                description_point: ' Kundadri is a hill famed for its trekking expeditions in the Western Ghats. The forests bearing the hill lie in the Shimoga district',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../BestTrekking/KundariTrekking'
            },
            /*{
                name: 'Agumbe',
                location_latitude: 13.5026635,
                location_longitude: 75.09031541,
                map_image_url: '../Content/img/mapimg/agumbe.jpg',
                name_point: 'Agumbe',
                description_point: 'It is called "The Cherrapunji of the South" after Cherrapunji, in Northeast India.',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../BestTrekking/AgumbeTrekking'
            },
        {
                name: 'KavaleDurga',
                location_latitude: 13.7205486,
                location_longitude: 75.1227269,
                map_image_url: '../Content/img/mapimg/kavaledurga.jpg',
                name_point: 'KavaleDurga',
                description_point: 'Kavaledurga, also called Bhuvanagiri. Kavaledurga fort is around 18 kilometers from Thirthahalli.',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: 'single_tour.html'
            },
*/
            {
                name: 'DabbeFalls',
                location_latitude: 14.147679,
                location_longitude: 74.7445714,
                map_image_url: '../Content/img/mapimg/dabbefalls.jpg',
                name_point: 'DabbeFalls',
                description_point: 'The trek starts from Kumta beach, and goes all the way up to Gokarna beach, passing over fifteen beaches en route.',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../BestTrekking/DabbeFallsTrekking'
            },
             {
                name: 'Dandeli',
                location_latitude: 15.251037,
                location_longitude: 74.620537 ,
                map_image_url: '../Content/img/mapimg/dandeli.jpg',
                name_point: 'Dandeli',
                description_point: 'Dandeli is most famous for its wild life sanctuary, the thick deciduous forests, paper mills and mostly, trekking. ',
                get_directions_start_address: '',
                phone: '+91-8197993224',
                url_point: '../BestTrekking/Dandeli'
            }
        ]

    };

var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(13.3391677, 77.1139984),
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
            title: item.name
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
        '<a href="' + item.url_point + '" target="_blank" class="btn_infobox" >Details</a>' +
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

