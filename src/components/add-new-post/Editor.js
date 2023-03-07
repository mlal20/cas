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
import { Button as ButtonLoader, ButtonGroup } from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
// import { ChatCompletionRequestMessageRoleEnum } from "openai";
import ConvertPDF from "../components-overview/convertPDF";

function Editor() {
   const [isLoading, setIsLoading] = useState(false);
  const [contractInput, setContractInput] = useState({});
  const [data,setData] =  useState("");
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
      setIsLoading(true);
      const response = await openai(contractName);
      console.log(response);
      setData({response})
      // const data = await response.json();
      // if (response.status !== 200) {
      //   throw data.error ||
      //     new Error(`Request failed with status ${response.status}`);
      // }

      setContractInput(response);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <><Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <InputGroup seamless className="mb-3">
            <FormInput
              size="lg"
              placeholder="Stream Line your contract"
              value={contractName}
              onChange={handleInputChange} />
            <InputGroupAddon type="append">
               <ButtonLoader
               theme="white"
                className="btnLoader"
                isLoading={isLoading}
                loadingText=""
                variant="contained"
                onClick={onSubmit}
                >
                Generate
                </ButtonLoader>
              {/* <Button theme="white" onClick={onSubmit}>
                Generate
              </Button> */}
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
    </Card><ConvertPDF data = {data} /></>
  );
}

export default Editor;
