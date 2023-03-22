import dictionary from "../dictionary";
import methods from "../methods";

const { contract } = dictionary;
const { get, post } = methods;

const ContractService = {
  saveContract: (body) => {
    return post(contract.saveContract(), body);
  },
  getContract: () => {
    return get(contract.getContract());
  },
  getContractData: (body) => {
    return post(contract.getContractData(), body);
  },
};

export default ContractService;
