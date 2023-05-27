import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
  const { data: session, status } = useSession();

  const handleSignToggle = async () => {
    if (session) {
      // User is signed in, sign them out
      await signOut();
    } else {
      // User is not signed in, sign them in
      await signIn();
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session ? (
        <>
          <button
            className="rounded-lg py-2 px-4 mx-2 bg-indigo-600 text-white"
            onClick={handleSignToggle}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button
            className="rounded-lg py-2 px-4 mx-2 bg-indigo-600 text-white"
            onClick={handleSignToggle}
          >
            Sign in
          </button>
        </>
      )}
    </>
  );
};

export default LoginButton;
