require.config({
    paths:{
        'jquery':'../lib/jquery',
        'http':'./httpclient',
        'heighlight':'./heighlight',
        'regtext':'./regtext'
    }
});

require(['jquery','http','heighlight','regtext'],function($,http,hl,reg){
   
    $(function(){
        let uname = document.querySelector('#username');
        let upw = document.querySelector('#pwd');
        let pwd2 = document.querySelector('#pwd2');
        let phone = document.querySelector('#phone');
        let pic_randomcode = document.querySelector('#pic-randomcode');
        let msgcode = document.querySelector('#msgcode');
        let arr = [uname,upw,pwd2,phone,pic_randomcode,msgcode];
        let unamee = document.querySelector('.showerror2');
        hl(arr,unamee);
        $('#regist-btn').on('click',function(){
            for(let i=0;i<arr.length;i++){
                let flag = reg(`${arr[i].name}`,arr[i]);
                if(!arr[i].value || !flag){
                    arr[i].parentNode.style.boxShadow = `0 0 3px red`;
                    arr[i].parentNode.getElementsByClassName('showinfo')[0].style.display = 'none';
                    arr[i].parentNode.getElementsByClassName('showerror')[0].style.display = 'inline-block';
                    return;
                }if(!flag){
                    arr[i].parentNode.style.boxShadow = `0 0 3px red`;
                    arr[i].parentNode.getElementsByClassName('showinfo')[0].style.display = 'none';
                    arr[i].parentNode.getElementsByClassName('showerror')[0].style.display = 'inline-block';
                    return;
                }
                else{
                    arr[i].parentNode.style.boxShadow = null;
                    arr[i].parentNode.getElementsByClassName('showinfo')[0].style.display = 'none';
                    arr[i].parentNode.getElementsByClassName('showerror')[0].style.display = 'none';
                }
            }
            http.post('register.php',{
                username:$('#username').val(),
                pwd:$('#pwd').val(),phone:$('#phone').val()
            }).then(function(res){
                let obj = window.eval('(' + res + ')');
                if(obj.state){
                    let html = `<div class="cover" style="position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(200,200,200,0.7);">
                                    <div class="cover-msg" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:16px;">注册成功！正在跳转首页<i class="fa fa-spin fa-circle-o-notch"></i></div>
                                </div>`;
                    $(html).appendTo('body').show();
                    setTimeout(function(){
                        $('.cover').hide();
                        window.location.href = '../index.html';
                    },5000);
                    
                }else{
                    uname.parentNode.style.boxShadow = `0 0 3px red`;
                    uname.parentNode.getElementsByClassName('showinfo')[0].style.display = 'none';
                    uname.parentNode.getElementsByClassName('showerror2')[0].style.display = 'inline-block';
                }
            },function(res){
                console.log(res);
            })
        })
    
    });
})