const easyhttp = new easyHttp();
easyhttp.get('https://jsonplaceholder.typicode.com/posts',getposts);

function getposts(err,response){

  if(err === null)
  {
    console.log(response);
  }
  else{
    console.log(err);
  }
}