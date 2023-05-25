import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Component() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Redirect to /dashboard after signing in
      router.push("/dashboard");
    }
  }, [status, router]);

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
}
