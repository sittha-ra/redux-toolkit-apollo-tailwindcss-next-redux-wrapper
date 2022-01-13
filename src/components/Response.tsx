import { useEffect } from "react";
import { useSelector } from "@hook/redux";

const Response: React.FC = () => {
  const user = useSelector((s) => s.users);

  return (
    <>
      <div>{user.email && <h1>Email {user.email}!</h1>}</div>
      <div>{user.firstName && <h1>First Name {user.firstName}!</h1>}</div>
      <div>{user.lastName && <p>Last Name {user.lastName}!</p>}</div>
    </>
  );
};

export { Response };
