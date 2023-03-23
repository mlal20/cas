/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
} from "shards-react";
import { ethers } from "ethers";
import Services from "../../api/services";
import Cookie from "js-cookie";

const SidebarActions = ({ title, data, signData }) => {
  const [user, setUser] = useState(JSON.parse(Cookie.get("_auth_state")));
  const [domain, setDomain] = useState({
    name: "localhost",
    version: "1.0",
    chainId: 11155111,
  });
  const types = {
    Payload: [
      { name: "id", type: "string" },
      { name: "email", type: "string" },
      { name: "name", type: "string" },
      { name: "filehash", type: "string" },
      { name: "approved", type: "string" },
    ],
  };

  useEffect(() => {
    setUser(JSON.parse(Cookie.get("_auth_state")));
  }, []);

  const signContract = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask is installed!");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      if (window.ethereum) {
        try {
          const isConnected = window.ethereum.isConnected();
          if (!isConnected) {
            await window.ethereum.request({
              method: "eth_requestAccounts",
            });
          }

          const payload = {
            id: data.id,
            email: data.userEmail,
            name: data.name,
            filehash: data?.filehash,
            approved: "true",
          };
          const signature = await signer._signTypedData(domain, types, payload);
          console.log(signature);
          const wallet = await signer.getAddress();
          const response = await Services.contract.updateContract(data.id, {
            isApprove: true,
            signature,
            wallet,
          });
          signData(response.data);
        } catch (error) {
          console.error("User denied account connection:", error);
        }
      } else {
        console.error("Ethereum provider not found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card small className="mb-3">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>

      <CardBody className="p-0">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <span className="d-flex mb-2">
              <strong className="mr-1">Status:</strong>{" "}
              {data?.isApprove ? "Approved" : "Not Approved"}
            </span>
            <span className="d-flex mb-2">
              <strong className="mr-1">Visibility:</strong>{" "}
              <strong className="text-success">Public</strong>{" "}
            </span>
            <span className="d-flex mb-2">
              <strong className="mr-1">Contract Name:</strong> {data?.name}
            </span>
            <span className="d-flex mb-2">
              <strong className="mr-1">File Hash:</strong>{" "}
              <strong className="text-warning" title={data?.filehash}>
                {data?.filehash?.substring(0, 20) + "..."}
              </strong>
            </span>
            <span className="d-flex mb-2">
              <strong className="mr-1">Digital Signature:</strong>{" "}
              {data?.signature && (
                <strong className="text-warning" title={data?.signature}>
                  {data?.signature?.substring(0, 20) + "..."}
                </strong>
              )}
            </span>
            <span className="d-flex mb-2">
              <strong className="mr-1">Created Date:</strong>{" "}
              <strong className="text-warning">{data?.date}</strong>
            </span>
          </ListGroupItem>
          <ListGroupItem className="d-flex px-3 border-0">
            {data?.createdBy === user?.id && data?.isApprove && (
              <Button outline theme="accent" size="sm">
                <i className="material-icons">file_copy</i> Save to IPFS
              </Button>
            )}
            {!data?.isApprove && data?.userEmail === user?.email && (
              <Button
                onClick={signContract}
                theme="accent"
                size="sm"
                className="ml-auto"
              >
                <i className="material-icons">file_copy</i> Sign
              </Button>
            )}
            {data?.isApprove && (
              <Button disabled theme="accent" size="sm" className="ml-auto">
                <i className="material-icons">file_copy</i> Signed
              </Button>
            )}
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

SidebarActions.defaultProps = {
  title: "Contract Actions",
};

export default SidebarActions;
