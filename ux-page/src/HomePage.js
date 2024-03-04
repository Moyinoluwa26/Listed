import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from './state';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setLogin } from './state';
import { IoMenuSharp } from "react-icons/io5";
import { HiChevronDoubleUp } from "react-icons/hi";
import AddTask from './components/addTask';
import Todo from './components/todoList';
import Done from './components/done';


const Home = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();


    useEffect(() => {

        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            dispatch(setLogin({ user: JSON.parse(user), token }));
        } else {
            Navigate('/login');
        }

    }, [dispatch, Navigate])


    const Cuser = useSelector(state => state.auth.user);

    const Logout = () => {
        dispatch(setLogout());
        Navigate('/');
    }

    const [showInfo, setShowInfo] = useState(false);

    const DisplayInfo = () => {
        setShowInfo(!showInfo);
    }

    const Iconstyle = { color: "white", width: "24px", height: "24px" }
    return (<div className='flex flex-col bg-blaaaa h-full w-full '>
        <div className='flex w-full justify-between md:px-24 px-6'>
            <h1 className='my-3 text-3xl text-white '>List<span className='text-yellow-500'>io</span></h1>
            <div className='flex '>

                {!showInfo && <IoMenuSharp className='my-auto' style={Iconstyle} onClick={DisplayInfo} />} {/*}: <SlArrowDown className='my-auto transform rotate-180' style={Iconstyle} onClick={DisplayInfo} />} */}
            </div>
        </div>
        <div className='absolute right-0 top-0 '>
            <div className={showInfo ? 'flex flex-col bg-gray-500 px-20 h-96 justify-around' : 'hidden'}>
                <h1 className='text-white'>User Image</h1>
                <p className='text-white'>{Cuser.firstName} {Cuser.lastName}</p>

                <div className='flex flex-row justify-around'>
                    <button onClick={Logout} className='pr-5'>Logout</button>
                    <HiChevronDoubleUp className='my-auto' style={Iconstyle} onClick={DisplayInfo} />
                </div>
            </div>
        </div>
        <div className='flex flex-col h-screen'>
            <div className='mx-6 '>
                {<AddTask />} </div>
            <div className='mx-6 '>
                {<Todo />}
            </div>
            <div className='mx-6'>
                {<Done />}
            </div>
        </div>

    </div>);
}

export default Home;