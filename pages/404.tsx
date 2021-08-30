import { useUser } from "@auth0/nextjs-auth0";
import { Text } from "@geist-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Text h1>404.</Text>
      <Text className="text-center">
        The page you are looking for could not be found.
      </Text>
      <button onClick={() => router.back()} className="text-blue-500">
        Go Back
      </button>
      {user && <Link href="/dashboard">Back to dashboard</Link>}
    </div>
  );
};

export default NotFound;
