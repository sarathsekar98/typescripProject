import React from 'react';
import {Col, Row} from "react-bootstrap";
type form ={
    name:string
    inputs:input[]
}
type input ={
    type:string
    classProps:any
    props:any
}


function getInput([type,props]:[string,any]) {

  if (type=="text"){
      return (<>
          <label>{props.name}</label>
          <input {...props}/>
          </>)
  }else if(type=="textarea"){
      return (
          <>
          <label>{props.name}</label><br/>
          <textarea {...props}/>
      </>
      )

  }else if (type=="button"){
      return(
          <>
      <div className={"button-group"}>
          { props.map((e:any)=>(
              <button {...e}>{e.value}</button>
          ))}
      </div>
          </>
      )
  }
}

const Element = ({inputs}: { inputs: input }) => {
    return <>
        <Col {...inputs.classProps}>
            {getInput([inputs.type,inputs.props])}
        </Col>
    </>
}
function Form(props:{forms:form,className:string}) {
    return (<>
        <form className={props.className}>
            <p className={"Header"}>{props.forms.name}</p>
            <Row>
            {
                props.forms.inputs.map((e,index)=>(
                      <Element key={index} inputs={e}/>
                ))
            }
            </Row>
        </form>
        </>
    );
}

export default Form;