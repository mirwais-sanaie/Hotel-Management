import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

async function Page() {
  const session = await auth();
  return (
    <div>
      <h2 className="text-accent-400 text-lg">
        Welcome {session?.user?.name}!
      </h2>
    </div>
  );
}

export default Page;
