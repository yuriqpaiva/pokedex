import { createContext, useRef } from "react";

interface ScrollItf {
    refTop?: any
    refBottom?: any
    executeScrollBottom?: () => void
    executeScrollTop?: () => void
}

export const ScrollContext = createContext<ScrollItf>({})

interface ScrollDataProps {
    children: any
}

export default function ScrollData(props: ScrollDataProps) {

    const refBottom = useRef(null)
    const refTop = useRef(null)

    const executeScrollBottom = () => refBottom.current.scrollIntoView({
        behavior: 'smooth'
    }) 
    const executeScrollTop = () => refTop.current.scrollIntoView({
        behavior: 'smooth'
    }) 

    return (
        <ScrollContext.Provider value={{
            refTop,
            refBottom,
            executeScrollBottom,
            executeScrollTop
        }}>
            {props.children}
        </ScrollContext.Provider>
    )
}