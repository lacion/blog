import Link from 'next/link';

import { ITeamSelectorProps } from './types';
import NextImage from '../NextImage';

export default function BlogCard({
  title,
  category,
  description,
  date,
  href,
  datetime,
  imageUrl,
  readingTime,
  author,
}: ITeamSelectorProps) {
  return (
    <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
      <div className='flex-shrink-0'>
        <div className='h-50 w-full object-cover'>
          <NextImage
            src={imageUrl}
            alt=''
            width={1679}
            height={1079}
            layout='responsive'
          />
        </div>
      </div>
      <div className='flex flex-1 flex-col justify-between bg-white p-6'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-indigo-600'>
            <Link href={category.href}>
              <a className='hover:underline'>{category.name}</a>
            </Link>
          </p>
          <Link href={href}>
            <a className='mt-2 block'>
              <p className='text-xl font-semibold text-gray-900'>{title}</p>
              <p className='mt-3 text-base text-gray-500'>{description}</p>
            </a>
          </Link>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <Link href={author.href}>
              <a>
                <span className='sr-only'>{author.name}</span>
                <NextImage
                  className='h-10 w-10 rounded-full'
                  src={author.imageUrl}
                  width={256}
                  height={256}
                  alt=''
                />
              </a>
            </Link>
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900'>
              <Link href={author.href}>
                <a className='hover:underline'>{author.name}</a>
              </Link>
            </p>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time dateTime={datetime}>{date}</time>
              <span aria-hidden='true'>&middot;</span>
              <span>{readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
