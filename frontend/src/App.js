import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <header>
            <div className="header-container">this is header container</div>
          </header>
        </div>
        <div className="row">
          <aside>
            <div className="col-md-3">
              <div className="browse-panel-card">
                <NameComponent></NameComponent>
                <TypeComponent></TypeComponent>
                <StrapComponent></StrapComponent>
                <PriceComponent></PriceComponent>
              </div>
            </div>
          </aside>
          <main>
            <div className="col-md-9">
              <SortByComponent></SortByComponent>
              <ProductsComponent></ProductsComponent>
            </div>
          </main>
        </div>
        <div className="row">
          <footer>
            <div className="footer-container">this is footer</div>
          </footer>
        </div>
      </div>
    );
  }
}

class NameComponent extends Component{
  render(){
    return(
      <div className="browse-panel-container">
        <strong className="browse-panel-title">Filter Product Name</strong>
        <label className="browse-panel-text">
          <input type="text" maxLength="50" />
        </label>
      </div>
    )
  }
}

class TypeComponent extends Component{
  render(){
    return(
      <div className="browse-panel-container">
        <strong className="browse-panel-title">Product Type</strong>
        <br />
        <label className="browse-panel-checklist">
          <input type="checkbox" />
          <span>Analog</span>
        </label>
        <br />
        <label className="browse-panel-checklist">
          <input type="checkbox" />
          <span>Digital</span>
        </label>
      </div>
    )
  }
}
class StrapComponent extends Component{
  render(){
    return(
      <div className="browse-panel-container">
        <strong className="browse-panel-title">Strap Type</strong>
        <br />
        <label className="browse-panel-checklist">
          <input type="checkbox" />
          <span>Cloth</span>
        </label>
        <br />
        <label className="browse-panel-checklist">
          <input type="checkbox" />
          <span>Leather</span>
        </label>
        <br />
        <label className="browse-panel-checklist">
          <input type="checkbox" />
          <span>Metal</span>
        </label>
        <br />
        <label className="browse-panel-checklist">
          <input type="checkbox" />
          <span>Plastic</span>
        </label>
        <br />
        <label className="browse-panel-checklist">
          <input type="checkbox" />
          <span>Rubber</span>
        </label>
      </div>
    )
  }
}

class PriceComponent extends Component{
  render(){
    return(
      <div className="browse-panel-container">
        <strong className="browse-panel-title">Price</strong>
        <br />
        <label className="browse-panel-dropdown">
          <select>
            <option value="all">All Price</option>
            <option value="50">&lt; IDR 50.000</option>
            <option value="100">IDR 50.000 - IDR 100.000</option>
            <option value="250">IDR 100.000 - IDR 250.000</option>
            <option value="500">IDR 250.000 - IDR 500.000</option>
            <option value="1000">IDR 500.000 - IDR 1.000.000</option>
            <option value="1001">&gt; IDR 1.000.000</option>
          </select>
        </label>
      </div>
    )
  }
}

class SortByComponent extends Component{
  render(){
    return(
      <div className="product-sort-container">
        <strong className="product-sort-title">Sort by </strong>
        <label className="product-sort-dropdown">
          <select className="selectpicker">
            <option value="popularity">Popularity</option>
            <option value="relevant">Relevant</option>
            <option value="newest">Newest</option>
            <option value="cheapest">cheapest</option>
            <option value="expensive">Most Expensive</option>
          </select>
        </label>
      </div>
    )
  }
}

class ProductsComponent extends Component{
  render(){
    return(
        <ProductComponent></ProductComponent>
    )
  }
}

class ProductComponent extends Component{
  render(){
    return(
      <div className="row product-component">
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>
      </div>
    )
  }
}

class ProductCardComponent extends Component{
  render(){
    return(
      <div className="product-container col-md-3">
        <div className="product-card">
          <div className="product-card-img">
            <a href="#" >
              <img src="http://www.gshock.com/resource/img/products/watches/xlarge/GA1100-2B_xlarge.png" alt="product photo" />
            </a>
          </div>
          <ProductCardLabel></ProductCardLabel>
        </div>
      </div>
    )
  }
}

class ProductCardLabel extends Component{
  render(){
    return(
      <div className="product-card-label">
        <strong>Title of the product</strong>
        <p>Price: IDR 190.000,-</p>
        <a href="#" className="btn-info detail">view detail</a>
      </div>
    )
  }
}

export default App;
