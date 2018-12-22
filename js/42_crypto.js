/* Leoqwukh42's quick and dirty crypto from the future */

const shamefulGlobalIvValues = [123, 216, 181, 173, 84, 221, 232, 50, 146, 248, 183, 94];
const shamefulGlobalIv = Uint8Array.from(shamefulGlobalIvValues);
const savedKeyHashes = [81300966, 2129441902, -2034729445, 76108581, -931757162];

const charsPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const animationDeltaDelay = 650;
const animationMixCount = 55;
const animationMixPeriod = 40;

let decrypted = false;
let locked = false;
let logsCount = 0;
let analyzedLogsCount = 0;
let originalLogs = [];
let logs = [];
let pseudoKeyInput = document.getElementById('pseudoKeyForm');
let pseudoKeyBtn = document.getElementById('pseudoKeyButton');

function tryDecryptData() {

    beginLock();

    let dataArea = document.getElementById('dataFormControlTextArea');

    (async function() {
        const pseudoKey = pseudoKeyInput.value;
        const cypherData = dataArea.value;
        let decryptedText;

        try {
            for (var i = 0; i < animationMixCount; i++) {
                setTimeout(mixData,i*animationMixPeriod, dataArea);
            }
            await sleep(animationMixPeriod*animationMixCount);
            decryptedText = await decryptData(cypherData, pseudoKey);
        } catch (error) {
            console.log(error);
        }

        if (decryptedText) {
            console.log("Decrypted value : "+ decryptedText);
            dataArea.value = decryptedText;
            decrypted = true;
        } else {
            dataArea.value = cypherData;
            console.log("Incorrect key");
        }
        endLock();
    })();
}

function tryDecryptLogs() {

    if (decrypted || locked) {
        console.log("Already decrypted or computing");
        return;
    }

    beginLock();

    logs = document.getElementsByClassName("log-p");
    logsCount = logs.length;
    analyzedLogsCount = 0;

    const pseudoKey = pseudoKeyInput.value;

    for (var i = 0; i < logs.length; i++) {
        originalLogs[i] = logs[i].textContent.trim();
        setTimeout(animateLog,i*animationDeltaDelay, logs[i]);
        /* Try to decrypt when animation is over */
        setTimeout(decryptLog,i*animationDeltaDelay + animationMixCount * animationMixPeriod, originalLogs[i], pseudoKey, logs[i]);
    }
}

function ID_SERP_75355646_call() {
    let inputArea = document.getElementById('ID_SERP_75355646_inputTextArea');
    let parameter = document.getElementById('ID_SERP_75355646_parameter');
    let outputArea = document.getElementById('ID_SERP_75355646_outputTextArea');

    const paramValue = Number(parameter.value)
    outputArea.value = ID_SERP_75355646_Tool(inputArea.value, paramValue);
}

function ID_SERP_14565487_call() {
    let  keysElements = [];
    let key = '';
    for (var i = 0; i < 4; i++) {
        keysElements[i] = document.getElementById('ID_SERP_14565487_inputKey' + (i+1));
        ID_SERP_14565487_validateUI(keysElements[i], savedKeyHashes[i]);
        key += keysElements[i].value;
    }

    ID_SERP_14565487_tryUnlock(key);
}

async function ID_SERP_14565487_validateUI(keyElement, savedKeyHash) {
    const keyHash = keyElement.value.hashCode();
    if (keyHash === savedKeyHash) {
        keyElement.setAttribute("class", "form-control key-form-control is-valid");
    } else {
        keyElement.setAttribute("class", "form-control key-form-control is-invalid");
    }
}

async function ID_SERP_14565487_tryUnlock(pseudoKey) {
    /* 3AM : getting lazy... */
    const keyHash = pseudoKey.hashCode();
    if (keyHash === savedKeyHashes[4]) {
        document.getElementById('data-access-info').setAttribute("class", "container mt-3");
        document.getElementById('data-access-info-status').textContent = "Accès aux données autorisé...";
        document.getElementById('data-access-info-key').textContent = "ID_SERP_24567892 - Key : " + pseudoKey + " concaténé au vrai nom de 'leoqwukh'. Il vous reste à découvrir le sens derrière le pseudonyme de leoqwukh 42, vous êtes équipé pour...";
    }
}

