import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome to the world of{" "}
        <span className="text-blue-500 font-bold">NFTs</span>.
      </h1>
    </main>
  );
}
