const rate1 = document.querySelector(".rate1");
const rate2 = document.querySelector(".rate2");
const resultBtn = document.querySelector(".result");
const selects = document.querySelectorAll(".options select");
const sel1 = selects[0];
const sel2 = selects[1];
const inputs = document.querySelectorAll(".input input");
const inpt1 = inputs[0];
const inpt2 = inputs[1];

const rates = {};


let requestURL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_2aiVEQcBiEZbw2nnFeY5pQvVNmAuUq0sqj3EgVa9";
fetchRates();

async function fetchRates(){
    let res = await fetch(requestURL);
    res = await res.json();
    rates = res.rates;
    populateOptions();
}

function populateOptions(){
    let val = "";
    Object.keys(rates).forEach(Code=>{
        let str = `<option value="${Code}">${Code}</option>`
        val += str;
    })
    selects.forEach((S) => (S.innerHTML= val));
}

function convert (val, fromCurr, toCurr){
    let v = (val/rates[fromCurr]) * rates[toCurr];
    let v1 = v.toFixed(4);
    return v1 == 0.0 ? v.toFixed(6) : v1;
};

function displayRates(){
    let v1 = sel1.value;
    let v2 = sel2.value;

    let val = convert(1, v1, v2);

    rate1.innerHTML = `1 ${v1} equals`;
    rate2.innerHTML = `${val} ${v2}`
}

resultBtn.addEventListener("click", ()=>{
    let fromCurr = sel1.value;
    let fromVal = parseFloat(inpt1.value)
    let toCurr = sel2.value;

    if(isNaN(fromVal)){
        alert("Enter a Number!")
    } else{
        let cVal = convert(fromVal, fromCurr, toCurr);
        inpt2.value = cVal;
    }
});

selects.forEach (S=>S.addEventListener("change", displayRates))

document.querySelector(".swap").addEventListener("click", ()=>{
    let in1 = inpt1.value;
    let in2 = inpt2.value;
    let op1 = sel1.value;
    let op2 = sel2.value;

    inpt2.value = in1;
    inpt1.value = in2;

    sel2.value = op1;
    sel1.value = op2;

    displayRates();
});




