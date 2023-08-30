import {React, useState} from 'react'
import {  Button, Offcanvas } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const timeData = [
    {
        place: '05. Kanyakumari',
        placeDes1: `The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports, going on sightseeing and outings, undertaking beach activities and savouring the spectacular sunset views. With the beginning of winters in November, Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.`,
        placeDes2: `Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.`,
        cardImg1: require('../Images/kanyakumari1 (1).jpeg'),
        cardTextP1: 'Landscape',
        cardTextC1: '',
        cardImg2: require("../Images/kanyakumari1 (2).jpeg"),
        cardTextP2: 'Sea',
        cardTextC2: '',
        cardImg3: require('../Images/kanyakumari1 (3).jpeg'),
        cardTextP3: 'Coast',
        cardTextC3: '',
        placeHead:'Kanyakumari',
        offHeadText1: `Kanyakumari in Winters (October to March)`,
        offDes1: `Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favourable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15 degree celcius to 35 degree celcius. It is also the perfect time for indulging in beach activities like sunbathing, swimming and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time.`,
        offHeadText2: `Kanyakumari in Summers (April to June)`,
        offDes2: `Kanyakumari experiences moderate weather during summers, with temperatures ranging from 22 degrees to 35 degrees Celcius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with less crowd and cheaper accomodation - a perfect time for budget travellers`,
        offHeadText3: `Kanyakumari in Monsoons (July to September)`,
        offDes3: `Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September, however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari.`,
    }]


    function Kanyakumari() {
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
                                <Modal.Dialog style={{ width: "800px" }} className="ms-0 pr-0">
                                <Modal.Header closeButton>
                                    <Modal.Title className=" text-center me-3 fw-bolder">More About Best Time To Travel To  &nbsp;{data.placeHead}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="row  pe-5" style={{padding:'20px 50px'}}>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg1} alt=""/>
                                            Landscape<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" }} height={"160px"} src={data.cardImg2} alt=""/>
                                            Sea<br></br> Source
                                        </div>
                                        <div className="col text-center">
                                            <img style={{ width: "90%" ,padding:'0px'}} height={"160px"} src={data.cardImg3} alt=""/>
                                            Coast<br></br> Source
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
        export  default Kanyakumari