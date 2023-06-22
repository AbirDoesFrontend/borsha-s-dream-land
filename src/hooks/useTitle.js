import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
      document.title = `${title} - Borsha's Dream Land`;
    }, [title])
    
}

export default useTitle;