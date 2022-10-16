let obj = JSON.parse($response.body);
obj = {
    "sign": "eCX91jg/KlcKJ6ilBti7834rAi0mhnE3IRFol9eK9X2j6f5tInXzUlPfV9IofmHUkp6N7PeueOb3K9xCsRZr5yQI1XXy6yDgvdDT4kDiJqaUhKyDcGIkOBJ89DCFxA3W/La0GLc5L/+smLcDrtNSOGZ2DGGTTouDCMj4qYwbMazqbXAMDUoYTrGWOiV3t1Rf4iL5cPKG9l2nHkqSrXDkV7r2eL/BeVcdlMTWthZs6crvrir1oSoIfCPo/07wm9nH5sMuGpiUENOIRDSKs9+Bg3wucOEyp+yoo5AvgsZ8EWZ/CRhSA8jO020TJR9DDcTGslqZfdBISEOhB1cK2WC7jw==",
    "responseData": "nMR1raXz4yy01O/xrOCCyJFUROtzzSd0QS9pQClVo5VYrBkOrC/BIVHCzDToLeZVPfC1q7642THqho1aRkShNg=="
};
$done({
    body: JSON.stringify(obj)
});