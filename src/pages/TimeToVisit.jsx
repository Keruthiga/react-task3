import React from 'react'
import img1 from '../Home/Chennai.jpeg'
import img2 from './Images/Climate.jpeg'
import img3 from './Images/image1.jpeg'
import img4 from './Images/image2.jpeg'
import { Accordion } from 'react-bootstrap'
import Chennai from './TimeToVisit/Chennai'
import Rameshwaram from './TimeToVisit/Rameshwaram'
import Kodaikanal from './TimeToVisit/Kodaikanal'
import Ooty from './TimeToVisit/Ooty'
import Kanyakumari from './TimeToVisit/Kanyakumari'
import Kumbakonam from './TimeToVisit/Kumbakonam'
import Madurai from './TimeToVisit/Madurai'
import Yercaud from './TimeToVisit/Yercaud'
import Theni from './TimeToVisit/Theni'
import Hogenakkal from './TimeToVisit/Hogenakkal'

function TimeToVisit() {
  return (
    <>
        <div className='container mt-5'>
            <div className='row'>
                <h5 style={{textTransform:"uppercase", fontWeight:"500"}}>Tamilnadu tourism</h5>
                <h3 style={{textTransform:"capitalize"}}>Best time to  visit</h3>
                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                    <img src={img1} alt='besttimeimg' style={{height:"20rem", width:"100%"}}/>
                    <p style={{textAlign:"center"}}>Best Time To Visit</p>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 mt-5'>
                    <p style={{textAlign:"center",fontWeight:"bold"}}>More about Best Time to Travel to Tamil Nadu</p>
                      <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                                <Accordion.Header>Tamil Nadu in Summer (March-May)</Accordion.Header>
                                <Accordion.Body>
                                <p style={{textIndent:"4rem"}}>
                                        This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially 
                                    in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is 
                                    visited to witness the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, 
                                    another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is 
                                    celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the 
                                    attractions on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the
                                    temperature is pleasant and has scenic views that tourists can witness.
                                </p>
                               <img src={img2} alt='summer img' style={{height:"20rem", width:"100%"}}/>
                               <p style={{textAlign:"center"}}>Pillar Rocks of KodaikanalSource</p>
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                              <Accordion.Header>Tamil Nadu in Monsoon (June - September)</Accordion.Header>
                              <Accordion.Body>
                              <p style={{textIndent:"4rem"}}>
                                    This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in
                                    November and December. The temperature is slightly less than what it is in the summer season. It ranges between
                                    25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in
                                    coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a
                                    great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it
                                    an unsafe placeto visit.
                                </p>
                               <img src={img3} alt='summer img' style={{height:"20rem", width:"100%"}}/>
                               <p style={{textAlign:"center"}}>A Rainy Day in Chennai Source</p>
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                  Tamil Nadu in Winter (October-February)
                              </Accordion.Header>
                              <Accordion.Body>
                                <p style={{textIndent:"4rem"}}>
                                    Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall 
                                    because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is 
                                    low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling
                                    with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun,
                                    swimming and water sports as the temperature remains moderate all through the day.
                                </p>
                               <img src={img4} alt='summer img' style={{height:"20rem", width:"100%"}}/>
                               <p style={{textAlign:"center"}}>Pechiparai Reservoir in Kanyakumari District Source</p>
                              </Accordion.Body>
                          </Accordion.Item>
                      </Accordion>
                </div>
            </div>  
            <div>
                <p style={{textAlign:"justify",textIndent:"4rem"}}>
                The best time to visit Tamil Nadu is during the winter season, i.e. from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. 
                Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.
                </p>
            </div> 
            <Chennai/>
            <Rameshwaram/>
            <Kodaikanal/>
            <Ooty/>
            <Kanyakumari/>
            <Kumbakonam/>
            <Madurai/>
            <Yercaud/>
            <Theni/>
            <Hogenakkal/>
    
        </div>
    </>

  )
}

export default TimeToVisit