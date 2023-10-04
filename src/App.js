import './App.css';
import React from 'react';
import myImage from './white-offroader-jeep-parking.jpg';
function App() {
  return (
    <>
    <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
    <header style={{backgroundColor:'lightblue'}}>
    <div class="container-fluid">
      <div class="row py-3 border-bottom"> 
      <div class="col-md-4 d-none d-md-block">
        <form role="search" action="index.html" method="get" class="d-flex mt-3 gap-0">
          <input class="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Search..." aria-label="Search..."/>
          <button class="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
        </form>
      </div>
    <div class="col-md-4 d-none d-md-block">
      <select class="form-select bg-transparent d-flex mt-3 gap-0">
        <option style={{float:"center"}}>Relevance</option>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
    <div class="col-md-4 d-none d-md-block">
      <select class="form-select bg-transparent d-flex mt-3 gap-0">
        <option>All brand</option>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
    </div>
    </div>
    </header>
    <section className='featured' id='featured'>
    <div class="row py-3 border-bottom"> 
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
          <img src={myImage} height="200" width="300"/>
          <h3>New Model</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>$55,000/-</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Rent Now</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
          <img src={myImage} height="200" width="300"/>
          <h3>New Model</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>$55,000/-</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Rent Now</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
          <img src={myImage} height="200" width="300"/>
          <h3>New Model</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>$55,000/-</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Rent now</a>
        </div>
      </div>
      </div>
      <div class="row py-3 border-bottom"> 
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
          <img src={myImage} height="200" width="300"/>
          <h3>New Model</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>$55,000/-</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Rent now</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
          <img src={myImage} height="200" width="300"/>
          <h3>New Model</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>$55,000/-</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Rent Now</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
          <img src={myImage} height="200" width="300"/>
          <h3>New Model</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>$55,000/-</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Rent Now</a>
        </div>
      </div>
      </div>
    </section>
    <nav>
    <div id="pagination">
        <a id="navigation-backward" class="prev_page hideUndoOnClick">
            <i id="prevPage"></i>
        </a>
        <div class="page_number heading_6">
            <span id="pageNumber">1</span>&nbsp;/&nbsp;<span id="total_pages">2</span>
            <input type="hidden" name="isLastPage" id="isLastPage" value="1"/>
        </div>
        <a id="next" class="next_page hideUndoOnClick">
            <i id="navigation-forward"></i>
        </a>
    </div>
</nav>            
    </body>
    </>
  );
}

export default App;
