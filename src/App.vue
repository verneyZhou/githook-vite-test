<script setup>
import HelloWorld from './components/HelloWorld.vue';

const addFn = (a, b) => {
    return a + b;
};
console.log('====addFn', addFn(3, 4));
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld msg="这是一个 Github Actions测试项目" />
    <p>哈哈哈 你个老六~~~</p>
    <p>main分支提交123456</p>
    <p>main再次提交了修改~~1234456sdfghgfdgdf</p>
    <p>哈哈哈123456</p>
    <p>验证阿里云自动部署~~ag4234234ain12345swegdfgdf</p>
    <p>添加回滚机制~~~~ v1.0.5</p>
    <p>添加docker自动部署 1111122233334445556667777888999101112~~</p>
    <h2>Docker</h2>
    <p>🚀🚀🚀🚀🚀🚀🚀 docker自动部署更新~~~~ 🚀🚀🚀🚀🚀</p>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
