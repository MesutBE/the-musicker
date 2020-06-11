// makeFetch object that includes fetch methods.
const doFetch = {
    get: async (url) => {
        try {
            console.log(url);
            
            const res = await fetch(url);
            const data = await res.json();

            return data;
        } catch (err) {
            console.error(err);
        }
    },
    delete: async (url) => {
        try {
            console.log(url);

            const res = await fetch(url, {
                method: 'DELETE'
            });
            const data = await res.json();
            
            return data;
        } catch (err) {
            console.error(err);
        }
    }
};
