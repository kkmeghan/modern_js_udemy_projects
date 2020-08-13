const github = new Github();
const ui = new UI();

// Get the element of search text box

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>
{
      if(e.target.value !== '')
      {
            github.get(e.target.value)
                  .then((profiledata) => {
                        if(profiledata.profiledata.message === 'Not Found')
                        {
                              ui.showAlert(profiledata.profiledata.message,'alert alert-danger');
                        }
                        else{
                              // show profile
                              ui.showProfile(profiledata.profiledata);
                              ui.showRepos(profiledata.reposdata);

                        }
                  })
                  .catch(err => console.log(err));
      }else
      {
            ui.clearProfile();
      }
});


 