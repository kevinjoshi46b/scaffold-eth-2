import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { useProvider } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";
import { fetchPriceFromUniswap } from "~~/utils/scaffold-eth";

const enablePolling = false;

/**
 * Get the price of ETH based on ETH/DAI trading pair from Uniswap SDK
 * @returns nativeCurrencyPrice: number
 */
export const useNativeCurrency = () => {
  const provider = useProvider({ chainId: 1 });
  const [nativeCurrencyPrice, setNativeCurrency] = useState(0);

  // Get the price of ETH from Uniswap on mount
  useEffect(() => {
    (async () => {
      const price = await fetchPriceFromUniswap(provider);
      setNativeCurrency(price);
    })();
  }, [provider]);

  // Get the price of ETH from Uniswap at a given interval
  useInterval(
    async () => {
      const price = await fetchPriceFromUniswap(provider);
      setNativeCurrency(price);
    },
    enablePolling ? scaffoldConfig.pollingInterval : null,
  );

  return nativeCurrencyPrice;
};