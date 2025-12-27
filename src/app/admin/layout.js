"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await fetch("/api/isLoggedin", {
          cache: "no-store",
          credentials: "include",
        });
        const data = await res.json();

        if (!data.success) {
          router.push("/");
        } else {
          setChecking(false);
        }
      } catch (error) {
        router.push("/");
      }
    }

    checkLogin();
  }, [router]);

  if (checking) {
    // Show loading or blank while checking login status
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        Checking login...
      </div>
    );
  }

  // If logged in, render the children components
  return <>{children}</>;
}
