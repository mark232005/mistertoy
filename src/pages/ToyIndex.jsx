
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadToys } from '../store/toys/toy.actions.js'
import { ToyList } from '../cmps/Toylist.jsx'
export function ToyIndex() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading=useSelector(storeState => storeState.toyModule.isLoading)
    useEffect(() => {
        loadToys()
    }, [])



if(isLoading)return 'Loading ....'
    return(
        <section className='toy-index'>
            <ToyList toys={toys}/>
        </section>
    )
}

