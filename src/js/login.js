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
                    let html = `<div class="cover" style="width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(200,200,200,.7);">
                                    <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">登录成功！正在跳转</div>
                                </div>`;
                    $(html).appendTo('body').show();
                    setTimeout(function(){
                        $('.cover').hide();
                        window.location.href = '../index.html';
                    },5000)

                }else{
                    alert('帐号或密码错误');
                    $('.cover').hide();
                }
            },function(res){
                console.log(res);
            })
        })
        
    });
})