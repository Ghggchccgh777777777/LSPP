    /*

作者伟人 q 55749353

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const free = 'movie/WatchMovieNew';
const lock = 'account/IsVip';
const user = 'account/IndexDetail';

if (url.indexOf(free) != -1) {
    obj["canWath"] = "true";
    body = JSON.stringify(obj);
}

if (url.indexOf(lock) != -1) {
    obj["data"] = "1";
    obj["value"] = "true";
    body = JSON.stringify(obj);
}
if (url.indexOf(user) != -1) {
    obj["nickName"] = "伟人破解qq55749353";
    obj["headPortrait"] = "/ImageAll/User/a40fb7a6-cdb5-f1bc-cdfe-3a001b45c37d/Portrait/3e30bb4a83d1439bacaef0d81.jpeg";
    obj["vipLevel"] = "3";
    obj["vipEndTime"] = "2999-09-09";
    obj["cartoonVip"] = "true";
    obj["cartoonVip"] = true;
    obj["cartoonVipEndTime"] = "2999-09-09";
    obj["rewardBadge"] = true;
    obj["isTenRealCarUser"] = true;
    obj["closeAccountPay"] = true;
    obj["closeInvite"] = true;
    obj["hadTopicBadge"] = true;

    body = JSON.stringify(obj);
}
$done({
    body
});
