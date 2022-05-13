import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
    <div className="row g-3">
        <div className="col col-12 sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-6 sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label for="">Name</label>
            <input className="form-control" type="text" placeholder="Name"/>
        </div>
            <div className="col col-12 sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label for="">Rollno</label>
            <input className="form-control" type="text" placeholder="Rollno"/></div>
            <div className="col col-12 sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label for="">Admno</label>
            <input className="form-control" type="text" placeholder="Admno"/></div>
            <div className="col col-12 sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label for="">Mobile</label>
            <input className="form-control" type="text" placeholder="Mobile"/></div>
            <div className="col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><label for="">College</label>
            <input className="form-control" type="text" placeholder="College"/></div>
            <div className="col col-12 sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label for="">Username</label>
            <input className="form-control" type="text" placeholder="Username"/></div>
            <div className="col col-12 sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label for="">Password</label>
            <input className="form-control" type="text" placeholder="Password"/></div>
            <div className="col col-12 sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <a href="register.html"><button className="btn btn-success">REGISTER</button>

                </a>
            </div>
            <div className="col sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <a href="index.html"><button className="btn btn-success">BACK TO REGISTER</button></a>
            </div>
            <div className="col"></div>
        </div>
        </div>
    </div>
</div>
  );
}

export default App;
