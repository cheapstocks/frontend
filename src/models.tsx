
export interface CompanyProfile {
  address: string;
  beta: number;
  ceo: string;
  changes: number;
  cik: string;
  city: string;
  companyName: string;
  country: string;
  currency: string;
  cusip: string;
  dcf: number;
  dcfDiff: number;
  defaultImage: boolean;
  description: string;
  exchange: string;
  exchangeShortName: string;
  fullTimeEmployees: string;
  image: string;
  industry: string;
  ipoDate: string;
  isActivelyTrading: boolean;
  isAdr: boolean;
  isEtf: boolean;
  isFund: boolean;
  isin: string;
  lastDiv: number;
  mktCap: number;
  phone: string;
  price: number;
  range: string;
  sector: string;
  state: string;
  symbol: string;
  volAvg: number;
  website: string;
  zip: string;
}


export interface Metric {
  _10DayAverageTradingVolume: number;
  _13WeekPriceReturnDaily: number;
  _26WeekPriceReturnDaily: number;
  _3MonthAverageTradingVolume: number;
  _52WeekHigh: number;
  _52WeekHighDate: string;
  _52WeekLow: number;
  _52WeekLowDate: string;
  _52WeekPriceReturnDaily: number;
  _5DayPriceReturnDaily: number;
  _assetTurnoverAnnual: number;
  _assetTurnoverTTM: number;
  _beta: number;
  _bookValuePerShareAnnual: number;
  _bookValuePerShareQuarterly: number;
  _bookValueShareGrowth5Y: number;
  _capitalSpendingGrowth5Y: number;
  _cashFlowPerShareAnnual: number;
  _cashFlowPerShareTTM: number;
  _cashPerSharePerShareAnnual: number;
  _cashPerSharePerShareQuarterly: number;
  _currentDividendYieldTTM: number;
  _currentEvfreeCashFlowAnnual: number;
  _currentEvfreeCashFlowTTM: number;
  _currentRatioAnnual: number;
  _currentRatioQuarterly: number;
  _dividendGrowthRate5Y?: any;
  _dividendPerShare5Y: number;
  _dividendPerShareAnnual: number;
  _dividendYield5Y: number;
  _dividendYieldIndicatedAnnual: number;
  _dividendsPerShareTTM: number;
  _ebitdPerShareTTM: number;
  _ebitdaCagr5Y: number;
  _ebitdaInterimCagr5Y: number;
  _epsBasicExclExtraItemsAnnual: number;
  _epsBasicExclExtraItemsTTM: number;
  _epsExclExtraItemsAnnual: number;
  _epsExclExtraItemsTTM: number;
  _epsGrowth3Y: number;
  _epsGrowth5Y: number;
  _epsGrowthQuarterlyYoy: number;
  _epsGrowthTTMYoy: number;
  _epsInclExtraItemsAnnual: number;
  _epsInclExtraItemsTTM: number;
  _epsNormalizedAnnual: number;
  _focfCagr5Y: number;
  _freeCashFlowAnnual: number;
  _freeCashFlowPerShareTTM: number;
  _freeCashFlowTTM: number;
  _freeOperatingCashFlowrevenue5Y: number;
  _freeOperatingCashFlowrevenueTTM: number;
  _grossMargin5Y?: any;
  _grossMarginAnnual?: any;
  _grossMarginTTM?: any;
  _inventoryTurnoverAnnual?: any;
  _inventoryTurnoverTTM?: any;
  _longTermDebtequityAnnual: number;
  _longTermDebtequityQuarterly: number;
  _marketCapitalization: number;
  _monthToDatePriceReturnDaily: number;
  _netDebtAnnual: number;
  _netDebtInterim: number;
  _netIncomeEmployeeAnnual: number;
  _netIncomeEmployeeTTM: number;
  _netInterestCoverageAnnual: number;
  _netInterestCoverageTTM: number;
  _netMarginGrowth5Y: number;
  _netProfitMargin5Y: number;
  _netProfitMarginAnnual: number;
  _netProfitMarginTTM: number;
  _operatingMargin5Y: number;
  _operatingMarginAnnual: number;
  _operatingMarginTTM: number;
  _payoutRatioAnnual: number;
  _payoutRatioTTM: number;
  _pbAnnual: number;
  _pbQuarterly: number;
  _pcfShareTTM: number;
  _peBasicExclExtraTTM: number;
  _peExclExtraAnnual: number;
  _peExclExtraHighTTM: number;
  _peExclExtraTTM: number;
  _peExclLowTTM: number;
  _peInclExtraTTM: number;
  _peNormalizedAnnual: number;
  _pfcfShareAnnual: number;
  _pfcfShareTTM: number;
  _pretaxMargin5Y: number;
  _pretaxMarginAnnual: number;
  _pretaxMarginTTM: number;
  _priceRelativeToSP50013Week?: any;
  _priceRelativeToSP50026Week?: any;
  _priceRelativeToSP5004Week?: any;
  _priceRelativeToSP50052Week?: any;
  _priceRelativeToSP500Ytd?: any;
  _psAnnual: number;
  _psTTM: number;
  _ptbvAnnual?: any;
  _ptbvQuarterly?: any;
  _quickRatioAnnual?: any;
  _quickRatioQuarterly?: any;
  _receivablesTurnoverAnnual: number;
  _receivablesTurnoverTTM: number;
  _revenueEmployeeAnnual: number;
  _revenueEmployeeTTM: number;
  _revenueGrowth3Y: number;
  _revenueGrowth5Y: number;
  _revenueGrowthQuarterlyYoy: number;
  _revenueGrowthTTMYoy: number;
  _revenuePerShareAnnual: number;
  _revenuePerShareTTM: number;
  _revenueShareGrowth5Y: number;
  _roaRfy: number;
  _roaa5Y: number;
  _roae5Y: number;
  _roaeTTM: number;
  _roeRfy: number;
  _roeTTM: number;
  _roi5Y: number;
  _roiAnnual: number;
  _roiTTM: number;
  _tangibleBookValuePerShareAnnual: number;
  _tangibleBookValuePerShareQuarterly: number;
  _tbvCagr5Y?: any;
  _totalDebtCagr5Y: number;
  _totalDebttotalEquityAnnual: number;
  _totalDebttotalEquityQuarterly: number;
  _yearToDatePriceReturnDaily: number;
}

