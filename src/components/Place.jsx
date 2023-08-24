import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap'; 
//import Cards from './Cards';



const Place = () => {
    const containerData = [
        {   
            heading:"01.Chennai",
            imgSrc: require('../Home/Chennai.jpeg'),
            url:"chennai",
            title: '"The Detroit Of India"',
            description1:"Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle",
            description2:"Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed."   ,
            must:`Must visit place in Chennai`,
            card:[
                {
                    title: 'Marina',
                    text: `Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal...`,
                    imageSrc: require('../Home/chennai1.jpeg'),
                },
                {
                    title: 'MGR Flim City',
                    text: ' Having been established in the year 1994, a considerably new structure, the MGR Film city is managed..',
                    imageSrc: require('../Home/chennai2.jpeg'), 
                },
                {
                    title: 'Marundeeswarar Temple The magnificent',
                    text: ' Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva...',
                    imageSrc: require('../Home/chennai3...jpeg'),
                },
                {
                    title: 'Breezy Beach',
                    text: ' Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted...',
                    imageSrc: require('../Home/chennai4.jpeg'), 
                },
            ]
        },
        {
            heading:`02.Rameshwaram`,
            imgSrc: require('../Home/Rameshwaran.jpeg'),
            url:"rameshwaram",
            title: '"The Bridge on the Indian Ocean"',
            description1:`Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.`,
            description2:`Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.`,
            must:`Must visit place in Rameshwaram`,
            card:[
                {
                    title: 'Dhanushkodi Temple',
                    text: `Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a...`,
                    imageSrc: require('../Home/rameshwarem1.jpeg'),
                },
                {
                    title: 'Lakshmana Temple',
                    text: ' Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order...',
                    imageSrc: require('../Home/rameshwarem2.jpeg'), 
                },
                {
                    title: 'Rameshwaram Temple',
                    text: ' A perfect blend of mind- boggling architecture and spiritual significance, Rameshwaram Temple, also...',
                    imageSrc: require('../Home/rameshwarem1 (5).jpeg'),
                },
                {
                    title: 'Villoondi Tirtham',
                    text: ' Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists...',
                    imageSrc: require('../Home/rameshwarem1 (6).jpeg'), 
                },
            ]
        },
        {
            heading:`03.Kodaikanal`,
            imgSrc: require('../Home/Kodaikanal.jpeg'),
            url:"kodaikanal",
            title: '"The Princess of Hill Stations"',
            description1:`Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means 'the gift of the forests'.`,
            description2:`Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.`,
            must:`Must visit place in Kodaikanal`,
            card:[
                {
                    title: 'Green Valley View',
                    text: `Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...`,
                    imageSrc: require('../Home/kodaikanal1....jpeg'),
                },
                {
                    title: 'Kodai Lake',
                    text: 'Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera...',
                    imageSrc: require('../Home/kodaikanal2.jpeg'), 
                },
                {
                    title: 'Bear Shola Falls ',
                    text: ' Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular..',
                    imageSrc: require('../Home/kodaikanal3..jpeg'),
                },
                {
                    title: 'Pillar Rocks',
                    text: ` Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic...`,
                    imageSrc: require('../Home/kodaikanal4.jpeg'), 
                },
            ]
        },
        {
            heading:`04.Ooty`,
            imgSrc: require('../Home/Ooty.jpeg'),
            url:'ooty',
            title: '"Queen of the Nilgiris"',
            description1:`Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.`,
            description2:`The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.`,
            must:`Must visit place in Ooty`,
            card:[
                {
                    title: 'Nilgiri Mountain Railway',
                    text: `Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill...`,
                    imageSrc: require('../Home/ooty1 (1).jpeg'),
                },
                {
                    title: 'Ooty Botanical Garden ',
                    text: ' Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...',
                    imageSrc: require('../Home/ooty1 (2).jpeg'), 
                },
                {
                    title: 'Emerald Lake',
                    text: 'Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and...',
                    imageSrc: require('../Home/ooty1 (3).jpeg'),
                },
                {
                    title: `Dolphin's Nose`,
                    text: `Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip...`,
                    imageSrc: require('../Home/ooty1 (4).jpeg'), 
                },
            ]
        },
        {
            heading:`05.Kanyakumari`,
            imgSrc: require('../Home/Kanyakumari.jpeg'),
            url:"kanyakumari",
            title: `"Cape Comorin or The Lands End"`
            ,description1:`Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.`,
            description2:`Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.`,
            must:`Must visit place in Kanyakumari`,
            card:[
                {
                    title: 'Kanyakumari Beach',
                    text: `Located in the southernmost part of India, Kanyakumari beach with its beautiful hue- changing beaches...`,
                    imageSrc: require('../Home/kanyakumari1 (1).jpeg'),
                },
                {
                    title: 'Vivekananda Memorial',
                    text: ' The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque...',
                    imageSrc: require('../Home/kanyakumari1.(2).jpeg'), 
                },
                {
                    title: 'Thiruvalluvar Status',
                    text: ' Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself...',
                    imageSrc: require('../Home/kanyakumari1 (3).jpeg'),
                },
                {
                    title: 'Thirparappu Falls',
                    text: ' Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...',
                    imageSrc: require('../Home/hokenakkal4..jpeg'), 
                },
            ]
        },
        {
            heading:`06.Kumbakanom`,
            imgSrc: require('../Home/Kumbakonam.jpeg'),
            url:'kumbakonam',
            title: '"The Cambridge of India"',
            description1:`Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.`,
            description2:`The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.`,
            must:`Must visit place in Kumbakonam`,
            card:[
                {
                    title: 'Sarangapani Temple',
                    text: `Sarangapani Temple, an ancient temple dedicated to LordVishnu, is located in the town of Kumbakonam...`,
                    imageSrc: require('../Home/kumbakonam1 (1).jpeg'),
                },
                {
                    title: 'Nageswaran Temple ',
                    text: 'Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...',
                    imageSrc: require('../Home/kumbakonam1 (2).jpeg'), 
                },
                {
                    title: 'Adi Kumbeshwara Temple',
                    text: 'Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara...',
                    imageSrc: require('../Home/kumbakonam1 (3).jpeg'),
                },
                {
                    title: 'Airavatesvara Temple',
                    text: 'Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...',
                    imageSrc: require('../Home/kumbakonam1 (4).jpeg'), 
                },
            ]
        },
        {
            heading:`07.Madurai`,
            imgSrc: require('../Home/Madurai.jpeg'),
            url:"madurai",
            title: '"The Lotus City"',
            description1:`Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.`,
            description2:`There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.`,
            must:`Must visit place in Madurai`,
            card:[
                {
                    title: 'Vaigai Dam',
                    text: `Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Then....`,
                    imageSrc: require('../Home/madurai1.jpeg'),
                },
                {
                    title: 'Meghamalai',
                    text: 'Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...',
                    imageSrc: require('../Home/madurai2.jpeg'), 
                },
                {
                    title: 'Samanar Hills',
                    text: 'Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...',
                    imageSrc: require('../Home/madurai3..jpeg'),
                },
                {
                    title: 'Thirumalai Nayakar',
                    text: ' Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...',
                    imageSrc: require('../Home/madurai4..jpeg'), 
                },
            ]
        },
        {
            heading:"08.Yercaud",
            imgSrc: require('../Home/Yarcaud.jpeg'),
            url:'yercaud',
            title: '"The Land of Seven Forests."',
            description1:`Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.`,
            description2:`Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.`,
            must:`Must visit place in Yercaud`,
            card:[
                {
                    title: 'Pagoda Point',
                    text: `Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated ...`,
                    imageSrc: require('../Home/yercaud...(1).jpeg'),
                },
                {
                    title: 'Botanical Garden',
                    text: ' Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...',
                    imageSrc: require('../Home/yercaud1 (2).jpeg'), 
                },
                {
                    title: 'Emerald Lake',
                    text: ' The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...',
                    imageSrc: require('../Home/yercaud1.(3).jpeg'),
                },
                {
                    title: 'Lady,s Seat',
                    text: `Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...`,
                    imageSrc: require('../Home/yercaud1.(4).jpeg'), 
                },
            ]
        },
        {
            heading:'09.Theni',
            imgSrc: require('../Home/Theni.jpeg'),
            url:'theni',
            title: '"A little hamlet in Tamil Nadu"',
            description1:`Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.`,
            description2:`There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.`,
            must:`Must visit place in Theni`,
            card:[
                {
                    title: 'Chinna Suruli Falls',
                    text: `Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...`,
                    imageSrc: require('../Home/theni1.(1).jpeg'),
                },
                {
                    title: 'Kumbakkarai Falls',
                    text: 'Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that...',
                    imageSrc: require('../Home/theni1 (2).jpeg'), 
                },
                {
                    title: 'Meghamalai',
                    text: ' Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...',
                    imageSrc: require('../Home/theni1.(3).jpeg'),
                },
                {
                    title: 'Suruli Falls',
                    text: 'Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...',
                    imageSrc: require('../Home/theni1.(4).jpeg'), 
                },
            ]
        },
        {
            heading:'10.Hogenakkal',
            imgSrc: require('../Home/Hogenakkal.jpeg'),
            url:"hogenakkal",
            title: `"The one that will take your breath away"`,
            description1:"Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.",
            description2:`Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.`,
            must:`Must visit place in Hogenakkal`,
            card:[
                {
                    title: 'Theerthamalai Temple',
                    text: ` Theerthamalai is a popular pilgrim centre close to
                    Hogenakkal. One of its most popular destinations is the...
                    `,
                    imageSrc: require('../Home/hogenakkal1.jpeg'),
                },
                {
                    title: 'Hogenakkal Falls',
                    text: 'Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of....',
                    imageSrc: require('../Home/hogenakkal2..jpeg'), 
                },
                {
                    title: 'Pennagram Village',
                    text: ' The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every...',
                    imageSrc: require('../Home/hogenakkal3.jpeg'),
                },
                {
                    title: 'Mettur Dam',
                    text: ' Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...',
                    imageSrc: require('../Home/hokenakkal4..jpeg'), 
                },
            ]
        },
    ];
    
return (
    <>
        {containerData.map((data, index) => (
            <div className="container" key={index}>
                <div className="row">
                    <h3>{data.heading}</h3>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <img src={data.imgSrc} alt="img" className="img-fluid" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6" style={{ alignItems: 'stretch' }}>
                        <h6 style={{ marginTop: '15px', marginBottom: '15px' }}>{data.title}</h6>
                        <p style={{ textAlign: 'justify', marginBottom: '20px', marginLeft: '10px' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.description1}
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.description2}
                        </p>
                    </div>
                    <h3 style={{ textTransform: "capitalize", textAlign: "center", margin: "20px 0" }}>{data.must}</h3>
                    <CardGroup>
                        {data.card.map((card, cardIndex) => (
                            <Card key={cardIndex} className="border mb-4" style={{ marginRight: "10px" ,width:"16rem"}}>
                                <Card.Img variant="top h-100" src={card.imageSrc} style={{height:"200px", objectFit:"cover"}} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardGroup>
                </div>
            </div>
        ))}
    </>
);
};

export default Place;




