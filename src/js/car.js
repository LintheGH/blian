require.config({
    paths:{
        'jquery':'../lib/jquery',
        'cookie':'./cookieOperate',
        'http':'./httpclient',
        'generate':'./datagrid'
    }
});

require(['jquery','cookie','http','generate'],function($,cookie,http,gen){
    console.log(gen.car_generate_list)
    $(function(){
        //请求 cookie 中保存的商品id 所在的商品信息
        var cookieObj = cookie.read();
        var ul = $('.list-main')[0];
        if(!cookieObj){
            return;
        }else{
            var arr = Object.keys(cookieObj);
            
            var num = [];
            for(var key in cookieObj){
                num.push(cookieObj[key])
            }
            http.get('getitems.php',{
                indexids:arr
            }).then(function(res){
               
                let result = window.eval('(' + res + ')');
                console.log(result);
                gen.car_generate_list(result,ul,num);
                selectedItem();
                totalPrice();
            },function(err){
                console.log(err)
            })
        }

        //总选择商品数
        function selectedItem(){
            let counts = 0;
            $('.list-main li').each(function(){
                if(this.children[0].checked){
                    counts += Number($(this).find('.isb-count').val());
                }
            });
            $('#selectednum').text(counts);
        }

        //总价
        function totalPrice(){
            let sum = 0;
            $('.list-main li').each(function(){
                if(this.children[0].checked){
                    console.log($(this).find('#li-totalp').text())
                    sum += Number($(this).find('#li-totalp').text());
                }
            });
            console.log(sum)
            $('#totalprice').text(sum.toFixed(2));
        }

        //背景颜色
        function backgroundColor(){
            $('.list-main li').each(function(){
                if(this.children[0].checked){
                    this.style.backgroundColor = '#FFFAF1';
                }else{
                    this.style.backgroundColor = '#FCFCFC'
                }
            })
        }
        

        //事件
        $('.list-main').on({
            click:function(evt){
                let cltid = $(evt.target).parent().prop('id');
                console.log(cltid);

                if(cltid == 'minus-btn'){
                    let li = $(evt.target).parent().parent().parent().parent();
                    let num = Number(li.find('.isb-count').val());
                    let id = li.find('.isb').data('indexid');
                    let price = li.find('.li-price').text().slice(1);
                    if(num <=1){
                        $(evt.target).parent().next().val(1);
                        return;
                    }
                    num--;
                    $(evt.target).parent().next().val(num);
                    //更新金额
                    li.find('#li-totalp').text(`${Number(price)*num}`);
                    selectedItem();
                    totalPrice();
                    //更新cookie
                    let mcookie = cookie.read();
                    console.log(id,mcookie)
                    for(let key in mcookie){
                        if(id == key){
                            mcookie[key] = num;
                        }
                    }
                    cookie.set(mcookie);
                }
                if(cltid == 'plus-btn'){
                    let li = $(evt.target).parent().parent().parent().parent();
                    let num = Number(li.find('.isb-count').val());
                    let snum = Number(li.find('.isb-count').data('savenum'));
                    let id = li.find('.isb').data('indexid');
                    let price = li.find('.li-price').text().slice(1);
                    if(num >= snum){
                        $(evt.target).parent().prev().val(snum);
                        return;
                    }
                    num++;
                    $(evt.target).parent().prev().val(num);
                    console.log(snum);
                    //更新金额
                    li.find('#li-totalp').text(`${Number(price)*num}`);
                    selectedItem();
                    totalPrice();
                    //更新cookie
                    let pcookie = cookie.read();
                    for(let key in pcookie){
                        if(id == key){
                            pcookie[key] = num;
                        }
                    }
                    cookie.set(pcookie);
                }
                if($(evt.target).prop('id') == 'li-del'){
                    let delitem = cookie.read();
                    let delIndexid = $(evt.target).parent().parent().data('indexid');
                    delete delitem[delIndexid];
                    cookie.set(delitem);
                    $(evt.target).parent().parent().parent().remove();
                    selectedItem();
                    totalPrice();

                }
                if($(evt.target).prop('type') == 'checkbox'){
                    let allcheckbox = $('.list-main').find('input:not(.isb-count)');
                    let itemCounts = 0;
                    let isChecked = true;
                    let loop = 0;
                    allcheckbox.each(function(){
                        if(!this.checked){
                            isChecked = false;
                            this.parentNode.style.backgroundColor = '#FCFCFC';
                        }else{
                            this.parentNode.style.backgroundColor = '#FFFAF1';
                        }
                    });
                    $('.allselect').each(function(){
                        this.checked = isChecked;
                    });
                    selectedItem();
                    totalPrice();
                }
            },
            change:function(evt){
                if($(evt.target).prop('class') == 'isb-count'){
                    let li = $(evt.target).parent().parent().parent();
                    let id = li.find('.isb').data('indexid');
                    let num = $(evt.target).val().replace(/\D/g,'');
                    let snum = Number($(evt.target).data('savenum'));
                    let price = li.find('.li-price').text().slice(1);
                    if(num <= 1 ){
                        num = 1;
                    }if(num >= snum){
                    num = snum;   
                    }
                    console.log(num,snum)
                    $(evt.target).val(num);
                    //更新金额
                    li.find('#li-totalp').text(`${Number(price)*num}`);
                    selectedItem();
                    totalPrice();
                    //更新cookie
                    let icookie = cookie.read();
                    for(let key in icookie){
                        if(id == key){
                            icookie[key] = num;
                        }
                    }
                    cookie.set(icookie);
                }
            }    
            
        });

        $('.allselect').each(function(){
            this.onclick = function(){
                let isChecked = this.checked;
                $('.list-main input:not(.isb-count)').each(function(){
                    this.checked = isChecked;
                });
                $('.allselect').each(function(){
                    this.checked = isChecked;
                });
                selectedItem();
                totalPrice();
                backgroundColor();
            }
        });

        $('.list-bottom').on('click',function(evt){
            if($(evt.target).hasClass('dele')){
                $('.list-main').html('');
                let obj = {};
                cookie.set(obj);
                selectedItem();
                totalPrice();
            }
        });

        //结算
        $('#calculatetotal').click(function(){
            let iteminfo = cookie.read();
            console.log(iteminfo)
            iteminfo = JSON.stringify(iteminfo);
            if(iteminfo === '{}'){
                alert('购物车快饿扁了 /(ToT)/~~尝试买些东西再回来看看，快去 i百联首页 挑选商品吧！');
                window.location.href= '../index.html';
                return;
            }
            http.post('car.php',{
                iteminfo:iteminfo
            }).then(function(res){
                console.log(res);
                let obj = window.eval('(' + res + ')');console.log(res);
                if(obj.state){
                    let html = `<div class="cover" style="width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(200,200,200,.7);">
                                    <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">结算成功</div>
                                </div>`;
                    $(html).appendTo('body').show();
                    setTimeout(function(){
                        $('.cover').hide();
                        let cok = {};//清空cookie保存的商品id
                        cookie.set(cok);
                        window.location.href = '../index.html';
                    },2000)

                }else{
                    alert('请登录');
                    $('.cover').hide();
                    window.location.href = './login.html';
                }
            },function(err){
                console.log(err);
            })
        })
        
    })
})