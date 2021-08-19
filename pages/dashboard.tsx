import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Dashboard({ user }) {
  return <div>{JSON.stringify(user)}</div>;
});
