import Image from "next/image";
import { AccordionDemo } from "./Accordion";
import twitter from "../assets/Social/twitter.svg";
import discord from "../assets/Social/Discord.svg";
import mail from "../assets/Social/mail.svg";

export function Footer() {
  return (
    <div className="flex w-full justify-between gap-[30px] max-md:flex-col">
      <div className="px-5 py-4 flex flex-col gap-[30px] w-full flex-1 min-h-[200px]">
        <h2 className="mb-[40px] text-2xl font-semibold">EC</h2>
        <p className="m-0">
          Blockchains encyclopedia that regroup ressources for every blockchains
          and other field in the future. Beginner, confirmed, developer and more
          you will find your need.
        </p>
        <div className="flex gap-[15px] mt-[20px]">
          <Image
            src={twitter}
            alt="Twitter Logo"
            className="dark:invert"
            width={20}
            height={24}
            priority
          />
          <Image
            src={discord}
            alt="Discord Logo"
            className="dark:invert"
            width={20}
            height={24}
            priority
          />
        </div>
      </div>

      <div className="group rounded-lg px-5 py-4 transition-colors flex-1 min-h-[200px]">
        <h2 className="mb-3 text-2xl font-semibold text-center">Donation</h2>
        <AccordionDemo />
      </div>

      <div className="group rounded-lg px-5 py-4 flex flex-col gap-[30px] flex-1 min-h-[200px]">
        <h2 className="mb-3 text-2xl font-semibold text-center">Contact</h2>
        <p className="m-0 max-w-[500px]">
          You have 3 options to contact us twitter, telegram or e-mail. The
          fastest one will be on telegram or twitter
        </p>
        <ul className="flex flex-col">
          <li className="flex gap-[10px]">
            <Image
              src={twitter}
              alt="Twitter Logo"
              className="dark:invert"
              width={13}
              height={24}
              priority
            />
            <a href="https://x.com/Encyclochain" target="_blank">
              Encyclochain
            </a>
          </li>
          <li className="flex gap-[10px]">
            <Image
              src={discord}
              alt="Discord Logo"
              className="dark:invert"
              width={13}
              height={24}
              priority
            />
            Encyclochain
          </li>
          <li className="flex gap-[10px]">
            <Image
              src={mail}
              alt="Mail Logo"
              className="dark:invert"
              width={13}
              height={24}
              priority
            />
            encyclochain@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}
