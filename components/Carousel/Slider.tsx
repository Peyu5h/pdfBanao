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
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent className="-ml-1">
        {pages.map((Page, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex h-48 justify-center py-6 px-2">
                  <div className="text-[8px] leading-snug font-inter font-light">
                    <Page />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
