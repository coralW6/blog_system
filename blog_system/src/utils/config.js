const devServer = 'http://127.0.0.1:10000'
// const testServer = 'https://test-kingofword.genshuixue.com'
    // const betaServer = 'https://beta-kingofword.genshuixue.com'
// const betaServer = 'https://kingofword.genshuixue.com'
// const proServer = 'https://kingofword.genshuixue.com'

let path = null;
// es6 版本
if (process.env.NODE_ENV  === 'dev') {
    path = devServer;
} else if (process.env.NODE_ENV === 'test') {
    path = testServer;
} else if (process.env.NODE_ENV === 'beta') {
    path = betaServer;
} else if (process.env.NODE_ENV === 'production') {
    path = proServer;
}
const config = {
    // 服务地址
    SERVER_HOST: path,
    PATHS: {
        getBlogDirList: '/getBlogDirList',
    },
};


export default config;