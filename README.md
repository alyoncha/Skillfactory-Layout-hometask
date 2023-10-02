# Vite 4 + Vue 3 сборка

## Примечание 
Сборщик написан на node 16 с пакетным менеджером npm, убедитесь что ваша версия node не ниже 16.<br>
<br><br>

## Начало работы
Для начала необходимо загрузить пакеты командой `npm i` в корне проекта <br><br>
## Вариации сборки: <br>
### Developer mode
`npm run dev` - для запуска dev сервера по адресу http://localhost:8080/ <br>
(При dev моде сборки не будет собрана конечная папка dist)<br><br>
### Production mode
`npm run build` - для prod сборки, собирает конечную папку dist <br>
(Не поднимает локальный сервер, заменяет все пути указанные при разработке относительно папки src на пути относительно папки dist и её папочной структуры)<br><br>
### Preview mode
`npm run preview` - позволяет проверить prod сборку с запуском локального сервера по адресу http://localhost:4173/<br>
(Работает только в связке с prod билдом поскольку хостит сервер на основе конечной папки dist, а не src как dev mode)<br><br>

## Папочная структура <br>
Построена на основе архитектуры веб-приложений FSD (Feature Slice Design)<br>
Подробнее об архитектуре: https://feature-sliced.design/ <br><br>

## В сборке используются: 
### Плагины Vite
1) Vite плагин для Vue
2) Vite плагин imgaemin <br>
### Кастомные плагины для Vite
1) Конвертор jpg/png в webp формат (на основе пакетов imagemin/imagemin-webp)
2) SvgSprite (на основе пакета svg-sprite)<br><br>

## Используемые зависимости
### Dev зависимости
1) autoprefixer - Настроен с параметрами конфигурации по умолчанию
2) husky - Работает в связке с lint-staged + prettier для форматирования файлов при git commit -m "" (Чтобы работал prettier при commit'e запустите команду `npm run prepare`)
3) lint-staged - Запускается husky при git commit -m ""
4) postcss - Для работы с tailwind в режиме post
5) prettier - Форматер файлов при commit'e
6) sass - css препроцессор
7) tailwindcss - css постпроцессор<br>
### Глобальные зависимости
1) fancyboxapps/ui - UI библиотека модальных окон/карусель/панзум
2) axios - Promise ориентированный http клиент для браузерного и серверного js
3) swiper - UI библиотека слайдера
4) vee-validate - Валидация форм
5) yup - Конструктор схем js для анализа и проверки значений# Skillfactory-Layout-hometask
