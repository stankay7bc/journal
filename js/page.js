document.body.onload = event => {

  let index = Number(window.location.search.match(/\d{1}/));

  fetch(new Request('config.json')).then(response=>{
    return response.json();
  }).then(function(params){
    return fetch(new Request(params.posts_url));
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    //console.log(json);
    document.querySelector('article').innerHTML = `<iframe src=${json[index].link}></iframe>`;
  });
  
};
