import { Page, Locator } from '@playwright/test';

export class SubscriptionFormPage {
    private page: Page;
    
    // Локаторы полей формы
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly serviceSelect: Locator;
    readonly businessRadio: Locator;
    readonly personalRadio: Locator;
    readonly cashCheckbox: Locator;
    readonly cardCheckbox: Locator;
    readonly cryptoCheckbox: Locator;
    readonly messageTextarea: Locator;
    readonly submitButton: Locator;
    readonly formStatus: Locator;
    readonly formContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Инициализация локаторов
        this.formContainer = page.locator('#subscriptionForm');
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.serviceSelect = page.locator('#service');
        this.businessRadio = page.locator('#purposeBusiness');
        this.personalRadio = page.locator('#purposePersonal');
        this.cashCheckbox = page.locator('#withdrawCash');
        this.cardCheckbox = page.locator('#withdrawCard');
        this.cryptoCheckbox = page.locator('#withdrawCrypto');
        this.messageTextarea = page.locator('#message');
        this.submitButton = page.locator('#subscriptionForm button[type="submit"]');
        this.formStatus = page.locator('#formStatus');
    }

    async scrollToForm() {
        await this.formContainer.scrollIntoViewIfNeeded();
    }

    async fillForm(data: {
        name: string;
        email: string;
        service: string;
        accountPurpose: 'Business' | 'Personal';
        withdrawOptions: string[];
        message: string;
    }) {
        await this.scrollToForm();
        await this.nameInput.fill(data.name);
        await this.emailInput.fill(data.email);
        await this.serviceSelect.selectOption(data.service);
        // Ждем, пока дропдаун закроется
        await this.page.waitForTimeout(500);
        
        if (data.accountPurpose === 'Business') {
            await this.businessRadio.check();
        } else {
            await this.personalRadio.check();
        }

        for (const option of data.withdrawOptions) {
            switch (option) {
                case 'Cash':
                    await this.cashCheckbox.check();
                    break;
                case 'Card':
                    await this.cardCheckbox.check();
                    break;
                case 'Cryptocurrency':
                    await this.cryptoCheckbox.check();
                    break;
            }
        }

        await this.messageTextarea.fill(data.message);
    }

    async submitForm() {
        await this.scrollToForm();
        await this.submitButton.click();
    }

    async isFormSubmitted(): Promise<boolean> {
        return await this.formStatus.isVisible();
    }
} 