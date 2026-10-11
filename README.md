gerador-carteira-btc
Gerador de carteira Bitcoin Testnet utilizando BIP49 (Nested SegWit) em JavaScript.

✨ Funcionalidades
Gera uma mnemônica BIP39 (12 palavras)
Deriva uma chave privada via BIP32/BIP49
Produz um endereço Testnet compatível com carteiras que suportam P2SH-P2WPKH
Exibe a chave privada no formato WIF para importação manual
⚠️ Aviso Importante
Este projeto gera carteiras na rede Testnet exclusivamente para fins de estudo e teste. Nunca utilize chaves privadas ou mnemônicas geradas em scripts 
locais para armazenar fundos reais na rede principal (Mainnet).

📋 Pré-requisitos
Node.js (versão 14 ou superior)
npm (incluído com o Node.js)
🚀 Instalação
bash

Copiar
# Clone o repositório
git clone https://github.com/ValmirJK/gerador-carteira-btc.git

# Acesse a pasta do projeto
cd gerador-carteira-btc

# Instale as dependências
npm install
▶️ Como Executar
bash

Copiar
node carteira.js
Saída esperada:
Gerando sua carteira Bitcoin...

=== CARTEIRA GERADA COM SUCESSO! ===
Endereço (Para receber fundos): 2Nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Chave Privada (WIF): cVxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Seed (Mnemonic - 12 palavras): word1 word2 word3 ... word12
=====================================
📦 Dependências
Pacote	Versão	Descrição
bitcoinjs-lib	^4.x / ^5.x	Biblioteca principal do Bitcoin
bip32	^3.x / ^4.x	Carteiras hierárquicas (HD Wallets)
tiny-secp256k1	^1.x / ^2.x	Criptografia curvada secp256k1
bip39	^3.x	Geração e validação de mnemônica BIP39
📐 Padrões Utilizados
Padrão	Descrição
BIP39	Geração de mnemônica (12 palavras)
BIP32	Derivação de carteira HD (Hierarchical Deterministic)
BIP49	Endereço P2SH-P2WPKH (Nested SegWit)
BIP44	Caminho de derivação m/49'/1'/0'/0/0
Nota: O '1' no caminho de derivação indica a rede Testnet. Na Mainnet, o valor seria '0'.

🔍 Estrutura do Projeto
gerador-carteira-btc/
├── carteira.js      # Script principal de geração
├── package.json     # Dependências e metadados
└── README.md        # Esta documentação
🛠️ Tecnologias
JavaScript (ES6+)
Node.js
BitcoinJS
📄 Licença
Projeto de código aberto para fins educacionais.
