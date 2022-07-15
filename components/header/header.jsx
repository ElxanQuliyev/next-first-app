import React from 'react'
import { useState ,useEffect} from 'react'
import Link from 'next/link';
import classes from "./header.module.css";
const Header = () => {
  const [categories,setCategories]=useState([]);
  const getCategories=async()=>{
    const response= await(await fetch(`${process.env.API_URL}/category/getall`)).json();
    setCategories(response)
  }
  console.log(categories)
  useEffect(() => {
    getCategories();
  }, [])
  return (
    <header className={`bg-dark ${classes.header}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2 col-4">
            <div className="logo">
              <h4>Logo</h4>
            </div>
          </div>
          <div className="col-auto">
          <nav className={`${classes.menu}`}>
            <ul className='d-flex list-unstyled m-0 p-0'>
              <li>
                <Link href="#">item 1</Link>
              </li>
              <li className={classes.hover_li}>
                <Link href="#">Categories</Link>
                <ul className={`list-unstyled ${classes.dropped_menu}`}>
                  {categories?.map(category=>(
                    <li className={classes.hover_li} key={category.categoryId}>
                      <Link href={`#`}>{category.categoryName}</Link>
                    {category.childrens && category.childrens.length>0 &&(
                      <ul className={`list-unstyled ${classes.dropped_menu && classes.right}`}>
                        {category.childrens.map(child=>(
                          <li key={child.id}><Link href={`#`}>{child.name}</Link></li>
                        ))}
                      </ul>
                    )}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="#">item 3</Link>
              </li>
              <li>
                <Link href="#">item 4</Link>
              </li>
              <li>
                <Link href="#">item 5</Link>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header