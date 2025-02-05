import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Layout from '../screens/Layout/Layout'
import Auth from '../screens/Auth/Auth'
import Register from '../screens/Register/Register'
import List from '../screens/List/List'
import ListSkeleton from '../screens/List/ListSceleton'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/Auth' element={<Auth />} />
				<Route path='/Register' element={<Register />} />
				<Route path='/List' element={<List />} />
				<Route path='/List/:id' element={<ListSkeleton />} />
			</Route>
		</Routes>
	)
}
export default App
