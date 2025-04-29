import { expect, Locator } from '@playwright/test';

export class Assertions {
    static async elementIsVisible(element: Locator, timeout?: number): Promise<void> {
        await expect(element).toBeVisible({ timeout });
    }

    static async elementIsNotVisible(element: Locator, timeout?: number): Promise<void> {
        await expect(element).not.toBeVisible({ timeout });
    }

    static async elementHasText(element: Locator, text: string): Promise<void> {
        await expect(element).toHaveText(text);
    }

    static async elementContainsText(element: Locator, text: string): Promise<void> {
        await expect(element).toContainText(text);
    }

    static async formIsSubmitted(formStatus: Locator): Promise<void> {
        await this.elementIsVisible(formStatus);
    }

    static async formIsNotSubmitted(formStatus: Locator): Promise<void> {
        await this.elementIsNotVisible(formStatus);
    }

    static async emailIsInvalid(emailInput: Locator): Promise<void> {
        await expect(emailInput).toHaveClass(/is-invalid/, { timeout: 5000 });
    }

    static async emailIsValid(emailInput: Locator): Promise<void> {
        await expect(emailInput).not.toHaveClass(/is-invalid/, { timeout: 5000 });
    }
}
