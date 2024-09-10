import { useSearchParams } from "react-router-dom"

export type Brand = {
    handleFilter: (value: string) => void
}

const Brand = (props: Brand) => {
    const { handleFilter } = props
    const [searchParams, setSearchParams] = useSearchParams()


  return (
     <div className='mini-div'>
            
            <div className='input-div'>
                <input type='checkbox' id='Mi' className='checkbox' 
                onClick={() => handleFilter('brand=mi')}
                checked={searchParams.toString().match('brand=mi') ? true : false}/>
                <label htmlFor='Mi' className='label'>Mi</label>
            </div>

            <div className='input-div'>
                <input type='checkbox' id='Samsung' className='checkbox'
                onClick={() => handleFilter('brand=samsung')}
                checked={searchParams.toString().match('brand=samsung') ? true : false}/>
                <label htmlFor='Samsung' className='label'>Samsung</label>
            </div>

            <div className='input-div'>
                <input type='checkbox' id='moto' className='checkbox'
                onClick={() => handleFilter('brand=moto')}
                checked={searchParams.toString().match('brand=moto') ? true : false}/>
                <label htmlFor='moto' className='label'>Moto</label>
            </div>
            
        </div>
  )
}

export default Brand
