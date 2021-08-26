import { createContext, useRef } from "react";

interface ScrollItf {
    refTop: any
    refBottom: any
    executeScrollBottom: () => void
    executeScrollTop: () => void
}

export const ScrollContext = createContext<ScrollItf>({
    refTop: null,
    refBottom: null,
    executeScrollBottom: null,
    executeScrollTop: null
})

interface ScrollDataProps {
    children: any
}

export default function ScrollData(props: ScrollDataProps) {

    const refBottom = useRef(null)
    const refTop = useRef(null)

    const executeScrollBottom = () => refBottom.current.scrollIntoView() 
    const executeScrollTop = () => refTop.current.scrollIntoView() 

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