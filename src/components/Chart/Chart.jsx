import React from 'react'
import { Bar } from 'react-chartjs-2'

// import { fetchDailyData } from '../../api'
import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

  const barChart = (
    confirmed && country ? (
      <Bar className={styles.chart}
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: ['#ffe78f', '#28df99', '#ea2c62'],
            data: [confirmed.value, recovered.value, deaths.value]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` }
        }}
      />
    ) : (
      <div>Opps!</div>
    )
  )

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  )
}

export default Chart