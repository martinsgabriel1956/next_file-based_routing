import { useRouter } from 'next/router';

export default function PortfolioProject() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return <h2>PortfolioProject</h2>;
}