
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadToys, removeToy, setFilterBy, setSortBy } from '../store/toys/toy.actions.js'
import { ToyList } from '../cmps/Toylist.jsx'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { toyService } from '../services/toy.service-remote.js'
import { useNavigate } from 'react-router-dom'


export function ToyIndex() {
    const navigate = useNavigate()

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const sortBy = useSelector(storeState => storeState.toyModule.sortBy)
    const labels = toyService.labels
    useEffect(() => {
        loadToys()
    }, [filterBy, sortBy])

    function onFilterBy(filterBy) {
        setFilterBy(filterBy)
    }
    function onSortBy(sortBy) {
        setSortBy(sortBy)
    }

    function onRemoveToy(toyId) {
        removeToy(toyId).catch(err => {
            console.log('Cannot remove toy', err)
        })
    }
    return (
        <section className='toy-index'>
            <ToyFilter filterBy={filterBy} sortBy={sortBy} onFilterBy={onFilterBy} labels={labels} onSortBy={onSortBy} />
            <button class="add-button" onClick={() => navigate(`/toy/edit/`)}>
                <span class="text">Add Item</span>
                <span class="icon">
                    <svg
                        class="icon"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="12" x2="12" y1="5" y2="19"></line>
                        <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                </span>
            </button>

            {!isLoading ? <ToyList toys={toys} onRemoveToy={onRemoveToy} /> : 'Loading...'}
        </section>
    )
}

