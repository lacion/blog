import {Popover, Transition} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import Link from 'next/link'
import {Fragment} from 'react';


export default function Header() {
    return (
        <Popover className='relative bg-white'>
            <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
                <div>
                    <a href='#' className='flex'>
                        <span className='sr-only'>Luis Morales</span>
                        <img
                            className='h-8 w-auto sm:h-10'
                            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            alt=''
                        />
                    </a>
                </div>
                <div className='-my-2 -mr-2 md:hidden'>
                    <Popover.Button
                        className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Open menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true'/>
                    </Popover.Button>
                </div>
                <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
                    <Popover.Group as='nav' className='flex space-x-10'>
                        <Link href='/'>
                            <a

                                className='text-base font-medium text-gray-500 hover:text-gray-900'
                            >
                                Home
                            </a>
                        </Link>
                        <Link href='#'>
                            <a

                                className='text-base font-medium text-gray-500 hover:text-gray-900'
                            >
                                About Me
                            </a>
                        </Link>
                        <Link href='#'>
                            <a

                                className='text-base font-medium text-gray-500 hover:text-gray-900'
                            >
                                Contact Me
                            </a>
                        </Link>
                    </Popover.Group>
                    <div className='flex items-center md:ml-12'>
                        {/* social links here */}
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter='duration-200 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                <Popover.Panel
                    focus
                    className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
                >
                    <div
                        className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='px-5 pt-5 pb-6'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <img
                                        className='h-8 w-auto'
                                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                                        alt='Luis Morales'
                                    />
                                </div>
                                <div className='-mr-2'>
                                    <Popover.Button
                                        className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                        <span className='sr-only'>Close menu</span>
                                        <XIcon className='h-6 w-6' aria-hidden='true'/>
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className='py-6 px-5'>
                            <div className='grid grid-cols-2 gap-4'>
                                <Link href='/'>
                                    <a

                                        className='text-base font-medium text-gray-900 hover:text-gray-700'
                                    >
                                        Home
                                    </a>
                                </Link>
                                <Link href='#'>
                                    <a

                                        className='text-base font-medium text-gray-900 hover:text-gray-700'
                                    >
                                        About Me
                                    </a>
                                </Link>
                                <Link href='#'>
                                    <a

                                        className='text-base font-medium text-gray-900 hover:text-gray-700'
                                    >
                                        Contact Me
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
