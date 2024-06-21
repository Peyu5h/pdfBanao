import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Page1 = () => {
  return (
    <div>
      <pre>
        {`
# Name: Jignesh
# Class: SE-1 CMPN
# Roll no. 69
# Batch: C1
# Subject: TCS
# Practical: 3
`}
      </pre>
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <pre>
        {`
###################
# Name: Jignesh
# Class: SE-1 CMPN
# Roll no. 69
# Batch: C1
# Subject: TCS
# Practical: 3
###################
        `}
      </pre>
    </div>
  );
};

const Page4 = () => {
  return (
    <div>
      <pre>
        {`
///////////////////
// Name: Jignesh
// Class: SE-1 CMPN
// Roll no. 69
// Batch: C1
// Subject: TCS
// Practical: 3
//////////////////
        `}
      </pre>
    </div>
  );
};

const Page3 = () => {
  return (
    <div>
      <pre>
        {`/*
*******************
* Name: Jignesh
* Class: SE-1 CMPN
* Roll no. 69
* Batch: C1
* Subject: DBMS
* Practical: 4
*******************
*/`}
      </pre>
    </div>
  );
};

const Page5 = () => {
  return (
    <div>
      <pre>
        {`<!--
********************
* Name: Jignesh
* Class: SE-1 CMPN
* Roll no. 69
* Batch: C1
* Subject: DBMS
* Practical: 4
********************
-->`}
      </pre>
    </div>
  );
};

export function Slider({}) {
  const pages = [Page1, Page2, Page3, Page4, Page5];

  return (
    // max-w-[26rem]
    <Carousel className="w-full  mx-auto">
      <CarouselContent className="-ml-1">
        {pages.map((Page, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/3">
            <div className="p-1">
              <Card className="cursor-pointer min-w-18">
                <CardContent className="flex xss:h-48 h-40 lg:h-64 justify-center py-6 px-2">
                  <div className="text-[8px] lg:text-[12px] leading-snug font-inter font-light">
                    <Page />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
