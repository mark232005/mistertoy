
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadToys } from '../store/toys/toy.actions.js'
export function ToyIndex() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading=useSelector(storeState => storeState.toyModule.isLoading)
    useEffect(() => {
        loadToys()
    }, [])




    return(
        <section className='toy-index'>
        </section>
    )
}

