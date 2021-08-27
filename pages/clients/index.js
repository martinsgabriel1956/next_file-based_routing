import Link from "next/link";

export default function Clients() {
  const clients = [
    {id: 'biel', name: 'Gabriel'},
    {id: 'nicole', name: 'Nicole'}
  ]

  return (
    <>
      <h1>Clients:</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <Link href={{
              pathname: `/clients/${client.id}`,
              query: { id: client.id }
            }}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
