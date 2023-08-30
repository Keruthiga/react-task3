import { React, useState } from 'react'
import {  Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


const timeData = [
    {
        place: '08. Yercaud',
        placeDes1: `October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans, but the rains make this place extra beautiful and you might not want to miss that either.`,
        placeDes2: `Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best.`,
        cardImg1: require('../Images/yercaud1.jpeg'),
        cardTextP1: 'Easemytrip',
        cardTextC1: '',
        cardImg2: require("../Images/yercaud2.jpeg"),
        cardTextP2: 'Oyorooms',
        cardTextC2: '',
        cardImg3: require('../Images/yercaud3.jpeg'),
        cardTextP3: 'Hiveminer',
        cardTextC3: '',
        placeHead:'Yercaud',
        offHeadText1: `Yercaud in Summer (March - June)`,
        offDes1: `With temperatures that hardly move out of the range between 24 degree Celsius and 28 degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady?s Seat. Apart from these attractions, one particular festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.`,
        offHeadText2: `Yercaud in Winter (November - February)`,
        offDes2: `Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15 degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear?s Cave, Pagoda Point, Shevaroy Temple, and Anna Park, if you plan to visit this beautiful place during winter.`,
        offHeadText3: `Yercaud in Monsoon (July-September)`,
        offDes3: `Yercaud experiences a hot and humid
        monsoon with temperatures that range between 20 degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time`,
    }
]



function Yercaud() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true)
    return (
        <>
            <div className='container mt-2'>
                {timeData.map((data, index) => (
                    <div className="row" key={index}>
                        <h3 className='mt-5 mb-2'>{data.place}</h3>
                        <div className='col-xl-6 col-lg-6 col-md-6 mt-0' style={{ display: 'flex', justifyContent: 'center' }} >
                        <div style={{ marginTop: "10px" }}>
                            <div className="modal show" style={{ display: "block",position: "initial"}}>
                                <Modal.Dialog style={{ width: "800px" }} className="ms-0 pr-0">
                                <Modal.Header closeButton>
                                    <Modal.Title className=" text-center me-3 fw-bolder">More About Best Time To Travel To  &nbsp;{data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row  pe-5" style={{padding:'20px 50px'}}>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg1} alt=""/>
                                            Easemytrip<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                            Oyorooms<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"160px"} src={data.cardImg3} alt=""/>
                                            Hiveminor<br></br> Source
                                        </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseOffcanvas}> Close </Button>
                                    <Button variant="primary" onClick={handleShowOffcanvas}> Save Changes </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                            </div>
                            </div>
                            <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement='end'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title><h3 style={{ textAlign: 'center' }}>Best time to visit in {data.placeHead}</h3></Offcanvas.Title>
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
                        <div className='col-xl-6 col-lg-6 col-md-6 mt-5 '>
                            <h5 style={{ fontWeight: "500" }}>What is the best time to visit:</h5>
                            <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes1}<br /></p>
                            <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes2}</p>
                        </div>

                    </div>
                ))}
                </div>
            </>
    )}

 export default Yercaud ;


