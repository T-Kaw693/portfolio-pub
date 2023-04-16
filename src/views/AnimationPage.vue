<template>
    <div>
        <section class="common__section">
            <div class="empty__container common__container">
                <h2 class="common__title">アニメーションなし<br>エリア</h2>
            </div>
        </section>

        <section class="side-scroll__section common__section">
            <div class="common__container">
                <div class="side-scroll__itemOuter">
                    <div class="side-scroll__itemInner">
                        <h2 class="common__title">
                            GSAP ScrollTrigger<br>エリア
                        </h2>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="common__section">
            <div class="empty__container common__container">
                <h2 class="common__title">アニメーションなし<br>エリア</h2>
            </div>
        </section>
        <LinkTop />
    </div>
</template>
  
<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LinkTop from '@/components/parts/LinkTop'

export default {
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        this.$nextTick(() => {
            const itemWrapper = document.querySelector('.side-scroll__itemOuter');
            const itemInner = document.querySelector('.side-scroll__itemInner');

            gsap.to(itemInner, {
                x: () => -(itemInner.clientWidth - itemWrapper.clientWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.side-scroll__section',
                    start: 'top top',
                    end: () => `+=${itemInner.clientWidth - itemWrapper.clientWidth}`,
                    scrub: true,
                    pin: true,
                },
            });
        });
    },
    components: {
        LinkTop
    }
};
</script>
  
<style scoped>
/* リセットCSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul,
li {
    list-style: none;
}

body {
    background-color: #A4BE7B;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
}

/* 共通 */
.common__section {
    padding: 100px 0;
    width: 100%;
}

.common__container {
    display: flex;
    margin: 0 auto;
    max-width: 900px;
    width: 80%;
}

.common__title {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0.05em;
}

/* アニメーションなしエリア */
.empty__container {
    height: 900px;
}

/* GSAP ScrollTriggerエリア */
.side-scroll__section {
    background-color: #285430;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* はみ出た部分を隠しておく */
}

.side-scroll__itemOuter {
    position: relative;
    height: 700px;
    width: 100%;

}

.side-scroll__itemInner {
    position: absolute;
    top: 60px;
    left: 0;
    display: flex;
    gap: 0 60px;
}

.side-scroll__item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 80px;
    height: 400px;
    width: 600px;
}

.card {
    width: 600px;
    height: 600px;
    border: 1px solid #000;
}

.v-btn:not(.v-btn--outlined).primary {
    color: #000 !important;
}
</style>
  