/*

    正则验证

*/


define('regtext',function(){
    return function(name,res){
        let result = true;
        switch(true){
            case name == 'username' :
            result = /^[a-z][a-z0-9_\-]{5,19}$/i.test(res.value);
            break;
            case name === 'pwd' :
            result = /^[^\s]{6,20}$/i.test(res.value);
            break;
            case name === 'phone':
            result = /^1[3-9]\d{9}$/i.test(res.value);
            break;
            case name === 'pic-randomcode':
            result = /^\d{4}$/i.test(res.value);
            break;
            case name === 'msgcode':
            result = /^\d{6}$/i.test(res.value);
            break;
            default :
            result = true;
        }
        return result;
    }
})

require(['regtext'],function(res){
    return res;
})