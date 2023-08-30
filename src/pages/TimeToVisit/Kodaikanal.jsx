import {React, useState} from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const timeData = [
    {
        place: '03.Kodaikanal',
        placeDes1: `The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colourful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.`,
        placeDes2: `Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy-tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January.`,
        cardImg1: require('../Images/kodaikanal1.jpeg'),
        cardTextP1: 'Upper Lake ',
        cardTextC1: '',
        cardImg2: require("../Images/kodaikanal2.jpeg"),
        cardTextP2: 'Lighthouse',
        cardTextC2: '',
        cardImg3: require('../Images/kodaikanal3.jpeg'),
        cardTextP3: 'Kodaikanal ',
        cardTextC3: 'Lake',
        placeHead:'Kodaikanal',
        offHeadText1: `Kodaikanal in Summer (March-June)`,
        offDes1: `Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.`,
        offHeadText2: `Kodaikanal in Winter (December-February)`,
        offDes2: `Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.`,
        offHeadText3: `With a temperature that rarely falls`,
        offDes3: `With a temperature that rarely falls`,
    }]


    function Kodaikanal() {
        const [showOffcanvas, setShowOffcanvas] = useState(false);
    
        const handleCloseOffcanvas = () => setShowOffcanvas(false);
        const handleShowOffcanvas = () => setShowOffcanvas(true)
        return (
            <>
                <div className='container mt-2'>
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
                                <Modal.Dialog style={{ width: "100%" }} className="ms-0 pr-0">
                                <Modal.Header closeButton>
                                    <Modal.Title className=" text-center me-3 fw-bolder">More About Best Time To Travel To  &nbsp;{data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row  pe-5" style={{padding:'20px 50px'}}>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"150px"} src={data.cardImg1} alt=""/>
                                            Upperlake<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"150px"} src={data.cardImg2} alt=""/>
                                            Light house<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"150px"} src={data.cardImg3} alt=""/>
                                            Kodaikanal Lake<br></br> Source
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
        export  default Kodaikanal