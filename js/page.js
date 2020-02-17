document.body.onload = event => {

  let index = Number(window.location.search.match(/\d{1}/));

  let myRequest = new Request('posts.json');

  fetch(myRequest).then(function(response) {
    return response.json();
  }).then(function(json) {
    //console.log(json);
    document.querySelector('article').innerHTML = `<iframe src=${json[index].link}></iframe>`;
  });
  
};
