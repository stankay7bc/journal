document.body.onload = event => {

  let index = Number(window.location.search.match(/\d{1}/));

  fetch('config.json').then(response=>{
    return response.json();
  }).then(configs=>{
    return fetch(new Request(configs.blog_url));
  }).then(response=>{
    return response.json();
  }).then(function(response) {
    return fetch(response.posts_url);
  }).then(response=>{return response.text();})
  .then(text=>{
    return tsvToJson(text);
  }).then(records=>{
    document.querySelector('iframe').src = records[index].link;
  });
  
};
