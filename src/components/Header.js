import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { React, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import "../styles/header.css"
import { selectNav, setPage } from '../redux/nav/navSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
// REDUX
const dispatch = useDispatch();
const nav = useSelector(selectNav)
//const counter = useSelector((state) => state.counter)
const navigation = [
  { name: 'Home', current: nav === "home" ? true : false, click: () => {dispatch(setPage("home"))} },
  { name: 'About', current: nav === "about" ? true : false, click: () => {dispatch(setPage("about"))} },
  { name: 'Features', current: nav === "faetures" ? true : false, click: () => {dispatch(setPage("home"))} },
  { name: 'FAQ', current: nav === "faq" ? true : false, click: () => {dispatch(setPage("faq"))} }
]

  return (
    <Disclosure as="nav" className="bg-header">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center " id = "content-container">
                <div className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="velacoin-mobile.png"
                    alt="logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="velacoin-lg.png"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6" id = "navigation">
                  <div className="flex space-x-4 ">
                    {
                    navigation.map(function(item, index){
                      return (
                        <a onClick = {() => item.click()} href="#" key = {index}
                         className= {
                            classNames(
                              item.current ? "border-b-2" : "", "text-white px-2  text-sm font-medium"
                            )
                         }>
                          {item.name}
                        </a>
                      )
                    })
                    }
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                onClick={() => {dispatch(setPage('home'))}}
                as="a"
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => {dispatch(setPage('about'))}}
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => {dispatch(setPage('faq'))}}
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </Disclosure.Button>
              <Disclosure.Button
                onClick={() => {dispatch(setPage('faq'))}}
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                FAQ
              </Disclosure.Button>
            </div>
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default Header;