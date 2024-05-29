import './Admin.css'

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <header className="admin-header">
      <h1>Admin Panel</h1>
        <img src="/download.png" alt="Admin Panel Logo" />
       
      </header>
<center>
      <nav className="admin-navigation">
        <ul>
          <li>
            <button>Search Specific Students</button>
          </li>
          <li>
            <button style={{width:'200px'}}>Search all Students</button>
          </li>
          <li>
            <button>View all logged in Students</button>
          </li>
          <li>
            <button>View Students Attendance</button>
          </li>
          <li>
            <button>View Leave Applications</button>
          </li>
        </ul>
      </nav>
      </center>
     
    </div>
  );
};

export default AdminPanel;
