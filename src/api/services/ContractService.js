import dictionary from "../dictionary";
import methods from "../methods";

const { contract } = dictionary;
const { get, post, patch } = methods;

const ContractService = {
  saveContract: (body) => {
    return post(contract.saveContract(), body);
  },
  getContract: (payload) => {
    const searchParams = new URLSearchParams(payload);
    const url = `${contract.getContract()}?${searchParams}`;
    return get(url);
  },
  getContractById: (id) => {
    const url = `${contract.getContractById()}/${id}`;
    return get(url);
  },
  getContractData: (body) => {
    return post(contract.getContractData(), body);
  },
  updateContract: (id, body) => {
    const url = `${contract.updateContract()}/${id}`;
    return patch(url, body);
  },
  saveToIPFS: (body) => {
    return post(contract.saveToIPFS(), body);
  },
};

export default ContractService;
