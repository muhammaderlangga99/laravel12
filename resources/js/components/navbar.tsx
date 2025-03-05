import { Link } from '@inertiajs/react';
import React from 'react'
// import { ModeToggle } from './mode-toggle';
import { User } from '@/types';
import { Boxes } from 'lucide-react';
import MenuMobile from './MenuMobile';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useInitials } from '@/hooks/use-initials';
const navItems = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Events',
        link: '/events'
    },
    {
        id: 4,
        name: 'Gallery',
        link: '/gallery'
    },
    {
        id: 5,
        name: 'Contact',
        link: '/contact'
    },
]


export default function Navigation({ auth }: { auth: { user: User } }) {
    const pathName = window.location.pathname;
    const getInitials = useInitials();
    return (
        <nav className='w-full'>
            <div className="container flex m-auto max-w-7xl py-3 px-3">
                <div className="left flex gap-5 lg:justify-normal w-full">
                    <MenuMobile Navigation={navItems} />
                    <div className="brand flex gap-x-1 items-center">
                        <Boxes strokeWidth={1} /> <span className='font-extrabold text-lg'>me.</span>
                    </div>

                    <ul className='lg:flex justify-between gap-5 items-center hidden'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link} className={`hover:text-zinc-600 text-sm ${item.link == pathName && 'text-zinc-950 dark:text-red-500 font-medium dark:hover:text-red-500 hover:text-zinc-950'}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className='lg:justify gap-1 lg:gap-2 items-center flex'>
                    {auth.user ? (
                        <li className=''>
                            <Link href={route('dashboard')} className='text-sm bg-zinc-100 dark:bg-zinc-900 rounded-xl text-zinc-950 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center gap-2 dark:text-white capitalize relative tracking-wider pr-3 '>
                                {/* avatar */}
                                <Avatar className="w-8 h-8 relative flex justify-between m-auto rounded-none overflow-hidden">
                                    {/* { auth.user.avatar && <img src={auth.user.avatar} alt={auth.user.name} className='w-full object-cover m-auto' /> } */}
                                    {/* <AvatarImage src={auth.user.avatar} alt={auth.user.name} /> */}
                                        <AvatarImage src={auth.user.avatar} alt={auth.user.name} className='bg-neutral-200 overflow-hidden rounded-l-xl rounded-r-none w-full object-cover m-auto text-black dark:bg-neutral-700 dark:text-white' />
                                        <AvatarFallback className="bg-neutral-200 overflow-hidden rounded-l-xl rounded-r-none w-full object-cover m-auto text-black dark:bg-neutral-700 dark:text-white">
                                            {getInitials(auth.user.name)}
                                        </AvatarFallback>
                                    <div className="h-full w-4 end-0 absolute bg-gradient-to-r via-transparent from-transparent to-zinc-200 dark:to-zinc-900"></div>
                                </Avatar>
                                    <span>{
                                        auth.user.name.length > 10 ? auth.user.name.split(' ')[1] : auth.user.name
                                    }</span>
                                  
                                {/* <span className="truncate font-medium">{auth.user.name}</span> */}
                            </Link>
                        </li>
                    ) : (
                        <ul className='flex space-x-3'>
                            <li>
                                <Link href={route('login')} className='text-sm flex bg-zinc-800 dark:bg-zinc-300 py-1 rounded-full text-white dark:text-black dark:shadow-zinc-600 w-16 justify-center'>Sign in</Link>
                            </li>
                            <li>
                                <Link href="/register" className='hidden w-[4.4rem] justify-center md:flex no-wrap text-center items-center gap-0.5 text-zinc-900 dark:text-zinc-300 text-sm rounded-full py-1 border dark:border-2 border-zinc-800 dark:border-zinc-500'>
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    )}
                </ul>
            </div>
        </nav>
    );
}
