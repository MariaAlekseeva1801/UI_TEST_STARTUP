import { test, expect } from '@playwright/test';
import { SubscriptionFormPage } from '../pages/SubscriptionFormPage';
import { FORM_DATA } from '../config/constants';
import { Assertions } from '../helpers/assertions';
import { Logger } from '../utils/logger';

test.describe('Subscription Form Tests', () => {
    let subscriptionForm: SubscriptionFormPage;
    let logger: Logger;

    test.beforeEach(async ({ page }, testInfo) => {
        logger = new Logger(testInfo);
        subscriptionForm = new SubscriptionFormPage(page);
        await page.goto('/');
        logger.step('Навигация на главную страницу');
    });

    test('Happy Path - Successful form submission', async () => {
        logger.step('Заполнение формы валидными данными');
        await subscriptionForm.fillForm(FORM_DATA.VALID);
        
        logger.step('Проверка валидности email');
        await Assertions.emailIsValid(subscriptionForm.emailInput);
        
        logger.step('Отправка формы');
        await subscriptionForm.submitForm();
        
        logger.step('Проверка успешной отправки формы');
        await Assertions.formIsSubmitted(subscriptionForm.formStatus);
    });

    test('Negative Case - Invalid email format', async () => {
        logger.step('Заполнение формы с невалидным email');
        await subscriptionForm.fillForm(FORM_DATA.INVALID);
        
        logger.step('Активация валидации email');
        await subscriptionForm.emailInput.blur();
        
        logger.step('Проверка невалидности email');
        await Assertions.emailIsInvalid(subscriptionForm.emailInput);
        
        logger.step('Отправка формы');
        await subscriptionForm.submitForm();
        
        logger.step('Проверка неуспешной отправки формы');
        await Assertions.formIsNotSubmitted(subscriptionForm.formStatus);
    });
});             