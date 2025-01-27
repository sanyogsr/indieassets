import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
// import { cookies } from 'next/headers'
import { getServerSideProps } from 'next/dist/build/templates/pages'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'

const Navbar = async () => {
    // const nextCookies  = cookies();
    const user = null;
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
            <MaxWidthWrapper>
                <div className='border-b border-gray-300'>
                    <div className='flex items-center h-16'>
                        {/* TODO Mobile nav */}
                        <div className='ml-4 flex lg:ml-0'>
                            <Link href='/'>
                            <Icons.logo className='h-10 w-10'/>
                            </Link>
                        </div>
                        <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">

                            <NavItems/>
                        </div>

                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                                {user ? null:<Link href='/sign-in' className={buttonVariants({
                                    variant:'ghost'
                                })}>Sign in</Link>}
                            </div>
                        </div>
                    </div > 
                </div>
            </MaxWidthWrapper>
        </header>
      
    </div> 
  )
}

export default Navbar
