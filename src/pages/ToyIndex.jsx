
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadToys, setFilterBy, setSortBy } from '../store/toys/toy.actions.js'
import { ToyList } from '../cmps/Toylist.jsx'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { toyService } from '../services/toy.service.locl.js'
export function ToyIndex() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading=useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy=useSelector(storeState => storeState.toyModule.filterBy)
    const sortBy=useSelector(storeState => storeState.toyModule.sortBy)
    const labels=toyService.labels
    useEffect(() => {
        loadToys()
    }, [filterBy,sortBy])

function onFilterBy(filterBy){
setFilterBy(filterBy)
}
function onSortBy(sortBy){
    setSortBy(sortBy)
}

return(
    <section className='toy-index'>
            <ToyFilter filterBy={filterBy} sortBy={sortBy} onFilterBy={onFilterBy} labels={labels} onSortBy={onSortBy}/>
            {!isLoading?<ToyList toys={toys}/>:'Loading...'}
        </section>
    )
}

