import React from 'react'
import { useState ,useEffect} from 'react'
import Link from 'next/link';
import classes from "./header.module.css";
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from "react-intl";
const Header = () => {
  const {locale}=useRouter();
  const [categories,setCategories]=useState([]);
  const getCategories=async()=>{
    const response= await(await fetch(`${process.env.API_URL}/category/getall`)).json();
    setCategories(response)
  }
  useEffect(() => {
    getCategories();
  }, [])
  const intl = useIntl();

  return (
    <header className={`bg-dark ${classes.header}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2 col-4">
            <div className="logo">
              <h4>Logo</h4>
            </div>
          </div>
          <div className="col-7">
          <nav className={`${classes.menu}`}>
            <ul className='d-flex list-unstyled m-0 p-0 align-items-center'>
              <li>
                <Link href="/">
                  <a>
                    <FormattedMessage id="header.home" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <FormattedMessage id="header.about" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" locale="az">AZ</Link>
              </li>
              <li>
                <Link href="/" locale="tr">TR</Link>
              </li>
              <li className={classes.hover_li}>
                {/* <Link href="/category">Categories</Link> */}
                <ul className={`list-unstyled ${classes.dropped_menu}`}>
                  {/* {categories?.map(category=>(
                    <li className={classes.hover_li} key={category.categoryId}>
                      <Link href={`/category`}><a>{category.categoryName}</a></Link>
                    {category.childrens && category.childrens.length>0 &&(
                      <ul className={`list-unstyled ${classes.dropped_menu && classes.right}`}>
                        {category.childrens.map(child=>(
                          <li key={child.id}><Link href={`/`}>{child.name}</Link></li>
                        ))}
                      </ul>
                    )}
                    </li>
                  ))} */}
                </ul>
              </li>
              <li>
                <Link href="/account/login">Login</Link>
              </li>
              {/* <li>
                <Link href="/">item 3</Link>
              </li>
              <li>
                <Link href="/">item 4</Link>
              </li>
              <li>
                <Link href="/">item 5</Link>
              </li> */}
            </ul>
          </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header