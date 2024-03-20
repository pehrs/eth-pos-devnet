import fs from "node:fs/promises";

const address = process.env.GENESIS_ADDRESS;
if (!address) {
  console.log("No need to fund genesis address");
  process.exit(0);
}

let amount = process.env.GENESIS_AMOUNT || "0xfffffffffffffffffffff";

try {
  amount = "0x" + BigInt(amount).toString(16);
  console.log("funding amount", amount);
} catch {
  console.log("invalid amount", amount);
  process.exit(1);
}

const genesisFilePath = "/geth/genesis.json";

const genesisFile = await fs.readFile(genesisFilePath);

const genesis = JSON.parse(genesisFile.toString());

let count = 0;

for (let addr of address.split(",")) {
  if (/^(0x)?[0-9a-fA-F]{40}$/.test(addr)) {
    if (addr.startsWith("0x")) {
      addr = addr.slice(2);
    }
    console.log("funding", addr);
    genesis.alloc[addr] = { balance: amount };
    count++;
  }
}

if (count > 0) {
  await fs.writeFile(genesisFilePath, JSON.stringify(genesis, null, "  "));
}
