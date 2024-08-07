import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import discord from '../../assets/Social/Discord.svg';
import twitter from '../../assets/Social/twitter.svg';
import { CarouselSize } from '../../components/CarousselBooks';
import { CarouselMedia } from '../../components/CarousselMedia';

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

export default async function Page() {
  const filePath = path.join(process.cwd(), 'article.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const articles: Article[] = JSON.parse(jsonData);
  const articlesInCategoryX = articles.filter((article: Article) => article.category === "X");
  const books = articles.filter((article: Article) => article.category === "Books");
  const medias = articles.filter((article: Article) => article.category === "Medias");

  return (
    <>
      <div className="z-10 w-full items-center p-[20px] justify-between font-mono text-sm lg:flex fixed bg-white">
        <p className="text-gray-900 font-serif text-3xl font-medium normal-case not-italic no-underline leading-tight tracking-tighter">
          Encyclochain
        </p>
        <p className="text-gray-900 font-serif text-3xl font-medium normal-case not-italic no-underline leading-tight tracking-tighter">
          Blockchains encyclopedia
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center gap-[30px] bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a href="https://x.com/Encyclochain" target="_blank">
            <div style={{ width: '20px', height: '24px', position: 'relative' }}>
              <Image
                src={twitter}
                alt="Twitter Logo"
                width={20}
                height={24}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </a>
          <div style={{ width: '20px', height: '24px', position: 'relative' }}>
            <Image
              src={discord}
              alt="Discord Logo"
                width={20}
                height={24}
                style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F7931A] flex h-[54vh] justify-center items-center flex-col">
        <h1 className="text-white text-[104px] font-semibold">₿ITCOIN</h1>
        <a href="https://bitcoin.org/bitcoin.pdf" className="bg-white text-[#F7931A] px-6 py-3 rounded-sm font-medium">Whitepaper</a>
      </div>
      <div className='flex gap-[30px] mx-4 mt-[10vh] mb-[20vh]'>
        <h2 className='font-bold  flex items-center text-3xl'>X</h2>
        <ul className='flex items-center w-full justify-evenly gap-8'>
          {articlesInCategoryX.map((article: Article) => (
            <li key={article.articleId}>
              <a href={article.webLink}>
                <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '37.21%' }}>
                  <Image src={article.image} alt={article.title} layout="responsive" width={645} height={240} style={{ objectFit: 'cover' }} />
                </div>
                <h3 className='font-semibold mt-8'>{article.title}</h3>
                <p>{article.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center justify-around my-8 mb-[20vh]'>
        <h2 className='font-bold text-xl'>Books</h2>
        <CarouselSize books={books} />
      </div>
      <div className='flex justify-center items-center justify-around my-8 mb-[20vh]'>
        <h2 className='font-bold text-xl'>Medias</h2>
        <CarouselMedia Medias={medias} />
      </div>
      
    </>
  );
}
