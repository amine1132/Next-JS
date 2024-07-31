import Link from "next/link";
import Image from "next/image";
import Bitcoin from "../assets/Icone/Bitcoin.svg";
import Eth from "../assets/Icone/eth.svg";
import Avalanche from "../assets/Icone/Avalanche.svg";
import Solana from "../assets/Icone/Solana.png";
import mail from "../assets/Social/mail.svg";
import discord from "../assets/Social/Discord.svg";
import twitter from "../assets/Social/twitter.svg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AccordionDemo } from "../utils/page/Accordion";
import { Footer } from "@/utils/page/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center p-[20px] justify-between font-mono text-sm lg:flex">
        <p className="text-gray-900 font-serif text-3xl font-medium normal-case not-italic no-underline leading-tight tracking-tighter">
          Encyclochain
        </p>
        <p className="text-gray-900 font-serif text-3xl font-medium normal-case not-italic no-underline leading-tight tracking-tighter">
          Blockchains encyclopedia
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center gap-[30px] bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a href="https://x.com/Encyclochain" target="_blank">
            <Image
              src={twitter}
              alt="Vercel Logo"
              className="dark:invert"
              width={20}
              height={24}
              priority
            />
          </a>
          <Image
            src={discord}
            alt="Vercel Logo"
            className="dark:invert"
            width={20}
            height={24}
            priority
          />
        </div>
      </div>

      <div className=" w-full  flex flex gap-[150px] pt-[5%] pb-0 pl-[5%] pr-[5%]">
        <div className="flex flex-col gap-[25px] ">
          <h2>What?</h2>
          <p className="w-full max-w-[520px] text-gray-800 font-sans text-base font-light normal-case not-italic no-underline leading-normal tracking-normal">
            Blockchains encyclopedia that regroup ressources for every
            blockchains and other field in the future. Beginner, confirmed,
            developer and more you will find your need.
          </p>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2>How?</h2>
          <p className="w-full max-w-[420px] text-gray-800 font-sans text-base font-light normal-case not-italic no-underline leading-normal tracking-normal">
            Every chains will have a dedicated page where you will be able to
            find ressources filtered by field or level. Permissionless
            contribution is planned.
          </p>
        </div>
        <div className="flex flex-col gap-[25px]">
          <h2>Contribute?</h2>
          <ul className="list-disc pl-[40px]">
            <li className="w-full max-w-[493px] text-gray-900 font-sans text-base font-light normal-case not-italic no-underline leading-relaxed tracking-normal">
              <a href="#donation" className="text-red-500">
                Donation
              </a>
              to help our initiative to grow
            </li>
            <li className="w-full max-w-[493px] text-gray-900 font-sans text-base font-light normal-case not-italic no-underline leading-relaxed tracking-normal">
              Suggestions and ressources on telegram
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[5%] mb-[5%] flex w-full justify-between p-[50px]">
        <div className="flex flex-col items-center gap-[20px] w-[25%]">
          <Image
            src={Bitcoin}
            alt="Bitcoin Logo"
            className="dark:invert"
            width={185}
            height={24}
            priority
          />
          <Button className="bg-[#F7931A] rounded-sm">
            <Link href="/blockchains">Explore</Link>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-[20px] w-[25%]">
          <Image
            src={Eth}
            alt="Eth Logo"
            className="dark:invert"
            width={185}
            height={24}
            priority
          />
          <Button className="bg-[#627EEA] rounded-sm">Explore</Button>
        </div>
        <div className="flex flex-col items-center gap-[20px] w-[25%]">
          <Image
            src={Solana}
            alt="Solana Logo"
            className="dark:invert"
            width={185}
            height={24}
            priority
          />
          <Button className="bg-[#000000] rounded-sm">Explore</Button>
        </div>
        <div className="flex flex-col items-center gap-[20px] w-[25%]">
          <Image
            src={Avalanche}
            alt="Avalanche Logo"
            className="dark:invert"
            width={185}
            height={24}
            priority
          />
          <Button className="bg-[#E84142] rounded-sm">Explore</Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
