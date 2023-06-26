import { FillButton, TransparentButton } from '@/app/[locale]/components/Buttons'
import { UseLoginModal } from '@/app/hooks/UseLoginModal'
import { UseRegisterModal } from '@/app/hooks/UseRegisterModal'


export const NavbarFooter = () => {
  
  const loginModal = UseLoginModal()
  const registerModal = UseRegisterModal()

  return (
    <footer className='mt-auto w-full flex flex-col gap-[8px]'>
        <TransparentButton full label={'Try it for free'} onClick={()=>registerModal.onOpen()} color='blue' />
        <FillButton label='Sign in' color='green' full onClick={()=>loginModal.onOpen()} />
    </footer>
  )
}
