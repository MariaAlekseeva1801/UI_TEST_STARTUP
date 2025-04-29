import { TestInfo } from '@playwright/test';

export class Logger {
    private testInfo: TestInfo;

    constructor(testInfo: TestInfo) {
        this.testInfo = testInfo;
    }

    log(message: string): void {
        console.log(`[${this.testInfo.title}] ${message}`);
    }

    error(message: string): void {
        console.error(`[${this.testInfo.title}] ERROR: ${message}`);
    }

    step(stepName: string): void {
        this.log(`STEP: ${stepName}`);
    }
}
