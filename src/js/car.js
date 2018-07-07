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
            },function(err){
                console.log(err)
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
            
        })
        
    })
})