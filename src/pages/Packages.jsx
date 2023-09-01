import {React} from 'react'
import { Button, Carousel, CarouselItem } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import bgImg from './Images/ooty3.jpeg';

const timeData = [
    {
        city1:'Marina',
        city2:'MGR Film City',
        city3:'Marundeeshwarar Temple',
        city4:'Breezy Beach',
        place: '01.Chenni',
        goldRate:'6999/-',
        preRate:'10999/-',
        cardImg1: require('../Home/chennai1.jpeg'),
        cardImg2: require("../Home/chennai2.jpeg"),
        cardImg3: require('../Home/chennai3...jpeg'),
        cardImg4: require('../Home/chennai4.jpeg'),
        placeHead:'Chennai',
    },
    {
        city1:'Dhanushkodi Temple',
        city2:'Lakshmana Temple',
        city3:'Rameshwaram Temple',
        city4:'Villoondi Tirtham',
        place: '02.Rameshwaram',
        goldRate:'5999/-',
        preRate:'8999/-',
        cardImg1: require('../Home/rameshwarem1.jpeg'),
        cardImg2: require("../Home/rameshwarem2.jpeg"),
        cardImg3: require('../Home/rameshwarem1 (5).jpeg'),
        cardImg4: require('../Home/Rameshwaram3..jpeg'),
        placeHead:'Rameshwaram',
    },
    {
        city1:'Green Valley View',
        city2:'Kodai Lake',
        city3:'Bear Shola Falls',
        city4:'Pillar Rocks',
        place: '03.Kodaikanal',
        goldRate:'7999/-',
        preRate:'11999/-',
        cardImg1: require('../Home/kodaikanal1....jpeg'),
        cardImg2: require("../Home/kodaikanal2.jpeg"),
        cardImg3: require('../Home/kodaikanal3..jpeg'),
        cardImg4: require('../Home/kodaikanal4.jpeg'),
        placeHead:'Kodaikanal',
    },
    {
        city1:'Nilgiri Mountain Railway',
        city2:'Ooty Botanical Garden',
        city3:'Emerald Lake',
        city4: `Dolphin's Nose`,
        place: '04.Ooty',
        goldRate:'7999/-',
        preRate:'12999/-',
        cardImg1: require('../Home/ooty1 (1).jpeg'),
        cardImg2: require("../Home/ooty1 (2).jpeg"),
        cardImg3: require('../Home/ooty1 (3).jpeg'),
        cardImg4: require('../Home/ooty1.(4).jpeg'),
        placeHead:'Ooty',
    },
    {
        city1:'Kanyakumari Beach',
        city2:'Vivekananda Memorial',
        city3:'Thiruvalluvar Status',
        city4: `Thirparappu Falls`,
        place: '05.Kanyakumari',
        goldRate:'5999/-',
        preRate:'10999/-',
        cardImg1: require('../Home/kanyakumari1 (1).jpeg'),
        cardImg2: require("../Home/kanyakumari1.(2).jpeg"),
        cardImg3: require('../Home/kanyakumari1 (3).jpeg'),
        cardImg4: require('../Home/kanyakumari1 (4).jpeg'),
        placeHead:'Kanyakumari',
    },
    {
        city1:'Sarangapani Temple',
        city2:'Nageswaran Temple',
        city3:'Adi Kumbeshwara Temple',
        city4: `Airavatesvara Temple`,
        place: '06.Kumbakonam',
        goldRate:'4999/-',
        preRate:'9999/-',
        cardImg1: require('../Home/kumbakonam1 (1).jpeg'),
        cardImg2: require("../Home/kumbakonam1 (2).jpeg"),
        cardImg3: require('../Home/kumbakonam1 (3).jpeg'),
        cardImg4: require('../Home/kumbakonam1 (4).jpeg'),
        placeHead:'Kumbakonam',
    },
    {
        city1:'Vaigai Dam',
        city2:'Meghamalai',
        city3:'Samanar Hills',
        city4: `Thirumalai Nayakar`,
        place: '07.Madurai',
        goldRate:'5999/-',
        preRate:'9999/-',
        cardImg1: require('../Home/madurai1.jpeg'),
        cardImg2: require("../Home/madurai2.jpeg"),
        cardImg3: require('../Home/madurai3..jpeg'),
        cardImg4: require('../Home/madurai4..jpeg'),
        placeHead:'Madurai',
    },
    {
        city1:'Pagoda Point',
        city2:'Botanical Garden',
        city3:'Emerald Lake',
        city4: `Lady's Seat`,
        place: '08.Yercaud',
        goldRate:'8999/-',
        preRate:'10999/-',
        cardImg1: require('../Home/yercaud...(1).jpeg'),
        cardImg2: require("../Home/yercaud1 (2).jpeg"),
        cardImg3: require('../Home/yercaud1.(3).jpeg'),
        cardImg4: require('../Home/yercaud1 (4).jpeg'),
        placeHead:'Yercaud',
    },
    {
        city1:'Chinna Suruli Falls',
        city2:'Kumbakkarai Falls',
        city3:'Meghamalai',
        city4: `Suruli Falls`,
        place: '09.Theni',
        goldRate:'6999/-',
        preRate:'9999/-',
        cardImg1: require('../Home/theni1.(1).jpeg'),
        cardImg2: require("../Home/theni1 (2).jpeg"),
        cardImg3: require('../Home/theni1.(3).jpeg'),
        cardImg4: require('../Home/theni1.(4).jpeg'),
        placeHead:'Theni',
    },
    {
        city1:'Theerthmalai Temple',
        city2:'Hogenakkal Falls',
        city3:'Pennagram Village',
        city4: `Mettur Dam`,
        place: '10.Hogenakkal',
        goldRate:'7999/-',
        preRate:'11999/-',
        cardImg1: require('../Home/hogenakkal1.jpeg'),
        cardImg2: require("../Home/hogenakkal2..jpeg"),
        cardImg3: require('../Home/hogenakkal3.jpeg'),
        cardImg4: require('../Home/hokenakkal4..jpeg'),
        placeHead:'Hogenakkal',
    }
]


    function Packages() {
        return (
            <>
                <div className='container mt-5'>
                    <h5 style={{ textTransform: "uppercase", fontWeight: "500", textAlign: "center" }}>Tamilnadu tourism</h5>
                    <h4 style={{ textTransform: "uppercase", textAlign: "start", fontWeight: "bold" }}>Packages </h4>
                    <div className='row'>
                        <div className="col-lg-6">
                            <img src={bgImg} alt="" style={{height:'440px',width:'100%'}} />
                        </div>
                        <div className="col-lg-6">
                            <p style={{textIndent:'8rem',textAlign:'justify'}}>Discover the captivating allure of Tamil Nadu through our thoughtfully curated tourism packages. Immerse yourself in the rich cultural heritage, architectural marvels, and natural splendor this state has to offer. Choose from a variety of packages tailored to your interests: delve into the ancient history and spirituality with our Heritage and Cultural Packages, explore the tranquil beauty of hill stations and wildlife sanctuaries with our Nature and Wildlife Packages, embark on a spiritual journey with our Spiritual and Pilgrimage Packages, unwind on pristine beaches with our Beach and Coastal Packages, or seek adventure in the midst of nature with our Adventure Packages.</p>                       
                            <p style={{textIndent:'8rem',textAlign:'justify'}}>Each package encompasses carefully designed itineraries, comfortable accommodations, and guided experiences that promise to create memories that will last a lifetime. Whether you're a history enthusiast, a nature lover, a pilgrim at heart offer an unforgettable journey into the heart of this diverse and captivating state.</p>
                        </div>
                        <h3 style={{textAlign:'center',marginTop:'2rem',fontWeight:'400'}}>Our Packages</h3>
                    </div>
                    {timeData.map((data, index) => (
                        <div className="row" key={index}>
                            <h3 className='mt-5 mb-2'>{data.place}</h3>
                            {index % 2 === 0 ? ( <>
                                <div className='col-xl-6 col-lg-6 col-md-6 mt-4 '>
                                <div className='row'>
                                <h5 style={{ fontWeight: "500" }}>Our Package Covers</h5> 
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div><h5 style={{marginBottom:'0'}}>Places</h5>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city1}</li>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city2}</li>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city3}</li>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city4}</li>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div ><h5 style={{marginBottom:'0'}}> Package</h5>
                                            <li style={{listStyle:'none',textIndent:'6rem'}}>Gold</li>
                                            <li style={{listStyle:'none',textIndent:'6rem'}}>Premium</li>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <h5>Gold :</h5><p style={{textAlign:'justify'}}> Gold package consists of 2days and 3Nights with food and accomodations
                                            <Button className='mt-2'variant='outline-success' style={{marginRight:'6rem'}}>Book Now</Button> <Button variant='outline-secondary' className=' mt-2'>&#8377;{data.goldRate}</Button>
                                         </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <h5>Premium :</h5><p style={{textAlign:'justify'}}> Gold package consists of 4days and 5Nights with food and accomodations
                                            <Button className='mt-2'variant='outline-success' style={{marginRight:'5rem'}}>Book Now</Button> <Button className='mt-2' variant='outline-secondary'>&#8377;{data.preRate}</Button>  </p>
                                    </div> 
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-4"> 
                                    <Button style={{ padding: '20px 40px',fontWeight:'bold' }}><h5>Pick Your Date</h5></Button>
                                </div>                      
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 mt-0'  >
                            <div className="modal show" style={{ display: "block",position:'relative'}}>
                                <Modal.Dialog style={{ width: "100%" }}>
                                <Modal.Header closeButton>
                                    <Modal.Title className=" fw-bolder"> Package covers in {data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row" style={{padding:'20px 50px'}}>
                                        <Carousel>
                                            <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg1} alt=""/>
                                                {data.city1} 
                                            </div>
                                            </CarouselItem>
                                            <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg2} alt=""/>
                                                {data.city2}                                       
                                             </div>
                                                </CarouselItem>
                                                <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg3} alt=""/>
                                                {data.city3} 
                                            </div>
                                            </CarouselItem>
                                            <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg4} alt=""/>
                                                {data.city4}
                                            </div>
                                            </CarouselItem>
                                        </Carousel>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary"> See More</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                            </div>
                            </div>
                                </>):(<>
                                    <div className='col-xl-6 col-lg-6 col-md-6 mt-0'  >
                            <div className="modal show" style={{ display: "block",position:'relative'}}>
                                <Modal.Dialog style={{ width: "100%" }}>
                                <Modal.Header closeButton>
                                    <Modal.Title className=" fw-bolder"> Package covers in {data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row" style={{padding:'20px 50px'}}>
                                        <Carousel>
                                            <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg1} alt=""/>
                                                {data.city1} 
                                            </div>
                                            </CarouselItem>
                                            <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg2} alt=""/>
                                                {data.city2}                                       
                                             </div>
                                                </CarouselItem>
                                                <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg3} alt=""/>
                                                {data.city3} 
                                            </div>
                                            </CarouselItem>
                                            <CarouselItem>
                                            <div className="col text-center">
                                                <img style={{ width: "400px" }} height={"200px"} src={data.cardImg4} alt=""/>
                                                {data.city4}
                                            </div>
                                            </CarouselItem>
                                        </Carousel>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary"> See More</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                            </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 mt-4 '>
                                <div className='row'>
                                <h5 style={{ fontWeight: "500" }}>Our Package Covers</h5> 
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div><h5 style={{marginBottom:'0'}}>Places</h5>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city1}</li>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city2}</li>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city3}</li>
                                            <li style={{listStyle:'none',textIndent:'4rem'}}>{data.city4}</li>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div ><h5 style={{marginBottom:'0'}}> Package</h5>
                                            <li style={{listStyle:'none',textIndent:'6rem'}}>Gold</li>
                                            <li style={{listStyle:'none',textIndent:'6rem'}}>Premium</li>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <h5>Gold :</h5><p style={{textAlign:'justify'}}> Gold package consists of 2days and 3Nights with food and accomodations
                                            <Button className='mt-2'variant='outline-success' style={{marginRight:'6rem'}}>Book Now</Button> <Button variant='outline-secondary' className=' mt-2'>&#8377;{data.goldRate}</Button>
                                         </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <h5>Premium :</h5><p style={{textAlign:'justify'}}> Gold package consists of 4days and 5Nights with food and accomodations
                                            <Button className='mt-2'variant='outline-success' style={{marginRight:'5rem'}}>Book Now</Button> <Button className='mt-2' variant='outline-secondary'>&#8377;{data.preRate}</Button>  </p>
                                    </div> 
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-4"> 
                                    <Button style={{ padding: '20px 40px',fontWeight:'bold' }}><h5>Pick Your Date</h5></Button>
                                </div>                      
                            </div>
                                </>

                                )}
                            
                        </div>
                    ))}
                    </div>
                </>
        )}
        export  default Packages