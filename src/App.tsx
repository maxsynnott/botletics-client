import './App.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AppRoutes from './routes'

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}

export default App
