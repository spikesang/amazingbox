//百度搜索脚本
  function checkHttps () {
        BaiduHttps.useHttps();    
    };
    function baiduWithHttps (formname) {
        var data = BaiduHttps.useHttps();
        if (data.s === 0) {
            return true;
        }
        else {
            formname.action = 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
            return true;
        }
    };

//回到顶部

window.onscroll = function () { 
if (document.documentElement.scrollTop + document.body.scrollTop > 100) { 
document.getElementById("to-top").style.display = "block"; 
} 
else { 
document.getElementById("to-top").style.display = "none"; 
} 
}