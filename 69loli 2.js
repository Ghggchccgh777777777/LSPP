/*


[rewrite_local]

#69萝莉解锁会员
^http[s]?:\/\/h5.+(com|cn)\/h5\/(movie/detail|search/movie).*$ url script-request-header 69loli.js

hostname = 

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '11979515';
modifiedHeaders['token'] = '7e2a46b5554bcde5994d11d095b1114d';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = 'channel=t69llg63; avatar=undefined; bindCode=undefined; nickname=undefined; username=VI3A9F; token=7e2a46b5554bcde5994d11d095b1114d; uid=11979515';

//$notify("伟人带你飞！");

$done({headers : modifiedHeaders});


