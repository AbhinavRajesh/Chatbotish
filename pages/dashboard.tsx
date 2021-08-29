import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import DashboardDomains from "@components/Dashboard/dashboardDomains";
import Header from "@components/Dashboard/dashboardHeader";
import Footer from "@components/Footer";

export default withPageAuthRequired(function Dashboard({ user: auth0user }) {
  return (
    <div className="max-w-5xl mx-auto">
      <Header auth0user={auth0user} />
      <DashboardDomains auth0user={auth0user} />
      <Footer />
    </div>
  );
});
