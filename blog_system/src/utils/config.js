const devServer = 'http://127.0.0.1:10000/blog_system'
// const testServer = 'https://test-kingofword.genshuixue.com'
    // const betaServer = 'https://beta-kingofword.genshuixue.com'
// const betaServer = 'https://kingofword.genshuixue.com'
// const proServer = 'https://kingofword.genshuixue.com'

let path = null;
// es6 版本
if (NODE_ENV === 'dev') {
    path = devServer;
} else if (NODE_ENV === 'test') {
    path = testServer;
} else if (NODE_ENV === 'beta') {
    path = betaServer;
} else if (NODE_ENV === 'production') {
    path = proServer;
}
const config = {
    // 当前app版本，每次发布新版本记得更新
    APP_VERSION: '0.0.1',
    // 服务地址
    SERVER_HOST: path,
    PATHS: {
        AUTHORIZE: '/authorize',
    },
};


export default config;