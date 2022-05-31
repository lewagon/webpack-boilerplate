const fetchApi = async () => {
  const response = await fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7");
  const data = await response.json();
  console.log(data);
};

fetchApi();
