import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/Homepage';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import AboutPage from './pages/AboutPages'
import ErrorPage from './pages/ErrorPages'

function App() {

  return (
    <ThemeProvider>
       <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
