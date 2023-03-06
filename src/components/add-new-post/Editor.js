import React, { useState } from "react";
import ReactQuill from "react-quill";
import {
  Card,
  CardBody,
  Form,
  FormInput,
  Button,
  ListGroupItem,
  InputGroup,
  InputGroupAddon
} from "shards-react";
import openai from "../../api/openai";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import { ChatCompletionRequestMessageRoleEnum } from "openai";

function Editor() {
  const [contractInput, setContractInput] = useState("");
  const [contractName, setContractName] = useState("");

  const handleInputChange = e => {
    setContractName(e.target.value);
  };

  const handleEditorChange = value => {
    setContractInput(value);
  };
  async function onSubmit(event) {
    event.preventDefault();

    try {
      const response = await openai(contractName);
      console.log(response);

      // const data = await response.json();
      // if (response.status !== 200) {
      //   throw data.error ||
      //     new Error(`Request failed with status ${response.status}`);
      // }

      setContractInput(response.result);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
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
                Genrate
              </Button>
            </InputGroupAddon>
          </InputGroup>

          <ReactQuill
            className="add-new-post__editor mb-1"
            theme="snow"
            value={contractInput}
            onChange={handleEditorChange}
          />
        </Form>
      </CardBody>
    </Card>
  );
}

export default Editor;
