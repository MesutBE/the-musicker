// makeFetch object that includes fetch methods.
const doFetch = {
    get: async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            return data;
        } catch (err) {
            console.error(err);
        }
    },

};
