/*


[rewrite_local]

#69萝莉解锁会员
^http[s]?:\/\/h5.+(com|cn)\/h5\/(movie/detail|search/movie).*$ url script-request-header 69loli.js

hostname = 

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '11979515';
modifiedHeaders['token'] = 'ad0aee8c4dceaf96cc110459022d2774';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = 'avatar=https://xcnsi.h17tao.com/media/headico/1.bnc?ext=.png&_v=; bindCode=null; nickname=孔凤健; token=ad0aee8c4dceaf96cc110459022d2774; uid=11979515; username=VI3A9F; channel=t69llg63';

//$notify("伟人带你飞！");

$done({headers : modifiedHeaders});


