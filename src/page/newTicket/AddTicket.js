import React, { useEffect, useState } from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { AddTicketForm } from '../../components/add-ticket/AddTicketForm'
import {shortText} from '../../util/validation'
const  initialFrmDt={
    subject:"",
    issueDate:"",
    details:"",
   };
   const  initialFrmDtError={
    subject:false,
    issueDate:false,
    details:false,
   };
export const AddTicket = () => {

    const [frmData,setFrmData] = useState(initialFrmDt)
    const [frmDataError,setFrmDataError] = useState(initialFrmDtError)
    // console.log(frmData);
    
    useEffect(()=>{ },[frmData,frmDataError]);
   
   

    const handleOnchange=(e)=>{
        const{name,value} = e.target;


        setFrmData({
            ...frmData,
            [name]:value,
        });
    };

    const handleOnsubmit=async(e)=>{
        e.preventDefault();
        
        setFrmDataError(initialFrmDtError)

        const isSubjectValid=await shortText(frmData.subject);

        setFrmDataError({
            ...initialFrmDtError,
            subject:!isSubjectValid,
        });

        console.log("Form submit request received",frmData);
        
    };  
  return (
    <div>
        <Container>
            <Row>
                <Col>
                   < PageBreadcrumb page="New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm handleOnchange={handleOnchange} handleOnsubmit={handleOnsubmit}  frmData={frmData} frmDataError={frmDataError} />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
