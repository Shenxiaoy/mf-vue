import Mock from 'mockjs';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

Mock.setup({
    timeout: 1000
})
const list = {
    code: 200,
    msg: '',
    data: [{
        name: 'vue2Components',
        url: 'http://localhost:8005/static/js/index.0d99ec65.js'
    }]
}

export default {
    init () {
        Mock.mock('/login', { //输出数据
            'name': '@name' //随机生成姓名
            //还可以自定义其他数据
        });
        Mock.mock('/list', list);
    }
}


