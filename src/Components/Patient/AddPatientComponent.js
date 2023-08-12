import React from 'react'
import AddPatientHook from '../../hook/Patient/AddPatientHook';
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap'
const AddPatientComponent = () => {
  const [ PasNumber,Forenames, Surname,   DateOfBirth,  SexCode, HomeTelephoneNumber, NokName,
    NokRelationshipCode,NokAddressLine1,NokAddressLine2, NokAddressLine3,NokAddressLine4,NokPostcode,
    GpCode, GpSurname, GpInitials, GpPhone,onChangePasNumber,onChangeForenames,
    onChangeSurname, onChangeDateOfBirth,onChangeSexCode,onChangHomeTelephoneNumber,onChangeNokName,
    onChangNokRelationshipCode,onChangeNokAddressLine1,onChangeNokAddressLine2,
    onChangeNokAddressLine3,onChangeNokAddressLine4,onChangeNokPostcode,onChangeGpCode,onChangeGpInitials,onChangeGpSurname,
    onChangeGpPhone, loading,onSubmit, isPress]= AddPatientHook();
  return (
    <div>
<Card>
<Card.Header>Basic</Card.Header>
<Card.Body>
  <Card.Title></Card.Title>
  <Card.Text>
  <div>
  <Form.Group>
    <Form.Label>PasNumber</Form.Label>
    <Form.Control type="number" placeholder="Enter PasNumber" className='mw-1' value={PasNumber} onChange={onChangePasNumber} />
  </Form.Group>
  <Form.Group>
    <Form.Label>Forenames</Form.Label>
    <Form.Control type="text"  value={Forenames} onChange={onChangeForenames} placeholder="Forenames" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>Surname</Form.Label>
    <Form.Control type="text"  value={Surname} onChange={onChangeSurname} placeholder="Surname" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>DateOfBirth</Form.Label>
    <Form.Control type="date"  value={DateOfBirth} onChange={onChangeDateOfBirth} placeholder="DateOfBirth" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>SexCode</Form.Label>
    <Form.Control type="text"  value={SexCode} onChange={onChangeSexCode} placeholder="SexCode" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>HomeTelephoneNumber</Form.Label>
    <Form.Control type="text"  value={HomeTelephoneNumber} onChange={onChangHomeTelephoneNumber} placeholder="HomeTelephoneNumber" className='mw-1' />
  </Form.Group>
</div>
  </Card.Text>
</Card.Body>
</Card>
<Card>
<Card.Header>NextOfKin</Card.Header>
<Card.Body>
  <Card.Title></Card.Title>
  <Card.Text>
  <div>
  <Form.Group>
    <Form.Label>NokName</Form.Label>
    <Form.Control type="text" placeholder="Enter NokName" className='mw-1' value={NokName} onChange={onChangeNokName} />
  </Form.Group>
  <Form.Group>
    <Form.Label>NokRelationshipCode</Form.Label>
    <Form.Control type="text"  value={NokRelationshipCode} onChange={onChangNokRelationshipCode} placeholder="NokRelationshipCode" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>NokAddressLine1</Form.Label>
    <Form.Control type="text"  value={NokAddressLine1} onChange={onChangeNokAddressLine1} placeholder="NokAddressLine1" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>NokAddressLine2</Form.Label>
    <Form.Control type="text"  value={NokAddressLine2} onChange={onChangeNokAddressLine2} placeholder="NokAddressLine2" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>NokAddressLine3</Form.Label>
    <Form.Control type="text"  value={NokAddressLine3} onChange={onChangeNokAddressLine3} placeholder="NokAddressLine3" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>NokAddressLine4</Form.Label>
    <Form.Control type="text"  value={NokAddressLine4} onChange={onChangeNokAddressLine4} placeholder="NokAddressLine4" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>NokPostcode</Form.Label>
    <Form.Control type="text"  value={NokPostcode} onChange={onChangeNokPostcode} placeholder="NokPostcode" className='mw-1' />
  </Form.Group>
</div>
  </Card.Text>
</Card.Body>
</Card>
<Card>
<Card.Header>GpDetails</Card.Header>
<Card.Body>
  <Card.Title></Card.Title>
  <Card.Text>
  <div>
  <Form.Group>
    <Form.Label>GpCode</Form.Label>
    <Form.Control type="number" placeholder="Enter GpCode" className='mw-1' value={GpCode} onChange={onChangeGpCode} />
  </Form.Group>
  <Form.Group>
    <Form.Label>GpInitials</Form.Label>
    <Form.Control type="text"  value={GpInitials} onChange={onChangeGpInitials} placeholder="GpInitials" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>GpPhone</Form.Label>
    <Form.Control type="text"  value={GpPhone} onChange={onChangeGpPhone} placeholder="GpPhone" className='mw-1' />
  </Form.Group>
  <Form.Group>
    <Form.Label>GpSurname</Form.Label>
    <Form.Control type="text"  value={GpSurname} onChange={onChangeGpSurname} placeholder="GpSurname" className='mw-1' />
  </Form.Group>
</div>
  </Card.Text>
  <Button variant="primary" type="submit" onClick={onSubmit}>Add Patient</Button>
  {isPress === true ? (loading === true ? (<Spinner animation="border" role="status">

</Spinner>) : null) : null}
</Card.Body>
</Card>

</div>

  )
}

export default AddPatientComponent
