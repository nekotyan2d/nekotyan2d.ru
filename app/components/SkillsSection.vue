<template>
    <section
        id="skills"
        class="skills">
        <div class="container">
            <h2 class="section-heading">Навыки</h2>
            <div
                ref="gridRef"
                class="skills__grid">
                <div
                    v-for="group in groups"
                    :key="group.label"
                    class="skills__group">
                    <p class="skills__label">{{ group.label }}</p>
                    <ul class="skills__list">
                        <li
                            v-for="skill in group.skills"
                            :key="skill.name">
                            <Icon
                                :name="skill.icon"
                                class="skills__icon" />
                            <span>{{ skill.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const groups = [
    {
        label: "Frontend",
        skills: [
            { name: "Vue", icon: "simple-icons:vuedotjs" },
            { name: "Nuxt", icon: "simple-icons:nuxt" },
            { name: "React", icon: "simple-icons:react" },
            { name: "TypeScript", icon: "simple-icons:typescript" },
            { name: "SCSS", icon: "simple-icons:sass" },
        ],
    },
    {
        label: "Backend",
        skills: [
            { name: "Node.js", icon: "simple-icons:nodedotjs" },
            { name: "Fastify", icon: "simple-icons:fastify" },
            { name: "PostgreSQL", icon: "simple-icons:postgresql" },
            { name: "Go", icon: "simple-icons:go" },
        ],
    },
    {
        label: "Tools",
        skills: [
            { name: "Docker", icon: "simple-icons:docker" },
            { name: "Git", icon: "simple-icons:git" },
        ],
    },
];

const gridRef = ref<HTMLElement | null>(null);

onMounted(() => {
    const groups = gridRef.value?.querySelectorAll(".skills__group");
    if (!groups?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(groups, { opacity: 1 });
        return;
    }

    gsap.fromTo(
        groups,
        { y: 32, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: "#skills", start: "top 80%" },
        },
    );
});
</script>

<style scoped lang="scss">
.skills {
    padding: clamp(4rem, 8vh, 6rem) 0;
    border-top: 1px solid var(--border);

    .section-heading {
        margin-bottom: 2rem;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    &__group {
        opacity: 0;
    }

    &__label {
        font-size: 0.8125rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--accent-text);
        margin-bottom: 0.875rem;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;

        li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.0625rem;
            font-weight: 400;
            color: var(--text);
            line-height: 1.4;
        }
    }

    &__icon {
        width: 1rem;
        height: 1rem;
        color: var(--text-muted);
        flex-shrink: 0;
    }

    @media (max-width: 640px) {
        &__grid {
            grid-template-columns: 1fr 1fr;
        }
    }
}
</style>
