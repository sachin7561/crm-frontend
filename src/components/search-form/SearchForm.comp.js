import React from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const SearchForm = ({handleOnchange,str}) => {
   
  return (
    <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column ms="2">
                    Search:{" "}
                    
                    </Form.Label>
                <Col sm={5}>
                <Form.Control
                 type="text" 
                name="searchStr" 
                placeholder="Search Here" 
                onChange={handleOnchange}
                value={str}/>
                </Col>
                <Col> <Button variant="outline-primary">Search</Button>{' '}</Col>
            
            </Form.Group>
        </Form>
    </div>
  )
}
SearchForm.propTypes={
    handleOnchange:PropTypes.func.isRequired,
    str: PropTypes.string.isRequired,
};
    