/*
{
    "meta": {
      "last_updated_at": "2024-07-04T23:59:59Z"
    },
    "data": {
      "ADA": {
        "code": "ADA",
        "value": 2.761172911
      },
      "AED": {
        "code": "AED",
        "value": 3.6721706082
      },
      "AFN": {
        "code": "AFN",
        "value": 71.1050091351
      },
      "ALL": {
        "code": "ALL",
        "value": 92.6825009527
      },
      "AMD": {
        "code": "AMD",
        "value": 387.427646739
      },
      "ANG": {
        "code": "ANG",
        "value": 1.7871502906
      },
      "AOA": {
        "code": "AOA",
        "value": 862.955526476
      },
      "ARB": {
        "code": "ARB",
        "value": 1.4730404445
      },
      "ARS": {
        "code": "ARS",
        "value": 913.8426144744
      },
      "AUD": {
        "code": "AUD",
        "value": 1.4869701913
      },
      "AVAX": {
        "code": "AVAX",
        "value": 0.0408909048
      },
      "AWG": {
        "code": "AWG",
        "value": 1.79
      },
      "AZN": {
        "code": "AZN",
        "value": 1.7
      },
      "BAM": {
        "code": "BAM",
        "value": 1.8089002779
      },
      "BBD": {
        "code": "BBD",
        "value": 2
      },
      "BDT": {
        "code": "BDT",
        "value": 117.6729024819
      },
      "BGN": {
        "code": "BGN",
        "value": 1.8074902764
      },
      "BHD": {
        "code": "BHD",
        "value": 0.376
      },
      "BIF": {
        "code": "BIF",
        "value": 2879.0190888991
      },
      "BMD": {
        "code": "BMD",
        "value": 1
      },
      "BNB": {
        "code": "BNB",
        "value": 0.0019441011
      },
      "BND": {
        "code": "BND",
        "value": 1.350530242
      },
      "BOB": {
        "code": "BOB",
        "value": 6.9089408476
      },
      "BRL": {
        "code": "BRL",
        "value": 5.4914707546
      },
      "BSD": {
        "code": "BSD",
        "value": 1
      },
      "BTC": {
        "code": "BTC",
        "value": 0.0000175117
      },
      "BTN": {
        "code": "BTN",
        "value": 83.6575132391
      },
      "BWP": {
        "code": "BWP",
        "value": 13.6462126156
      },
      "BYN": {
        "code": "BYN",
        "value": 3.2700220763
      },
      "BYR": {
        "code": "BYR",
        "value": 32700.236061247
      },
      "BZD": {
        "code": "BZD",
        "value": 2
      },
      "CAD": {
        "code": "CAD",
        "value": 1.3614202324
      },
      "CDF": {
        "code": "CDF",
        "value": 2847.6370785257
      },
      "CHF": {
        "code": "CHF",
        "value": 0.9001901285
      },
      "CLF": {
        "code": "CLF",
        "value": 0.0244600039
      },
      "CLP": {
        "code": "CLP",
        "value": 934.7351691818
      },
      "CNY": {
        "code": "CNY",
        "value": 7.2678013306
      },
      "COP": {
        "code": "COP",
        "value": 4093.0884605754
      },
      "CRC": {
        "code": "CRC",
        "value": 526.3560982574
      },
      "CUC": {
        "code": "CUC",
        "value": 1
      },
      "CUP": {
        "code": "CUP",
        "value": 24
      },
      "CVE": {
        "code": "CVE",
        "value": 101.9912881855
      },
      "CZK": {
        "code": "CZK",
        "value": 23.1912825725
      },
      "DAI": {
        "code": "DAI",
        "value": 1.0000533728
      },
      "DJF": {
        "code": "DJF",
        "value": 177.721
      },
      "DKK": {
        "code": "DKK",
        "value": 6.8976511833
      },
      "DOP": {
        "code": "DOP",
        "value": 59.1310703477
      },
      "DOT": {
        "code": "DOT",
        "value": 0.1798315272
      },
      "DZD": {
        "code": "DZD",
        "value": 134.8283729401
      },
      "EGP": {
        "code": "EGP",
        "value": 48.0121087776
      },
      "ERN": {
        "code": "ERN",
        "value": 15
      },
      "ETB": {
        "code": "ETB",
        "value": 57.7486975422
      },
      "ETH": {
        "code": "ETH",
        "value": 0.0003265548
      },
      "EUR": {
        "code": "EUR",
        "value": 0.9246101511
      },
      "FJD": {
        "code": "FJD",
        "value": 2.2558302833
      },
      "FKP": {
        "code": "FKP",
        "value": 0.7839736101
      },
      "GBP": {
        "code": "GBP",
        "value": 0.7839600974
      },
      "GEL": {
        "code": "GEL",
        "value": 2.7958204131
      },
      "GGP": {
        "code": "GGP",
        "value": 0.783974239
      },
      "GHS": {
        "code": "GHS",
        "value": 15.2897919631
      },
      "GIP": {
        "code": "GIP",
        "value": 0.7839736811
      },
      "GMD": {
        "code": "GMD",
        "value": 58.071379026
      },
      "GNF": {
        "code": "GNF",
        "value": 8587.6129624125
      },
      "GTQ": {
        "code": "GTQ",
        "value": 7.7579514563
      },
      "GYD": {
        "code": "GYD",
        "value": 208.9693436853
      },
      "HKD": {
        "code": "HKD",
        "value": 7.8056208191
      },
      "HNL": {
        "code": "HNL",
        "value": 24.7673631145
      },
      "HRK": {
        "code": "HRK",
        "value": 6.6366311961
      },
      "HTG": {
        "code": "HTG",
        "value": 134.5053856683
      },
      "HUF": {
        "code": "HUF",
        "value": 363.2306073574
      },
      "IDR": {
        "code": "IDR",
        "value": 16314.82586642
      },
      "ILS": {
        "code": "ILS",
        "value": 3.7340906237
      },
      "IMP": {
        "code": "IMP",
        "value": 0.7839737873
      },
      "INR": {
        "code": "INR",
        "value": 83.4427087183
      },
      "IQD": {
        "code": "IQD",
        "value": 1308.458393064
      },
      "IRR": {
        "code": "IRR",
        "value": 42012.518468716
      },
      "ISK": {
        "code": "ISK",
        "value": 138.0042157273
      },
      "JEP": {
        "code": "JEP",
        "value": 0.7839741944
      },
      "JMD": {
        "code": "JMD",
        "value": 155.8385918768
      },
      "JOD": {
        "code": "JOD",
        "value": 0.71
      },
      "JPY": {
        "code": "JPY",
        "value": 161.3475005217
      },
      "KES": {
        "code": "KES",
        "value": 128.6761045487
      },
      "KGS": {
        "code": "KGS",
        "value": 86.0101940408
      },
      "KHR": {
        "code": "KHR",
        "value": 4113.4870381988
      },
      "KMF": {
        "code": "KMF",
        "value": 456.50345364
      },
      "KPW": {
        "code": "KPW",
        "value": 899.999302758
      },
      "KRW": {
        "code": "KRW",
        "value": 1378.6309765056
      },
      "KWD": {
        "code": "KWD",
        "value": 0.3065300542
      },
      "KYD": {
        "code": "KYD",
        "value": 0.83333
      },
      "KZT": {
        "code": "KZT",
        "value": 474.892861015
      },
      "LAK": {
        "code": "LAK",
        "value": 22113.097320965
      },
      "LBP": {
        "code": "LBP",
        "value": 89591.337309955
      },
      "LKR": {
        "code": "LKR",
        "value": 303.7207467672
      },
      "LRD": {
        "code": "LRD",
        "value": 194.6392986348
      },
      "LSL": {
        "code": "LSL",
        "value": 18.3821430683
      },
      "LTC": {
        "code": "LTC",
        "value": 0.0152893912
      },
      "LTL": {
        "code": "LTL",
        "value": 3.1940202312
      },
      "LVL": {
        "code": "LVL",
        "value": 0.6501262057
      },
      "LYD": {
        "code": "LYD",
        "value": 4.8691805724
      },
      "MAD": {
        "code": "MAD",
        "value": 9.8767613617
      },
      "MATIC": {
        "code": "MATIC",
        "value": 2.0214875839
      },
      "MDL": {
        "code": "MDL",
        "value": 17.7689232288
      },
      "MGA": {
        "code": "MGA",
        "value": 4475.1766233922
      },
      "MKD": {
        "code": "MKD",
        "value": 56.8788180697
      },
      "MMK": {
        "code": "MMK",
        "value": 2095.7770705463
      },
      "MNT": {
        "code": "MNT",
        "value": 3399.9733009261
      },
      "MOP": {
        "code": "MOP",
        "value": 8.0261413563
      },
      "MRO": {
        "code": "MRO",
        "value": 356.999828
      },
      "MRU": {
        "code": "MRU",
        "value": 39.5508661092
      },
      "MUR": {
        "code": "MUR",
        "value": 47.1836190288
      },
      "MVR": {
        "code": "MVR",
        "value": 15.455992408
      },
      "MWK": {
        "code": "MWK",
        "value": 1734.2132867341
      },
      "MXN": {
        "code": "MXN",
        "value": 18.0829020356
      },
      "MYR": {
        "code": "MYR",
        "value": 4.7104105272
      },
      "MZN": {
        "code": "MZN",
        "value": 63.6067065835
      },
      "NAD": {
        "code": "NAD",
        "value": 18.2219733608
      },
      "NGN": {
        "code": "NGN",
        "value": 1511.9752982026
      },
      "NIO": {
        "code": "NIO",
        "value": 36.7608872329
      },
      "NOK": {
        "code": "NOK",
        "value": 10.5661016501
      },
      "NPR": {
        "code": "NPR",
        "value": 133.4619249059
      },
      "NZD": {
        "code": "NZD",
        "value": 1.6354502433
      },
      "OMR": {
        "code": "OMR",
        "value": 0.383320071
      },
      "OP": {
        "code": "OP",
        "value": 0.6931854307
      },
      "PAB": {
        "code": "PAB",
        "value": 0.9988901504
      },
      "PEN": {
        "code": "PEN",
        "value": 3.7982507048
      },
      "PGK": {
        "code": "PGK",
        "value": 3.851230603
      },
      "PHP": {
        "code": "PHP",
        "value": 58.5590859702
      },
      "PKR": {
        "code": "PKR",
        "value": 278.4606399098
      },
      "PLN": {
        "code": "PLN",
        "value": 3.9597107065
      },
      "PYG": {
        "code": "PYG",
        "value": 7563.7254052649
      },
      "QAR": {
        "code": "QAR",
        "value": 3.6412905502
      },
      "RON": {
        "code": "RON",
        "value": 4.6021906509
      },
      "RSD": {
        "code": "RSD",
        "value": 107.908636383
      },
      "RUB": {
        "code": "RUB",
        "value": 88.2774157919
      },
      "RWF": {
        "code": "RWF",
        "value": 1308.4583488086
      },
      "SAR": {
        "code": "SAR",
        "value": 3.7458207127
      },
      "SBD": {
        "code": "SBD",
        "value": 8.3207085913
      },
      "SCR": {
        "code": "SCR",
        "value": 14.7210328375
      },
      "SDG": {
        "code": "SDG",
        "value": 601.5
      },
      "SEK": {
        "code": "SEK",
        "value": 10.5028310757
      },
      "SGD": {
        "code": "SGD",
        "value": 1.3513901755
      },
      "SHP": {
        "code": "SHP",
        "value": 0.7839601014
      },
      "SLL": {
        "code": "SLL",
        "value": 22542.161175303
      },
      "SOL": {
        "code": "SOL",
        "value": 0.0078246638
      },
      "SOS": {
        "code": "SOS",
        "value": 571.5900439739
      },
      "SRD": {
        "code": "SRD",
        "value": 30.3389942524
      },
      "STD": {
        "code": "STD",
        "value": 22748.933508437
      },
      "STN": {
        "code": "STN",
        "value": 22.7489359905
      },
      "SVC": {
        "code": "SVC",
        "value": 8.75
      },
      "SYP": {
        "code": "SYP",
        "value": 13001.516252644
      },
      "SZL": {
        "code": "SZL",
        "value": 18.2570121071
      },
      "THB": {
        "code": "THB",
        "value": 36.6207348123
      },
      "TJS": {
        "code": "TJS",
        "value": 10.6489617362
      },
      "TMT": {
        "code": "TMT",
        "value": 3.5
      },
      "TND": {
        "code": "TND",
        "value": 3.1181803453
      },
      "TOP": {
        "code": "TOP",
        "value": 2.335140454
      },
      "TRY": {
        "code": "TRY",
        "value": 32.6396858412
      },
      "TTD": {
        "code": "TTD",
        "value": 6.7368508382
      },
      "TWD": {
        "code": "TWD",
        "value": 32.5071942631
      },
      "TZS": {
        "code": "TZS",
        "value": 2663.3900495987
      },
      "UAH": {
        "code": "UAH",
        "value": 40.8866666028
      },
      "UGX": {
        "code": "UGX",
        "value": 3694.4823259473
      },
      "USD": {
        "code": "USD",
        "value": 1
      },
      "USDC": {
        "code": "USDC",
        "value": 1.0009693558
      },
      "USDT": {
        "code": "USDT",
        "value": 0.9999158833
      },
      "UYU": {
        "code": "UYU",
        "value": 40.3475372156
      },
      "UZS": {
        "code": "UZS",
        "value": 12590.451186596
      },
      "VEF": {
        "code": "VEF",
        "value": 3646585.0812978
      },
      "VES": {
        "code": "VES",
        "value": 36.4658654365
      },
      "VND": {
        "code": "VND",
        "value": 25457.486262152
      },
      "VUV": {
        "code": "VUV",
        "value": 118.9603721661
      },
      "WST": {
        "code": "WST",
        "value": 2.7314693185
      },
      "XAF": {
        "code": "XAF",
        "value": 606.7171048319
      },
      "XAG": {
        "code": "XAG",
        "value": 0.0329277477
      },
      "XAU": {
        "code": "XAU",
        "value": 0.0004243299
      },
      "XCD": {
        "code": "XCD",
        "value": 2.7
      },
      "XDR": {
        "code": "XDR",
        "value": 0.7576000768
      },
      "XOF": {
        "code": "XOF",
        "value": 606.7171110263
      },
      "XPD": {
        "code": "XPD",
        "value": 0.0009801859
      },
      "XPF": {
        "code": "XPF",
        "value": 110.282481031
      },
      "XPT": {
        "code": "XPT",
        "value": 0.0009980532
      },
      "XRP": {
        "code": "XRP",
        "value": 2.3077878759
      },
      "YER": {
        "code": "YER",
        "value": 249.9126279442
      },
      "ZAR": {
        "code": "ZAR",
        "value": 18.2610129816
      },
      "ZMK": {
        "code": "ZMK",
        "value": 9001.2
      },
      "ZMW": {
        "code": "ZMW",
        "value": 24.4324533214
      },
      "ZWL": {
        "code": "ZWL",
        "value": 13.7453714239
      }
    }
  }

  */