module.exports = {
    env: {
        // 指定代码运行的宿主环境
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        // 指定eslint规范
        'standard',
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended', // 添加 prettier 插件
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // 规则
        indent: ['warn', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['warn', 'always'],
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'any',
                    normal: 'any',
                    component: 'any',
                },
            },
        ],
        'vue/script-indent': ['error', 4, { baseIndent: 0, switchCase: 1 }],
    },
};
