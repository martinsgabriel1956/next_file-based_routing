import { useRouter } from 'next/router';

export default function SelectedClientsProjects() {
  const router = useRouter();

  console.log(router.query)

  return <h2>SelectedClientsProjects</h2>;
}