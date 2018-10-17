window.onload = function () {
    var data = ' Secret text for BA,  використав сторонню бібліотеку crypto-js '
    var privateKey = 'BNg9mCfqgbsjKZPG'


    function createSign(privateKey, data) {
        return CryptoJS.AES.encrypt(data, privateKey);
    }

    function decryptedSign(privateKey, encryptedData) {
        return CryptoJS.AES.decrypt(encryptedData, privateKey);
    }



    var encrypted = createSign(privateKey, data);
    var decrypted = decryptedSign(privateKey, encrypted);

    document.getElementById("data").innerHTML = data;
    document.getElementById("encrypted").innerHTML = encrypted;
    document.getElementById("decrypted").innerHTML = decrypted;
    document.getElementById("message").innerHTML = decrypted.toString(CryptoJS.enc.Utf8)
};