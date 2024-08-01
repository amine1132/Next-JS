import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function AccordionHeader() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What?</AccordionTrigger>
        <AccordionContent>
          <p>
            Blockchains encyclopedia that regroup ressources for every
            blockchains and other field in the future. Beginner, confirmed,
            developer and more you will find your need.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How?</AccordionTrigger>
        <AccordionContent>
          <p>
            Every chains will have a dedicated page where you will be able to
            find ressources filtered by field or level. Permissionless
            contribution is planned.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Contribute?</AccordionTrigger>
        <AccordionContent>
          <p>At the moment you can contribute in 2 ways:</p>
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
