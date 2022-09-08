import React from 'react'
import { Link, useLocation ,useNavigate} from 'react-router-dom'

export default function Layout({ children }) {

  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "ri-home-2-line"
    },
    {
      title: "About",
      path: "/about",
      icon: "ri-file-info-line"
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "ri-file-user-line"
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "ri-contacts-book-line"
    }
  ]
  return (
    <div>
      <div className='footer'>
        {/* content */}
        <div className='pb-44'>
          {children}
        </div>


        {/* footer */}
        <div className='fixed bottom-10 left-0 right-0 sm:bottom-0 z-10'>
          <div className='flex w-full justify-center '>{
            menuItems.map((item, index) => (
              <div className='flex flex-col justify-end items-center'>
                {
                  location.pathname === item.path &&
                  <div className='flex flex-col items-center '>
                    <div className='h-5 w-10  bg-primary rounded-t-full sm:rounded-b-none'></div>
                    <div className='h-5 w-20  bg-primary rounded-t-full z-10 sm:rounded-b-none'>
                      <i className={`${item.icon} text-secondary text-xl animate-pulse`} ></i>
                    </div>
                  </div>
                }
                <div
                  className={`px-10 bg-primary py-5  ${index === 0 && 'rounded-l'} ${index === menuItems.length - 1 && 'rounded-r'} flex items-center justify-center space-x-2 sm:px-8`}
                  key={item.title}
                >
                    {
                    location.pathname !== item.path && 
                    <i onClick={ ()=> navigate(item.path)} className={`${item.icon} text-secondary text-xl `} ></i>}
                  
                  <Link
                    to={item.path}
                    className={`text-secondary text-xl 
                    ${location.pathname === item.path && 'animate-pulse'} 
                    ${location.pathname !== item.path && 'sm:hidden'} 
                  `}>
                    {item.title}
                  </Link>
                </div>
              </div>
            ))
          }</div>
        </div>
      </div>
    </div>
  )
}
