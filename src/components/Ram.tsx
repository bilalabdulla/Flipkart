import { useSearchParams } from "react-router-dom"


export type Ram = {
    handleFilter: (value: string) => void
}

const Ram = (props: Ram) => {
    const { handleFilter } = props
    const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
    <div className='ram-div'>
       
        <div className='input-div'>
            <input type='checkbox' id='4gb' className='checkbox'
            onClick={() => handleFilter('ram=4000')}
            checked={searchParams.toString().match('ram=4000') ? true : false}/>
            <label htmlFor='4gb' className='label'>4 GB</label>
        </div>
        <div className='input-div'>
            <input type='checkbox' id='3gb' className='checkbox'
            onClick={() => handleFilter('ram=3000')}
            checked={searchParams.toString().match('ram=3000') ? true : false}/>
            <label htmlFor='3gb' className='label'>3 GB</label>
        </div>
        <div className='input-div'>
            <input type='checkbox' id='2gb' className='checkbox'
            onClick={() => handleFilter('ram=2000')}
            checked={(searchParams.toString().match('ram=2000')) ? true : false}/>
            <label htmlFor='2gb' className='label'>2 GB</label>
        </div>
        <div className='input-div'>
            <input type='checkbox' id='6gb' className='checkbox'
            onClick={() => handleFilter('ram=6000')}
            checked={searchParams.toString().match('ram=6000') ? true : false}/>
            <label htmlFor='6gb' className='label'>6 GB</label>
        </div>
        <div className='input-div'>
            <input type='checkbox' id='8gb+' className='checkbox'
            onClick={() => handleFilter('ram=8000&ram=16000&ram=32000&ram=64000')}
            checked={searchParams.toString().match('ram=8000&ram=16000&ram=32000&ram=64000') ? true : false}/>
            <label htmlFor='8gb+' className='label'>8 GB and Above</label>
        </div>
        <div className='input-div'>
            <input type='checkbox' id='1gb' className='checkbox'
            onClick={() => handleFilter('ram=1000')}
            checked={searchParams.toString().match('ram=1000') ? true : false}/>
            <label htmlFor='1gb' className='label'>1 GB and Below</label>
        </div>
        {/* <div className='input-div'>
            <input type='checkbox' id='6gb+' className='checkbox'
            onClick={() => handleFilter('ram=6000&ram=8000&ram=16000&ram=32000&ram=64000')}
            checked={searchParams.toString().match('ram=6000&ram=8000&ram=16000&ram=32000&ram=64000') ? true : false}/>
            <label htmlFor='6gb+' className='label'>6 GB and Above</label>
        </div> */}
    </div>
</>
  )
}

export default Ram
