interface BravaAnalytics {
  readonly consent: 'granted' | 'denied' | 'pending';
  track: (eventName: string, parameters?: Record<string, string | number | boolean>) => boolean;
  grant: () => void;
  deny: () => void;
  openPreferences: () => void;
}

interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  bravaAnalytics?: BravaAnalytics;
}
