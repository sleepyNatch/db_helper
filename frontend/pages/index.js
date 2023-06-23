'use client'

import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Home() {    
  const router = useRouter();
    useEffect(()=>{
      router.push("/register");
    });
  return (
    <h1>Welcome</h1>
  )
}
