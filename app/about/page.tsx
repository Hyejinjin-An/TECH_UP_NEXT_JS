import Link from "next/link";

export default function AboutPage()
{
    return (
        <div className="container mx-10 p-4">
            <Link href="/about/details">
                <h1 className="text-4xl font-bold">About</h1>
            </Link>
            <p>React + Shadcn UI + PokeAPI</p>
        </div>
    )
}