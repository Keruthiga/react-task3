import React from 'react'
import PlacesToVisit1 from './PlacesToVisit1'
import placesImg from '../Home/Place.jpeg'


function PlacesToVisit() {
  return (
    <div>
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-xl-6 col-lg-6 col-md-6' >
                    <h3 style={{marginTop:'10px'}}>Tourist Places To Visit In Tamil Nadu</h3>
                    <p style={{textAlign:"justify", marginTop:'15px'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.<br/>
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary<br/>
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.<br/>
                    </p>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 '>
                    <img src={placesImg} alt='img-1' height={'550rem'} width={'100%'}/>
                    <p style={{textAlign:"center"}}>Tourist Place To Visit In Tamil Nadu</p>
                </div>
                <div>
                <p style={{textAlign:'justify'}}>The variety of tourist places in Tamil nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yeligiri, and Yercaud to the famous cultural citadels like Mahabalipuram and Mumbai. Tamil Nadu, is also known or or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.</p>
                </div>
            </div>
            <PlacesToVisit1/>
        </div>
    </div>
  )
}

export default PlacesToVisit