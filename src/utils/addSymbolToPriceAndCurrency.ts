// Function to add the symbol to the price and currency
export function addSymbolToPriceAndCurrency(
  price: string,
  currency: string,
): string {
  // Symbol
  let symbol: string;

  // Switch
  switch (currency.toLowerCase()) {
    case "usd":
      symbol = "$";
      break;
    case "aed":
      symbol = "د.إ";
      break;
    case "afn":
      symbol = "؋";
      break;
    case "all":
      symbol = "L";
      break;
    case "amd":
      symbol = "֏";
      break;
    case "ang":
      symbol = "ƒ";
      break;
    case "aoa":
      symbol = "Kz";
      break;
    case "aud":
      symbol = "A$";
      break;
    case "awg":
      symbol = "ƒ";
      break;
    case "azn":
      symbol = "₼";
      break;
    case "bam":
      symbol = "KM";
      break;
    case "bbd":
      symbol = "Bds$";
      break;
    case "bdt":
      symbol = "৳";
      break;
    case "bgn":
      symbol = "лв";
      break;
    case "bhd":
      symbol = ".د.ب";
      break;
    case "bif":
      symbol = "FBu";
      break;
    case "bmd":
      symbol = "BD$";
      break;
    case "bnd":
      symbol = "B$";
      break;
    case "bob":
      symbol = "Bs.";
      break;
    case "brl":
      symbol = "R$";
      break;
    case "bsd":
      symbol = "B$";
      break;
    case "btn":
      symbol = "Nu.";
      break;
    case "bwp":
      symbol = "P";
      break;
    case "byn":
      symbol = "Br";
      break;
    case "bzd":
      symbol = "BZ$";
      break;
    case "cad":
      symbol = "C$";
      break;
    case "cdf":
      symbol = "FC";
      break;
    case "chf":
      symbol = "CHF";
      break;
    case "clp":
      symbol = "CLP$";
      break;
    case "cny":
      symbol = "¥";
      break;
    case "cop":
      symbol = "COL$";
      break;
    case "crc":
      symbol = "₡";
      break;
    case "cup":
      symbol = "$MN";
      break;
    case "cve":
      symbol = "$";
      break;
    case "czk":
      symbol = "Kč";
      break;
    case "djf":
      symbol = "Fdj";
      break;
    case "dkk":
      symbol = "kr";
      break;
    case "dop":
      symbol = "RD$";
      break;
    case "dzd":
      symbol = "دج";
      break;
    case "egp":
      symbol = "E£";
      break;
    case "ern":
      symbol = "Nfk";
      break;
    case "etb":
      symbol = "Br";
      break;
    case "fjd":
      symbol = "FJ$";
      break;
    case "fkp":
      symbol = "£";
      break;
    case "fok":
      symbol = "kr";
      break;
    case "gbp":
      symbol = "£";
      break;
    case "gel":
      symbol = "₾";
      break;
    case "ggp":
      symbol = "£";
      break;
    case "ghs":
      symbol = "GH₵";
      break;
    case "gip":
      symbol = "£";
      break;
    case "gmd":
      symbol = "D";
      break;
    case "gnf":
      symbol = "FG";
      break;
    case "gtq":
      symbol = "Q";
      break;
    case "gyd":
      symbol = "G$";
      break;
    case "hkd":
      symbol = "HK$";
      break;
    case "hnl":
      symbol = "L";
      break;
    case "hrk":
      symbol = "kn";
      break;
    case "htg":
      symbol = "G";
      break;
    case "huf":
      symbol = "Ft";
      break;
    case "idr":
      symbol = "Rp";
      break;
    case "ils":
      symbol = "₪";
      break;
    case "imp":
      symbol = "£";
      break;
    case "inr":
      symbol = "₹";
      break;
    case "iqd":
      symbol = "ع.د";
      break;
    case "irr":
      symbol = "﷼";
      break;
    case "isk":
      symbol = "kr";
      break;
    case "jep":
      symbol = "£";
      break;
    case "jmd":
      symbol = "J$";
      break;
    case "jod":
      symbol = "د.ا";
      break;
    case "kes":
      symbol = "KSh";
      break;
    case "kgs":
      symbol = "с";
      break;
    case "khr":
      symbol = "៛";
      break;
    case "kid":
      symbol = "$";
      break;
    case "kmf":
      symbol = "CF";
      break;
    case "krw":
      symbol = "₩";
      break;
    case "kwd":
      symbol = "د.ك";
      break;
    case "kyd":
      symbol = "CI$";
      break;
    case "kzt":
      symbol = "₸";
      break;
    case "lak":
      symbol = "₭";
      break;
    case "lbp":
      symbol = "ل.ل";
      break;
    case "lkr":
      symbol = "Rs";
      break;
    case "lrd":
      symbol = "L$";
      break;
    case "lsl":
      symbol = "L";
      break;
    case "lyd":
      symbol = "ل.د";
      break;
    case "mad":
      symbol = "د.م.";
      break;
    case "mdl":
      symbol = "L";
      break;
    case "mga":
      symbol = "Ar";
      break;
    case "mkd":
      symbol = "ден";
      break;
    case "mmk":
      symbol = "K";
      break;
    case "mnt":
      symbol = "₮";
      break;
    case "mop":
      symbol = "MOP$";
      break;
    case "mru":
      symbol = "UM";
      break;
    case "mur":
      symbol = "₨";
      break;
    case "mvr":
      symbol = "Rf";
      break;
    case "mwk":
      symbol = "MK";
      break;
    case "myr":
      symbol = "RM";
      break;
    case "mzn":
      symbol = "MT";
      break;
    case "nad":
      symbol = "N$";
      break;
    case "ngn":
      symbol = "₦";
      break;
    case "nio":
      symbol = "C$";
      break;
    case "nok":
      symbol = "kr";
      break;
    case "npr":
      symbol = "₨";
      break;
    case "nzd":
      symbol = "NZ$";
      break;
    case "omr":
      symbol = "ر.ع.";
      break;
    case "pab":
      symbol = "B/.";
      break;
    case "pen":
      symbol = "S/";
      break;
    case "pgk":
      symbol = "K";
      break;
    case "php":
      symbol = "₱";
      break;
    case "pkr":
      symbol = "₨";
      break;
    case "pln":
      symbol = "zł";
      break;
    case "pyg":
      symbol = "₲";
      break;
    case "qar":
      symbol = "ر.ق";
      break;
    case "ron":
      symbol = "lei";
      break;
    case "rsd":
      symbol = "дин.";
      break;
    case "rub":
      symbol = "₽";
      break;
    case "rwf":
      symbol = "FRw";
      break;
    case "sar":
      symbol = "ر.س";
      break;
    case "sbd":
      symbol = "SI$";
      break;
    case "scr":
      symbol = "₨";
      break;
    case "sdg":
      symbol = "ج.س.";
      break;
    case "sek":
      symbol = "kr";
      break;
    case "sgd":
      symbol = "S$";
      break;
    case "shp":
      symbol = "£";
      break;
    case "sle":
      symbol = "Le";
      break;
    case "sos":
      symbol = "Sh";
      break;
    case "srd":
      symbol = "$";
      break;
    case "ssp":
      symbol = "£";
      break;
    case "stn":
      symbol = "Db";
      break;
    case "syp":
      symbol = "£S";
      break;
    case "szl":
      symbol = "E";
      break;
    case "thb":
      symbol = "฿";
      break;
    case "tjs":
      symbol = "ЅМ";
      break;
    case "tmt":
      symbol = "T";
      break;
    case "tnd":
      symbol = "د.ت";
      break;
    case "top":
      symbol = "T$";
      break;
    case "try":
      symbol = "₺";
      break;
    case "ttd":
      symbol = "TT$";
      break;
    case "tvd":
      symbol = "$";
      break;
    case "twd":
      symbol = "NT$";
      break;
    case "tzs":
      symbol = "TSh";
      break;
    case "uah":
      symbol = "₴";
      break;
    case "ugx":
      symbol = "USh";
      break;
    case "uyu":
      symbol = "$U";
      break;
    case "uzs":
      symbol = "сўм";
      break;
    case "ves":
      symbol = "Bs.";
      break;
    case "vnd":
      symbol = "₫";
      break;
    case "vuv":
      symbol = "VT";
      break;
    case "wst":
      symbol = "WS$";
      break;
    case "xaf":
      symbol = "FCFA";
      break;
    case "xcd":
      symbol = "$";
      break;
    case "xdr":
      symbol = "SDR";
      break;
    case "xof":
      symbol = "CFA";
      break;
    case "xpf":
      symbol = "₣";
      break;
    case "yer":
      symbol = "﷼";
      break;
    case "zar":
      symbol = "R";
      break;
    case "zmw":
      symbol = "ZK";
      break;
    case "zwl":
      symbol = "Z$";
      break;
    case "eur":
      symbol = "€";
      break;
    case "ars":
      symbol = "AR$";
      break;
    case "mxn":
      symbol = "MX$";
      break;
    case "jpy":
      symbol = "¥";
      break;
    default:
      throw new Error("Unsupported currency");
  }

  // Return
  return `${symbol} ${price}`;
}
