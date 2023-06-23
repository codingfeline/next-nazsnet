export { default as React, useEffect, useState, Fragment, useRef } from 'react'
export { usePathname } from 'next/navigation'
export { default as Image } from 'next/image'
export { default as Link } from 'next/link'

export { default as Header } from '@components/Header'
export { default as Footer } from '@components/Footer'

export { default as axios } from 'axios'
export { default as parse } from 'html-react-parser'

export { default as UseProvider } from '@redux/provider'
export { useSelector, useDispatch } from 'react-redux'
export { increment } from '@redux/features/counter/counterSlice'
export { setJournal } from '@redux/features/journal/journalSlice'

export { Dialog, Transition } from '@headlessui/react'
export { FaBars } from 'react-icons/fa'

export { default as Modal } from './Modal'

export { default as ContentEditable } from 'react-contenteditable'