export interface PeriodData {
  period: string;
  v: number;
}

export interface MetricAnual {
  cashRatio: PeriodData[];
  currentRatio: PeriodData[];
  ebitPerShare: PeriodData[];
  eps: PeriodData[];
  grossMargin: PeriodData[];
  longtermDebtTotalAsset: PeriodData[];
  longtermDebtTotalCapital: PeriodData[];
  longtermDebtTotalEquity: PeriodData[];
  netDebtToTotalCapital: PeriodData[];
  netDebtToTotalEquity: PeriodData[];
  netMargin: PeriodData[];
  operatingMargin: PeriodData[];
  pretaxMargin: PeriodData[];
  salesPerShare: PeriodData[];
  sgaToSale: PeriodData[];
  totalDebtToEquity: PeriodData[];
  totalDebtToTotalAsset: PeriodData[];
  totalDebtToTotalCapital: PeriodData[];
  totalRatio: PeriodData[];
}

export interface StockMetric {
    assetTurnoverTTM: number;
    capitalExpenditureCoverageRatioTTM: number;
    cashConversionCycleTTM: number;
    cashFlowCoverageRatiosTTM: number;
    cashFlowToDebtRatioTTM: number;
    cashPerShareTTM: number;
    cashRatioTTM: number;
    companyEquityMultiplierTTM: number;
    currentRatioTTM: number;
    daysOfInventoryOutstandingTTM: number;
    daysOfPayablesOutstandingTTM: number;
    daysOfSalesOutstandingTTM: number;
    debtEquityRatioTTM: number;
    debtRatioTTM: number;
    dividendPaidAndCapexCoverageRatioTTM: number;
    dividendPerShareTTM: number;
    dividendYielPercentageTTM: number;
    dividendYielTTM: number;
    dividendYieldTTM: number;
    ebitPerRevenueTTM: number;
    ebtPerEbitTTM: number;
    effectiveTaxRateTTM: number;
    enterpriseValueMultipleTTM: number;
    fixedAssetTurnoverTTM: number;
    freeCashFlowOperatingCashFlowRatioTTM: number;
    freeCashFlowPerShareTTM: number;
    grossProfitMarginTTM: number;
    interestCoverageTTM: number;
    inventoryTurnoverTTM: number;
    longTermDebtToCapitalizationTTM: number;
    netIncomePerEBTTTM: number;
    netProfitMarginTTM: number;
    operatingCashFlowPerShareTTM: number;
    operatingCashFlowSalesRatioTTM: number;
    operatingCycleTTM: number;
    operatingProfitMarginTTM: number;
    payablesTurnoverTTM: number;
    payoutRatioTTM: number;
    peRatioTTM: number;
    pegRatioTTM: number;
    pretaxProfitMarginTTM: number;
    priceBookValueRatioTTM: number;
    priceCashFlowRatioTTM: number;
    priceEarningsRatioTTM: number;
    priceEarningsToGrowthRatioTTM: number;
    priceFairValueTTM: number;
    priceSalesRatioTTM: number;
    priceToBookRatioTTM: number;
    priceToFreeCashFlowsRatioTTM: number;
    priceToOperatingCashFlowsRatioTTM: number;
    priceToSalesRatioTTM: number;
    quickRatioTTM: number;
    receivablesTurnoverTTM: number;
    returnOnAssetsTTM: number;
    returnOnCapitalEmployedTTM: number;
    returnOnEquityTTM: number;
    shortTermCoverageRatiosTTM: number;
    totalDebtToCapitalizationTTM: number;
}

