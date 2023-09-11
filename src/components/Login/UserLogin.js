import React, { useState } from "react";

function UserLogin({ onUserLogin }) {
  const [username, setUsername] = useState("");

  const handleNewMember = (e) => {
    const changeMember = e.target.value;
    setUsername(changeMember);
  };

  const handleSubmitMember = (e) => {
    e.preventDefault();
    onUserLogin(username);
    setUsername("");
  };

  return (
    <div className="Login">
      <h1>Dobrodošli u chat aplikaciju Algebre</h1>
      <form className="EnterUsername" onSubmit={handleSubmitMember}>
        <input
          onChange={handleNewMember}
          placeholder="Upišite vaše ime"
          value={username}
          autoFocus={true}
        />
        {username !== "" ? (
          <button type="submit">Prijava</button>
        ) : (
          <button type="submit" disabled>
            Prijava
          </button>
        )}
      </form>
    </div>
  );
}

export default UserLogin;
