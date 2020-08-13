class easyHttp3{

 async get(url){

  
  const response = await fetch(url);
  const data = await response.json();

  console.log(response);
  console.log(data);
  return data;
   
  }


    // Make an HTTP POST Request
   async post(url, data) {
      
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    const resdata = await response.json();
    return resdata;
         
    }
  
     // Make an HTTP PUT Request
     async put(url, data) {
      
      const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resdata = await response.json();
    return resdata;
       
    }
  
    // Make an HTTP DELETE Request
    async delete(url) {
       
      const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        });
        
        const resdata = await 'Resource Deleted';
        return resdata;
    }
}