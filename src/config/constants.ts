export const TEST_CONFIG = {
    BASE_URL: 'https://qatest.datasub.com',
    TIMEOUT: {
        DEFAULT: 30000,
        SHORT: 5000,
        LONG: 60000
    },
    RETRY_COUNT: 1
};

export const FORM_DATA = {
    VALID: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        service: 'Select B Service',
        accountPurpose: 'Business' as const,
        withdrawOptions: ['Cash', 'Card', 'Cryptocurrency'],
        message: 'This is a test message'
    },
    INVALID: {
        name: '',
        email: 'invalid-email',
        service: 'Select A Service',
        accountPurpose: 'Personal' as const,
        withdrawOptions: [],
        message: ''
    }
};
