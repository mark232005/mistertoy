import { useEffect, useState } from 'react'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option'
export function ToyFilter({ sortBy, filterBy, onFilterBy, labels, onSortBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    const [sortByToEdit, setSortByToEdit] = useState({ ...sortBy })

    useEffect(() => {
        onFilterBy(filterByToEdit)
        onSortBy(sortByToEdit)
    }, [filterByToEdit, sortByToEdit])

    function handleChangeFilter(field, value) {

        if (value === 'true') {
            value = true
        } else if (value === 'false') {
            value = false
        }
        setFilterByToEdit(prev => ({ ...prev, [field]: value }))
    }

    function handleChangeSort(ev, value) {
        console.log(value);
        setSortByToEdit(prev => ({ ...prev, type: value }))
    }

    const options =
        labels.map(label => ({ label: label }))


    return (
        <section className="filterBy-page" >
            <h3>Toys Filter/Sort:</h3>
            <div className='filterBy flex'>
                
                <Textarea
                    name="txt"
                    id="txt"
                    onChange={(e) => {
                        handleChangeFilter('txt', e.target.value)
                    }}
                    value={filterBy.txt}
                    color="primary"
                    disabled={false}
                    minRows={2}
                    sx={{ width: 300 }}
                    placeholder="search"
                    size="sm"
                    variant="outlined"
                />

                    <Autocomplete
                        onChange={(event, newValue) => {
                            handleChangeFilter('labels', newValue.map(opt => opt.label))
                        }}
                        multiple
                        variant="outlined"
                        color="primary"
                        disablePortal
                        options={options}
                        sx={{ width: 150 }}
                        renderInput={(params) => <TextField {...params} label="Labels" />}
                    />



                    <Select
                        name='inStock'
                        onChange={(e, newValue) => {
                            let val = newValue === 'true' ? true : newValue === 'false' ? false : ''
                            setFilterByToEdit(prev => ({ ...prev, inStock: val }))
                        }}
                        color="primary"
                        placeholder="All"
                        size="sm"
                        variant="outlined"
                    >
                        <Option value="">All</Option>
                        <Option value="true">For Sale</Option>
                        <Option value="false">Soldout</Option>
                    </Select>

                    <Select
                        onChange={((e, newValue) => {
                            handleChangeSort(e, newValue)
                        })}
                        color="primary"
                        placeholder="Sort by"
                        size="sm"
                        variant="outlined"
                    >
                        <Option value="name">Name</Option>
                        <Option value="price">Price</Option>
                        <Option value="date">Date</Option>
                    </Select>

            </div>
        </section>
    )
}