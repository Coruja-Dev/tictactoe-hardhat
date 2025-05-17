import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ParOuImparModule", (m) => {
  const parOuImpar = m.contract("ParOuImpar", []);
  return { parOuImpar };
});