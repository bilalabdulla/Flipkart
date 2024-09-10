
export type PhoneCard = {
    name: string 
    price: number 
    id: number
    ram: number
    discount: number
    storage: string
    image: string 
    camera: string
    battery: string 
    processor: string 
    warranty: string
    assured: boolean
    display: string,
    rating: number,
    created: number,
    popularity: number,
  }

export type Phone = {
    phone: PhoneCard
    index: number
}

const PhoneCard = (props: Phone) => {
    const { phone, index } = props
    const {name, id, price, discount, storage, battery, processor, 
        warranty, camera, assured, display, ram, rating, created, popularity} = phone 
 
  return (
        <div className='card'>
            <div className='img-div'>
                <img className='card-img' src='phone.webp'/>
            </div>
            <div className='card-details'>
                    {/* <p>{id}</p> */}
                    <h2 className='phone-name'>{name}</h2>    
                    <p className='phone-rating'>
                    <span>{rating}</span>
                    <i className="fa-solid fa-star star-icon"></i>
                    </p>
                    <div className='main-details'>
                        <div className='storage-details'>
                        <p>{ram.toString().replaceAll('0', '')} GB RAM | </p>
                        <p>{storage} GB ROM | </p>
                        <p>Expandable Upto 256GB</p> 
                        </div>
                        <p>{display}</p>
                        <p>{camera}</p>
                        <p>{battery}</p>
                        <p>{processor}</p>
                        <p>Brand Warranty of {warranty} Year Available</p>
                        {/* <p>created{created}</p>
                        <p>popularity{popularity}</p> */}
                    </div>
            </div>  
            <div className='price-details'>
                <div className='total-price-div'>
                    <h2 className='total-price'>₹ {price}</h2>
                    {assured ? <img src='assured.png' className='assured-img'/> : null}
                </div>
                    <p className='discount'>{discount} % off</p> 
                    <p className='delivery'>Free delivery</p>
                    <p className='combo'>save extra with combo</p>
                    <p className='exchange'>Only 1 left</p>
            </div>      
        </div>  
  )
}

export default PhoneCard
