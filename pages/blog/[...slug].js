import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();

  console.log(router.query);

  return <h2>BlogPost</h2>;
}