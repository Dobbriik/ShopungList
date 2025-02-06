import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Layout from '../screens/Layout/Layout'
import Auth from '../screens/Auth/Auth'
import Register from '../screens/Register/Register'
import List from '../screens/List/List'
import ListSkeleton from '../screens/List/ListSkeleton'
import SidBar from '../shared/components/SidBar/SidBar'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route
					index
					element={
						<>
							<SidBar />
							<Home />
						</>
					}
				></Route>
				<Route path='/Auth' element={<Auth />} />
				<Route path='/Register' element={<Register />} />
				<Route
					path='/List'
					element={
						<>
							<SidBar />
							<ListSkeleton />
						</>
					}
				></Route>
				<Route
					path='/List/:id'
					element={
						<>
							<SidBar />
							<List />
						</>
					}
				></Route>
			</Route>
		</Routes>
	)
}
export default App
