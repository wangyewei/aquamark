
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.ts'],
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vitest-canvas-mock'],
      },
    },
    //@ts-ignore
    thread: false,
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    coverage: {
      provider: 'istanbul',
      include: ['src/**']
    }
  },
})