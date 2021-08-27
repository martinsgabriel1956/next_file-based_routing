import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

export default function ClientsProjects() {
  const router = useRouter();
  console.log(router.query);

  function handleLoadProject() {
    router.push({
      pathname: '/clients/gabriel/projecta',
      query: {id: 'Gabriel', clientproject_id: 'projecta'}
    });
  }

  return (
    <>
      <h2>ClientsProjects</h2>
      <button onClick={handleLoadProject}>Load Project A</button>
    </>
  );
}
