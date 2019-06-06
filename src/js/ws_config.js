var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'Elphyre-WalletShell';
config.appDescription = 'Elphyrecoin Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'lol.elphyrecoin.walletshell';
config.appGitRepo = 'https://github.com/elphyrecoin/elphyre-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 45501;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'ewl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'elphyre-service';

// version on the bundled service (elphyre-service)
config.walletServiceBinaryVersion = "0.1.0.24";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 45502;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://explorer2.elphyrecoin.xyz/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'seed1.elphyrecoin.xyz';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/elphyrecoin/elphyrecoin-nodes-json/master/elphyrecoin-nodes.json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'seed1.elphyrecoin.xyz:45501',
  'seed2.elphyrecoin.xyz:45501',
  'seed3.elphyrecoin.xyz:45501',
  'seed4.elphyrecoin.xyz:45501',
];

// your currency name
config.assetName = 'Elphyrecoin';
// your currency ticker
config.assetTicker = 'ELPH';
// your currency address prefix, for address validation
config.addressPrefix = 'Phyrex';
// standard wallet address length, for address validation
config.addressLength = 101;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.0001;
// minimum amount for sending transaction
config.mininumSend = 0.0001;
// default mixin/anonimity for transaction
config.defaultMixin = 2;
// to convert from atomic unit
config.decimalDivisor = 100000;
// to represent human readable value
config.decimalPlaces = 5;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Elphyrecoin Wallet Donation',
    address: 'PhyrexWRcyzBZTbuGpBDUY1um24JrokRiifHgpsLKVXvNuzrLJFftEJgFLq9upTCaUgrNM5MXPVktfEfLzBHBRNDLSDTwyhCYfe3R',
    paymentId: '',
  }
];

config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
