import Link from "next/link";

export default function NotFound () {
    return (
      <main className="text-center">
        <h2 className="text-7xl font-bold text-red-500">
          There was a problem.
        </h2>
        <p text-5xl font-bold text-red-500>
          We cound not find the page you were looking for.
        </p>
        <p className="text-5xl font-bold text-red-500">
          Go back to the <Link href="/"></Link>Home
        </p>
      </main>
    );
}