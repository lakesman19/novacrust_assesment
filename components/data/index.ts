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



type Bank = {
id: number
name: string
}

export const nigerianBanks: Bank[] = [
{ id: 1, name: "Access Bank" },
{ id: 2, name: "Citibank Nigeria" },
{ id: 3, name: "Ecobank Nigeria" },
{ id: 4, name: "Fidelity Bank" },
{ id: 5, name: "First Bank of Nigeria" },
{ id: 6, name: "First City Monument Bank" },
{ id: 7, name: "Globus Bank" },
{ id: 8, name: "Guaranty Trust Bank" },
{ id: 9, name: "Heritage Bank" },
{ id: 10, name: "Jaiz Bank" },
{ id: 11, name: "Keystone Bank" },
{ id: 12, name: "Lotus Bank" },
{ id: 13, name: "Polaris Bank" },
{ id: 14, name: "Providus Bank" },
{ id: 15, name: "Stanbic IBTC Bank" },
{ id: 16, name: "Standard Chartered Bank Nigeria" },
{ id: 17, name: "Sterling Bank" },
{ id: 18, name: "SunTrust Bank" },
{ id: 19, name: "Titan Trust Bank" },
{ id: 20, name: "Union Bank of Nigeria" },
{ id: 21, name: "United Bank for Africa" },
{ id: 22, name: "Unity Bank" },
{ id: 23, name: "Wema Bank" },
{ id: 24, name: "Zenith Bank" }
]
