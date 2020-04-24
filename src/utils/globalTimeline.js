
//Takes in an array of timelines
//Returns golbal timeline from country specific

const sampleData=[
    {
      "countrycode": "CN",
      "date": "1/22/20",
      "cases": "548",
      "deaths": "17",
      "recovered": "28"
    },
    {
      "countrycode": "JP",
      "date": "1/22/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KR",
      "date": "1/22/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/22/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/22/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "1/22/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/23/20",
      "cases": "643",
      "deaths": "18",
      "recovered": "30"
    },
    {
      "countrycode": "JP",
      "date": "1/23/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KR",
      "date": "1/23/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/23/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/23/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/23/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "1/23/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/23/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/24/20",
      "cases": "920",
      "deaths": "26",
      "recovered": "36"
    },
    {
      "countrycode": "FR",
      "date": "1/24/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/24/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KR",
      "date": "1/24/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/24/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/24/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/24/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "1/24/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/24/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/25/20",
      "cases": "1406",
      "deaths": "42",
      "recovered": "39"
    },
    {
      "countrycode": "FR",
      "date": "1/25/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/25/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KR",
      "date": "1/25/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "1/25/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "1/25/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/25/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/25/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/25/20",
      "cases": "7",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "1/25/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/25/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "AU",
      "date": "1/26/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "1/26/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/26/20",
      "cases": "2075",
      "deaths": "56",
      "recovered": "49"
    },
    {
      "countrycode": "FR",
      "date": "1/26/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/26/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "1/26/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "1/26/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "1/26/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/26/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/26/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/26/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "US",
      "date": "1/26/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/26/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "AU",
      "date": "1/27/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KH",
      "date": "1/27/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "1/27/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/27/20",
      "cases": "2877",
      "deaths": "82",
      "recovered": "58"
    },
    {
      "countrycode": "FR",
      "date": "1/27/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "1/27/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/27/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "1/27/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "1/27/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "1/27/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/27/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "1/27/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/27/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/27/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "US",
      "date": "1/27/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/27/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "AU",
      "date": "1/28/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KH",
      "date": "1/28/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "1/28/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/28/20",
      "cases": "5509",
      "deaths": "131",
      "recovered": "101"
    },
    {
      "countrycode": "FR",
      "date": "1/28/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "1/28/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/28/20",
      "cases": "7",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "1/28/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "1/28/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "1/28/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/28/20",
      "cases": "7",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "1/28/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/28/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/28/20",
      "cases": "14",
      "deaths": "0",
      "recovered": "5"
    },
    {
      "countrycode": "US",
      "date": "1/28/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/28/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "AU",
      "date": "1/29/20",
      "cases": "6",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KH",
      "date": "1/29/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "1/29/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/29/20",
      "cases": "6087",
      "deaths": "133",
      "recovered": "120"
    },
    {
      "countrycode": "FI",
      "date": "1/29/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "FR",
      "date": "1/29/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "1/29/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/29/20",
      "cases": "7",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "1/29/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "1/29/20",
      "cases": "7",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "1/29/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/29/20",
      "cases": "7",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "1/29/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/29/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/29/20",
      "cases": "14",
      "deaths": "0",
      "recovered": "5"
    },
    {
      "countrycode": "AE",
      "date": "1/29/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "1/29/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/29/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "AU",
      "date": "1/30/20",
      "cases": "9",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "KH",
      "date": "1/30/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "1/30/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/30/20",
      "cases": "8141",
      "deaths": "171",
      "recovered": "135"
    },
    {
      "countrycode": "FI",
      "date": "1/30/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "FR",
      "date": "1/30/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "1/30/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IN",
      "date": "1/30/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/30/20",
      "cases": "11",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "1/30/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "1/30/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "1/30/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "PH",
      "date": "1/30/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/30/20",
      "cases": "10",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "1/30/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/30/20",
      "cases": "9",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/30/20",
      "cases": "14",
      "deaths": "0",
      "recovered": "5"
    },
    {
      "countrycode": "AE",
      "date": "1/30/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "1/30/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/30/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "AU",
      "date": "1/31/20",
      "cases": "9",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "KH",
      "date": "1/31/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "1/31/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "1/31/20",
      "cases": "9802",
      "deaths": "213",
      "recovered": "214"
    },
    {
      "countrycode": "FI",
      "date": "1/31/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "FR",
      "date": "1/31/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "1/31/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IN",
      "date": "1/31/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IT",
      "date": "1/31/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "1/31/20",
      "cases": "15",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "1/31/20",
      "cases": "11",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "1/31/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "1/31/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "PH",
      "date": "1/31/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "RU",
      "date": "1/31/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "1/31/20",
      "cases": "13",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "1/31/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SE",
      "date": "1/31/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "1/31/20",
      "cases": "10",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "1/31/20",
      "cases": "19",
      "deaths": "0",
      "recovered": "5"
    },
    {
      "countrycode": "AE",
      "date": "1/31/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "GB",
      "date": "1/31/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "1/31/20",
      "cases": "7",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "1/31/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "AU",
      "date": "2/01/20",
      "cases": "12",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "KH",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "2/01/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "2/01/20",
      "cases": "11891",
      "deaths": "259",
      "recovered": "275"
    },
    {
      "countrycode": "FI",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "FR",
      "date": "2/01/20",
      "cases": "6",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "2/01/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IN",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IT",
      "date": "2/01/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "2/01/20",
      "cases": "20",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "2/01/20",
      "cases": "12",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "2/01/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "PH",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "RU",
      "date": "2/01/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "2/01/20",
      "cases": "16",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "ES",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SE",
      "date": "2/01/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "2/01/20",
      "cases": "10",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "2/01/20",
      "cases": "19",
      "deaths": "0",
      "recovered": "5"
    },
    {
      "countrycode": "AE",
      "date": "2/01/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "GB",
      "date": "2/01/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "2/01/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "2/01/20",
      "cases": "6",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "AU",
      "date": "2/02/20",
      "cases": "12",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "KH",
      "date": "2/02/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "2/02/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "2/02/20",
      "cases": "16630",
      "deaths": "361",
      "recovered": "463"
    },
    {
      "countrycode": "FI",
      "date": "2/02/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "FR",
      "date": "2/02/20",
      "cases": "6",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "2/02/20",
      "cases": "10",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IN",
      "date": "2/02/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IT",
      "date": "2/02/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "2/02/20",
      "cases": "20",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "2/02/20",
      "cases": "15",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "2/02/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "2/02/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "PH",
      "date": "2/02/20",
      "cases": "2",
      "deaths": "1",
      "recovered": "0"
    },
    {
      "countrycode": "RU",
      "date": "2/02/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "2/02/20",
      "cases": "18",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "ES",
      "date": "2/02/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "2/02/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SE",
      "date": "2/02/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "2/02/20",
      "cases": "10",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "2/02/20",
      "cases": "19",
      "deaths": "0",
      "recovered": "5"
    },
    {
      "countrycode": "AE",
      "date": "2/02/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "GB",
      "date": "2/02/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "2/02/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "2/02/20",
      "cases": "6",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "AU",
      "date": "2/03/20",
      "cases": "12",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "KH",
      "date": "2/03/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "2/03/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "2/03/20",
      "cases": "19716",
      "deaths": "425",
      "recovered": "614"
    },
    {
      "countrycode": "FI",
      "date": "2/03/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "FR",
      "date": "2/03/20",
      "cases": "6",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "2/03/20",
      "cases": "12",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IN",
      "date": "2/03/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IT",
      "date": "2/03/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "2/03/20",
      "cases": "20",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "2/03/20",
      "cases": "15",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "2/03/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "2/03/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "PH",
      "date": "2/03/20",
      "cases": "2",
      "deaths": "1",
      "recovered": "0"
    },
    {
      "countrycode": "RU",
      "date": "2/03/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SG",
      "date": "2/03/20",
      "cases": "18",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "ES",
      "date": "2/03/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "LK",
      "date": "2/03/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "SE",
      "date": "2/03/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TW",
      "date": "2/03/20",
      "cases": "10",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "TH",
      "date": "2/03/20",
      "cases": "19",
      "deaths": "0",
      "recovered": "5"
    },
    {
      "countrycode": "AE",
      "date": "2/03/20",
      "cases": "5",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "GB",
      "date": "2/03/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "US",
      "date": "2/03/20",
      "cases": "11",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "VN",
      "date": "2/03/20",
      "cases": "8",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "AU",
      "date": "2/04/20",
      "cases": "13",
      "deaths": "0",
      "recovered": "2"
    },
    {
      "countrycode": "BE",
      "date": "2/04/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "KH",
      "date": "2/04/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CA",
      "date": "2/04/20",
      "cases": "4",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "CN",
      "date": "2/04/20",
      "cases": "23707",
      "deaths": "491",
      "recovered": "843"
    },
    {
      "countrycode": "FI",
      "date": "2/04/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "FR",
      "date": "2/04/20",
      "cases": "6",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "DE",
      "date": "2/04/20",
      "cases": "12",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IN",
      "date": "2/04/20",
      "cases": "3",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "IT",
      "date": "2/04/20",
      "cases": "2",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "JP",
      "date": "2/04/20",
      "cases": "22",
      "deaths": "0",
      "recovered": "1"
    },
    {
      "countrycode": "KR",
      "date": "2/04/20",
      "cases": "16",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "MY",
      "date": "2/04/20",
      "cases": "10",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "NP",
      "date": "2/04/20",
      "cases": "1",
      "deaths": "0",
      "recovered": "0"
    },
    {
      "countrycode": "PH",
      "date": "2/04/20",
      "cases": "2",
      "deaths": "1",
      "recovered": "0"
    }]

 export const globalTimeline=(combData)=>{
    //Create a set of Unique dates in the given data
    let dateSet=new Set();
    combData.map(x=>{
        dateSet.add(x.date);
    })

    const dateSetArr=Array.from(dateSet);
    let globalData=[]
    dateSetArr.map(x=>{
        let tempGlobalObject={};
        let cases=0;
        let deaths=0;
        let recovered=0;
        //Filtering entire data with distinct dates
        let dateFilteredArray=combData.filter(data=>data.date === x );
        //adding totals for each filtered data
        dateFilteredArray.map(data=>{
            cases=cases+parseInt(data.cases);
            deaths=deaths+parseInt(data.deaths);
            recovered=recovered+parseInt(data.recovered);
        })
        tempGlobalObject.date=x;
        tempGlobalObject.cases=String(cases);
        tempGlobalObject.deaths=String(deaths);
        tempGlobalObject.recovered=String(recovered);
        globalData.push(tempGlobalObject)


    })

    return globalData;

}
