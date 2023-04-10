import {useCourseContext} from './useCourseContext'
import { useState } from 'react'

export const useListCourse = () =>{
    const [error, setError] = useState(null)
    const [isloading, setIsloading] = useState(null)
    const {dispatch} = useCourseContext() 

    const list = async (coursename, coursekey, desc) =>{
        const response = fetch('/api/course/list',{
            method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            coursename, coursekey, desc
        }),
        })
       const json = await response.json()
       if(!response.ok){
        setError(json.error)
        setIsloading(false)
       }
       if(response.ok){
            dispatch({type: 'GET', payload: json })

            setIsloading(false)
       } 
    }
    return {list, isloading, error}
}