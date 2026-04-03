import { Outlet } from 'react-router-dom'
import Header from './components/custom/Header'


export default function App() {
  return (
    <div>
      <Header/>
      <main>

      <Outlet />
      </main>
    </div>
  )
}
