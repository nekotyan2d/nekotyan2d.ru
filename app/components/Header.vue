<template>
    <header :class="['header', { 'header--scrolled': scrolled }]">
        <div class="container header__inner">
            <a
                href="#"
                class="header__logo"
                >Дмитрий Рычажков</a
            >
            <nav class="header__nav">
                <a href="#projects">Проекты</a>
                <a href="#skills">Навыки</a>
                <a
                    href="https://github.com/nekotyan2d"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="header__github">
                    GitHub
                    <Icon
                        name="lucide:arrow-up-right"
                        class="header__arrow" />
                </a>
                <button
                    class="header__theme"
                    type="button"
                    :aria-label="`Переключить на ${isDark ? 'светлую' : 'тёмную'} тему`"
                    @click="toggleTheme">
                    <ClientOnly>
                        <Icon
                            :name="isDark ? 'lucide:sun' : 'lucide:moon'"
                            :size="16" />
                        <template #fallback>
                            <Icon name="lucide:sun-moon" />
                        </template>
                    </ClientOnly>
                </button>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

function toggleTheme() {
    colorMode.preference = isDark.value ? "light" : "dark";
}

const scrolled = ref(false);

function onScroll() {
    scrolled.value = window.scrollY > 40;
}

onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.5rem 0;
    border-bottom: 1px solid transparent;
    transition:
        background-color 0.3s ease,
        backdrop-filter 0.3s ease,
        border-color 0.3s ease;

    &--scrolled {
        background-color: color-mix(in srgb, var(--bg) 80%, transparent);
        backdrop-filter: blur(12px);
        border-bottom-color: var(--border);
    }

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        font-size: 0.9375rem;
        font-weight: 500;
        letter-spacing: -0.01em;
        color: var(--text);
    }

    &__nav {
        display: flex;
        align-items: center;
        gap: 2rem;

        a {
            font-size: 0.875rem;
            color: var(--nav-text);
            transition: color 0.2s ease;

            &:hover {
                color: var(--text);
            }
        }
    }

    &__github {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--text) !important;
        font-weight: 500;
    }

    &__arrow {
        width: 0.875rem;
        height: 0.875rem;
        transition: transform 0.2s ease;

        .header__github:hover & {
            transform: translate(2px, -2px);
        }
    }

    &__theme {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--text-muted);
        transition: color 0.2s ease;

        &:hover {
            color: var(--text);
        }
    }
}
</style>