function decryptLog(cypherData, pseudoKey, logElement) {
    console.log("cypherData value : "+ cypherData);

    (async function() {
        let decryptedText;

        try {
            decryptedText = await decryptData(cypherData, pseudoKey);
        } catch (error) {
            console.log(error);
        }

        if (decryptedText) {
            console.log("Decrypted value : "+ decryptedText);
            logElement.textContent = decryptedText;
            decrypted = true;
        } else {
            console.log("Incorrect key");
        }
        incrementAnalyzedLogsCount();
    })();
}

function incrementAnalyzedLogsCount() {
    analyzedLogsCount++;
    if (analyzedLogsCount >= logsCount) {
        if (!decrypted) {
            resetLogs();
        }
        endLock();
    }
}

function beginLock() {
    console.log("beginLock");
    locked = true;
    pseudoKeyInput.setAttribute("disabled", "");
    pseudoKeyBtn.setAttribute("disabled", "");
}

function endLock() {
    console.log("endLock");
    locked = false;
    pseudoKeyInput.removeAttribute("disabled");
    pseudoKeyBtn.removeAttribute("disabled");
}

function resetLogs() {
    for (var i = 0; i < logs.length; i++) {
        logs[i].textContent = originalLogs[i];
    }
}

function animateLog(logElement) {
    for (var i = 0; i < animationMixCount; i++) {
        setTimeout(mixLog,i*animationMixPeriod, logElement);
    }
}

function mixLog(logElement) {
    let chars = logElement.innerHTML.split('');
    for (var i = 0; i < chars.length; i++) {
        chars[i] = charsPool.charAt(Math.floor(Math.random() * charsPool.length));
    }
    logElement.innerHTML = chars.join("");
}

function mixData(dataElement) {
    let chars = dataElement.value.split('');
    for (var i = 0; i < chars.length; i++) {
        chars[i] = charsPool.charAt(Math.floor(Math.random() * charsPool.length));
    }
    dataElement.value = chars.join("");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ID_SERP_75355646_Tool(input, parameter) {
    if (parameter < 0) {
        return ID_SERP_75355646_Tool(input, parameter + 26);
    }

    let output = '';
    for (var i = 0; i < input.length; i++) {
        let c = input[i];

        if (c.match(/[a-z]/i)) {
            let code = input.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + parameter) % 26) + 65);
            }
            else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + parameter) % 26) + 97);
            }

        }
        output += c;
    }
    return output;
};

String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

/**
* Heavily inspired from Chris Veness MIT Licence gist : 
* https://gist.github.com/chrisveness/43bcda93af9f646d083fad678071b90a
*/

async function encryptData(data, pwd) {
    const pwdUtf8 = new TextEncoder().encode(pwd);
    const pwdHash = await crypto.subtle.digest('SHA-256', pwdUtf8);

    const alg = { name: 'AES-GCM', iv: shamefulGlobalIv };

    const key = await crypto.subtle.importKey('raw', pwdHash, alg, false, ['encrypt']);

    const dataUtf8 = new TextEncoder().encode(data);
    const cypherDataBuffer = await crypto.subtle.encrypt(alg, key, dataUtf8);

    const cypherDataArray = Array.from(new Uint8Array(cypherDataBuffer));
    const cypherDataString = cypherDataArray.map(byte => String.fromCharCode(byte)).join('');
    const cypherDataBase64 = btoa(cypherDataString);

    return cypherDataBase64;
}

async function decryptData(cypherData, pwd) {
    const pwdUtf8 = new TextEncoder().encode(pwd);
    const pwdHash = await crypto.subtle.digest('SHA-256', pwdUtf8);

    const alg = { name: 'AES-GCM', iv: shamefulGlobalIv };

    const key = await crypto.subtle.importKey('raw', pwdHash, alg, false, ['decrypt']);

    const cypherDataString = atob(cypherData);
    const cypherDataUint8 = new Uint8Array(cypherDataString.match(/[\s\S]/g).map(ch => ch.charCodeAt(0)));

    const dataBuffer = await crypto.subtle.decrypt(alg, key, cypherDataUint8).catch((err) => { 
        console.log(err);
    });

    const data = new TextDecoder().decode(dataBuffer);

    return data;
}
