import { LiFiWidget } from '@lifi/widget';
import { createClient } from 'viem';
import { createConfig, http } from 'wagmi';
import { mainnet, arbitrum, optimism, scroll } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const wagmiConfig = createConfig({
  // Make sure to provide the full list of chains
  // you would like to support in the Widget
  // and keep them in sync, so all functionality
  // like switching chains can work correctly.
  chains: [mainnet, arbitrum, optimism, scroll],
  connectors: [injected()],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});