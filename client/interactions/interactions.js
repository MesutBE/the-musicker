document.querySelector('#root').addEventListener('click', async (e) => {
    // debugger
    if (e.target.classList.contains('table-link')) {

        const text = e.target.innerText;
        
        const data = await doFetch.get(`/api/${text}`);
        
        UI.addChild(text, data);
    }
});
document.querySelector('#table-items').addEventListener('click', async (e) => {
    // debugger
    if (e.target.classList.contains('info')) {
        const text = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].innerText; // get table name
        const id = e.target.parentNode.parentNode.childNodes[3].innerText; // get span value

        const data = await doFetch.get(`/api/${text}/${id}`);

        console.log(data);
        alert('Please see the console to check results!');

    }
});
document.querySelector('#table-items').addEventListener('click', async (e) => {
    // debugger
    if (e.target.classList.contains('delete')) {
        const text = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].innerText; // get table name
        const id = e.target.parentNode.parentNode.childNodes[3].innerText; // get span value

        const dataDelete = await doFetch.delete(`/api/${text}/${id}`);
        alert(dataDelete.message);

        const data = await doFetch.get(`/api/${text}`);
        console.log(data);
        
        UI.addChild(text, data);
    }
});