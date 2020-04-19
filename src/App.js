import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import SpacingGrid from './Components/Grid'
import PaginationView from './Components/Pagination'
import Corona from './Assests/corona.png'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import CountUp from 'react-countup'
const App = (props) => {
  const [data, setData] = useState([])
  const [totalData, setTotal] = useState({})
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage] = useState(16)
  useEffect(() => {
    document.title='Covid-19'
    const getCountryData = async () => {
      setLoading(true)
      const countryData = await axios.get(
        'https://corona.lmao.ninja/v2/countries'
      )
      const total = await axios.get(
        'https://corona.lmao.ninja/v2/all?yesterday=1'
      )
       setTotal(total.data)
      setData(countryData.data)
      setLoading(false)
    }
    getCountryData()
  }, [])
  const indexOfLastCard = currentPage * cardPerPage
  const indexOfFirstCard = indexOfLastCard - cardPerPage
  const currentCard = data.slice(indexOfFirstCard, indexOfLastCard)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
    if(loading)
    {
      return (
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={100} color={'inherit'} />
        </div>
      )
    }else{
      return(
        <div
      style={{
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundImage: `url(${Corona})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain'
      }}
    >
      <Header />
      <SpacingGrid data={currentCard} />
      <PaginationView
        cardsPerPage={cardPerPage}
        totalCard={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
      )
    }
}

export default App
