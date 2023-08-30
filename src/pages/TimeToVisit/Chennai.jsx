import {React, useState} from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const timeData = [
    {
        place: '01.Chenni',
        placeDes1: `October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is 
        considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours
        and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid.`,
        placeDes2: `Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes 
        everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. 
        There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach`,
        cardImg1: require('../Images/chennai1.jpeg'),
        cardTextP1: 'Chennai',
        cardTextC1: 'India',
        cardImg2: require("../Images/chennai2.jpeg"),
        cardTextP2: 'Chennai',
        cardTextC2: 'India',
        cardImg3: require('../Images/chennai3.jpeg'),
        cardTextP3: 'Chennai',
        cardTextC3: 'India',
        placeHead:'Chennai',
        offHeadText1: `Chennai in Winters (November - February)`,
        offDes1: `Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good 
        for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its
        proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent.
        Kapaleeshwarar temple, Goverment Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda
        House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organised
        in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival
        held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when 
        there.`,
        offHeadText2: `Chennai in Summers (March - June)`,
        offDes2: `March marks the onset of the summer season in Chennai. It lasts till June and visiting the city during this time is not for 
        the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are 
        equally warm with the minimum hovering around 27°C. Exploring the cityscape during this time of the year is an extremely 
        exhausting affair and is, therefore, not advised to tourists.`,
        offHeadText3: `Chennai in Monsoons (July-September)`,
        offDes3: `Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the 
        monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and 
        strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. 
        The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travellers. In case one 
        has to visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow 
        travelling through the city.`,
    }]


    function Chennai() {
        const [showOffcanvas, setShowOffcanvas] = useState(false);
    
        const handleCloseOffcanvas = () => setShowOffcanvas(false);
        const handleShowOffcanvas = () => setShowOffcanvas(true)
        return (
            <>
                <div className='container mt-5'>
                    <h5 style={{ textTransform: "uppercase", fontWeight: "500", textAlign: "center" }}>Tamilnadu tourism</h5>
                    <p style={{ textTransform: "capitalize", textAlign: "center", fontWeight: "bold" }}>Best time to  visit</p>
                    {timeData.map((data, index) => (
                        <div className="row" key={index}>
                            <h3 className='mt-5 mb-2'>{data.place}</h3>
                            <div className='col-xl-6 col-lg-6 col-md-6 mt-5 '>
                                <h5 style={{ fontWeight: "500" }}>What is the best time to visit:</h5>
                                <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes1}<br /></p>
                                <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes2}</p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 mt-0' style={{ display: 'flex', justifyContent: 'center' }} >
                            <div style={{ marginTop: "10px" }}>
                            <div className="modal show" style={{ display: "block",position: "relative"}}>
                                <Modal.Dialog style={{ width: "800px" }} className="ms-0 pr-0">
                                <Modal.Header closeButton>
                                    <Modal.Title className=" text-center me-3 fw-bolder">More About Best Time To Travel To  &nbsp;{data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row  pe-5" style={{padding:'20px 50px'}}>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg1} alt=""/>
                                            Chennai <br></br>India<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                            Chennai <br></br>India<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"160px"} src={data.cardImg3} alt=""/>
                                            Chennai <br></br>India<br></br> Source
                                        </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseOffcanvas}> Close </Button>
                                    <Button variant="primary" onClick={handleShowOffcanvas}> Save Changes </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                            </div>
                            </div>
                                <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title><h3 style={{ textAlign: 'center',fontWeight:'400' }}>Best time to visit in {data.placeHead}</h3></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <h6 style={{ fontWeight: 'bold', marginTop: '45px' }}>{data.offHeadText1}</h6>
                                    <p style={{ textIndent: '4rem', textAlign: 'justify' }}>{data.offDes1}</p>
                                    <h6 style={{ fontWeight: 'bold', marginTop: '45px' }}>{data.offHeadText2}</h6>
                                    <p style={{ textIndent: '4rem', textAlign: 'justify' }}>{data.offDes2}</p>
                                    <h6 style={{ fontWeight: 'bold', marginTop: '45px' }}>{data.offHeadText3}</h6>
                                    <p style={{ textIndent: '4rem', textAlign: 'justify' }}>{data.offDes3}</p>
                                </Offcanvas.Body>
                            </Offcanvas>
                            </div>
                        </div>
                    ))}
                    </div>
                </>
        )}
        export  default Chennai