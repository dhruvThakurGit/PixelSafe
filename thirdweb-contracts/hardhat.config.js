// require("@matterlabs/hardhat-zksync-solc");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   zksolc: {
//     version: "1.3.9",
//     compilerSource: "binary",
//     settings: {
//       optimizer: {
//         enabled: true,
//       },
//     },
//   },
//   networks: {
//     zksync_testnet: {
//       url: "https://zksync2-testnet.zksync.dev",
//       ethNetwork: "goerli",
//       chainId: 280,
//       zksync: true,
//     },
//     zksync_mainnet: {
//       url: "https://zksync2-mainnet.zksync.io/",
//       ethNetwork: "mainnet",
//       chainId: 324,
//       zksync: true,
//     },
//   },
//   paths: {
//     artifacts: "./artifacts-zk",
//     cache: "./cache-zk",
//     sources: "./contracts",
//     tests: "./test",
//   },
//   solidity: {
//     version: "0.8.19",
//     defaultNetwork: "sepolia",
//     networks: {
//       hardhat: {},
//       sepolia: {
//         url: "https://rpc.ankr.com/eth_sepolia",
//         accounts: [
//           `0x7bd59667a9f27d4cc7d3738a422fb4d086a1c97f46fa8e0d824f8ac9d8e19798`,
//         ],
//       },
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    defaultNetwork: "sepolia",
    networks: {
      hardhat: {},
      sepolia: {
        url: "https://rpc.ankr.com/eth_sepolia",
        accounts: [
          `0x7bd59667a9f27d4cc7d3738a422fb4d086a1c97f46fa8e0d824f8ac9d8e19798`,
        ],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
