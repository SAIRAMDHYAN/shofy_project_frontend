import React,{useState,useEffect} from 'react'

const Pagination = ({products}) => {
    const[currPage,setCurrPage]=useState(1)
    const productsPerPage=10
    const lastProductInPage=currPage*productsPerPage
    const firstProductInPage=lastProductInPage-productsPerPage
    const disProducts=products.slice(firstProductInPage,lastProductInPage)
    const nOfpage=Math.ceil(products.length/productsPerPage)
    const pageNumber=[...Array(nOfpage+1).keys()].slice(1)

    // useEffect(() => {
    //     // Calculate displayed products on page change
    //     const newDisplayedProducts = products.slice(firstProductInPage, lastProductInPage);
    //     setDisplayedProducts(newDisplayedProducts);
    //   }, [currPage, products, firstProductInPage, lastProductInPage, setDisplayedProducts]);
    

    const prevPage=()=>{
        if(currPage!==1){
         setCurrPage(currPage-1)
        }
     }
    
     const nextPage=()=>{
      if(currPage!==nOfpage){
       setCurrPage(currPage+1)
      }
    }
  return (
    <div>
      <div>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link bg-light "
              onClick={prevPage}
              >PrevPage</a>
            </li>
 
            {pageNumber.map((n,i)=>(
                  <li key={i} className={`page-item ${currPage===n?'active':''}`}>
                      <a href="#" className="page-link ">{n}</a>
                  </li>)
              )}


          <li className="page-item">
              <a href="#" className="page-link"
              onClick={nextPage}
              >NextPage</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
