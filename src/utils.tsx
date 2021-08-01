import { Dividend, CompanyProfile, StockMetric, MarketSymbols, GeneralMetrics, DividendsRatio, CompanyPeers} from "./models";

const URL = "https://api.cheapstocks.app"
const DIVIDENDS = "dividends"
const INFO = "info"
const METRICS = "metrics"

function download_data(market: string, ticker: string, path: string) {

  return fetch(`${URL}/markets/${market}/${path}/${ticker}.json`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function get_dividends(market: string, ticker: string): Promise<void | Dividend[] | null | undefined> {
  return download_data(market, ticker, DIVIDENDS)
    .then(response => {
      if (response != null) {
        return response
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export function get_info(market: string, ticker: string): Promise<void | CompanyProfile | null | undefined> {
  return download_data(market, ticker, INFO)
    .then(response => {
      if (response != null) {
        return response
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export function get_tickers(market: string): Promise<void | MarketSymbols[] | null | undefined> {

  return fetch(`${URL}/markets/${market}/tickers.json`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function get_dividends_rate(market: string): Promise<void | DividendsRatio[] | null | undefined> {

  return fetch(`${URL}/markets/${market}/dividendsRate.json`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function get_stock_metrics(market: string, ticker: string): Promise<void | StockMetric[] | null | undefined> {

  return download_data(market, ticker, METRICS)
    .then(response => {
      if (response != null) {
        return response
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export function get_metrics(market: string): Promise<void | GeneralMetrics[] | null | undefined> {

  return fetch(`${URL}/markets/${market}/general_metrics.json`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function get_peers(market: string): Promise<void | CompanyPeers[] | null | undefined> {

  return fetch(`${URL}/markets/${market}/peers.json`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function get_markets(): Promise<void | string[] | null | undefined> {

  return fetch(`${URL}/markets.json`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function get_all_symbols(markets: string[]): {symbol: string, market: string, description: string}[] {

  let tickers = [] as {symbol: string, market: string, description: string}[]
  markets.forEach(market => {
    get_tickers(market).then(response => {
      let resp = response as MarketSymbols[]
      resp.forEach(ticker  => {
        tickers.push({
          symbol: ticker.symbol,
          description: ticker.description,
          market: market,
        })
      });
      tickers.push({
        symbol: market,
        market: market,
        description: `${market} Exchange`
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      return tickers
    });;
  })

  return tickers
}