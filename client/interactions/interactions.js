document.querySelector('#root').addEventListener('click', async (e) => {
    // debugger
    if (e.target.classList.contains('table-link')) {
        const text = e.target.innerText;
        
        const data = await doFetch.get(`/api/${text}`);
        
        UI.addChild(text, data);
    } else if (e.target.classList.contains('table-child-link')) {
        const text = e.target.parentNode.childNodes[0].innerText; // get table name
        const id = e.target.childNodes[0].innerText; // get span value

        const data = await doFetch.get(`/api/${text}/${id}`);

        console.log(data);
        alert('Please see the console to check results!');
        
    }
});
