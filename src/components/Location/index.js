import React from 'react';
import {connect} from 'react-redux';
import {LocationPopup} from '../../actions/showLocation';
import {Modal,Button,InputGroup,FormControl} from 'react-bootstrap'

 const Location=(props)=> {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select the location
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
<div><InputGroup className="mb-3">
    <FormControl
      placeholder="Search location"
      aria-label="Search location"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="primary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
  </div>
  <div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509167.050347832!2d-123.79954634180153!3d37.19300291964755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C+USA!5e0!3m2!1sen!2sin!4v1548986382286" width="100%" height="100%" frameBorder="0" style={{border:"0"}} title='location'/>
 </div>
            </div>
            <div className="col-lg-6">
            Search results
           </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
 
export default connect(state=>({show:state.showLocation}),dispatch=> ({onHide(){dispatch(LocationPopup(false))}}))(Location)