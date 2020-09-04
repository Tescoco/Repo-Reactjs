import React,{useEffect,useState} from 'react'

function Cover() {
    const [coverheight, setcoverheight] = useState("20ch")
    useEffect(() => {
        const  height = window.innerHeight
        if (height > 640) {
          setcoverheight("50ch")
          }
       
        return () => {
            
        }
    }, [])
    return (
        <div  style={{width:"100%",backgroundColor:"#0c0f14",height:coverheight, marginTop:"-1%"}}>
           

        </div>
    )
}

export default Cover
