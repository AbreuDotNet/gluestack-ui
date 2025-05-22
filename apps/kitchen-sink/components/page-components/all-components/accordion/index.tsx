import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Accordion } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionHeader } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import { AccordionTitleText } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionContentText } from '@/components/ui/accordion';
import { AccordionIcon } from '@/components/ui/accordion';
import { Divider } from '@/components/ui/divider';
import { ChevronDownIcon } from '@/components/ui/icon';
import { ChevronUpIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  },
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "filled",
      "unfilled"
    ],
    "defaultValue": "filled"
  },
  "type": {
    "control": {
      "type": "select"
    },
    "options": [
      "single",
      "multiple"
    ],
    "defaultValue": "single"
  },
  "isCollapsible": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": true
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}>
      {props => {
  return (
    <Accordion
      size={props.size}
      variant={props.variant}
      type={props.type}
      isCollapsible={props.isCollapsible}
      isDisabled={props.isDisabled}
      className="m-5 w-[90%] border border-outline-200"
    >
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider />
      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            We accept all major credit cards, including Visa, Mastercard, and
            American Express. We also support payments through PayPal.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
    </ComponentPreviewer>
  );
}