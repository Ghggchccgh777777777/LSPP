/*
作者伟人qq 55749353
个人页面会员不会变但是
无限观影，无限看直播！

下载地址 https://sserwe.cc:9701/#/?uid=39332813

[rewrite_local]

#鲍鱼盒子🚗 
^http[s]?:\/\/[0-9.]+.(\w{2,8})?/api(/video/report_item?|/live/room/detail?|/video/related?|/video/detail).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/LSPP/main/baoyuhezi.js

[mitm]
hostname = *.*.*

*/

var _0x86ae=["\x68\x65\x61\x64\x65\x72\x73","\x61\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E","\x62\x65\x61\x72\x65\x72\x20\x37\x30\x30\x62\x63\x62\x34\x63\x63\x35\x65\x35\x34\x31\x32\x31\x36\x38\x38\x62\x61\x35\x31\x33\x32\x35\x61\x66\x31\x30\x35\x64"]; var modifiedHeaders=$request[_0x86ae[0]]; modifiedHeaders[_0x86ae[1]]= _0x86ae[2];$done({headers:modifiedHeaders})
