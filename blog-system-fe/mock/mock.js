const Mock = require('mockjs');

const mockRoutes = [
    require("./getBlogDir").route,
    require("./saveBlog").route,
    require("./getMenuList").route,

];

for (var i=0; i<mockRoutes.length; i++) {
    var ri = mockRoutes[i];
    var url = ri.url;
    var retData = ri.retData;
    Mock.mock(url, retData)
}


