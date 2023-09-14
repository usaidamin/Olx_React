import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myCategoriesCss from "../css/body.module.css"
import Mobiles from "../images/mobiles.png"
import Vehicles from "../images/vehicles.png"
import Property from "../images/property.png"
import Propertydealer from "../images/propertydealer.png"
import Electronics from "../images/electronics.png"
import Bikes from "../images/bikes.png"
import Business from "../images/business.png"
import Services from "../images/services.png"
import Jobs from "../images/jobs.png"
import Animals from "../images/animals.png"
import Furniture from "../images/furniture.png"
import Fashion from "../images/fashion.png"
import Books from "../images/books.png"
import Kids from "../images/kids.png"

const Body = ({bike1,bike2,bike3,bike4,car1,car2,car3,car4,mob1,mob2,mob3,mob4,plot1,plot2,plot3,plot4}) => {
  return (
    <>
    <Container fluid>
        <h1 className={myCategoriesCss.heading}>All Categories</h1>
        <Row>
          <Col className={myCategoriesCss.img}>
            <img src={Mobiles} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Vehicles} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Property} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Propertydealer} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Electronics} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Bikes} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Business} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Services} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Jobs} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Animals} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Furniture} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Fashion} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Books} />
          </Col>
          <Col className={myCategoriesCss.img}>
            <img src={Kids} />
          </Col>
        </Row>
        </Container>

        <Container fluid>
          <h1 className='mt-3'>BIKES & MOTOR CYCLES</h1>
        <Row className='mt-3'>
          <Col className='mb-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bike1} />
      <Card.Body>
        <Card.Title>Rs 340,000</Card.Title>
        <Card.Text>
        Super Power Sultan SP-250 (2020) For Sale!!!
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bike2} />
      <Card.Body>
        <Card.Title>Rs 127,500</Card.Title>
        <Card.Text>
        Honda Cd70 New Model Genuine 2022 APL4
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bike3} />
      <Card.Body>
        <Card.Title>Rs 255,000</Card.Title>
        <Card.Text>
        Suzuki 110CC 2021 Model Fuel avaerage 45km+, 31700 driven
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bike4} />
      <Card.Body>
        <Card.Title>Rs 189,000</Card.Title>
        <Card.Text>
        Honda CG125 Model 2022 Karachi Registered
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

        <Container fluid> 
          <h1 className='mt-3'>CARS</h1>
        <Row className='mt-3'>
          <Col className='mb-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={car1} />
      <Card.Body>
        <Card.Title>Rs 2,800,000</Card.Title>
        <Card.Text>
        Toyota Vitz 2013 model 2016 Registered - Family Used Car
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={car2} />
      <Card.Body>
        <Card.Title>Rs 700,000</Card.Title>
        <Card.Text>
        mehran auto engine sealed 2013 alto vxr
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={car3} />
      <Card.Body>
        <Card.Title>Rs 5,200,000</Card.Title>
        <Card.Text>
        HONDA FREED HYBRID 1.5CC model 2017 G package sensing
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={car4} />
      <Card.Body>
        <Card.Title>Rs 2,090,000</Card.Title>
        <Card.Text>
        SUZUKI WAGONR 660C 2021/23 fresh import unregistered Xl pakage
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

    <Container fluid> 
          <h1 className='mt-3'>MOBILE PHONES</h1>
        <Row className='mt-3'>
          <Col className='mb-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mob1} />
      <Card.Body>
        <Card.Title>Rs 81,000</Card.Title>
        <Card.Text>
        Iphone 11 128GB JV (Non Pta) (Non Active) LLA Model (83+ Battery)
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mob2} />
      <Card.Body>
        <Card.Title>Rs 40,000</Card.Title>
        <Card.Text>
        One Plus 7 8GB | 256GB Dual Sim Stock Availabile at "SSTRADING"
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mob3} />
      <Card.Body>
        <Card.Title>Rs 315,000</Card.Title>
        <Card.Text>
        iphone 13 (pro) 128gb (PTA APROVED)
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mob4} />
      <Card.Body>
        <Card.Title>Rs 30,999</Card.Title>
        <Card.Text>
        6gb 128gb, indisplay fingerprint, Dual SIM, 10/10 Condition
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

    <Container fluid> 
          <h1 className='mt-3'>HOUSES & PLOTS</h1>
        <Row className='mt-3'>
          <Col className='mb-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={plot1} />
      <Card.Body>
        <Card.Title>Rs 65,000,000</Card.Title>
        <Card.Text>
        Ground + 2 for Sale Ideally located at North Nazimabad Block L
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={plot2} />
      <Card.Body>
        <Card.Title>Rs 22,000,000</Card.Title>
        <Card.Text>
        H-13 , 6 Marla Corner brand new double story House for sale
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={plot3} />
      <Card.Body>
        <Card.Title>Rs 16,500,000</Card.Title>
        <Card.Text>
        5 Marla Furnished House For Sale In Citi Housing Jhelum
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className='mb-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={plot4} />
      <Card.Body>
        <Card.Title>Rs 63,000,000</Card.Title>
        <Card.Text>
        1 Kanal Brand New Luxury House For Sale  
        </Card.Text>
        <Button variant="primary">ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default Body
