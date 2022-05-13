import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row div col"><label for="">Username</label>
            <input type="text" className="form-control"/></div>
            <div className="row div col"><label for="">password</label>
            <input type="password" name="" id="" className="form-control"/></div>
            <div className="row div col"><button className="btn btn-success">LOGIN</button></div>
        </div>
    </div>
</div>
  );
}

export default App;
