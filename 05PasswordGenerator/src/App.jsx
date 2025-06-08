import { useCallback, useEffect,  useRef ,useState } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberallow, setNumberallow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);


   const PasswordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallow) {
      str += "0123456789"
    }
    if(charallow){
      str += "%$@~_&^!#"
    }
    for(let i =0 ; i<length ; i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str[char];
    }

    setPassword(pass);
   }
    ,[length , numberallow , charallow , setPassword])

    useEffect( () => {
       PasswordGenerator();
    }
      ,[length,numberallow,charallow,PasswordGenerator]
    )

   


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Passworg Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
         <input type="text"
           value={password}
           className='outline-none w-full py-1 px-3 text-red-500 '
           placeholder='password'
           readOnly
           ref={passwordRef}
          />
          <button onClick={() => {
                  passwordRef.current?.select();
                  navigator.clipboard.writeText(password);
                    }}
           className='outline - none bg-blue-700 text-white px - 3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input
      type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => setLength(e.target.value)}
    />
    <label>Length: {length}</label>
  </div>

  <div className="flex items-center gap-x-1">
  <input
    type="checkbox"
    defaultChecked={numberallow}
    id="numberInput"
    onChange={() => {
      setNumberallow((prev) => !prev);
    }}
  />
  <label htmlFor="numberInput">Numbers</label>
</div>
  
  <div className="flex items-center gap-x-1">
  <input
    type="checkbox"
    defaultChecked={charallow}
    id="characterInput"
    onChange={() => {
      setCharallow((prev) => !prev);
    }}
  />
  <label htmlFor="characterInput">Characters</label>
</div>



      </div>
      </div>
    </>
  )
}

export default App
