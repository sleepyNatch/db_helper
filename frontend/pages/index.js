'use client'

import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/regiter");
  });
      

  return (
    <h1>Welcome</h1>
  )
}