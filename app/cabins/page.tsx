import Counter from "../components/Counter";

async function Page() {
  const cabins = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await cabins.json();
  console.log(data);
  return (
    <div>
      <h2>cabins page</h2>
      <ul>
        {data.map((cabin: { id: number; name: string; email: string }) => (
          <li key={cabin.id}>
            {cabin.name} - {cabin.email}
          </li>
        ))}
      </ul>

      <Counter users={data} />
    </div>
  );
}

export default Page;
