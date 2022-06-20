import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showbreadcrumb } from './breadcrumbSlice'

function Breadcrumb() {

  const dispatch = useDispatch()
  const [crumbsPath, setcrumbsPath] = useState(['root']);
  const { crumbChildren } = useSelector((state) => state.breadcrumb)
  
  useEffect(()=>{
      dispatch(showbreadcrumb(crumbsPath));
  },[ crumbsPath ])
  
  const goto = (e) => {
    e.preventDefault()
    setcrumbsPath([...crumbsPath, e.target.innerText])
  }

  const gotoCrumb = (e) => {
    e.preventDefault()
    crumbsPath.splice(crumbsPath.indexOf(e.target.innerText)+1)
    document.getElementsByClassName("children").innerHTML='';
    dispatch(showbreadcrumb(crumbsPath));
  }

  let children,crumbHtml;
  if(crumbsPath && Array.isArray(crumbsPath)){
    // if(!crumbChildren.type){
      if(!crumbChildren.type){
      children = crumbChildren.map((data) =>
      (<div className="column"  key={data}  onClick={goto}>
        <div className="card">
          <h3>{data}</h3>
        </div>
      </div>))
    } else{
      children = `THIS IS FILE:${crumbsPath[crumbsPath.length-1]}`;
    }
    crumbHtml = crumbsPath.map((data) =>
      (<li key={data} onClick={gotoCrumb}>{data}</li>))
  }
  
  return (
    <>
      <ul className="breadcrumb">
        {crumbHtml}
      </ul>
      <p>Main Portion:</p>
      <div className='children'>
        {children}
      </div>
    </>
  )
}

export default Breadcrumb