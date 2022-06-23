window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "killerqueen-1",
    chainName: "Quicksilver",
    rpc: "http://138.201.132.250:26857", // replace with your rpc url
    rest: "http://138.201.132.250:1817", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "quick",
        bech32PrefixAccPub: "quick" + "pub",
        bech32PrefixValAddr: "quick" + "valoper",
        bech32PrefixValPub: "quick" + "valoperpub",
        bech32PrefixConsAddr: "quick" + "valcons",
        bech32PrefixConsPub: "quick" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "QCK", 
            coinMinimalDenom: "uqck", 
            coinDecimals: 6, 
            coinGeckoId: "uqck", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "QCK",
            coinMinimalDenom: "uqck",
            coinDecimals: 6,
            coinGeckoId: "uqck",
        },
    ],
    stakeCurrency: {
        coinDenom: "QCK",
        coinMinimalDenom: "uqck",
        coinDecimals: 6,
        coinGeckoId: "uqck",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    
    features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}
