import { Moon, Sun } from 'react-feather'
const Navbar = ({ onClick, isDrakMode }) => {
  return (
    <>
      <div className='w-full h-16 flex justify-between  justify-items-center items-center shadow-sm'>
        <h1 className='font-Poppins font-bold text-sm ml-2 cursor-pointer'>
          MuseQuran
        </h1>
        <button className='mr-5' onClick={onClick}>
          {isDrakMode ? <Moon /> : <Sun />}
        </button>
      </div>
    </>
  )
}
export default Navbar
