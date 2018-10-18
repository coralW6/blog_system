const devServer = 'http://127.0.0.1:10000'
const testServer = 'http://127.0.0.1:10000'
const betaServer = 'http://127.0.0.1:10000'
const proServer = 'http://127.0.0.1:10000'

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
const rootPath = '/app';
const config = {
    // 服务地址
    SERVER_HOST: path,
    PATHS: {
        getBlogDirList: rootPath + '/getBlogDirList',
    },
};


export default config;