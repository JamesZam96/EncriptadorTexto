function encrypt(){
    let textToEncrypt = document.getElementById('text_user').value.split('');
    for(let i = 0; i < textToEncrypt.length; i++){
        if(textToEncrypt[i].includes('a')){  
            textToEncrypt[i] = 'ai';
        }else if(textToEncrypt[i].includes('e')){
            textToEncrypt[i] = 'enter';
        }else if(textToEncrypt[i].includes('i')){
            textToEncrypt[i] = 'imes';
        }else if(textToEncrypt[i].includes('o')){
            textToEncrypt[i] = 'ober';
        }else if(textToEncrypt[i].includes('u')){
            textToEncrypt[i] = 'ufat';
        }   
    }
    let encryptedText = textToEncrypt.join('').toString();
    console.log(encryptedText);
    if(encryptedText !== ''){
        showResult(encryptedText);
    }else{
        showInicialConditions();
    }
}

function decrypt(){
    let textToDecrypt = document.getElementById('text_user').value;
    console.log(textToDecrypt);
    let decryptedText = textToDecrypt
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    console.log(decryptedText);
    //showResult(decryptedText);
    if(decryptedText !== ''){
        showResult(decryptedText);
    }else{
        showInicialConditions();
    }
}

function showResult(text){
    document.getElementById('person_image').style.display = 'none';
    document.getElementById('subtitle').style.display = 'none';
    document.getElementById('text').innerHTML = text;
    document.getElementById('copy_button').style.display = 'block';
}

function showInicialConditions(){
    document.getElementById('person_image').style.display = 'block';
    document.getElementById('subtitle').style.display = 'block';
    document.getElementById('text').innerHTML = 'Ingresa el texto que desees encriptar o desencriptar';
}

function copyText(){
    let textToCopy = document.getElementById('text').innerText;
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles', err);
    })
}