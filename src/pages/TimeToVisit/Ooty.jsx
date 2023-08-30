import { React, useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const timeData = [
    {
        place: '04. Ooty',
        placeDes1: `The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.`,
        placeDes2: `The poised and elegant 'Queen of Hill Stations' welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories.`,
        cardImg1: require('../Images/ooty1.jpeg'),
        cardTextP1: 'Mountain',
        cardTextC1: ' Railway ',
        cardImg2: require("../Images/ooty2.jpeg"),
        cardTextP2: 'Ooty Lake',
        cardTextC2: '',
        cardImg3: require('../Images/ooty3.jpeg'),
        cardTextP3: 'Trekking ',
        cardTextC3: 'Ooty',
        placeHead:'Ooty',
        offHeadText1: `Ooty in Summer (March - June)`,
        offDes1: `Ooty experiences an average temperature that ranges between 23 degree Celsius and 31 degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.`,
        offHeadText2: `Ooty in Winter (October - March)`,
        offDes2: `With temperatures that stay below 15 degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.`,
        offHeadText3: `Ooty in Monsoon (July-September)`,
        offDes3: `People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time nevertheless.`,
    }
]



function Ooty() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true)
    return (
        <>
            <div className='container mt-2'>
                {timeData.map((data, index) => (
                    <div className="row" key={index}>
                        <h3 className='mt-5 mb-2'>{data.place}</h3>
                        <div className='col-xl-6 col-lg-6 col-md-6 mt-3' style={{ display: 'flex', justifyContent: 'center' }} >
                        <div style={{ marginTop: "10px" }}>
                            <div className="modal show" style={{ display: "block",position: "initial"}}>
                                <Modal.Dialog style={{ width: "800px" }} className="ms-0 pr-0">
                                <Modal.Header closeButton>
                                    <Modal.Title className=" text-center me-3 fw-bolder">More About Best Time To Travel To  &nbsp;{data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row  pe-5" style={{padding:'20px 50px'}}>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg1} alt=""/>
                                            Mountain <br></br>Railway<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                            Ooty <br></br>Lake<br></br>Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"160px"} src={data.cardImg3} alt=""/>
                                            Trekking<br></br>Ooty<br></br> Source
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

 export default Ooty ;


