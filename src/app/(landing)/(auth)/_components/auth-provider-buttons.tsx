import {Button} from "@/app/_components/button"
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  BiLogoFacebook,
  IconProvider,
} from "@/app/_components/icons"
import {cn} from "@/app/_lib/cn"

export const AuthProviderButtons = () => (
  <ul className={cn(["flex gap-[2rem] justify-center mb-3"])}>
    <li>
      <Button
        className={cn(["!p-3"])}
        type="outline"
        href="/google"
        icon={
          <IconProvider value={{size: "1.5rem"}}>
            <AiOutlineGoogle />
          </IconProvider>
        }
      />
    </li>
    <li>
      <Button
        className={cn(["!p-3"])}
        type="outline"
        href="/facebook"
        icon={
          <IconProvider value={{size: "1.5rem"}}>
            <BiLogoFacebook />
          </IconProvider>
        }
      />
    </li>
    <li>
      <Button
        className={cn(["!p-3"])}
        type="outline"
        href="/twitter"
        icon={
          <IconProvider value={{size: "1.5rem"}}>
            <AiOutlineTwitter />
          </IconProvider>
        }
      />
    </li>
  </ul>
)
