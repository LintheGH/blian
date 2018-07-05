require.config({
    paths:{
        'jquery':'../lib/jquery',
        'regtext':'./regtext'
    }
});

define('heighlight',['jquery','regtext'],function($,reg){
    return function(res,unamee=null){
        
        for(let i=0;i < res.length;i++){
            console.log(res[i].value)
            res[i].onfocus = function(evt){
                if(unamee){
                    unamee.style.display = 'none';
                }
                for(let i=0;i<res.length;i++){
                    if(evt.target == res[i]){
                        res[i].parentNode.getElementsByClassName('showinfo')[0].style.display = 'inline-block';
                        res[i].parentNode.getElementsByClassName('showerror')[0].style.display = 'none';
                        res[i].parentNode.style.boxShadow = `0 0 3px blue`;
                        res[i].onblur = function(){
                            let flag = reg(`${res[i].name}`,res[i]);
                            if(!res[i].value || !flag){
                                res[i].parentNode.style.boxShadow = `0 0 3px red`;
                            }if(!flag){
                                res[i].parentNode.getElementsByClassName('showinfo')[0].style.display = 'none';
                                res[i].parentNode.getElementsByClassName('showerror')[0].style.display = 'inline-block';
                            }else{
                                res[i].parentNode.style.boxShadow = null;
                                res[i].parentNode.getElementsByClassName('showinfo')[0].style.display = 'none';
                                res[i].parentNode.getElementsByClassName('showerror')[0].style.display = 'none';

                            }
                        }
                    }
                }
            }
        }
    }
});

require(['heighlight'],function(hl){
    return hl;
})