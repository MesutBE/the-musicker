document.querySelector('#root').addEventListener('click', async (e) => {
    // debugger
    if (e.target.classList.contains('link')) {
        const text = e.target.innerText;
        
        const data = await doFetch.get(`/api/${text}`);
        
        UI.addChild(text, data);

    }
});