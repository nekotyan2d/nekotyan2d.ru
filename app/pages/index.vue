<template>
    <section class="hero">
        <HeroBlob />

        <div class="container">
            <div class="hero__content">
                <h1
                    ref="headlineRef"
                    class="hero__headline">
                    Строю веб‑интерфейсы и то, что стоит за ними
                </h1>
                <p
                    ref="subtitleRef"
                    class="hero__subtitle">
                    Довожу до рабочего продукта то, что мне самому нужно.
                </p>
                <div
                    ref="actionsRef"
                    class="hero__actions">
                    <a
                        href="#projects"
                        class="btn btn--primary">
                        К проектам
                        <Icon
                            name="lucide:arrow-down"
                            class="btn__icon" />
                    </a>
                    <a
                        href="https://github.com/nekotyan2d"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hero__actions-link">
                        GitHub
                        <Icon
                            name="lucide:arrow-up-right"
                            class="hero__actions-icon" />
                    </a>
                </div>
            </div>
        </div>

        <div
            ref="chevronRef"
            class="hero__chevron"
            aria-hidden="true">
            <Icon name="lucide:chevron-down" />
        </div>
    </section>

    <SkillsSection />
    <ProjectsSection />
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const headlineRef = ref<HTMLElement | null>(null);
const subtitleRef = ref<HTMLElement | null>(null);
const actionsRef = ref<HTMLElement | null>(null);
const chevronRef = ref<HTMLElement | null>(null);

onMounted(() => {
    const targets = [headlineRef.value, subtitleRef.value, actionsRef.value, chevronRef.value];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1 });
        return;
    }

    gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.3,
    });
});
</script>

<style scoped lang="scss">
.hero {
    position: relative;
    height: 100svh;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-top: 5rem;

    .container {
        position: relative;
        z-index: 1;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        max-width: 580px;
    }

    &__headline,
    &__subtitle,
    &__actions,
    &__chevron {
        opacity: 0;
    }

    &__headline {
        font-size: clamp(2rem, 4vw, 3.25rem);
        font-weight: 600;
        line-height: 1.05;
        letter-spacing: -0.02em;
        color: var(--text);
    }

    &__subtitle {
        font-size: clamp(1rem, 2vw, 1.25rem);
        font-weight: 400;
        line-height: 1.6;
        color: var(--text-muted);
    }

    &__actions {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-top: 0.5rem;
    }

    &__actions-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.9375rem;
        color: var(--text-muted);
        transition: color 0.2s ease;

        &:hover {
            color: var(--text);
        }
    }

    &__actions-icon {
        width: 0.875rem;
        height: 0.875rem;
    }

    &__chevron {
        position: absolute;
        bottom: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
        color: var(--text-muted);
        animation: chevronBounce 2s ease-in-out infinite 1.5s;

        svg {
            width: 20px;
            height: 20px;
        }
    }
}

@keyframes chevronBounce {
    0%,
    100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(5px);
    }
}
</style>
