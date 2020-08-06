const assert = require("assert");
const initializeTestProvider = require("./helpers/web3/initializeTestProvider");

describe("Ethereum", function() {
  it("should get ethereum version (eth_protocolVersion)", async function() {
    const { web3 } = await initializeTestProvider();

    const result = await web3.eth.getProtocolVersion();
    assert.strictEqual(result, "0x3f", "Network Version should be 0x3f");
  });
});
