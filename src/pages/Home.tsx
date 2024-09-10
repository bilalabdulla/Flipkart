import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import Cookies from "universal-cookie"
import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import NavList from "../components/NavList"

const fetchNewPhones = (url: string, minimum: number, maximum: number, sortUrl: string, pageNumber: number) => {
    return axios.get(`http://localhost:7000/phones?_limit=10&_page=${pageNumber}&${url}&price_gte=${minimum}&price_lte=${maximum}&_sort=${sortUrl}`)
}

const Home = () => {
    const cookies = new Cookies()
    const sortInitial = cookies.get('sort')
    const url = (window.location.href).split('?')[1]
    const [sideFilter, setSideFilter] = useState(false)
    const [pageNumber, setPageNumber] = useState(cookies.get('page') ? cookies.get('page') : 1)
    const [minimum, setMinimum] = useState(cookies.get('minimum') ? cookies.get('minimum') : 0)
    const [maximum, setMaximum] = useState(cookies.get('maximum') ? cookies.get('maximum') : 40000)
    const [sortUrl, setSortUrl] = useState(sortInitial ? sortInitial : '')

    const { data, refetch } = useQuery(['phones', url, minimum, maximum, sortUrl, pageNumber], 
        () => fetchNewPhones(url, minimum, maximum, sortUrl, pageNumber), 
    {
        keepPreviousData: true
    })
    
  return (
    <div className="main-home">
      <Navbar />
      <NavList />
      <div className="home">

        <div className="side-filter">
            <button className="side-filter-btn" onClick={() => setSideFilter(!sideFilter)}>
                <p>Filters</p>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>

        <Sidebar refetch={refetch} minimum={minimum} maximum={maximum} setMinimum={setMinimum}
        setMaximum={setMaximum} sideFilter={sideFilter} setPageNumber={setPageNumber}/>

        <Main data={data?.data} refetch={refetch} sortUrl={sortUrl} setSortUrl={setSortUrl} pageNumber={pageNumber} 
        setPageNumber={setPageNumber} totalPages={Math.ceil(data?.headers["x-total-count"]/10)} totalItems={data?.headers["x-total-count"]}
        currentItems = {data?.data?.length}/>
      </div>
    </div>
  )
}

export default Home
