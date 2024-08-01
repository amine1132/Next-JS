import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Donate</AccordionTrigger>
        <AccordionContent>BTC</AccordionContent>
        <AccordionContent>
          <p>bc1p0ncd73hmrw22lff8x72clxzv2dphqvpz207885p4k4ur6aawgw5sglcaw9</p>
        </AccordionContent>
        <AccordionContent>ETH</AccordionContent>
        <AccordionContent>
          0xaCddA09A4EF4dd01a0b145eb5a643D49C393D151
        </AccordionContent>
        <AccordionContent>SOL</AccordionContent>
        <AccordionContent>
          AKMTtiPwJbmTwRNCJpHt3h2GdZ3ikBc2AcRCfFk3My7m
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Use of donation</AccordionTrigger>
        <AccordionContent>
          <p>Donation will be used as follow</p>
          <ul>
            <li>Cover the worker cost</li>
            <li>Cover cost to run Encyclochain</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Why donate ?</AccordionTrigger>
        <AccordionContent>
          Encyclochain is a public good that have no revenue at the moment, only
          supported by donation and everything is free. Encyclochain will become
          open source and permissionless in the futur.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
