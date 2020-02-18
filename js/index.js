
document.body.onload = event => {

  fetch('config.json').then(response=>{
    return response.json();
  }).then(configs=>{
    return fetch(new Request(configs.blog_url));
  }).then(function(response) {
      return response.json();
  }).then(function(response) {

    let ulHtml = `${response.posts.reduce((html,post,index)=>{
      return `${html}<li>${postTitleView(post,index)}</li>`;
    },'<ul>')}</ul>`;
    
    document.querySelector("h1").innerText = response.blog_title;
    document.querySelector('#posts').innerHTML = ulHtml;
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