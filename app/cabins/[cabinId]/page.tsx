import { getCabin, getCabins } from "@/app/_lib/data-service";
import type { Metadata } from "next";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

interface PageProps {
  params: Promise<{ cabinId: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cabinId: string }>;
}): Promise<Metadata> {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams(): Promise<{ cabinId: string }[]> {
  const cabins = await getCabins();

  if (!cabins) return [];

  return cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
}

export default async function CabinDetail({ params }: PageProps) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-400 mb-10">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
