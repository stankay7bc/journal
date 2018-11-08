
document.body.onload = event => {

  let myRequest = new Request(
    'https://api.github.com/repos/stankay7bc/journal/contents/posts');

  fetch(myRequest).then(function(response) {
    return response.json();
  }).then(function(response) {
    //console.log(response);
    
    let result = `${response.reduce((html,fileInfo)=>{
      return `${html}<li><a href="page.html?post=${
        fileInfo.name.slice(0,-4)}">${
        fileInfo.name.slice(9,-4).replace(/_/g,' ')}</a></li>`;
    },'<ul>')}</ul>`;
    
    document.querySelector('#posts-list').innerHTML = result;
  });
  
};