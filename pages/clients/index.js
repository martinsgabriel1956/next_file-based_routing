import { useRouter } from "next/router";

export default function Clients() {
  const router = useRouter();
  console.log(router.query);
  
  return <h2>Clients</h2>;
}
