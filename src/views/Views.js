import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import ContractEditor from "../components/add-new-contract/ContractViews";
import SidebarActions from "../components/add-new-contract/SidebarActions";
import SidebarCategories from "../components/add-new-contract/SidebarCategories";
import Services from "../api/services";

const Views = (props) => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const paramArray = props.location.pathname.split("/");
    const id = paramArray[paramArray.length - 1];
    view(id);
  }, []);

  const view = async (id) => {
    try {
      const response = await Services.contract.getContractById(id);
      console.log(response.data);
      setContract(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4"></Row>

      <Row>
        <Col lg="8" md="12">
          {contract && <ContractEditor filepath={contract?.contractPath} />}
        </Col>

        <Col lg="4" md="12">
          <SidebarActions data={contract} signData={setContract} />
          {/* <SidebarCategories /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Views;
