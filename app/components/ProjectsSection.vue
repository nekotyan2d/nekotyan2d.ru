<template>
    <section
        id="projects"
        class="projects">
        <div class="container">
            <h2 class="section-heading">Проекты</h2>

            <div class="projects__layout">
                <article
                    ref="featuredRef"
                    class="projects__featured">
                    <img
                        class="projects__featured-media"
                        :src="featured.preview"
                        alt="Скриншот интерфейса проекта Витязь"
                        loading="lazy"
                        decoding="async" />
                    <div class="projects__featured-body">
                        <h3 class="projects__name">Витязь</h3>
                        <p class="projects__desc">
                            Контроль доступа в помещения по QR со смартфона — без турникетов и спецоборудования.
                        </p>
                        <p class="projects__stack">{{ featured.stack.join(" · ") }}</p>
                        <div class="projects__links">
                            <a
                                v-for="link in featured.links"
                                :key="link.href"
                                :href="link.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                :class="link.accent ? 'projects__demo' : 'projects__github-link'"
                                >{{ link.label }}
                                <Icon
                                    v-if="link.icon"
                                    name="lucide:arrow-up-right"
                                    class="projects__link-icon"
                            /></a>
                        </div>
                    </div>
                </article>

                <div
                    ref="mainRef"
                    class="projects__grid">
                    <article
                        v-for="p in mainProjects"
                        :key="p.title"
                        class="projects__card">
                        <img
                            class="projects__card-media"
                            :src="p.preview"
                            :alt="`Скриншот интерфейса проекта ${p.title}`"
                            loading="lazy"
                            decoding="async" />
                        <div class="projects__card-body">
                            <h3 class="projects__name">{{ p.title }}</h3>
                            <p class="projects__desc">{{ p.description }}</p>
                            <p class="projects__stack">{{ p.stack.join(" · ") }}</p>
                            <div class="projects__links">
                                <a
                                    v-for="link in p.links"
                                    :key="link.href"
                                    :href="link.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    :class="link.accent ? 'projects__demo' : 'projects__github-link'"
                                    >{{ link.label }}
                                    <Icon
                                        v-if="link.icon"
                                        name="lucide:arrow-up-right"
                                        class="projects__link-icon"
                                /></a>
                            </div>
                        </div>
                    </article>
                </div>

                <div
                    ref="miniRef"
                    class="projects__mini">
                    <article
                        v-for="p in miniProjects"
                        :key="p.title"
                        class="projects__mini-card">
                        <h3 class="projects__mini-name">{{ p.title }}</h3>
                        <p class="projects__desc">{{ p.description }}</p>
                        <p class="projects__stack">{{ p.stack.join(" · ") }}</p>
                        <div class="projects__links">
                            <a
                                v-for="link in p.links"
                                :key="link.href"
                                :href="link.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                :class="link.accent ? 'projects__demo' : 'projects__github-link'"
                                >{{ link.label }}
                                <Icon
                                    v-if="link.icon"
                                    name="lucide:arrow-up-right"
                                    class="projects__link-icon"
                            /></a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProjectLink = {
    label: string;
    href: string;
    accent?: boolean;
    icon?: boolean;
};

const featured = {
    stack: ["Nuxt", "Fastify", "PostgreSQL", "Drizzle", "TypeScript"],
    preview: "/images/vityaz.webp",
    links: [
        { label: "Демо", href: "https://vityaz.nekotyan2d.ru", accent: true, icon: true },
        { label: "GitHub", href: "https://github.com/nekotyan2d/vityaz" },
    ] satisfies ProjectLink[],
};

const mainProjects = [
    {
        title: "cat-upvote",
        description:
            "Игра на сравнение рейтингов картинок с Reddit. Картинки и апвоуты собирает отдельный сервис-парсер.",
        stack: ["Nuxt", "TypeScript", "PostgreSQL"],
        preview: "/images/cat-upvote.webp",
        links: [
            { label: "Демо", href: "https://catreddit.nekotyan2d.ru", accent: true, icon: true },
            { label: "GitHub", href: "https://github.com/nekotyan2d/cat-upvote" },
            { label: "парсер", href: "https://github.com/nekotyan2d/reddit-post-parser", icon: true },
        ] satisfies ProjectLink[],
    },
    {
        title: "roadmap",
        description: "Визуализатор роадмапов: React-клиент + API на Go.",
        stack: ["React", "TypeScript", "Go", "Docker", "CI"],
        preview: "/images/roadmap.webp",
        links: [
            { label: "Демо", href: "https://nekotyan2d.github.io/roadmap-react", accent: true, icon: true },
            { label: "GitHub", href: "https://github.com/nekotyan2d/roadmap-react" },
        ] satisfies ProjectLink[],
    },
];

