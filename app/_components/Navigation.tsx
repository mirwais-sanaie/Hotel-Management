import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  console.log(session?.user);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li className="flex gap-1 items-center">
          <Link
            href={"/cabins"}
            className={`hover:text-accent-400 transition-colors`}
          >
            Cabins
          </Link>
        </li>
        <li className="flex gap-1 items-center">
          <Link
            href={"/about"}
            className={`hover:text-accent-400 transition-colors`}
          >
            About
          </Link>
        </li>

        <li className="flex gap-1 items-center">
          {session?.user ? (
            <Link
              href={"/account"}
              className={`hover:text-accent-400 transition-colors flex items-center gap-2`}
            >
              <span>
                <img
                  className="h-8 rounded-full"
                  src={session?.user?.image}
                  alt={session?.user?.name}
                />
              </span>
              Guest area
            </Link>
          ) : (
            <Link
              href={"/account"}
              className={`hover:text-accent-400 transition-colors`}
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
