# AGENTS.md

## О проекте

**Stud Progress** — мобильное приложение на Expo / React Native для отслеживания учебного прогресса.

Проект написан по архитектуре **FSD (Feature-Sliced Design)**. Её нужно соблюдать при любых изменениях.

## Стек

- Expo 54
- React 19
- React Native 0.81
- TypeScript (`strict: true`)
- Expo Router
- TanStack React Query + persist client
- Axios
- React Native AsyncStorage
- React Native Unistyles
- React Native Reanimated / Worklets
- React Native Skia
- React Native Firebase (`app`, `analytics`)
- Expo Notifications

## Технические соглашения

- Пакетный менеджер: `npm` (`package-lock.json` в репозитории)
- TypeScript alias: `@/* -> src/*`
- Основной роутинг задаётся в папке `app/`
- Вся бизнес-логика и UI находятся в `src/`
- Типичный для FSD слой `pages` переименован в `screens`
- Все файлы, содержащие компонент именуются, как `СamelCase`, остальные `kebab-case`
- Переменные окружения берутся из `process.env.EXPO_PUBLIC_*`

## Ключевые команды

Запуск и разработка:

```bash
npm run prebuild
npm run start
npm run android
npm run ios
npm run web
```

Полезные команды для локальной проверки:

```bash
npx tsc --noEmit
npx prettier . --check
npx prettier . --write
```

## Самопроверка перед завершением задачи

Если вносились изменения в код, агент должен по возможности пройти этот чек-лист:

1. Убедиться, что новый код соответствует архитектуре FSD.
2. Запустить `npx tsc --noEmit`.
3. Запустить `npx prettier . --check`.

## Что важно учитывать агентам

- В проекте нет отдельных настроенных `lint` и `test` скриптов в `package.json`, поэтому основной базовый контроль сейчас — это TypeScript, Prettier.
- Форматирование управляется через Prettier.
- Для UI- и layout-изменений учитывайте, что проект работает через `expo-router`, а layout'ы и провайдеры заведены в `src/app` и `app/_layout.ts*`.
- Для сетевого и кэш-слоя используется React Query, поэтому изменения в API-хуках и ключах запросов нужно проверять особенно внимательно.
