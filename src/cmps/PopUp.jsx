import { useState,useEffect, Children } from "react"



export function PopUp({ isOpen=false,header,onClose=()=>{} ,children}) {
    const [isOpenPopUp, setIsOpenPopUp] = useState(isOpen)

    useEffect(() => {
        setIsOpenPopUp(isOpen)
    }, [isOpen])

function onClosePopUp(){
    setIsOpenPopUp(false)
    onClose()
}
    if (!isOpenPopUp) return null
    return (
        <div className="PopUp-backdrop" onClick={()=>onClosePopUp()}>
            <div className="PopUp-container"  onClick={(ev) => ev.stopPropagation()}>
{header&&<header>{header}</header>}
<main>
    {children}
</main>
            </div>
        </div>
    )

}