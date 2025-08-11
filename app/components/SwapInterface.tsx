
'use client';

import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast
} from '@coinbase/onchainkit/swap';
import { useState } from 'react';

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

const DAIToken = {
  address: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
  chainId: 8453,
  decimals: 18,
  name: 'Dai Stablecoin',
  symbol: 'DAI',
  image: 'https://coin-images.coingecko.com/coins/images/9956/thumb/Badge_Dai.png'
};

const WETHToken = {
  address: '0x4200000000000000000000000000000000000006',
  chainId: 8453,
  decimals: 18,
  name: 'Wrapped Ether',
  symbol: 'WETH',
  image: 'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/weth_288.png'
};

const swappableTokens = [ETHToken, USDCToken, DAIToken, WETHToken];

export default function SwapInterface() {
  const [isSwapping, setIsSwapping] = useState(false);

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Token Swap
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Swap your tokens with minimal fees
        </p>
      </div>

      <Swap
        onSuccess={() => {
          console.log('Swap successful!');
          setIsSwapping(false);
        }}
        onError={(error) => {
          console.error('Swap failed:', error);
          setIsSwapping(false);
        }}
      >
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <SwapAmountInput
              label="From"
              token={ETHToken}
              type="from"
              swappableTokens={swappableTokens}
              className="bg-transparent border-none focus:ring-0"
            />
          </div>

          <div className="flex justify-center">
            <SwapToggleButton className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 rounded-full p-2 transition-all duration-200" />
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <SwapAmountInput
              label="To"
              token={USDCToken}
              type="to"
              swappableTokens={swappableTokens}
              className="bg-transparent border-none focus:ring-0"
            />
          </div>

          <SwapButton
            onSubmit={() => setIsSwapping(true)}
            disabled={isSwapping}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200"
          >
            {isSwapping ? 'Swapping...' : 'Swap Tokens'}
          </SwapButton>

          <SwapMessage className="text-center text-sm text-gray-600 dark:text-gray-300" />
        </div>
      </Swap>

      <SwapToast />

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
          💡 Swap Features
        </h3>
        <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Low fees on Base network</li>
          <li>• Fast transaction confirmation</li>
          <li>• Support for major tokens</li>
          <li>• Real-time price updates</li>
        </ul>
      </div>
    </div>
  );
}
