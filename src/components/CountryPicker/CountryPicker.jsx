import React, { useEffect, useState } from 'react'

import { NativeSelect, FormControl } from '@material-ui/core'

import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState()

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetchCountries()
      setCountries(res)
    }
    fetchAPI()
  }, [setCountries])

  return (
    <FormControl disabled={countries ? false : true} className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={e => handleCountryChange(e.target.value)}>
        <option value='select'>Select</option>
        {countries && countries.map((country, i) => (
          <option key={i} value={country}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker