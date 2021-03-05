require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth prefer prosper install creek bridge swear'; 
let testAccounts = [
"0x5bda1f3fd3517a2e9b21d4e5272e2a9151b3f3159260ded7497df46ced50d596",
"0xed11f1121a83de95fb0a7d821134d7c4ca32f6ac907d3a9c43119a00ac116b72",
"0x061642cd2467589f1e77f0e8d00a30bcc8f0386dca0938fca6f5d3693a889c0f",
"0x0a3509328f91141f153d90f7a7523eee91d2ce1e6dbf21e4708bc7bba42c6170",
"0x9f116fcd94d82887f15bc96bb783402bb5d8f2ebeb7972504972eedcb4221376",
"0xff643086c0d273c08ac05773409247e4dd358260bf4df747c0880903b597d0ac",
"0x5ba713edab73c952bd6cf59ba8b4a0b45b5df3a959c04de51a2715b348d74650",
"0x5297fc065f0fdc22fedaab1f5dbefe179b9657b2f931f8b50c1768e810ce764d",
"0x440f6cc796d46d8db80bf5408d9322b7ad50dc8e43750aa67894b9b46013835a",
"0xeb2daf2945dd538fd1fd4e069ac0c9d43822e753acc7f078967cdd09b6f1af7a"
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
            version: '^0.5.11'
        }
    }
};
