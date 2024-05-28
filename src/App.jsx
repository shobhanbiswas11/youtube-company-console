import { withAuthenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard";

function App({ signOut }) {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    fetchAuthSession().then((session) => {
      const incomingGroup =
        session.tokens.accessToken.payload["cognito:groups"];
      if (incomingGroup) {
        setGroup(incomingGroup);
      }
    });
  }, []);

  return (
    <div>
      <button onClick={signOut}>Logout</button>
      <Dashboard group={group} />
    </div>
  );
}

export default withAuthenticator(App);
