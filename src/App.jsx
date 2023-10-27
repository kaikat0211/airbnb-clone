import Nav from "./componenets/Nav";
import Houses from "./sections/Houses";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Houses />
      </section>
    </main>
  )
}