import React from 'react';

class App extends React.Component {
  render() {
    return <>
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css"></link>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

		<link rel="stylesheet" href="/public/styles.css" />
      <script src="/public/script.js"></script>
      
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div class="card bg-dark">
             <div className="card-body">
              <div className="row">
              <div className="ppBox">
              <img src="https://avatars.githubusercontent.com/u/105741983?v=4" id="pp" />
              </div>
              <div className="col-md-9">
              <h3>Hi, I'm Hasan.</h3>
               <label> I'm a Web Developer. I've this Know And I Use: HTML, CSS, JS , PHP, Node.js, Express, EJS. I'm student in a SMTAL Web Desing & Graphic Design.</label>
                <a className="text-white" href="/github"><label className="b"><i className="fa-brands fa-github icon"></i> Github</label> 
             </a>
             </div>
             </div> 
             </div>
            </div>
          </div>
        </header>
      </div>
    </>;
  }
}

export default App;
