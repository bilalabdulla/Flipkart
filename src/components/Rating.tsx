import { useSearchParams } from "react-router-dom"

export type Rating = {
    handleFilter: (value: string) => void
}

const Rating = (props: Rating) => {
    const { handleFilter } = props 
    const [searchParams, setSearchParams] = useSearchParams() 

  return (
    <div className='mini-div'>

        <div className='input-div'>
            <input type='checkbox' id='4star' className='checkbox'
            onClick={() => handleFilter('rating_gte=4')}
            checked={searchParams.toString().match('rating_gte=4') ? true : false}/>
            <label htmlFor='4star' className='label'><p>4</p><i className="fa-solid fa-star star-icon-two"></i><p>and Above</p></label>
        </div>
        <div className='input-div'>
            <input type='checkbox' id='3star' className='checkbox'
            onClick={() => handleFilter('rating_gte=3')}
            checked={searchParams.toString().match('rating_gte=3') ? true : false}/>
            <label htmlFor='3star' className='label'>3 <i className="fa-solid fa-star star-icon-two"></i> and Above</label>
        </div>
    </div>
  )
}

export default Rating
