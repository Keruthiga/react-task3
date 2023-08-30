import {React, useState} from 'react'
import {Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const timeData = [
    {
        place: '07. Madurai',
        placeDes1: `October to March is the best time to visit Madurai. With a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madurai is the most fascinating and welcoming during the months between October and March which coincides with its winter season.`,
        placeDes2: `Madurai is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.`,
        cardImg1: require('../Images/madurai1.jpeg'),
        cardTextP1: '',
        cardTextC1: '',
        cardImg2: require("../Images/madurai2.jpeg"),
        cardTextP2: '',
        cardTextC2: '',
        cardImg3: require('../Images/madurai3.jpeg'),
        cardTextP3: '',
        cardTextC3: '',
        placeHead:'',
        offHeadText1: `Madurai in Winter (December-February)`,
        offDes1: `Many locals look forward to the winter season in Madurai due to the relief it brings from the summers. The season lasts from December to February. The temperature during the winter months ranges from 20 degree Celsius to 29 degree Celsius. The season is characterised by moderately cool temperatures which make travelling around the city a pleasant experience for all individuals. Pongal, a widely celebrated festival is regarded as extremely special in Madurai. The festival lasts for three days and comprises of praying for a good harvest by locals and farmers alike. Other religious festivals are also celebrated with great vigour. However, hotel prices may climb up as this is the peak tourist season.`,
        offHeadText2: `Madurai in Monsoon (June-August)`,
        offDes2: `Monsoon season in Madurai lasts from June to August. Although the monsoon season continues for a smaller amount of time, the south-west monsoon winds bring in a large amount of rainfall which is extremely heavy. This rainfall also makes the weather gloomy but still makes the city beautiful as the nature around Madurai mainly benefits from this rain. This is the perfect time to visit Madurai for people who love greenery and the lush natural surroundings.`,
        offHeadText3: `Madurai in Summer (March-July)`,
        offDes3: `The summer season in Madurai lasts from March to May. The temperatures during this season range from 24 degree Celsius to 34 degree Celsius. This means that the weather in Madurai during these months is uncharacteristically hot. It is also really dry which makes the heat more noticeable and discourages travellers to visit. The summer season is, therefore, an offseason for Madurai, and the crowds are comparatively less as well.`,
    }]


    function Madurai() {
        const [showOffcanvas, setShowOffcanvas] = useState(false);
    
        const handleCloseOffcanvas = () => setShowOffcanvas(false);
        const handleShowOffcanvas = () => setShowOffcanvas(true)
        return (
            <>
                <div className='container mt-5'>
                    {timeData.map((data, index) => (
                        <div className="row" key={index}>
                            <h3 className='mt-5 mb-2'>{data.place}</h3>
                            <div className='col-xl-6 col-lg-6 col-md-6 mt-5 '>
                                <h5 style={{ fontWeight: "500" }}>What is the best time to visit:</h5>
                                <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes1}<br /></p>
                                <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes2}</p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 mt-0' style={{ display: 'flex', justifyContent: 'center' }} >
                            <div style={{ marginTop: "0px" }}>
                            <div className="modal show" style={{ display: "block",position: "relative"}}>
                                <Modal.Dialog style={{ width: "800px" }} className="ms-0 pr-0">
                                <Modal.Header closeButton>
                                    <Modal.Title className=" text-center me-3 fw-bolder">More About Best Time To Travel To  &nbsp;{data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row  pe-5" style={{padding:'20px 50px'}}>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg1} alt=""/>
                                            Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                          Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"160px"} src={data.cardImg3} alt=""/>
                                            Source
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
                        </div>
                    ))}
                    </div>
                </>
        )}
        export  default Madurai