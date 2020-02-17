
document.body.onload = event => {

  let myRequest = new Request('posts.json');

  fetch(myRequest).then(function(response) {
    return response.json();
  }).then(function(response) {
    //console.log(response);
    
    let result = `${response.reduce((html,post,index)=>{
      return `${html}<li><a href="page.html?post=${index}">
      ${post.title}</a></li>`;
    },'<ul>')}</ul>`;
    
    document.querySelector('#posts').innerHTML = result;
  });
  
};