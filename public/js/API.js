

$(window).ready(() => {
    $.get('http://127.0.0.1:5500/public/index.html/api', () => {
        console.log('Fetching from api');
    }).done((data) => {
        console.log('Fetching data from 5500 success!');
    }).fail((err) => {
        console.log(err)
    });
});