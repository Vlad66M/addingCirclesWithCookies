var circlesNumber = 3;
var number = getCookie('circlesNumber');
if(number!=undefined){
    circlesNumber = Number(number);
}

document.getElementById('addCircle').addEventListener('click', () => {
    circlesNumber++;
    addCookie('circlesNumber', circlesNumber, `max-age=${30*24*60*60}`);
    addCircles(circlesNumber);
});

document.getElementById('delCircle').addEventListener('click', () => {
    circlesNumber--;
    if(circlesNumber<0){
        circlesNumber=0;
    }
    addCookie('circlesNumber', circlesNumber, `max-age=${30*24*60*60}`);
    addCircles(circlesNumber);
});

addCircles(circlesNumber);

function addCircles(circlesNumber){
    delCircles();
    for(let i=0; i<circlesNumber; i++){
        let element = document.createElement('div');
        element.className = 'circle';
        document.getElementById('container').appendChild(element);
    }
}

function delCircles(){
    //document.getElementById('container').innerHTML = "";
    const circlesContainer = document.getElementById("container");
    while (circlesContainer.firstChild) {
    circlesContainer.removeChild(circlesContainer.lastChild);
    }
}

function addCookie(key, value, parameters){
    document.cookie = `${key}=${value}; ${parameters}`;
}

function getCookie(key){
    let cookies = {};
    let tempCookiesStrings = document.cookie.split('; ');
    for (let el of tempCookiesStrings){
        let pair = el.split('=');
        cookies[pair[0]] = pair[1];
    }
    return cookies[key];
}

function deleteCookie(key){
    addCookie(key, '!', 'max-age=0');
}