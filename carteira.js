const bitcoin = require('bitcoinjs-lib')
const bip32Lib = require('bip32')
const ecc = require('tiny-secp256k1')
const bip39 = require('bip39')

// Compatibilidade para a fábrica do BIP32
const BIP32Factory = bip32Lib.default || bip32Lib.BIP32Factory || bip32Lib
const bip32 = BIP32Factory(ecc)

// Definindo a rede Testnet (para testes seguros)
const network = bitcoin.networks.testnet

// Caminho BIP49 (Nested SegWit) para testnet
const path = "m/49'/1'/0'/0/0"

console.log("Gerando sua carteira Bitcoin...")

// Gera a mnemônica (12 palavras secretas)
const mnemonic = bip39.generateMnemonic()

// Converte a mnemônica para seed
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Cria a raiz da carteira HD
const root = bip32.fromSeed(seed, network)

// Deriva o nó final com base no caminho escolhido
const node = root.derivePath(path)

// Gera o endereço P2SH-P2WPKH (BIP49 - Nested SegWit)
const { address } = bitcoin.payments.p2sh({
  redeem: bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network
  }),
  network
})

console.log("\n=== CARTEIRA GERADA COM SUCESSO! ===")
console.log("Endereço (Para receber fundos):", address)
console.log("Chave Privada (WIF):", node.toWIF())
console.log("Seed (Mnemonic - 12 palavras):", mnemonic)
console.log("=====================================\n")


