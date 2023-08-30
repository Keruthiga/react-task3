import { React, useState } from 'react'
import {  Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


const timeData = [
    {
        place: '02. Rameshwaram',
        placeDes1: `The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celcius. This is the most pleasant season for sightseeing and visiting neighbourhoods. The Monsoons (July to September) are humid with average rainfalls, but, the scenic view of the coastal region during these months is enjoyable.`,
        placeDes2: `Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrims flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.`,
        cardImg1: require('../Images/rameshwaram1.jpeg'),
        cardTextP1: 'Railway ',
        cardTextC1: 'Bridge',
        cardImg2: require("../Images/rameshwaram2.jpeg"),
        cardTextP2: 'Lighthouse',
        cardTextC2: '',
        cardImg3: require('../Images/rameshwaram3.jpeg'),
        cardTextP3: 'Pilgrims',
        cardTextC3: 'Temple',
        placeHead: 'Rameshwaram',
        offHeadText1: `Rameshwaram in Winter (December-February)`,
        offDes1: `Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.`,
        offHeadText2: ``,
        offDes2: ``,
        offHeadText3: ``,
        offDes3: ``,
    }
]



function Rameshwaram() {
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
                                            Railway Bridge<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                            Lighthouse<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"160px"} src={data.cardImg3} alt=""/>
                                            Pilgrims Temple<br></br> Source
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
                            {/* <h3 className='mt-2 mb-5'>{data.place}</h3> */}
                            <h5 style={{ fontWeight: "500" }}>What is the best time to visit:</h5>
                            <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes1}<br /></p>
                            <p style={{ textAlign: "justify", textIndent: "17rem" }}>{data.placeDes2}</p>
                        </div>

                    </div>
                ))}
                </div>
            </>
    )}

 export default Rameshwaram ;


