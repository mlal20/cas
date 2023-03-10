import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import {
  Card,
  CardBody,
  Form,
  FormInput,
  Button,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  ButtonGroup,
} from "shards-react";
import openai from "../../api/openai";
import jsPDF from "jspdf";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

function Editor() {
  const [isLoading_1, setIsLoading_1] = useState(false);
  const [isLoading_2, setIsLoading_2] = useState(false);
  const [contractInput, setContractInput] = useState("");
  const [contractName, setContractName] = useState("");
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [speed, setSpeed] = useState(5);

  useEffect(() => {
    if (i < txt.length) {
      setTimeout(() => {
        setContractInput(contractInput + txt.charAt(i));
        setI(i + 1);
      }, speed);
    }
  }, [i, txt, contractInput, speed]);

  const handleInputChange = (e) => {
    setContractName(e.target.value);
  };

  const handleEditorChange = (value) => {
    setContractInput(value);
  };
  async function onSubmit(event) {
    setIsLoading_1(true);
    event.preventDefault();
    setTxt("");
    setContractInput("");
    setI(0);

    try {
      const q = `list out 20 input fields required for a ${contractName} and provide dummy data for each field`;
      const response = await openai(q);
      setTxt(response.replace(/^\n{2}/, "").replace(/\n/g, "<br />"));
      setIsLoading_1(false);
    } catch (error) {
      console.error(error);
      setIsLoading_1(false);
      alert(error.message);
    }
  }
  async function createContract(event) {
    event.preventDefault();
    setIsLoading_2(true);
    try {
      const q = `${contractInput} Write ${contractName} contract documents using above details`;
      const response = await openai(q);
      setTxt("");
      setContractInput("");
      setI(0);
      setTxt(response.replace(/^\n{2}/, "").replace(/\n/g, "<br />"));
      setIsLoading_2(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
      setIsLoading_2(false);
    }
  }
  function pdfGenerator() {
    if (!txt) {
      return;
    }
    const doc = new jsPDF("p", "px", [900, 900]);
    doc.html(txt, {
      callback: function (doc) {
        doc.save(`${contractName}.pdf`);
      },
      x: 20,
      y: 20,
      width: 800,
      windowWidth: 800,
      margin: 30,
      autoPaging: "text",
    });
  }
  return (
    <>
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <InputGroup seamless className="mb-3">
              <FormInput
                size="lg"
                placeholder="Stream Line your contract (software licensing agreements,)"
                value={contractName}
                onChange={handleInputChange}
              />
              <InputGroupAddon type="append">
                <Button theme="white" disabled={isLoading_1} onClick={onSubmit}>
                  {isLoading_1 ? "Loading Input..." : "Genrate Contract Input"}
                </Button>
              </InputGroupAddon>
            </InputGroup>

            <ReactQuill
              className="add-new-post__editor mb-1"
              theme="snow"
              value={contractInput}
              //onChange={handleEditorChange}
            />

            <ButtonGroup className="d-flex border-0 mt-10">
              <Button
                theme="primary"
                onClick={createContract}
                className="ml-auto"
                disabled={isLoading_2}
              >
                {isLoading_2 ? "Creating Contract..." : "Create Contract"}
              </Button>
              <Button theme="white" onClick={pdfGenerator}>
                Download as PDF
              </Button>
            </ButtonGroup>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default Editor;
