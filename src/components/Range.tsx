import Slider from "./Slider"

export type Range = {
    handleRange: (value: number, name: string) => void
    minimum: number 
    maximum: number 
    setMinimum: React.Dispatch<React.SetStateAction<number>>
    setMaximum: React.Dispatch<React.SetStateAction<number>>
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

const Range = (props: Range) => {
    const { minimum, maximum, setMinimum, setMaximum, handleRange, setPageNumber} = props

  return (
    <div className='price-div'>
             <h2 className='mini-title'>Price</h2>

            <Slider min={minimum} max={maximum} setMinimum={setMinimum} setMaximum = {setMaximum} setPageNumber={setPageNumber}/>

            <div className='price-select-div'>
                <select className='price-select'
                onChange={(e) => handleRange(Number(e.target.value), 'minimum')}>
                    <option value='0'>Any</option>
                    <option value='10000' disabled={maximum <= 10000 && true}>10000</option>
                    <option value='15000' disabled={maximum <= 15000 && true}>15000</option>
                    <option value='20000' disabled={maximum <=20000 && true}>20000</option>
                    <option value='30000' disabled={maximum <=30000 && true}>30000</option>
                    <option value='35000' disabled={maximum <=35000 && true}>35000</option>
                </select>
                <p>to</p>
                <select className='price-select' 
                onChange={(e) => handleRange(Number(e.target.value), 'maximum')}>
                    <option value='40000'>Any</option>
                    <option value='10000' disabled={(minimum >= 10000) && true}>10000</option>
                    <option value='15000' disabled={(minimum >=15000) && true}>15000</option>
                    <option value='20000' disabled={(minimum >= 20000) && true}>20000</option>
                    <option value='25000' disabled={(minimum >=25000) && true}>25000</option>
                    <option value='40000' disabled={minimum >=40000 && true}>40000</option>
                </select>
            </div>

       </div>
  )
}

export default Range
