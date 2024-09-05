'use client';

import { ClientOnly } from '@/ClientOnly';
import type { WidgetConfig } from '@lifi/widget';
import { LiFiWidget, WidgetSkeleton } from '@lifi/widget';

export function Widget() {
  const config = {
    variant: 'wide',
    appearance: 'light',
    hiddenUI:["walletMenu","poweredBy"],
    theme: {
      container: {
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
        borderRadius: '16px',
      },
    },
    tokens: {
      // Featured tokens will appear on top of the list
      featured: [
        {
          address: '0x2fd6c9b869dea106730269e13113361b684f843a',
          symbol: 'CHH',
          decimals: 9,
          chainId: 56,
          name: 'Chihuahua',
          logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21334.png',
        },
      ],
      // Include any token to the list
      include: [
        {
          address: '0xba98c0fbebc892f5b07a42b0febd606913ebc981',
          symbol: 'MEH',
          decimals: 18,
          chainId: 1,
          name: 'meh',
          logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22158.png',
        },
      ],
      // To deny a token it is required to specify the chainId and address only
      deny: [
        {
          address: '0x4200000000000000000000000000000000000006',
          chainId: 10,
        },
        {
          address: '0x0000000000000000000000000000000000000000',
          chainId: 10,
        },
      ],
    },
  } as Partial<WidgetConfig>;

  return (
    <div>
      <ClientOnly fallback={<WidgetSkeleton config={config} />}>
        <LiFiWidget config={config} integrator="nextjs-example" />
      </ClientOnly>
    </div>
  );
}