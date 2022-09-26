import React, { useEffect, useState } from 'react'
import { FaSearch, FaMicrophone, FaTimes } from 'react-icons/fa'
import { Form, Image } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeEngine } from '../redux/engineSlice'
import { useNavigate } from 'react-router-dom'

const Google = () => {
    const engine = useSelector(state => state.engine);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [engineName, setEngineName] = useState(engine.engineName);

    const handleSelect = (event) => {
        setEngineName(event.target.value);
    };

    useEffect(() => {
        dispatch(handleChangeEngine(engineName));
        navigate(`/${engineName}`);
        document.title = "Google";
    }, [engineName])

    return (
        <div className='google'>
            <Header />
            <div className='google_wrapper d-flex mt-5 pt-5 align-items-center flex-column'>
                <Image src="/assets/images/googlelogo.png" className='google_logo user-select-none' />
                <Form className='my-4 google_form'>
                    <Form.Group className="google_input d-flex align-items-center justify-content-center border">
                        <Form.Label htmlFor='search' className="search_label my-auto d-flex align-items-center">
                            <div className="icon_wrapper d-flex justify-content-center align-items-center text-muted">
                                <FaSearch />
                            </div>
                            <select className="border-0 user-select-none" onChange={handleSelect} value={engineName}>
                                <option value="google">Google</option>
                                <option value="bing">Bing</option>
                            </select>
                        </Form.Label>
                        <input type="text" className='border-0 ps-1' id="search" title='Search' />
                        <div className='icon_wrapper d-flex justify-content-center align-items-center text-primary'>
                            <FaMicrophone />
                        </div>
                    </Form.Group>
                </Form>
                <div className='d-flex gap-3 google_btns'>
                    <button className='py-1 px-2 border-0 user-select-none'>Google Search</button>
                    <button className='py-1 px-2 border-0 user-select-none'>I'm Feeling Lucky</button>
                </div>
                <div className="my-2">
                    <p className='py-4'>Google offerd in: বাংলা</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Google