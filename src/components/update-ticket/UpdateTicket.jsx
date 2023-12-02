import React from 'react'
import { Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'


export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <div>
        
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please Reply Your Message Here</Form.Text>

            <Form.Control as="textarea" row="5"
            value={msg}
            onChange={handleOnChange}
            name="detail"/>
            <Button variant='info' type="submit">
                Reply
            </Button>
        </Form>

    </div>
  )
}
UpdateTicket.propTypes = {
    msg:PropTypes.string.isRequired,
    handleOnChange:PropTypes.string.isRequired,
    handleOnSubmit:PropTypes.string.isRequired,
}