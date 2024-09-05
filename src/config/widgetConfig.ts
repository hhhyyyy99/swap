import { ChainId, createConfig } from '@lifi/sdk';
import type { WidgetConfig } from '@lifi/widget';

createConfig({
  integrator: 'TestSwap', // 你的应用或公司名称
  // apiKey: 'YOUR_API_KEY', // 如果你有 API 密钥
  // apiUrl: 'https://li.quest/v1', // 如果需要，可以自定义 API 端点
});

export const widgetConfig: Partial<WidgetConfig> = {
};
