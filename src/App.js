import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import SpacingGrid from './Components/Grid'
import PaginationView from './Components/Pagination'
import Corona from './Assests/corona.png'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import CountUp from 'react-countup'
import VideoPlyaer from './Components/VideoPlyaer'
import Model from 'react-modal'
Model.setAppElement('#root')
const App = (props) => {
  const [data, setData] = useState([])
  const [totalData, setTotal] = useState({})
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [search,setSearch] = useState('')
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
  const currentCard = data.filter((country)=>{return country.country.toLowerCase().indexOf(search.toLowerCase())!==-1}).slice(indexOfFirstCard, indexOfLastCard)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleSeach =(search)=>{
    console.log("Search",search)
    setSearch(search)
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
      <VideoPlyaer/>
      <Header handleSearch={handleSeach} />
      <SpacingGrid data={currentCard}/>
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
