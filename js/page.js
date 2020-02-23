document.body.onload = event => {

  let index = Number(window.location.search.match(/\d{1}/));

  let headers = new Headers();
  headers.append('Origin',location.origin);

  fetch('config.json').then(response=>{
    return response.json();
  }).then(configs=>{
    return fetch(new Request(configs.blog_url,{headers:headers,mode:'cors'}));
  }).then(response=>{
    return response.json();
  }).then(function(response) {
    return fetch(new Request(response.posts_url,{headers:headers,mode:'cors'}));
  }).then(response=>{return response.text();})
  .then(text=>{
    return tsvToJson(text).reverse();
  }).then(records=>{
    document.querySelector('iframe').src = records[index].link;
  });
  
};
