<script setup>
import { reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const addFn = (a, b) => {
    return a + b;
};
console.log('====addFn', addFn(3, 4));

console.log('====12345');

const hello = ref({});
const getHelloAPI = async () => {
    try {
        const res = await fetch(`/api/hello?name=${'test'}`, {
            method: 'GET',
        });
        hello.value = await res.json();
        console.log('====hello', hello);
    } catch (err) {
        console.log('===hello=err', err);
    }
};

// 查询用户列表
const userNameList = ref([]);
const getUserAPI = async () => {
    try {
        const res = await fetch(`/api/getUser`, {
            method: 'GET',
        });
        const resJson = await res.json();
        console.log('====username', resJson);
        userNameList.value = resJson.data || [];
    } catch (err) {
        console.log('===username=err', err);
    }
};

const userName = ref('');
const userId = ref('');
const updateUser = reactive({
    id: '',
    name: '',
});

// 增加用户
const addUserAPI = async () => {
    console.log('====userName', userName.value);
    try {
        await fetch(`/api/addUser`, {
            method: 'POST',
            body: JSON.stringify({
                name: userName.value,
            }),
        });
        getUserAPI();
    } catch (err) {
        console.log('===username=err', err);
    }
};

// 删除用户
const delUserAPI = async () => {
    try {
        await fetch(`/api/delUser`, {
            method: 'POST',
            body: JSON.stringify({
                id: userId.value,
            }),
        });
        getUserAPI();
    } catch (err) {
        console.log('===username=err', err);
    }
};

// 更新用户
const updateUserAPI = async () => {
    try {
        await fetch(`/api/updateUser`, {
            method: 'POST',
            body: JSON.stringify({
                id: updateUser.id,
                name: updateUser.name,
            }),
        });
        getUserAPI();
    } catch (err) {
        console.log('===username=err', err);
    }
};
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
    <p>Vercel cli部署~~~</p>
    <p>自动部署Vercel~~~~12345</p>
    <hr />
    <h3>添加Serverless接口：</h3>
    <button @click="getHelloAPI">getHelloAPI</button>
    <pre>
        {{ hello }}
    </pre>
    <hr />

    <h3>添加MongoDB云数据库：</h3>
    <button @click="getUserAPI">获取用户列表</button>
    <pre>
        {{ userNameList }}
    </pre>

    <div>
        输入插入用户名称：<input type="text" v-model="userName" />
        <button @click="addUserAPI">插入用户</button>
    </div>

    <div>
        输入删除用户id：<input type="text" v-model="userId" />
        <button @click="delUserAPI">删除用户</button>
    </div>

    <div>
        输入更新用户id：<input type="text" v-model="updateUser.id" /> 名称：<input
            type="text"
            v-model="updateUser.name"
        />
        <button @click="updateUserAPI">更新用户</button>
    </div>
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