const miniProjects = [
    {
        title: "wikilink",
        description: "Мини-игра: дойти от одной статьи Википедии до другой.",
        stack: ["TypeScript", "Vue"],
        links: [
            { label: "Демо", href: "https://nekotyan2d.github.io/wikilink", accent: true, icon: true },
            { label: "GitHub", href: "https://github.com/nekotyan2d/wikilink" },
        ] satisfies ProjectLink[],
    },
    {
        title: "incrify",
        description: "Утилита для создания инкрементальных бэкапов.",
        stack: ["C++"],
        links: [{ label: "GitHub", href: "https://github.com/nekotyan2d/incrify" }] satisfies ProjectLink[],
    },
    {
        title: "where-am-i",
        description: "Расширение для браузера — показывает страну по IP-геолокации.",
        stack: ["JavaScript"],
        links: [{ label: "GitHub", href: "https://github.com/nekotyan2d/where-am-i" }] satisfies ProjectLink[],
    },
];

const featuredRef = ref<HTMLElement | null>(null);
const mainRef = ref<HTMLElement | null>(null);
const miniRef = ref<HTMLElement | null>(null);

onMounted(() => {
    const allCards = [
        featuredRef.value,
        ...(mainRef.value?.querySelectorAll(".projects__card") ?? []),
        ...(miniRef.value?.querySelectorAll(".projects__mini-card") ?? []),
    ];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(allCards, { opacity: 1 });
        return;
    }

    gsap.fromTo(
        featuredRef.value,
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: featuredRef.value, start: "top 85%" },
        },
    );

    const mainCards = mainRef.value?.querySelectorAll(".projects__card");
    if (mainCards?.length) {
        gsap.fromTo(
            mainCards,
            { y: 32, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: { trigger: mainRef.value, start: "top 85%" },
            },
        );
    }

    const miniCards = miniRef.value?.querySelectorAll(".projects__mini-card");
    if (miniCards?.length) {
        gsap.fromTo(
            miniCards,
            { y: 24, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: { trigger: miniRef.value, start: "top 85%" },
            },
        );
    }
});
</script>

<style scoped lang="scss">
.projects {
    padding: clamp(4rem, 8vh, 6rem) 0;
    border-top: 1px solid var(--border);

    .section-heading {
        margin-bottom: 2rem;
    }

    &__layout {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    // Featured
    &__featured {
        opacity: 0;
        display: grid;
        grid-template-columns: 55% 45%;
        border: 1px solid rgba(0, 158, 137, 0.25);
        border-radius: 12px;
        overflow: hidden;
        transition: border-color 0.2s ease;

        &:hover {
            border-color: rgba(0, 158, 137, 0.5);
        }
    }

    &__featured-media {
        background: var(--surface);
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    &__featured-body {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
    }

    // Main grid
    &__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    &__card {
        opacity: 0;
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        transition: border-color 0.2s ease;

        &:hover {
            border-color: rgba(0, 158, 137, 0.3);
        }
    }

    &__card-media {
        background: var(--surface);
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    &__card-body {
        padding: 1.25rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    // Mini grid
    &__mini {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    &__mini-card {
        opacity: 0;
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        transition: border-color 0.2s ease;

        &:hover {
            border-color: rgba(0, 158, 137, 0.3);
        }
    }

    // Shared text styles
    &__name,
    &__mini-name {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text);
    }

    &__desc {
        font-size: 0.9375rem;
        color: var(--text-muted);
        line-height: 1.5;
    }

    &__stack {
        font-size: 0.8125rem;
        color: var(--text-muted);
    }

    &__links {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 0.25rem;
    }

    &__demo,
    &__github-link {
        display: inline-flex;
        align-items: center;
        gap: 0.2rem;
    }

    &__demo {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--accent-text);
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 0.8;
        }
    }

    &__link-icon {
        width: 0.8125rem;
        height: 0.8125rem;
    }

    &__github-link {
        font-size: 0.875rem;
        color: var(--text-muted);
        transition: color 0.2s ease;

        &:hover {
            color: var(--text);
        }
    }

    @media (max-width: 768px) {
        &__featured {
            grid-template-columns: 1fr;
        }

        &__grid {
            grid-template-columns: 1fr;
        }

        &__mini {
            grid-template-columns: 1fr 1fr;
        }
    }
}
</style>
