import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import services from "../api/services";

const Contracts = () => {
  const [contracts, setContracts] = useState([]);
  useEffect(() => {
    getContract();
  }, []);
  const getContract = async () => {
    const response = await services.contract.getContract(
      "64183a8b0607ff485c6b85e0"
    );
    console.log(response.data);
    setContracts(response.data);
  };
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4"></Row>

      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Contracts</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Contract Name
                    </th>
                    <th scope="col" className="border-0">
                      Send To
                    </th>
                    <th scope="col" className="border-0">
                      Status
                    </th>
                    <th scope="col" className="border-0">
                      Contract
                    </th>
                    <th scope="col" className="border-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contracts &&
                    contracts.map((contract, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{contract?.name}</td>
                        <td>{contract?.userEmail}</td>
                        <td>
                          {contract?.isApprove === false
                            ? "Not Approved"
                            : "Approved"}
                        </td>
                        <td>
                          <a
                            href={`http://localhost:5001${contract?.contractPath}`}
                            target="_blank"
                          >
                            View Contract PDF
                          </a>
                        </td>

                        <td>
                          <a href={`view/${contract?.id}`}>View</a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contracts;
