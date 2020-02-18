
document.body.onload = event => {

  fetch(new Request('config.json')).then(response=>{
    return response.json();
  }).then(function(params){
    
    document.querySelector("h1").innerText = params.blog_title;

    return fetch(new Request(params.posts_url));

  }).then(function(response) {
      return response.json();
  }).then(function(response) {
    //console.log(response);
    let result = `${response.reduce((html,post,index)=>{
      return `${html}<li><span>${post.time}</span> <a href="page.html?post=${index}">
      ${post.title}</a></li>`;
    },'<ul>')}</ul>`;
    
    document.querySelector('#posts').innerHTML = result;
  });

};