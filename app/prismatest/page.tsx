import prisma from "@/lib/db";
import { NewChain, NewLink } from "./newchain";


export default async function TestPage() {
    //requesting all chains and links from prismadb
    const chains = await prisma.chains.findMany()
    const links = await prisma.link.findMany()

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <div className="w-full flex gap-[150px] pt-[5%] pb-0 pl-[5%] pr-[5%] max-lg:hidden">
                <p>
                    <ul className="border-t border-b border-black/10 py-5 leading-8">
                        {
                            //mapping one element for each value in chains
                            chains.map((chain) => (
                                <li key={chain.id} className="flex items-center justify-between px-5">
                                    <text>{chain.title}</text>
                                </li>
                            ))
                        }
                    </ul>
                </p>
                <p>
                    <NewChain />
                </p>
                <p>
                    <ul className="border-t border-b border-black/10 py-5 leading-8">
                        {
                            //same for links
                            links.map((content) => (
                                <li key={content.id} className="flex items-center justify-between px-5">
                                    <text>{content.title} ( {content.link} )</text>
                                </li>
                            ))
                        }
                    </ul>
                </p>
                <p>
                    <NewLink />
                </p>
            </div>
        </main>
    );
}