const Blockchain = require("./src/blockchain");
const Block = require("./src/block");

async function run() {
  const quantity = 100;
  const blockchain = await new Blockchain();
  for (let i = 1; i <= quantity; i++) {
    const block = new Block({ data: `Block #${i}` });
    await blockchain.addBlock(block);
  }

  blockchain.print();
}

run();
