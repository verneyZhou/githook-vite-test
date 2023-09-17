import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const env = process.env.ENV || ''; // 环境

// https://vitejs.dev/config/
export default ({command, mode}) => {

  console.log('command', command, mode, env)
  return defineConfig({
    base: './', // 基础路径
    plugins: [vue()],
  })
}