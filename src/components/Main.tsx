import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cookies from "universal-cookie"
import PhoneCard from "./PhoneCard"
import Description from "./Description"

export type Main = {
    data: any 
    refetch: any,
    sortUrl: string,
    setSortUrl: React.Dispatch<React.SetStateAction<string>>,
    pageNumber: number,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
    totalPages: number,
    totalItems: number,
    currentItems: number
}

const Main = (props: Main) => {
    const { data, refetch, sortUrl, setSortUrl, pageNumber, setPageNumber, totalPages, totalItems, currentItems } = props 
    const [sort, setSort] = useState('all')
    const pageArray = []
    const cookies = new Cookies()
    const [count, setCount] = useState(0)
    let items = 0

    useEffect(() => {
        const handleSort = () => {
          if (sort === 'popularity') {
            setSortUrl('popularity')
            cookies.set('sort', 'popularity')
          }   else if (sort == 'pricelh') {
            setSortUrl('price')
            cookies.set('sort','price')
          } else if (sort === 'pricehl') {
            setSortUrl('-price')
            cookies.set('sort', '-price')
          } else if (sort === 'new') {
            setSortUrl('created')
            cookies.set('sort', 'created')
          } else {
            return
          }
        }
        handleSort()
      }, [sort])

      useEffect(() => {
        cookies.set('page', pageNumber)
      }, [pageNumber])

      
      for (let i = 1; i <= totalPages; i++) {
          pageArray.push(i)
      }

      const handlePage = (value: string, num = 0) => {
        if (value === 'prev') {
          setPageNumber((prev) => prev - 1)
        } else if (value === 'next') {
          setPageNumber((prev) => prev + 1)
        } else {
          setPageNumber(num)
        }
      }

  return (
        <main className='main'>
            <Description />

            <div className='main-head'>
                <h2 className='title'>Mi mobiles<span>Showing ({((pageNumber - 1) * 10) + 1} - {currentItems + (pageNumber * 10) - 10}) of {totalItems} items</span></h2>
                <ul className='sort'>
                    <li>Sort By</li>
                    <li value='popularity' onClick={() => setSort('popularity')} className={(cookies.get('sort') === 'popularity') ? 'active' : ''}>Popularity</li>
                    <li value='pricelh' onClick={() => setSort('pricelh')} className={(cookies.get('sort') === 'price') ? 'active' : ''}>Price ---- Low to High</li>
                    <li value='pricehl' onClick={() => setSort('pricehl')} className={(cookies.get('sort') === '-price') ? 'active' : ''}>Price ---- High to Low</li>
                    <li value='new' onClick={() => setSort('new')} className={(cookies.get('sort') === 'created') ? 'active' : ''}>Newest First</li>
                </ul>

            </div>

            <section className='card-div'>

                {data?.map((phone: any, index: number) => {
                  items = items + 1
                  return <PhoneCard phone={phone} index={index}/>
                })}

                {(totalItems == 0) && 
                      <div className="empty">
                          <h4 className="empty-text">No items to show :(</h4>  
                     </div>}

            </section>  

           { (totalItems != 0) && <div className='page-main-div'>
                <div className='page-details'>
                  <p>Page {pageNumber} of {totalPages}</p>
                </div>
                <div className='page'> 
                    <button onClick={() => handlePage('prev')} className='page-nav' disabled={pageNumber === 1}>Previous</button>

                      {pageArray?.map((page) => {
                        return <div className={(page === pageNumber) ? 'page-div-active' : 'page-div'} onClick={() => handlePage('current', page)}>
                          <p className='page-text'>{page}</p>
                        </div>
                      })}

                      <button onClick={() => handlePage('next')} className="page-nav" disabled={pageNumber === totalPages}>Next</button>
                </div>
            </div>
            }
        </main>
  )
}

export default Main
