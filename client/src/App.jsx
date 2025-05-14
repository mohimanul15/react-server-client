import { Link, Outlet } from 'react-router'

function App() {

  return (
    <>
      <header className='container mx-auto place-items-center'>
        <nav className='flex gap-3 py-12'>
          <Link to={'/'}><button className='btn btn-primary'> Home </button></Link>
          <Link to={'/post'}><button className='btn btn-primary'> Post </button></Link>
          <Link to={'/user'}><button className='btn btn-primary'> Users </button></Link>
          <Link to={'/contact'}><button className='btn btn-primary'> Contact </button></Link>
        </nav>
      </header>

      <Outlet></Outlet>
    </>
  )
}

export default App
