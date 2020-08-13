class Github{


//   Client ID
// ca5e1836133e1b3e6940
// Client Secret
// bae32da73d2a3d88fdf0bceb78fc9cf3ebf16f1e
  constructor()
  {
    this.client_id= 'ca5e1836133e1b3e6940';
    this.client_secret='bae32da73d2a3d88fdf0bceb78fc9cf3ebf16f1e';
    this.repos_count =5;
    this.repos_sort='created: asc';
  }

 async get(user){


  console.log(user);
    const profile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profiledata = await profile.json();

    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    //console.log(profile);
   // console.log(profiledata);
    const reposdata = await repos.json();
    return {profiledata:profiledata,
      reposdata:reposdata };
  }
}