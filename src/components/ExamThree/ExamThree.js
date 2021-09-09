import { useState, useRef } from 'react'
import { Exam3 } from '../../util/ExamFunction';

export const ExamThree = () => {
    const inputRef = useRef(null)
    const [currentVal, setCurrentVal] = useState(0)
    const [factorialResult, setFactorialResult] = useState(0)

    const handleAdd = () => {
        if (inputRef.current.value >= 0) {
            const result = Exam3(inputRef.current.value)
            setFactorialResult(result)
            setCurrentVal(inputRef.current.value)
            inputRef.current.value = ''
        } else {
            setCurrentVal(inputRef.current.value)
        }
    }
    const handleReset = () => {
        inputRef.current.value = ''
        setCurrentVal(0)
        setFactorialResult(1)
    }
    
    return <div style={{ width: 400 }} className='m-vertical-center mt-10'>
        <div style={{ border: '1px solid', borderRadius: '5px' }} className='pt-10 pb-10'>
            <div className='mb-10'>
                <h3 style={{ background: '#0690f0', color: '#fff', width: 340, margin: '10px auto', paddingTop: 5, paddingBottom: 5 }}>Exam 3</h3>
                <div className='mt-10 mb-10'>
                    <div>
                        <input placeholder='Input Number' style={{ width: 332, height: 22 }} ref={inputRef} type='number' step='1' min='1' onKeyPress={e => e.key === 'Enter' ? handleAdd() : null} />
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
                {currentVal >= 0 ? <span>{currentVal}</span> : <span style={{ color: 'red' }}>Please input more than -1</span>}<br></br>
            </div>
            <div>
                <div className='mb-10'>
                    <div style={{ width: 345, border: '1px solid #d2d2d2', margin: '0px auto', borderRadius: 3 }}>
                        <h3 style={{ marginTop: 0, paddingTop: 5, paddingBottom: 5, background: '#444', color: '#fff', borderTopRightRadius: 3, borderTopLeftRadius: 3 }}>Show Result Exam 3</h3>
                        <p>{`Mean : ${factorialResult}`}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}