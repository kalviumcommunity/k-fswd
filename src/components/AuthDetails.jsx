import { useState } from "react";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  const userSignOut = () => {
    // your code here
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;