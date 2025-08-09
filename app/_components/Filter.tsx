"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const activateFilter = searchParams.get("capacity") || "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      <Button
        filter="all"
        activateFilter={activateFilter}
        onClick={() => handleFilter("all")}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        activateFilter={activateFilter}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        activateFilter={activateFilter}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        activateFilter={activateFilter}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

export default Filter;

function Button({
  children,
  onClick,
  activateFilter,
  filter,
}: {
  children: React.ReactNode;
  onClick: () => void;
  activateFilter: string;
  filter: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 hover:bg-primary-700 ${
        activateFilter === filter ? "bg-primary-700" : ""
      }`}
    >
      {children}
    </button>
  );
}
