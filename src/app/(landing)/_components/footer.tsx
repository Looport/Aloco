import Image from 'next/image'

import {Button} from '@/app/_components/button'
import {
  BiLogoTelegram,
  BsCameraVideo,
  BsInstagram,
  AiOutlineTwitter,
  IconProvider,
} from '@/app/_components/icons'
import {cn} from '@/app/_lib/cn'

export const Footer = () => (
  <footer className={cn(['bg-zinc-950 mt-20 py-20 sm:px-20'])}>
    <div className={cn(['flex justify-center sm:justify-between mb-5'])}>
      <div>
        <Image
          width={130}
          height={35}
          src="/images/logos/aloco-logo.png"
          alt="Aloco"
        />
      </div>

      <ul className={cn(['flex gap-5 items-center'])}>
        <li>
          <Button
            type="outline"
            icon={
              <IconProvider value={{size: '1.2rem'}}>
                <BsCameraVideo />
              </IconProvider>
            }
          >
            Start Call
          </Button>
        </li>
        <li>
          <Button
            href="/twitter"
            className={cn(['!p-4'])}
            type="outline"
            icon={
              <IconProvider value={{size: '1.2rem'}}>
                <AiOutlineTwitter />
              </IconProvider>
            }
          />
        </li>
        <li>
          <Button
            href="/instagram"
            className={cn(['!p-4'])}
            type="outline"
            icon={
              <IconProvider value={{size: '1.2rem'}}>
                <BsInstagram />
              </IconProvider>
            }
          />
        </li>
        <li>
          <Button
            href="/telegram"
            className={cn(['!p-4'])}
            type="outline"
            icon={
              <IconProvider value={{size: '1.2rem'}}>
                <BiLogoTelegram />
              </IconProvider>
            }
          />
        </li>
      </ul>
    </div>
    <div className={cn(['font-bold flex justify-between'])}>
      <nav className={cn(['flex'])}>
        <ul className={cn(['flex gap-10'])}>
          <li>Terms and Conditionals</li>
          <li>Privacy Policy</li>
          <li>About Us</li>
          <li>Roadmap</li>
          <li>Donate</li>
          <li>Register</li>
        </ul>
      </nav>
      <span>Copyright © 2023. All rights reserved.</span>
    </div>
  </footer>
)
