
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://h5x.301you.me/h5/login/loginAccount`;
const method = `POST`;
const headers = {
'Origin' : `https://h5x.301you.me`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `h5x.301you.me`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1`,
'Accept-Language' : `zh-cn`
};
const body = `data%5Bdevice%5D=h5&data%5Bversion%5D=1.0&data%5Btime%5D=2022-2-24%2015%3A8%3A27&data%5Bsign%5D=48ae7b2ee59fb7a5369ec7d7fe785dae&data%5Bdata%5D=hr4e46EXJvO2ak2bivdO3lgfhlQbYCcmf6Qd9KeVZz2PiN%2B%2F3UZF4P3IGmoHlBH%2BKb400PIfMhzfKWSiY7E6CA%3D%3D`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
