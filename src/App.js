import React, { useState ,useEffect } from 'react'

import { Cards, CountryPicker, Chart } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

import images from './images/covid.png'
import Footer from './components/Footer/Footer'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState()

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchData()
      setData(res)
    }
    loadData()
  }, [])

  const handleCountryChange = async country => {
    const res = await fetchData(country)
    setCountry(country)
    setData(res)
  }

  return (
    <div className={styles.container}>
      <img className={styles.images} src={images} alt='covid-19' />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
      <Footer />
    </div>
  )
}

export default App