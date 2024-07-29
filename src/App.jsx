import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";



export default function App() {

  const todos=[
    {
      id :1,
      content:"complete the tasks ",
      isCompleted: true,
      isDelted : false
    },
    {
      id :2,
      content:"learn react ",
      isCompleted: false,
      isDelted : false
    },
    {
      id :3,
      content:"do homework ",
      isCompleted: true,
      isDelted : false
    }
    
  ]
  return (
    <div className="flex w-full p-10 gap-y-5 flex-col items-center">
      <form className="flex items-center gap-x-2 w-2/5">
      <input
      name="content"
      type="text"
      placeholder="your to here" 
      className="outline-none p-2 w-full bg-transparent border border-gray-100  "
       
       />
       <button
       type="sumbit"
       className="bg-slate-950 px-4 py-3 rounded-md">
        <FaPlus className="text-white" />

       </button>
      </form>
      <ul className="flex felx-col items-start w-2/5 gap-y-2">  
      {todos.map((todo) => (
        <li key={todo.key}
        className="flex w-full justify-between items-center border border-gray-100 rounded-md px-4 py-2"
        >
          <div className="flex items-center gap-x-2">
            <input type="checkbox" checked={todo.isCompleted} />
            <p>{todo.content}</p>

          </div>
          <button className="bg-red-700 px-4 py-3 rounded-md">
          <FaRegTrashAlt className="text-white" />

          </button>
  
        </li>
        
      ))}


      </ul>
    </div>

   
  )
}