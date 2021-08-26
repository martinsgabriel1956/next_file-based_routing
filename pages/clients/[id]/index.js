import { useRouter } from 'next/router';

export default function ClientsProjects() {
  const router = useRouter();
  console.log(router.query)

  return <h2>ClientsProjects</h2>;
}