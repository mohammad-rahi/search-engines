import React, { useEffect, useState } from 'react'
import { FaSearch, FaMicrophone, FaTimes } from 'react-icons/fa'
import { Form, Image } from 'react-bootstrap'
import Header from '../google/Header'
import Footer from '../google/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeEngine } from '../../redux/engineSlice'
import { useNavigate } from 'react-router-dom'

const Bing = () => {
    const engine = useSelector(state => state.engine);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [engineName, setEngineName] = useState(engine.engineName);

    const handleSelect = (event) => {
        setEngineName(event.target.value);
    };

    useEffect(() => {
        dispatch(handleChangeEngine(engineName));
        navigate(`/${engineName}`)
    }, [engineName])

    return (
        <div className='bing'>
            <Header />
            <div className='d-flex justify-content-center my-5 py-5'>
                <Form className='my-4 bing_form'>
                    <Form.Group className="bing_input bg-white d-flex align-items-center justify-content-center border">
                        <Form.Label htmlFor='search' className="search_label my-auto d-flex align-items-center">
                            <select className="border-0 user-select-none" onChange={handleSelect} value={engineName}>
                                <option value="google">Google</option>
                                <option value="bing">Bing</option>
                            </select>
                        </Form.Label>
                        <input type="text" className='border-0' id="search" title='Search' />
                        <div className='icon_wrapper icon_wrapper1 d-flex justify-content-center align-items-center text-info'>
                            <FaMicrophone />
                        </div>
                        <div className='icon_wrapper icon_wrapper2 d-flex justify-content-center align-items-center text-info'>
                            <FaSearch />
                        </div>
                    </Form.Group>
                </Form>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Bing