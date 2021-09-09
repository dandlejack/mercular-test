import { useState, useRef } from 'react'
import { Exam1, Exam2, Exam3 } from '../../util/ExamFunction';

const storeVal = []
export const ExamOneTwo = () => {
    const inputRef = useRef(null)
    const [currentVal, setCurrentVal] = useState()
    const [inputStore, setInputStore] = useState({
        current: 0,
        store: []
    })
    const [showResultEx1, setShowResultEx1] = useState(
        {
            min: 0,
            max: 0,
            mean: 0
        }
    )
    const [showResultEx2, setShowResultEx2] = useState(
        {
            min: 0,
            max: 0,
            mean: 0
        }
    )
    const handleAdd = () => {
        inputRef.current.value = ''
        if (currentVal !== undefined) {
            storeVal.push(currentVal)
            const resultEx1 = Exam1(storeVal)
            const resultEx2 = Exam2(storeVal)
            setShowResultEx1(resultEx1)
            setShowResultEx2(resultEx2)
            setInputStore({ current: currentVal, store: storeVal })
        }
    }
    const handleReset = () => {
        setInputStore({
            current: 0,
            store: []
        })
        storeVal.splice(0, storeVal.length)
    }
    return <div style={{ width: 400}} className='m-vertical-center'>
        <div style={{ border: '1px solid', borderRadius: '5px' }} className='pt-10 pb-10'>
            <div className='mb-10'>
                <h3 style={{ background: '#0690f0', color: '#fff', width: 340, margin: '10px auto', paddingTop: 5, paddingBottom: 5 }}>Exam 1, Exam 2</h3>
                <div className='mt-10 mb-10'>
                    <div>
                        <input placeholder='Input Number to Array' style={{ width: 332, height: 22 }} ref={inputRef} type='number' step='1' min='1' onKeyPress={e => e.key === 'Enter' ? handleAdd() : null} onChange={e => setCurrentVal(parseInt(e.target.value))} />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='mr-10'>
                        <button className='default-btn primary-color' onClick={handleAdd}>ADD</button>
                    </div>
                    <div>
                        <button className='default-btn danger' onClick={handleReset} style={{ width: 165, height: 28 }}>Clear</button>
                    </div>
                </div>
            </div>
            <div className='mb-10'>
                <span>Current Input : </span>
                <span>[ {inputStore.store.join(', ')} ]</span><br></br>
            </div>
            <div>
                <div className='mb-10'>
                    <div style={{ width: 345, border: '1px solid #d2d2d2', margin: '0px auto', borderRadius: 3 }}>
                        <h3 style={{ marginTop: 0, paddingTop: 5, paddingBottom: 5, background: '#444', color: '#fff', borderTopRightRadius: 3, borderTopLeftRadius: 3 }}>Show Result Exam 1</h3>
                        <p>{inputStore.store.length > 0 ? `Min: ${showResultEx1.min}, Max : ${showResultEx1.max}, Mean : ${showResultEx1.mean}` : `Not Result`}</p>
                    </div>
                </div>
                <div className='mb-10'>
                    <div style={{ width: 345, border: '1px solid #d2d2d2', margin: '0px auto', borderRadius: 3 }}>
                        <h3 style={{ marginTop: 0, paddingTop: 5, paddingBottom: 5, background: '#444', color: '#fff', borderTopRightRadius: 3, borderTopLeftRadius: 3 }} >Show Result Exam 2</h3>
                        <p>{inputStore.store.length > 0 ? `Min: ${showResultEx2.min}, Max : ${showResultEx2.max}, Mean : ${showResultEx2.mean}` : `Not Result`}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}