'use client';

import { 
  Swap, 
  SwapAmountInput, 
  SwapToggleButton, 
  SwapButton, 
  SwapMessage, 
  SwapToast 
} from "@coinbase/onchainkit/swap";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { useEffect } from "react";

const ETHToken = {
  address: '',
  chainId: 8453,
  decimals: 18,
  name: 'Ethereum',
  symbol: 'ETH',
  image: 'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png'
};

const USDCToken = {
  address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
  chainId: 8453,
  decimals: 6,
  name: 'USDC',
  symbol: 'USDC',
  image: 'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213-ZWUzYjJmZGUtMDYxNy00NDcyLTkyNzQtNWJjNzYxYTNiYjFj'
};

export default function SwapPage() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className="max-w-md mx-auto p-4">
      <Swap>
        <SwapAmountInput
          label="Sell"
          token={ETHToken}
          type="from"
          swappableTokens={[ETHToken, USDCToken]}
        />
        <SwapToggleButton />
        <SwapAmountInput
          label="Buy"
          token={USDCToken}
          type="to"
          swappableTokens={[ETHToken, USDCToken]}
        />
        <SwapButton />
        <SwapMessage />
        <SwapToast />
      </Swap>
    </div>
  );
}
  