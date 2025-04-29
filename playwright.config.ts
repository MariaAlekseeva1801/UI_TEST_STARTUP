import { defineConfig } from '@playwright/test';
import { TEST_CONFIG } from './src/config/constants';

export default defineConfig({
    testDir: './src/tests',
    timeout: TEST_CONFIG.TIMEOUT.DEFAULT,
    retries: TEST_CONFIG.RETRY_COUNT,
    workers: 1,
    reporter: [
        ['list'],
        ['html', { outputFolder: 'test-results' }],
        ['allure-playwright', {
            detail: true,
            outputFolder: 'allure-results',
            suiteTitle: true,
            environmentInfo: {
                browser: 'Chrome'
            }
        }]
    ],
    use: {
        baseURL: TEST_CONFIG.BASE_URL,
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: TEST_CONFIG.TIMEOUT.SHORT,
        navigationTimeout: TEST_CONFIG.TIMEOUT.DEFAULT,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'UI Tests',
            use: { 
                channel: 'chrome'
            },
        }
    ],
}); 