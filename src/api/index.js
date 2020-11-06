import axios from 'axios'

const URL = 'https://covid19.mathdro.id/api'

export const fetchData = async country => {
  let changeAbleUrl = URL

  if (country) {
    changeAbleUrl = `${URL}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeAbleUrl)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    return error
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${URL}/countries`)
    const res = countries.map(country => country.name)

    return res
  } catch (error) {
    return error
  }
}

// export const fetchDailyData = async () => {
//   try {
//     const res = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
//     console.log({res});
//     return res
//   } catch (error) {
//     return error
//   }
// }