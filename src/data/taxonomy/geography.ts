export const SUPPORTED_STATES = ["TX", "US"] as const;
export type SupportedState = typeof SUPPORTED_STATES[number];
