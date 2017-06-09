document.createElement('div');

document.getElementById('1')
    .insertAdjacentHTML('afterend', '<div id="1.1"></div>div>');

    'beforeend'
    'beforebegin'
    'afterbegin'

document.getElementById('parent')
    .appendChild(document.getElementById('orphan'));

document.getElementById('foobar').parentNode
    .removeChild(document.getElementById('foobar'));

// All modern browsers, with the exception of IE9
document.getElementById('foo').classList.add('bold');

// All browsers
document.getElementById('foo').className += 'bold';



// All modern browsers, with the exception of IE9
document.getElementById('foo').classList.remove('bold');


// All browsers
document.getElementById('foo').className = 
    document.getElementById('foo').className.replace(/^bold$/, '');

document.getElementById('foo').setAttribute('role', 'button');

vdocument.getElementById('foo').removeAttribute('role');

// IE 5.5+
document.getElementById('foo').innerHTML = 'Goodbye!';

// IE 5.5+ but NOT Firefox
document.getElementById('foo').innerText = 'GoodBye!';

// IE 9+
document.getElementById('foo').textContent = 'Goodbye!';

document.getElementById('note').style.fontWeight = 'bold';

// GET
var xhr = new XMLHttpRequest();
xhr.open('GET', encodeURI('myservice/username?id=some-unique-id'));
xhr.onload = function() {
    if (xhr.status === 200) {
        alert('User\'s name is ' + xhr.responseText);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();

// POST
var newName = 'John Smith',
    xhr = new XMLHttpRequest();

xhr.open('POST',
encodeURI('myservice/username?id=some-unique-id'));
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if (xhr.status === 200 && xhr.responseText !== newName) {
        alert('Something went wrong.  Name is now ' + xhr.responseText);
    }
    else if (xhr.status !== 200) {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send(encodeURI('name=' + newName));

// URI encode
function param(object) {
    var encodedString = '';
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (encodedString.length > 0) {
                encodedString += '&';
            }
            encodedString += encodeURI(prop + '=' + object[prop]);
        }
    }
    return encodedString;
}

// sending JSOn
var xhr = new XMLHttpRequest();
xhr.open('PUT', 'myservice/user/1234');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var userInfo = JSON.parse(xhr.responseText);
    }
};
xhr.send(JSON.stringify({
    name: 'John Smith',
    age: 34
}));


// uploading file
var formData = new FormData(),
    file = document.getElementById('test-input').files[0],
    xhr = new XMLHttpRequest();

formData.append('file', file);
xhr.open('POST', 'myserver/uploads');
xhr.send(formData);


// CORS
var formData = new FormData(),
    file = document.getElementById('test-input').files[0],
    xhr = new XMLHttpRequest();

formData.append('file', file);
xhr.open('POST', 'myserver/uploads');
xhr.send(formData);

// JSONP
window.myJsonpCallback = function(data) {
    // handle requested data from server
};

var scriptEl = document.createElement('script');
scriptEl.setAttribute('src',
    'http://jsonp-aware-endpoint.com/user?callback=myJsonpCallback&id=123');
document.body.appendChild(scriptEl);



// onClick
document.getElementById("parent-list").addEventListener("click", function(e) {
  if(e.target && e.target.nodeName == "LI") {
    console.log("List item ", e.target.id.replace("post-"), " was clicked!");
  }
});
