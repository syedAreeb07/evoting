const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      network_id: "*",
      host: "127.0.0.1",
      // port: 7545, // for ganache gui
      port: 8545, // for ganache-cli
      gas: 6721975,
      gasPrice: 20000000000,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          "skill finish reason vessel life sorry muffin boil seven time master follow",
          "https://polygon-mumbai.g.alchemy.com/v2/WxHu9JHRMperCkoL_bh4innXXlt3GAi3"
        );
      },
      network_id: 80001,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};
