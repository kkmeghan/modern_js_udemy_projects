function easyHttp(){
  this.http = new XMLHttpRequest();

}

easyHttp.prototype.get = function(url,callback){
  this.http.open('Get', url,true);

  const self = this;

  this.http.onload = function(){
    if(self.http.status === 200)
    {
      callback(null,self.http.responseText);

    }
    else
    {
      callback('err' +self.http.status,'Something went wrong' );
    } 
  }

  this.http.send();

}