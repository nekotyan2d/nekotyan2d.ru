<template>
    <div class="hero-blob" aria-hidden="true">
        <div class="hero-blob__item hero-blob__item--1" />
        <div class="hero-blob__item hero-blob__item--2" />
        <div class="hero-blob__item hero-blob__item--3" />
    </div>
</template>

<style scoped lang="scss">
.hero-blob {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;

    &__item {
        position: absolute;
        border-radius: 50%;
        background: var(--accent);
        will-change: transform;

        [data-theme="dark"] & {
            filter: blur(100px);
            opacity: 0.18;
        }

        [data-theme="light"] & {
            filter: blur(80px);
            opacity: 0.12;
        }

        &--1 {
            width: clamp(300px, 45vw, 650px);
            height: clamp(300px, 45vw, 650px);
            top: -20%;
            right: 0%;
            animation: blob1 16s ease-in-out infinite;
        }

        &--2 {
            width: clamp(200px, 32vw, 500px);
            height: clamp(200px, 32vw, 500px);
            bottom: -15%;
            left: 8%;
            animation: blob2 20s ease-in-out infinite;
        }

        &--3 {
            width: clamp(150px, 22vw, 380px);
            height: clamp(150px, 22vw, 380px);
            top: 35%;
            left: -8%;
            animation: blob3 13s ease-in-out infinite;
        }
    }
}

@keyframes blob1 {
    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }
    33% {
        transform: translate(-40px, 30px) scale(1.06);
    }
    66% {
        transform: translate(25px, -20px) scale(0.94);
    }
}

@keyframes blob2 {
    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }
    40% {
        transform: translate(30px, -30px) scale(1.09);
    }
    70% {
        transform: translate(-20px, 15px) scale(0.96);
    }
}

@keyframes blob3 {
    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }
    50% {
        transform: translate(30px, -25px) scale(1.12);
    }
}
</style>
