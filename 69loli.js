var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '13344626';
modifiedHeaders['token'] = '2dc266388fa009914f09f23abcad9d36';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = 'nickname=伟人; avatar=https://xcnsi.h17tao.com/media/headico/4.bnc?ext=.png&_v=; bindCode=null; token=2dc266388fa009914f09f23abcad9d36; uid=13344626; username=YM2GCF; channel=YM2GCF';

$notify("伟人带你飞！");

$done({headers : modifiedHeaders});

