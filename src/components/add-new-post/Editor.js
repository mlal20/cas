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

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
// import { ChatCompletionRequestMessageRoleEnum } from "openai";
import ConvertPDF from "../components-overview/convertPDF";
import { set } from "lodash";

function Editor() {
  const [contractInput, setContractInput] = useState("");
  const [contractName, setContractName] = useState("");
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [speed, setSpeed] = useState(5);
  const [aggrement, setAggrement] = useState("");

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
    event.preventDefault();
    setTxt("");
    setContractInput("");
    setI(0);

    try {
      const q = `list out 30 input fields required for a ${contractName} and provide dummy data for each field`;
      const response = await openai(q);
      setTxt(response.replace(/^\n{2}/, "").replace(/\n/g, "<br />"));
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  async function createContract(event) {
    event.preventDefault();
    try {
      const q = `${contractInput} Write ${contractName} contract documents using above details`;
      const response = await openai(q);
      setTxt("");
      setContractInput("");
      setI(0);
      setTxt(response.replace(/^\n{2}/, "").replace(/\n/g, "<br />"));
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <>
      <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <InputGroup seamless className="mb-3">
              <FormInput
                size="lg"
                placeholder="Stream Line your contract"
                value={contractName}
                onChange={handleInputChange}
              />
              <InputGroupAddon type="append">
                <Button theme="white" onClick={onSubmit}>
                  Generate Contract Input
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
              >
                Create Contract
              </Button>
              <Button theme="white">Download as PDF</Button>
            </ButtonGroup>
          </Form>
        </CardBody>
      </Card>
      <ConvertPDF contractInput={contractInput} />
    </>
  );
}

export default Editor;
