import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import styles from "./HomePage.module.scss";
import { Button } from "@/shared/ui";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return (
    <>
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.content}>
          <Button onClick={() => setError(true)}>Click</Button>
        </main>

        <Footer />
      </div>
    </>
  );
}
