require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain unusual hunt industry foster turtle'; 
let testAccounts = [
"0x577809e3e53ec1fb685d7156f5527c61c38a7d2e2c865386ebb7f44d7be72930",
"0xc6275f37eabd2f695de435ad20598b20e24d825656257a698b2308a9a9ea8339",
"0xf490f899923901671d224045fef74f95e1aaa87d0f1b2d5596762d5ec7abb7a0",
"0x8379fbb2c7bde6260ce06dac85f9f4a996954311700f8ae550dc097fe2bbf6bd",
"0x3aa19cde73c5fcb27dfbaea7ec3adff50ada03f9ed43cd008d713088f649eeb2",
"0x763bf054471de83a5b4726f738b5547a4dc7d761cf5425078cef34126fae7761",
"0x2ce96ffd4ec7ae796cd0caccabcb534c5c2245216bdde907e13ad71142f6e3c7",
"0xe99e1701949bccd772041ea973fe02a4f14cdfdfb913d9d6b07547c9536866ef",
"0xe71ef7ade4864f81f536d5032a7392e62e06a4b888da7d50b7417c196a65bce2",
"0x6516672ec38235d99fd7d3b1f57ac257fc238961c4ff6efb8c7be319f529f588"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

