document.body.onload = event => {

  let index = Number(window.location.search.match(/\d{1}/));

  fetch('config.json').then(response=>{
    return response.json();
  }).then(configs=>{
    return fetch(new Request(configs.blog_url));
  }).then(response=>{
    return response.json();
  }).then(function(json) {
    //console.log(json);
    document.querySelector('iframe').src = json.posts[index].link;
  });
  
};
