
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadToys, removeToy, setFilterBy, setSortBy } from '../store/toys/toy.actions.js'
import { ToyList } from '../cmps/Toylist.jsx'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { toyService } from '../services/toy.service.locl.js'
import { useNavigate } from 'react-router-dom'


export function ToyIndex() {
    const navigate = useNavigate()

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

function onRemoveToy(toyId){
removeToy(toyId).catch(err=>{
    console.log('Cannot remove toy', err)
})
}
return(
    <section className='toy-index'>
            <ToyFilter filterBy={filterBy} sortBy={sortBy} onFilterBy={onFilterBy} labels={labels} onSortBy={onSortBy}/>
            <button className='add-btn' onClick={()=>navigate(`/toy/edit/`)}>Add toy</button>
            {!isLoading?<ToyList toys={toys} onRemoveToy={onRemoveToy}/>:'Loading...'}
        </section>
    )
}

