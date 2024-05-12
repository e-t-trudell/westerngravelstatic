import { useState } from "react";

const NewItem = (props) => {
    const {initialAggregateName, onSubmitProp} = props
    // create conditional redering to change form between concrete and aggregate
    // const [aggStart, setAggStart] = useState(true)
    const [aggName, setAggName] = useState('')
    const [aggSize, setAggSize] = useState('')
    const [aggCost, setAggCost] = useState('')
    // const [concrete, setConcrete] = useState('')
    // const [mix, setMix] = useState('')
    // const [cost, setCost] = useState('')

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        onSubmitProp({aggName, size, cost});
        // onSubmitProp({concreteName});
    }
    return (
        <>
            <form className="col-s-6 mx-auto" onSubmit={onSubmitHandler}>
                <div>
                    <label className="form-label">Aggregate Name</label><br/>
                    <input className="form-control" type="text" name='aggregatename' value={aggName} onChange = {(e)=>setAggName(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Aggregate Name</label><br/>
                    <input className="form-control" type="text" name='aggregatesize' value={aggSize} onChange = {(e)=>setAggSize(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Aggregate Name</label><br/>
                    <input className="form-control" type="text" name='aggregatecost' value={aggCost} onChange = {(e)=>setAggCost(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-info mt-3">Create Aggregate</button>
                </div>
                {/* <div>
                    <label className="form-label">Concrete Name</label><br/>
                    <input className="form-control" type="text" name='concretename' value={concrete} onChange = {(e)=>setConcrete(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Concrete Name</label><br/>
                    <input className="form-control" type="text" name='concretemix' value={mix} onChange = {(e)=>setMix(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label">Concrete Name</label><br/>
                    <input className="form-control" type="text" name='concretecost' value={cost} onChange = {(e)=>setCost(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-info mt-3">Create Concrete</button>
                </div> */}
            </form>
        </>
    )
}
export default NewItem;