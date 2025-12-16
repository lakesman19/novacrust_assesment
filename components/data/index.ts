export interface CryptoAsset {
  name: string;
  symbol: string;
  image: string;
}

export const cryptoAssets: CryptoAsset[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    name: "Tether",
    symbol: "USDT",
    image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
  {
    name: "BNB",
    symbol: "BNB",
    image: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    image: "https://cryptologos.cc/logos/chainlink-link-logo.png",
  },
];

export type TabsValue = "cryptoToCash" | "cashToCrypto" | "cryptoToFiat";

export interface TabsLabel {
  name: string;
  value: TabsValue;
}

export const tabsLabel: TabsLabel[] = [
  {
    name: "Crypto to cash",
    value: "cryptoToCash",
  },
  {
    name: "Cash to crypto",
    value: "cashToCrypto",
  },
  {
    name: "Crypto to fiat loan",
    value: "cryptoToFiat",
  },
];

type Wallet = {
  name: string;
  logo: string;
};

export const wallets: Wallet[] = [
  {
    name: "MetaMask",
    logo: "/images/icons/meta.png",
  },
  {
    name: "WalletConnect",
    logo: "/images/icons/walletConnect.png",
  },
  {
    name: "Rainbow",
    logo: "/images/icons/rainbow.png",
  },
  {
    name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    logo: "/images/icons/Wallets.png",
  },
];
// Add to your data.ts file

export interface PaymentDestination {
  name: string;
  type: string;
  logo: string;
  description?: string;
}

export const paymentDestinations: PaymentDestination[] = [
  {
    name: "Bank Account",
    type: "bank",
    logo: "🏦",
    description: "Direct bank transfer"
  },
  {
    name: "Mobile Money",
    type: "mobile",
    logo: "📱",
    description: "MTN, Airtel, Glo, 9mobile"
  },
  {
    name: "PayPal",
    type: "paypal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    description: "PayPal account"
  },

  {
    name: "Chipper Cash",
    type: "chipper",
    logo: "💳",
    description: "Chipper Cash wallet"
  },

];