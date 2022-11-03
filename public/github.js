let user;
let repos;
let Github = async (e)=>{
  fetch("https://api.github.com/users/hasan-kilici").then(async(res)=>{
    user = await res.json();
  })
  return user;
}

let Repos = async (e)=>{
   fetch("https://api.github.com/users/hasan-kilici/repos?per_page=100").then(async(res)=>{
    repos = await res.json();
  })
}
window.onload = ()=>{
repoCount = 0;
Github();
Repos();

let followers, following, username, bio, repotitle, pp;
username = document.getElementById("username");
followers = document.getElementById("followers");
following = document.getElementById("following");
bio = document.getElementById("bio");
repotitle = document.getElementById("repostitle");
pp = document.getElementById("pp");

repocontainer = document.getElementById("repoContainer");
setTimeout(()=>{
  for(let i = 0;i < repoCount;i++){
    repocontainer.innerHTML += `
    <div class="col-md-3" onclick="window.location.href='${repos[i].html_url}'">
    <div class="card bg-dark d" style="height:150px">
    <div class="card-body">
    <h4>${repos[i].name}</h4>
    </div>
    <div class="card-footer">
     <i class="fa-solid fa-circle text-danger"></i> ${repos[i].language}
    </div>
    </div>
    </div>`;
  }

},1500)
  
setTimeout(()=>{
 repoCount = user.public_repos;
 username.innerHTML = user.name;
 followers.innerHTML = user.followers;
 following.innerHTML = user.following;
 bio.innerHTML = user.bio;
 pp.src = user.avatar_url;
 repotitle.innerHTML = `${user.public_repos} Repository`;
}, 500);
}
