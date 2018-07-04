require.config({
    paths:{
        'jquery':'../lib/jquery',
        'http':'./httpclient',
        'heighlight':'./heighlight'
    }
});

require(['jquery','http','heighlight'],function($,http,hl){
   
    $(function(){
        let uname = document.querySelector('#username');
        let upw = document.querySelector('#pwd');
        let arr = [uname,upw];
        hl(arr);
        
        $('#login-btn').on('click',function(){
            for(let i=0;i<arr.length;i++){
                if(!arr[i].value){
                    arr[i].parentNode.style.boxShadow = `0 0 3px red`;
                }else{
                    arr[i].parentNode.style.boxShadow = null;
                }
            }
            http.post('login.php',{
                username:$('#username').val(),
                pwd:$('#pwd').val()
            }).then(function(res){
                let obj = window.eval('(' + res + ')');
                if(obj.state){
                    window.location.href = '../index.html';
                }else{
                    alert('帐号或密码错误');
                }
            },function(res){
                console.log(res);
            })
        })
        
    });
})