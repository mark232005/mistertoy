import { Provider } from 'react-redux'
import { store } from './store/store.js'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToyIndex } from './pages/toyIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import './assets/style/main.scss'
import { Dashboard } from './pages/Dashboard.jsx'
import { LogPage } from './pages/Login.jsx'




export function App() {
    return (
        <Provider store={store}>
            <Router>
                <section className='main-layout app'>
                    <AppHeader />
                    <main>
                        <Routes>
                            <Route element={< HomePage/>} path="/" />
                            <Route element={<AboutUs />} path="/about" />
                            <Route element={<ToyIndex />} path="/toy" />
                            <Route element={<ToyDetails />} path="/toy/:toyId" />
                            <Route element={<Dashboard/>} path="/dashboard" />
                            <Route element={<ToyEdit />} path="/toy/edit/:toyId?" />
                            <Route element={<LogPage/>} path="/login" />
                        </Routes>
                    </main>
                </section>
            </Router>

        </Provider>
    )
}


