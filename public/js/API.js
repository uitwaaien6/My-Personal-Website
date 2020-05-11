$.post('/api', { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        test: 'post req from client',
    })
 }).done((data) => {
    console.log(data);
});