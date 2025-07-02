import React  , {useState , useEffect} from 'react'

function Github() {
    const [data , setdata]  = useState([]);
    useEffect(() => {
      fetch('https://api.github.com/users/chy-aryan')
      .then(response => response.json())
      .then(data => 
        setdata(data)
      )
    } ,
      []
)
  return (
    <div className='text-center bg-gray-600 m-4 p-4
    text-white text-3xl'>Github Followers {data.followers}
    <img src={data.avatar_url} alt="Github-image" width = {300} />
     </div>
    
  )
}

export default Github