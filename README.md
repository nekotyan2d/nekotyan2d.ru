# nekotyan2d.ru

[![Сайт](https://img.shields.io/badge/сайт-nekotyan2d.ru-009e89)](https://nekotyan2d.ru)
[![Build](https://github.com/nekotyan2d/nekotyan2d.ru/actions/workflows/build.yml/badge.svg)](https://github.com/nekotyan2d/nekotyan2d.ru/actions/workflows/build.yml)

Личный сайт-портфолио. Минимализм, светлая и темная темы, анимированный glow-фон на hero, анимации появления при скролле.

![Превью сайта](./screenshots/preview.png)

## Стек

- **Nuxt 4** (SSG) + Vue 3, TypeScript
- **SCSS** + CSS-переменные для тем
- **GSAP** — анимации, ScrollTrigger
- **@nuxt/fonts** (self-host Inter), **@nuxt/icon**, **@nuxtjs/color-mode**

## Разработка

```bash
bun install
bun run dev # http://localhost:3000
```

## Сборка

```bash
bun run generate # статика в .output/public
```

## Docker

```bash
docker build -t nekotyan2d .
docker run --rm -p 8080:80 nekotyan2d   # http://localhost:8080
```
