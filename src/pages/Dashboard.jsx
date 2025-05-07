import { useEffect } from "react";
import { ScatterChart } from "../cmps/ScatterChar.jsx";
import { useSelector } from 'react-redux'
import { loadToys } from "../store/toys/toy.actions.js";
import { PieChart } from "../cmps/PieChart.jsx";



export function Dashboard() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    useEffect(() => {
        loadToys()
    }, [])



    return (
        <section className="dashboard flex">
            <div style={{ height: '1100px',width:'600px' }}>
                <h2>Prices per label:</h2>
                {!isLoading ? <ScatterChart toys={toys} /> : 'Loading...'}
            </div>
            <div style={{ height: '750px' }}>
                <h2>Inventory by Label:</h2>
            {!isLoading ? <PieChart toys={toys} /> : 'Loading...'}
            </div>
        </section>
    )
}