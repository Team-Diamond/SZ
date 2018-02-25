var hyperlinks = document.getElementsByTagName('a');

function showCard(link) {
    alert(link);
}

for (var i = 0, l = hyperlinks.length; i < l; i++) {
    const link = hyperlinks[i].href;
    hyperlinks[i].addEventListener('click', function () {
        showCard(link)
    });
    hyperlinks[i].href = '#';
}

