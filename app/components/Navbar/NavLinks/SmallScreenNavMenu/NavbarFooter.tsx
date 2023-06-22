import { FillButton, TransparentButton } from '@/app/components/Buttons'


export const NavbarFooter = () => {
  return (
    <footer className='mt-auto w-full flex flex-col gap-[8px]'>
        <TransparentButton full label={'Try it for free'} onClick={()=>{}} color='blue' />
        <FillButton label='Sign in' color='green' full onClick={()=>{}} />
    </footer>
  )
}
