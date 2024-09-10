import { useSearchParams } from "react-router-dom"
import Cookies from "universal-cookie"


export type Filters = {
    handleClear: () => void
    handleDelete: (value: string) => void
    minimum: number
    maximum: number
    url: string,
}

const Filters = (props: Filters) => {
    const { handleClear, handleDelete, minimum, maximum, url } = props 
    const [searchParams, setSearchParams] = useSearchParams()
    const cookies = new Cookies()

  return (
    <div className='filter-main-div'>
            <div className='filter-title-div'>
                <h2 className='filter-title'>Filters</h2>
                {((searchParams.toString() !== '') || (cookies.get('minimum') || (cookies.get('maximum')))) && <h4 className='clear-text' onClick={handleClear}>CLEAR ALL</h4>}
            </div>

            <div className='filtered'>

            {cookies.get('minimum') && 
                <div className='filter-item' onClick={() => handleDelete('minimum')}>
                    <h4 className='filter-item-text'>Min: {minimum}</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}

            {cookies.get('maximum') && 
                <div className='filter-item' onClick={() => handleDelete('maximum')}>
                    <h4 className='filter-item-text'>Max: {maximum}</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            { url?.toString().match('rating_gte=4') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('rating_gte=4', ''))}>
                    <h4 className='filter-item-text'>4 Star and Above</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('rating_gte=3') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('rating_gte=3', ''))}>
                    <h4 className='filter-item-text'>3 Star and Above</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('assured=true') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('assured=true', ''))}>
                    <h4 className='filter-item-text'>Assured</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('ram=1000') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=1000', ''))}>
                    <h4 className='filter-item-text'>1GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('ram=2000') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=2000', ''))}>
                    <h4 className='filter-item-text'>2GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('ram=3000') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=3000', ''))}>
                    <h4 className='filter-item-text'>3GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('ram=4000') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=4000', ''))}>
                    <h4 className='filter-item-text'>4GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('ram=6000') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=6000', ''))}>
                    <h4 className='filter-item-text'>6GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {/* {url?.toString().match('ram=8000') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=8000', ''))}>
                    <h4 className='filter-item-text'>8GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>} */}
                {url?.toString().match('ram_lt=1') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram_lt=1', ''))}>
                    <h4 className='filter-item-text'>Below 1GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {/* {url?.toString().match('ram_gt=4') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram_gt=4', ''))}>
                    <h4 className='filter-item-text'>Above 4GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('ram_gt=6') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=6000&ram=8000&ram=16000&ram=32000&ram=64000', ''))}>
                    <h4 className='filter-item-text'>Above 6GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>} */}
            {url?.toString().match('ram=8000&ram=16000&ram=32000&ram=64000') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('ram=8000&ram=16000&ram=32000&ram=64000', ''))}>
                    <h4 className='filter-item-text'>Above 8GB RAM</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('brand=mi') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('brand=mi', ''))}>
                    <h4 className='filter-item-text'>Mi</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('brand=samsung') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('brand=samsung', ''))}> 
                    <h4 className='filter-item-text'>Samsung</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
            {url?.toString().match('brand=moto') && 
                 <div className='filter-item' onClick={() => setSearchParams((prev) => prev.toString().replace('brand=moto', ''))}>
                    <h4 className='filter-item-text'>Moto</h4>
                    <h4 className='filter-close'>X</h4>
                </div>}
                
            </div>
        </div>
  )
}

export default Filters
