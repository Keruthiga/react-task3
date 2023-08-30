import {React, useState} from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const timeData = [
    {
        place: '09. Theni',
        placeDes1: `In order to spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom - Theni. The best season to visit Theni is winter when the weather remains all pleasant and favourable for tourism. On the other hand, summer remains hot and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.`,
        placeDes2: `Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15 degrees Celsius to 40 degrees Celsius. The best months to visit are from the month of December to February since the weather is pleasant and allows you to indulge in a number of outdoor activities.`,
        cardImg1: require('../Images/theni1.jpeg'),
        cardImg2: require("../Images/theni2.jpeg"),
        cardImg3: require('../Images/theni3.jpeg'),
        placeHead:'Theni',
        offHeadText1: `Theni in Summer`,
        offDes1: `The summer season in Theni starts from
        the month of March and continues till May. The months are generally hot and not favourable to visit Theni. Temperature during these months ranges between 24°C and 42°C.`,
        offHeadText2: `Theni in Winter`,
        offDes2: `Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit durin monsoon.`,
        offHeadText3: `Theni in Monsoon`,
        offDes3: `December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni.`,
    }]


    function Theni() {
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
                            <div style={{ marginTop: "10px" }}>
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
        export  default Theni