import "./App.css";


function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
       
    
        <div className="container_navbar">

     
        
          <div className="header">
          <img src="https://cdn-icons-png.flaticon.com/512/2172/2172225.png" alt="Avatar" className="avatar" />

          <div className="menuconatainer">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>


            <div className="nav"></div>
            <div className="user">
              <p className="btn">
                <p>
                  <i class="fa fa-moon-o"></i>
                </p>

                <p>
                  <i class="fa fa-bell-o"></i>
                </p>

                <p>
                  <i class="fa fa-language"></i>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="container navbar">
          <nav>
            <ul>
              <li>
                <a href="/">
                
                  <span className="nav-item"><i class="fa fa-dashboard"></i>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/">
                 
                  <span className="nav-item"><i class="fa fa-address-card"></i>order</span>
                </a>
              </li>
              <li>
                <a href="/">
                 
                  <span className="nav-item"> <i class="fa fa-share-alt"></i>Channel</span>
                </a>
              </li>

              <li>
                <a href="/">
                
                  <span className="nav-item">  <i class="fas fa-shipping-fast"></i>shipping</span>
                </a>
              </li>
            </ul>
          </nav>

          <section className="main">
            <div className="wrapper_1">
              <div className="toast success">
                <div className="container-w"></div>
                <p>order</p>
                <button>&times;</button>
              </div>
            </div>

            <div className="listContainer">
              <ul className="row-list">
                <li> pending </li>
                <li> Accepted </li>
                <li> AWB Created </li>
                <li> Ready to Ship </li>
                <li> Completed </li>
                <li> Cancelled </li>
              </ul>
            </div>

            <section className="attendance">
              <div className="attendance-list">
                <div className="buttons">
                  <button><i class='fas fa-file-import'></i> import orders</button>
                </div>

                <div className="buttons" >
                  <button ><i class="fa fa-send-o"></i> Accept </button>
                </div>
                <div className="buttons">
                  <button><i class="fa fa-print"></i> Print</button>
                </div>

                <table className="table">
                  <thead className="box">
                    <tr>
                    <th></th>
                    <th></th>
                      <th>Channel <i class="fa fa-sort"></i></th>
                      <th>Order No:<i class="fa fa-sort"></i> <i class="fa fa-search"></i></th>
                      <th>Order Date <i class="fa fa-sort"></i> <i class="fa fa-search"></i></th>
                      <th>City <i class="fa fa-sort"></i> <i class="fa fa-search"></i></th>
                      <th>Customer Name <i class="fa fa-search"></i></th>
                      <th>
                        Order
                        <p>value <i class="fa fa-sort"></i></p>
                      </th>

                      <th>Status <i class="fa fa-sort"></i></th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="tagplus"></h2>
                      </td>
                      <td>
                        <div className="square"></div>
                      </td>
                      <td><img src="https://play-lh.googleusercontent.com/B8cZeUhdan6uV_2Y6ZkDYsuxOAIbnN8J4OQpsx5-YqO1xpof4PxQbHqp_cyskja6sYM=w240-h480-rw" width={36} height={36} /></td>
                      <td>#TKN20203754</td>
                      <td>2022-06-04</td>
                      <td>Locknow</td>
                      <td>Abhishek Doit</td>
                      <td>0.00</td>
                      <td>
                        <button>pending</button>
                      </td>
                      <td>
                        <button>Actions</button>
                      </td>
                    </tr>
                    <tr className="active">
                      <td>
                        <h2 className="tagplus"></h2>
                      </td>
                      <td>
                        <div className="square"></div>
                      </td>
                      
                      <td><img src="https://play-lh.googleusercontent.com/B8cZeUhdan6uV_2Y6ZkDYsuxOAIbnN8J4OQpsx5-YqO1xpof4PxQbHqp_cyskja6sYM=w240-h480-rw" width={36} height={36} /></td>
                      <td>#TKN20203754</td>
                      <td>2022-06-04</td>
                      <td>Locknow</td>
                      <td>Abhishek Doit</td>
                      <td>0.00</td>
                      <td>
                        <button>pending</button>
                      </td>
                      <td>
                        <button>Actions</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="tagplus"></h2>
                      </td>
                      <td>
                        <div className="square"></div>
                      </td>
                      <td><img src="https://play-lh.googleusercontent.com/B8cZeUhdan6uV_2Y6ZkDYsuxOAIbnN8J4OQpsx5-YqO1xpof4PxQbHqp_cyskja6sYM=w240-h480-rw" width={36} height={36} /></td>
                      <td>#TKN20203754</td>
                      <td>2022-06-04</td>
                      <td>Locknow</td>
                      <td>Abhishek Doit</td>
                      <td>0.00</td>
                      <td>
                        <button>pending</button>
                      </td>
                      <td>
                        <button>Actions</button>
                      </td>
                    </tr>
                  </tbody>
                
                </table>
              </div>
           
            </section>
         
         
          </section>
       
        </div>
      </header>
    </div>
  );
}

export default App;