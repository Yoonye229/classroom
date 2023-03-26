import { useAuthContext } from "./useAuthContext"

export const useLogoout = () =>{
    const {dispatch } = useAuthContext()

    const logout = () =>{
      localStorage.removeItem("user")  

      dispatch({type: 'LOGOUT'})
    }
}