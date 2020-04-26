button.addEventListener('click', () => {
    let request = new XMLHttpRequest();
    request.open('POST', '/xxx'); //设置 Request Headers 第一部分
    request.setRequestHeader('sq', 'zjx'); //设置设置 Request Headers 第二部分
    request.send('hello'); //设置 Request Headers 第四部分
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求响应完毕');
            console.log(request.status); //获取 Response Headers 第一部分状态码
            console.log(request.statusText); //获取 Response Headers 第一部分 OK
            console.log(request.getResponseHeader('Content-Type')); //获取 Response Headers 第二部分某一键值对
            console.log(request.getAllResponseHeaders()); //获取 Response Headers 第二部分所有键值对
            console.log(request.responseText); //获取 Response Headers 第四部分 OK
        }
    };
});
