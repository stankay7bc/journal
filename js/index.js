
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
      return `${html}<li>${postTitleView(post,index)}</li>`;
    },'<ul>')}</ul>`;
    
    document.querySelector('#posts').innerHTML = result;
  });

};

/**
 * 
 * @param {Object} post 
 * @param {Number} index 
 * @return {String} html-formatted string
 */
function postTitleView(post,index) {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return `<section>
<div><a href="page.html?post=${index}">${post.title}</a></div>
<div><span>${(new Date(post.time)).toLocaleDateString('ru',options)}</span></div>
</section>`;
}