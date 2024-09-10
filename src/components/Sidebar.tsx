import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cookies from "universal-cookie"
import Filters from "./Filters"
import Range from "./Range"
import Brand from "./Brand"
import Rating from "./Rating"
import Ram from "./Ram"
import Extras from "./Extras"



export type Props = {
    refetch: any,
    minimum: number,
    maximum: number,
    setMinimum: React.Dispatch<React.SetStateAction<number>>,
    setMaximum: React.Dispatch<React.SetStateAction<number>>,
    sideFilter: boolean,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

const Sidebar = (props: Props) => {

    const { refetch, minimum, maximum, setMinimum, setMaximum, sideFilter, setPageNumber} = props 
    const cookies = new Cookies()
    const [searchParams, setSearchParams] = useSearchParams()
    const url = (window.location.href).split('?')[1]
    const [editFilter, setEditFilter] = useState(false)

    const [ramBar, setRambar] = useState(true)
    const [ratingBar, setRatingBar] = useState(false)
    const [brandBar, setBrandBar] = useState(true)

    const handleFilter = (value: string) => {
        setSearchParams((prev) => prev.toString().match(value) ? prev.toString().replaceAll(value, '') : prev + `&${value}`)
        setEditFilter(!editFilter)
        setPageNumber(1)
        refetch()
    }

    const handleDelete = (value: string) => {
        cookies.remove(value)
        if (value === 'minimum') {
            setMinimum(0)
        } else {
            setMaximum(40000)
        }
        setPageNumber(1)
        refetch()
    }

    const handleRange = (value: number, name: string) => {
        if (name === 'minimum') {
            setMinimum(value)
            cookies.set(name, value)
        } else {
            setMaximum(value)
            cookies.set(name, value)
        }
        setPageNumber(1)
    }


    const handleClear = () => {
        setSearchParams('')
        cookies.remove('minimum')
        cookies.remove('maximum')
        setMinimum(0)
        setMaximum(40000)
        refetch()
        setPageNumber(1)
    }

    return (
        <div className={sideFilter ? 'filters show': 'filters'}>
            <Filters handleClear={handleClear} handleDelete={handleDelete} minimum={minimum} 
            maximum={maximum} url={url}/>

                <div className='mini-div'>
                    <h2 className='mini-title'>Categories</h2>
                    <p className='mobile-category'>
                        <i className="fa-solid fa-chevron-left chevron"></i>
                        <p className="chevron-text">Mobiles and Accesories</p></p>
                    <p className='mobile-mini-category'>Mobiles</p>
                </div>

                <Range handleRange={handleRange} minimum={minimum} maximum={maximum}
                 setMinimum={setMinimum} setMaximum={setMaximum} setPageNumber={setPageNumber}/>

                <div className='mini-div'>
                    <div className="mini-title-div" onClick={() => setBrandBar(!brandBar)}>
                        <h2 className='mini-title'>Brand</h2>
                        <i className={brandBar ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                    {brandBar && <Brand handleFilter={handleFilter}/>}
                 </div>
                

                <div className='mini-div'>
                    <div className='input-div'>
                        <input type='checkbox' id='assured' className='checkbox'
                        onClick={() => handleFilter('assured=true')}
                        checked={searchParams.toString().match('assured=true') ? true : false}/>
                        <label htmlFor='assured' className='label'>Assured</label>
                    </div>
                </div>

                <div className='mini-div'>
                    <div className="mini-title-div" onClick={() => setRatingBar(!ratingBar)}>
                        <h2 className='mini-title'>Customer Rating</h2>
                        <i className={ratingBar ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                    {ratingBar && <Rating handleFilter={handleFilter}/>}
                 </div>
                

                <div className='mini-div'>
                    <h2 className='mini-title'>GST Invoice available</h2>
                </div>

                <div className='mini-div'>
                    <div className="mini-title-div" onClick={() => setRambar(!ramBar)}>
                        <h2 className='mini-title'>RAM</h2>
                        <i className={ramBar ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                    </div>
                    {ramBar && <Ram handleFilter={handleFilter}/>}
                 </div>

                <Extras />

        </div>

    )
}

export default Sidebar