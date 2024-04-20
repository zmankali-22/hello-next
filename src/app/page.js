
import HitCounter from "@/components/HitCounter";
import Censored from "@/components/censored/censored";

function Home() {
  return (
    <main>
      <h1>Hello Next!</h1>
      <p>
        You are visitor number:{" "}
        <Censored>
          <HitCounter />
        </Censored>
      </p>
    </main>
  );
}

export default Home;
