import { useLoaderData } from "react-router-dom";

export const EditProfile = () => {
    const data=useLoaderData()
    console.log(data)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value
        const email=form.email.value


        const userData={
            name,email
        };
        fetch(`http://localhost:5000/user/${data?.email}`,{
          method:'PATCH',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(userData)
      
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }
  return (
<>
<div>
<form onSubmit={handleSubmit}>

<div>
<label htmlFor="">user Name</label>
<input type='text' defaultValue={data?.name} name='name'/>
</div>
<div>
<label htmlFor="">User Email</label>
<input type='email' defaultValue={data?.email} disabled name='email'/>
</div>


<div className="form-control mt-6">
              <input
                className="btn bg-red-500 text-white"
                type="submit"
                value="Update UserInfo"
              />
            </div>





</form>

</div>






</>
  )
}
