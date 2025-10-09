import React, { useEffect, useState } from "react";

function App() {
  const [newUser, setNewUser] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/items") 
      .then((res) => res.json())
      .then((data) => setUsers(data.Users))
      .catch((err) => console.error(err));
  }, []);

   const handleAddUser = () => {
    if (!newUser.trim()) return;

    fetch("http://127.0.0.1:8000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: newUser }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data.user]);
        setNewUser("");
      })
      .catch((err) => console.error(err));
  };

  
    const handleDeleteUser = (id) => {
    fetch(`http://127.0.0.1:8000/items/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary, fixed-top" style={{ position:"absolute", width:"100%"}}>
          <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Add stuff later</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Add stuff later</a>
                    </li>
                  </ul>
                  
              </div>
            </div>
        </nav>
      </div>
      <div className="container mt-5 pt-5">
      <h3 className="text-center fw-bold text-dark mb-5">
        Employees List
      </h3>

      <ul style={{ listStyleType: "decimal", color: "blue", paddingLeft: "1rem" }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "6px 8px",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ flex: 1 }}>{user.userName}</span>
            <button
              onClick={() => handleDeleteUser(user.id)}
              style={{
                color: "white",
                borderRadius: "5px",
                padding: "6px 10px",
                backgroundColor: "red",
                border: "none",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex mt-3">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter user name"
          className="form-control me-2"
          style={{ borderRadius: "5px", padding: "10px" }}
        />
        <button
          onClick={handleAddUser}
          style={{
            borderRadius: "16px",
            padding: "2px 60px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            whiteSpace: "nowrap",
          }}
        >
          Add Employee
        </button>
      </div>
    </div>
  </div>);
}
export default App;