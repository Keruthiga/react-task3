import { React, useState } from 'react'
import {Modal,Button, Offcanvas } from 'react-bootstrap';



const timeData = [
    {
        place: '06. Kumbakonam',
        placeDes1: `Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.`,
        placeDes2: `Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit.`,
        cardImg1: require('../Images/kumbakonam1.jpeg'),
        cardTextP1: 'Dawn',
        cardTextC1: '',
        cardImg2: require("../Images/kumbakonam2.jpeg"),
        cardTextP2: 'Steemit',
        cardTextC2: '',
        cardImg3: require('../Images/kumbakonam3.jpeg'),
        cardTextP3: 'Holydham',
        cardTextC3: '',
        placeHead:'Kumbakonam',
        offHeadText1: `Kumbakonam in Winter (October - February) `,
        offDes1: `The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months.`,
        offHeadText2: `Kumbakonam in Monsoon (June-August)`,
        offDes2: `The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam.`,
        offHeadText3: `Kumbakonam in Summer (March-May)`,
        offDes3: `Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions`,
    }

]



function Kumbakonam() {
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
                                <Modal.Dialog style={{ width: "100%" }} className="ms-0">
                                <Modal.Header closeButton>
                                    <Modal.Title className=" text-center me-3 fw-bolder">More About Best Time To Travel To  &nbsp;{data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row  pe-5" style={{padding:'20px 50px'}}>
                                        <div className="col text-center">
                                            <img style={{ width: "80%" }} height={"160px"} src={data.cardImg1} alt=""/>
                                            <p>Dawn<br></br> Source</p>
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "80%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                            <p>Steemit<br></br>Source</p>
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "80%" }} height={"160px"} src={data.cardImg3} alt=""/>
                                            <p>Holydham<br></br> Source</p>
                                        </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseOffcanvas}> Close </Button>
                                    <Button variant="primary" onClick={handleShowOffcanvas}>Save Changes </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                            </div>
                            </div>

                            
                            {/* <Card style={{ width: '90%', height: '26rem', alignItems: 'end', border: 'none', boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.3)", borderRadius: '10px' }}>
                                <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ textTransform: 'capitalize', fontWeight: 'bold', textAlign: "center" }}>More about best time to travel to &nbsp;{data.placeHead}</h4>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseOffcanvas}></button>
                                </Card.Header>
                                <CardGroup style={{ padding: "0px 50px", border: "none", marginTop: '1rem' }}>
                                    <Card style={{ marginRight: '1rem', height: '16rem', border: 'none' }}>
                                        <Card.Img variant="top" src={data.cardImg1} style={{ height: '190px' }} />
                                        <Card.Body>
                                            <Card.Text style={{ textAlign: "center" }}>
                                                {data.cardTextP1} <br/> Source
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ marginRight: '1rem', height: '16rem', border: 'none' }}>
                                        <Card.Img variant="top" src={data.cardImg2} style={{ height: '190px' }} />
                                        <Card.Body>
                                            <Card.Text style={{ textAlign: "center" }}>
                                                {data.cardTextP2} <br/> Source
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ height: '16rem', border: 'none' }}>
                                        <Card.Img variant="top" src={data.cardImg3} style={{ height: '190px' }} />
                                        <Card.Body>
                                            <Card.Text style={{ textAlign: "center" }}>
                                                {data.cardTextP3} <br/>Source
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                                <Card.Footer style={{ border: 'none', margin: '0'}}>
                                    <Button variant="secondary" style={{ marginRight: '15px' }} onClick={handleCloseOffcanvas}>Close</Button>
                                    <Button variant="primary" style={{  marginRight: '15px' }} onClick={handleShowOffcanvas}>Save Changes</Button>
                                </Card.Footer>
                            </Card> */}
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

 export default Kumbakonam ;


