# UI Автоматизация тестирования

![Playwright](https://img.shields.io/badge/Playwright-2E3A59?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-FF4B4B?style=for-the-badge&logo=allure&logoColor=white)

## 📋 Описание проекта

Проект представляет собой автоматизированную систему тестирования пользовательского интерфейса, построенную на следующих технологиях:

- **Playwright** - современный фреймворк для автоматизации тестов
- **TypeScript** - строго типизированный язык программирования
- **Allure** - система отчетности для тестов

## 🚀 Возможности

- Автоматизированное тестирование веб-форм
- Подробное логирование шагов тестирования
- Генерация красивых отчетов в Allure
- Поддержка различных сценариев тестирования (позитивные и негативные)
- Интеграция с CI/CD

## 🛠️ Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/MariaAlekseeva1801/Startup.git
cd UI_TEST_STARTUP
```

2. Установите зависимости:
```bash
npm install
```

## 🧪 Запуск тестов

### Запуск всех тестов
```bash
npx playwright test
```

### Запуск тестов с Allure отчетом
```bash
npx playwright test --reporter=allure-playwright
npx allure serve
```

### Запуск тестов в режиме отладки
```bash
npx playwright test --debug
```

## 📊 Структура проекта

```
├── src/
│   ├── config/          # Конфигурационные файлы
│   ├── helpers/         # Вспомогательные функции
│   ├── pages/           # Page Object модели
│   ├── tests/           # Тестовые сценарии
│   └── utils/           # Утилиты
├── allure-results/      # Результаты Allure
├── test-results/        # Результаты тестов
└── playwright.config.ts # Конфигурация Playwright
```

## 🔧 Конфигурация

Основные настройки проекта находятся в файле `playwright.config.ts`:

- Таймауты
- Настройки браузера
- Конфигурация репортеров
- Параметры окружения

## 📝 Тестовые сценарии

### Форма подписки
- Успешная отправка формы
- Валидация email
- Проверка обязательных полей
- Валидация опций вывода средств

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой фичи (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в репозиторий (`git push origin feature/amazing-feature`)
5. Создайте Pull Request



## 📧 Контакты

Мария - marialexeeva1801@gmail.com

