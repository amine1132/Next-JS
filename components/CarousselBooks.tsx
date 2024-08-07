import * as React from "react";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import bookBit from '../public/articles/early-bird.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Article {
  articleId: string;
  title: string;
  description: string;
  webLink: string;
  image: string;
  category: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

interface CarouselSizeProps {
  books: Article[];
}

export function CarouselSize({ books }: CarouselSizeProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[80%]"
    >
      <CarouselContent className="gap-[12%]">
        {books.map((book) => (
          <CarouselItem key={book.articleId} className="md:basis-1/3 lg:basis-[180px] h-[320px]">
            <div className="p-1 w-[100%] h-[100%]">
              <Card className=" w-[100%] h-[100%]">
                <CardContent className="flex items-center justify-center w-[100%] h-[100%]">
                  <a href={book.webLink} className=" w-[30vh] h-[100%] flex justify-between flex-row gap-8">
                    <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '37.21%' }}>
                      <Image src={bookBit} alt={book.title} layout="responsive" width={645} height={240} style={{ objectFit: 'cover' }} className="rounded-l-lg"/>
                    </div>
                    <div className="w-[40%]">
                      <h3 className='font-semibold m-3'>{book.title}</h3>
                      <p>{book.description}</p>
                    </div>
                  </a>
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
