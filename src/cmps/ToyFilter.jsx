import { useEffect, useState } from 'react'

export function ToyFilter({ sortBy, filterBy, onFilterBy, labels,onSortBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const [sortByToEdit, setSortByToEdit] = useState({ ...sortBy})
    useEffect(() => {
        onFilterBy(filterByToEdit)
        onSortBy(sortByToEdit)
    }, [filterByToEdit,sortByToEdit])
    function handleChangeFilter({ target }) {
        var { value, name: field } = target
        if (value === 'true') {
            value = true
        } else if (value === 'false') {
            value = false
        }
        setFilterByToEdit(prev => ({ ...prev, [field]: value }))
    }
    function handleChangeSort({ target }) {
        var { value } = target
        setSortByToEdit(prev => ({ ...prev, type: value }))
    }
    return (
        <section className="filterBy" >
            <h3>Toys Filter/Sort</h3>
            <div className="filterBy">
                <label htmlFor="txt"></label>
                <input type="text" id="txt" name="txt" placeholder="Search" onChange={handleChangeFilter} value={filterBy.txt} />

                < select onChange={handleChangeFilter} name="inStock">
                    <option>All</option>
                    <option value="true">For Sale</option>
                    <option value="false">sale out</option>
                </select>

            </div>
            <div className="sortBy" onChange={handleChangeSort} >
                <select>
                    <option value="">Sort by</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                </select>
            </div>
            <div className="labels">
                <select multiple size="5" onChange={handleChangeFilter}>
                    {labels.map(label => <option key={label} value={label}>{label}</option>)}
                </select>
            </div>
        </section>
    )
}