import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-8'>
            <h2 className='bootstrap_heading'>Online Pizza Delivery Management System</h2>
            <p className='bootstrap_para'>ONLINE PIZZA DELIVERY MANAGEMENT SYSTEM is a full-stack
application in which I have included almost everything about the online delivery management systems.</p>
            <p className='bootstrap_para'>In this project I have used many front-end technologies like HTML5, CSS3, Javascript and Bootstrap and for back-end I used Core PHP and Mysql for database. For version control I used Git and Github. It is used as to order the pizza by online process as per customers/Users actions and requirements </p>
            
            
              <div className='row'>
                <div className='col-3'>
                  {/* <a href="https://62f2805dc8386a10625cdebb--comforting-mochi-8fd4b2.netlify.app/" target="_blank" rel="noreferrer" className='btn btn-info bootstrap_btn' >Open in Browser</a> */}
                </div>
                <div className='col-3'>
                  <a href="https://github.com/atharvagujarathi/online-pizza-delivery-management-system" target="_blank" rel="noreferrer" className='btn btn-info bootstrap_btn' >Get Code</a>
                </div>
              
              </div>
            
          </div>



          <div className='col-4'>
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80" alt="" className='bootstrap_img'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
