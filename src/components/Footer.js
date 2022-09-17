import React from 'react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const navigation = [
    {
        title : "Product",
        nav : ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases" ],
        display : true
    },

    {
        title : "Company",
        nav : ["About Us", "Careers", "Press", "News", "MediaKit", "Contact" ],
        display : true
    },

    {
        title : "Resources",
        nav : ["Blog", "Newsletter", "Events", "Tutorials", "Help center", "Support" ],
        display : false
    },

    {
        title : "Use Cases",
        nav : ["Startups", "Entreprise", "Governments", "SaaS", "MarketPlace", "Ecommerce" ],
        display : false
    },

    {
        title : "Social",
        nav : ["Twitter", "Linkedin", "Facebook", "Github", "AngelList", "Dribble" ],
        display : false
    },

    {
        title : "Legal",
        nav : ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact" ],
        display : true
    }
]
function Footer(props) {
    return (
        <div className=' px-4 sm:px-6 lg:px-10 mt-4'>
            <div className='w-full flex justify-center p-5'>
                <img className='sm:hidden w-52 h-12' src = "velacoin-lg.png" alt = "logo-for-mobile"/>
            </div>

            <div className='flex flex-row flex-wrap sm:mt-20 justify-around'>
                    {
                        navigation.map (function(nav, index){
                            return(
                                <div className = { classNames (
                                    !nav.display ? "sm:hidden" : "", ' sm:mt-0 mt-7 '
                                ) }>
                                    <h3 className='text-xs w-32 px-4 font-semibold py-4'>{nav.title}</h3>
                                    <ul>
                                        {
                                            nav.nav.map(function(item, i){
                                                return <li className='py-2 w-32 px-4 text-sm' key = {i}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
            </div>
            <p className='text-left sm:text-right py-10 text-sm'>&copy; 2077 Untitled UI. All rights reserved.</p>
            <img className=' hidden sm:block py-5' src = "velacoin-lg.png" alt = "logo-for-lg"/>
        </div>
    );
}

export default Footer;