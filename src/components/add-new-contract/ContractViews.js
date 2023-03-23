import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const ContractViews = ({ filepath }) => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Card small className="mb-3">
      <CardBody>
        <div>
          <Document
            file={`http://localhost:5001${filepath}`}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => (
                <Page pageNumber={page} />
              ))}
          </Document>
        </div>
      </CardBody>
    </Card>
  );
};

export default ContractViews;
