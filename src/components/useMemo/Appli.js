import React , {useState, useEffect, useMemo}  from 'react';
import Profile from './Profile';
import axios from 'axios';


function Appli() 
{

    const [count , setCount] = useState(1)

    const [profile , setProfile] = useState({})

    const [dark , setDark] = useState(false)



    useEffect(()=>
        {
            axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
                .then((response)=>{
                    setProfile(response.data)
                })
                .catch(err => {
                    console.log(err)
                })

        }, [count]);

    const goDark =()=>
        {
            setDark(!dark)

            if(!dark)
            {
                document.body.classList.add("bg-secondary")
            }
            else
            {
                document.body.classList.remove("bg-secondary")
            }
        }

        const classBtnTheme = dark ? 'btn-light' : 'btn-dark'

        const textBtnTheme = dark ? 'rendre claire' : 'rendre sombre'


    const memorizedValue = useMemo => (() =>
    {
        const isoverTen = () =>
        {
            return count>10
        }

    }, [count])




  return (
    <div>
        <div className='container'>
            <h1 className='text-center'>useMemo()</h1>

            {memorizedValue() && <div className='alert alert-danger' role ="alert"> STOP!!!!</div> }

            <button className="btn btn-info mb-3 float-left" onClick={()=>setCount(count + 1)}>increment {count}</button>
            <button onClick={goDark} className={`btn ${classBtnTheme} mb-3 float-right`} >{textBtnTheme} </button>
        </div>
        <Profile count={count} profile={profile}/>
    </div>
  )
}

export default Appli