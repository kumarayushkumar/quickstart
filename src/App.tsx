import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import Layout from './Layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
