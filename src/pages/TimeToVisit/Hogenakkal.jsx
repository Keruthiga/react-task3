import { React, useState } from 'react'
import {  Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


const timeData = [
    {
        place: '10. Hogenakkal',
        placeDes1: `The best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenekkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 - 34 degree celcius. Despite summers being an off season, a dip in the hogenekkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20 degree celcius, making it an ideal time to enjoy its spectacular beauty.`,
        placeDes2: `Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks", because of the unique arrangement of the gigantic carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerised! Hogenakkal Waterfall is similar to the popular.`,
        cardImg1: require('../Images/hogenakkal1 (1).jpeg'),
        cardTextP1: 'Winter',
        cardTextC1: '',
        cardImg2: require("../Images/hogenakkal1 (2).jpeg"),
        cardTextP2: 'Monsoon',
        cardTextC2: '',
        cardImg3: require('../Images/hogenakkal1 (3).jpeg'),
        cardTextP3: 'Dry',
        cardTextC3: '',
        placeHead:'Hogenakkal',
        offHeadText1: `Hogenakkal in Winter (November - February)`,
        offDes1: `Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, and there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks' - the sultry mist as the water strikes the rocks covers the base in a myriad of colours. Rainbows adorn the falls and the scene is postcard-perfect.`,
        offHeadText2: `Hogenakkal in Monsoon (July-September)`,
        offDes2: `Hogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and
        more`,
        offHeadText3: `Hogenakkal in Summer (March - June)`,
        offDes3: `The Indian Peninsula lies in the tropics, and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views, and have been featured in many films as well.`,
    }
]



function Hogenakkal() {
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
                                            Winter<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                            Monsoon<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"160px"} src={data.cardImg3} alt=""/>
                                            Dry<br></br> Source
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

 export default Hogenakkal ;


