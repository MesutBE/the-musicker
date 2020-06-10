(async () => {
  const data = await doFetch.get('/api');
  UI.addDataToList(data);
})();
