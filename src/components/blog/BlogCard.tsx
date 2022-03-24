import Link from 'next/link';

import NextImage from '../NextImage';

export default function BlogCard({ post }) {
  return (
    <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
      <div className='flex-shrink-0'>
        <NextImage
          className='h-48 w-full object-cover'
          src={post.imageUrl}
          alt=''
          width={1679}
          height={1079}
        />
      </div>
      <div className='flex flex-1 flex-col justify-between bg-white p-6'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-indigo-600'>
            <Link href={post.category.href}>
              <a className='hover:underline'>{post.category.name}</a>
            </Link>
          </p>
          <Link href={post.href}>
            <a className='mt-2 block'>
              <p className='text-xl font-semibold text-gray-900'>
                {post.title}
              </p>
              <p className='mt-3 text-base text-gray-500'>{post.description}</p>
            </a>
          </Link>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <Link href={post.author.href}>
              <a>
                <span className='sr-only'>{post.author.name}</span>
                <NextImage
                  className='h-10 w-10 rounded-full'
                  src={post.author.imageUrl}
                  width={256}
                  height={256}
                  alt=''
                />
              </a>
            </Link>
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900'>
              <Link href={post.author.href}>
                <a className='hover:underline'>{post.author.name}</a>
              </Link>
            </p>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time dateTime={post.datetime}>{post.date}</time>
              <span aria-hidden='true'>&middot;</span>
              <span>{post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
