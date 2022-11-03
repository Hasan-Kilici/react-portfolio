import React from 'react';

class App extends React.Component {
  render() {
    return <>
      <title>Home</title>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css"></link>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

		<link rel="stylesheet" href="/public/styles.css" />
      <script src="/public/script.js"></script>
      <script src="/public/github.js"></script>
      <div className="App">
        <header className="App-header">
        <div className="container">
        <div className="card bg-dark text-white">
        <div className="card-body">
        <div className="row">
  
        <div className="ppBox">
        <img id="pp"/>
        </div>
        <div className="col-md-9">
         <h2 id="username"></h2>
          <div class="col-md-6"><label id="bio"></label></div>
        <div className="socialBox">
         <span class="follower"><i className="fa-solid fa-users" /> <label id="followers"></label> Follower</span>
         <i className="fa-solid fa-users" /> <label id="following"></label> Following
        </div>
        </div>
          </div>
          </div>
          </div>
          </div>
        </header>
        <div className="container">
        <h3 class="d">Projects</h3>
        <div className="row align-items-stretch">
          <div className="col-md-4">
            <div className="card bg-dark">
                <img src="https://kawethra.ga/uploads/uploaded_file-1660731440037-730230841.png" className="rounded card-img-top img" />
              <div className="card-body">
                <h3>Kawethra.js</h3>
              </div>
              <div className="card-footer">
                <a className="text-white btn" href="https://github.com/Hasan-Kilici/Kawethra.js-v3.0.0">Projeyi Gör</a>
              </div>
            </div>
          </div>
           <div className="col-md-4">
            <div className="card bg-dark">
                <img src="https://kawethra.ga/uploads/uploaded_file-1660749886177-987106882.png" className="rounded card-img-top img" />
              <div className="card-body">
                <h3>Github Clone</h3>
              </div>
              <div className="card-footer">
                <a className="text-white btn" href="https://github.com/Hasan-Kilici/github-clone-v4">Projeyi Gör</a>
              </div>
            </div>
          </div>
           <div className="col-md-4">
            <div className="card bg-dark">
                <img src="https://kawethra.ga/uploads/uploaded_file-1660749886177-987106882.png" className="rounded card-img-top img" />
              <div className="card-body">
                <h3>E Ticaret Template</h3>
              </div>
              <div className="card-footer">
                <a className="text-white btn" href="https://github.com/Hasan-Kilici/E-Ticaret-sitesi-v2.0.0">Projeyi Gör</a>
              </div>
            </div>
          </div>
        </div>
        <h3 id="repostitle"></h3>
        <div className="row align-items-stretch" id="repoContainer">
          </div>
     </div>
    </div>
    </>;
  }
}

export default App;
