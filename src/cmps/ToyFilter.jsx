import { useEffect, useState } from 'react'

export function ToyFilter({ sortBy, filterBy, onFilterBy, labels }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])
    function handleChange({ target }) {
        var { value, name: field, type } = target
        if (value === 'true') {
            value = true
        } else if (value === 'false') {
            value = false
        }
        setFilterByToEdit(prev => ({ ...prev, [field]: value }))
    }
    return (
        <section className="filterBy" >
            <h3>Toys Filter/Sort</h3>
            <div className="filterBy">
                <label htmlFor="txt"></label>
                <input type="text" id="txt" name="txt" placeholder="Search" onChange={handleChange} value={filterBy.txt} />

                < select onChange={handleChange} name="inStock">
                    <option>All</option>
                    <option value="true">For Sale</option>
                    <option value="false">sale out</option>
                </select>

            </div>
            <div className="sortBy" onChange={handleChange} >
                <select>
                    <option value="">Sort by</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="createdAt">Date</option>
                </select>
            </div>
            <div className="labels">
                <select multiple size="5" onChange={handleChange}>
                    {labels.map(label => <option value={label}>{label}</option>)}
                </select>
            </div>
        </section>
    )
}