export interface MarketSymbols {
  category: string;
  currency: string;
  description: string;
  displaySymbol: string;
  name: string;
  symbol: string;
}

export interface GeneralMetrics {
  name: string,
  _grossMarginTTM: number,
  _netProfitMarginTTM: number,
  _peNormalizedAnnual: number,
  _roeTTM: number,
  capexNetIncomeRatio: number,
  debtNetIncomeRatio: number,
  category: string
  enterpriseValueMultipleTTM: number
}
export interface DividendsRatio {
  name: string,
  dividendsRatio: number
}

export interface CompanyInformation {
  industry: string;
  sector: string;
  symbol: string;
}

export interface CompanyPeers {
  group: string;
  peers: CompanyInformation[];
  average: AveragePeers;
}

export interface AveragePeers {
  _grossMarginTTM: number;
  _netProfitMarginTTM: number;
  _peNormalizedAnnual: number;
  _roeTTM: number;
}

export interface KeyMetrics {
  averageInventory: number;
  averagePayables: number;
  averageReceivables: number;
  bookValuePerShare: number;
  capexPerShare: number;
  capexToDepreciation: number;
  capexToOperatingCashFlow: number;
  capexToRevenue: number;
  cashPerShare: number;
  currentRatio: number;
  date: string;
  daysOfInventoryOnHand: number;
  daysPayablesOutstanding: number;
  daysSalesOutstanding: number;
  debtToAssets: number;
  debtToEquity: number;
  dividendYield: number;
  earningsYield: number;
  enterpriseValue: number;
  enterpriseValueOverEBITDA: number;
  evToFreeCashFlow: number;
  evToOperatingCashFlow: number;
  evToSales: number;
  freeCashFlowPerShare: number;
  freeCashFlowYield: number;
  grahamNetNet: number;
  grahamNumber: number;
  incomeQuality: number;
  intangiblesToTotalAssets: number;
  interestCoverage?: any;
  interestDebtPerShare: number;
  inventoryTurnover: number;
  investedCapital: number;
  marketCap: number;
  netCurrentAssetValue: number;
  netDebtToEBITDA: number;
  netIncomePerShare: number;
  operatingCashFlowPerShare: number;
  payablesTurnover: number;
  payoutRatio: number;
  pbRatio: number;
  peRatio: number;
  period: string;
  pfcfRatio: number;
  pocfratio: number;
  priceToSalesRatio: number;
  ptbRatio: number;
  receivablesTurnover: number;
  researchAndDdevelopementToRevenue: number;
  returnOnTangibleAssets: number;
  revenuePerShare: number;
  roe: number;
  roic: number;
  salesGeneralAndAdministrativeToRevenue: number;
  shareholdersEquityPerShare: number;
  stockBasedCompensationToRevenue: number;
  symbol: string;
  tangibleAssetValue?: any;
  tangibleBookValuePerShare: number;
  workingCapital: number;
}

export interface DCF {
  "Stock Price": number;
  date: string;
  dcf: number;
  symbol: string;
}

export interface DCFRatio {
  date: string;
  price: number;
  ratio: number;
  symbol: string;
  target_price: number;
}