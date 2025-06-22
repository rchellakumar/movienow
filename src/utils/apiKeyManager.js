// src/utils/apiKeyManager.js

const API_KEYS = import.meta.env.VITE_BACKEND_API_KEYS.split(",");
const LIMIT = 100;
const WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

const keyUsage = API_KEYS.map(() => ({ count: 0, windowStart: 0 }));

export function getAvailableApiKey() {
  const now = Date.now();

  for (let i = 0; i < API_KEYS.length; i++) {
    const usage = keyUsage[i];

    if (now - usage.windowStart >= WINDOW) {
      usage.windowStart = now;
      usage.count = 0;
    }

    if (usage.count < LIMIT) {
      usage.count++;
      return API_KEYS[i];
    }
  }

  return null; // All keys are still on cooldown
}
