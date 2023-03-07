import React from 'react'
import jsPDF from 'jspdf'
import {
  Button
} from "shards-react";

const ConvertPDF = (props) => {
var text = props.contractInput.response ;
   function pdfGenerator() {
        var doc = new jsPDF('p', 'pt',"a4");
        doc.text(50, 50,text,{ maxWidth: 400 });
        doc.save("generated.pdf");
    }
        
  return (
    
        <Button onClick = {pdfGenerator} >Download</Button> 
    
  )
}

export default ConvertPDF