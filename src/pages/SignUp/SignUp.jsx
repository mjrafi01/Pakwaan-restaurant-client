import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useAxiosPublic } from "../../hooks/useAxiosPublic"
import axios from "axios"
import { SocialLogin } from "../../Components/SocialLogin/SocialLogin"

export const SignUp = () => {
const axiosPublic=useAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      const navigate=useNavigate()
const {createUser,updateUserProfile}= useContext(AuthContext)
    const onSubmit = (data) => {console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser=result.user
            console.log(loggedUser)
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                    console.log("User Profile Updated")
              const userInfo={
                name:data.name,
                email:data.email,
                image:data.photoURL
              }
                    axiosPublic.post('/users',userInfo)
                    .then(res=>{
                      console.log(res.data)
                      if (res.data.insertedId) {
                        reset();
                        Swal.fire({
                            title: "User Created Successfully",
                            showClass: {
                              popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                              popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                          });
                      }
                    })



                  
                      navigate('/')
            })
            .catch(error=>console.log(error))
        })
    }
      console.log(watch("example"))
  return (
    <> 
     <Helmet>
        <title>Pakwaan Sign Up</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" {...register("name",{ required: true })} placeholder="name" className="input input-bordered" required />
            {errors.name && <span>This field is required</span>}
            </div>

    <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photoURL" {...register("photoURL",{ required: true })} className="input input-bordered" required />
            {errors.name && <span>This field is required</span>}
          </div>



          <div className="form-control">
            <label className="label">
               <span className="label-text">Email</span>
            </label>
            <input type="email"  {...register("email",{ required: true })} placeholder="email" className="input input-bordered" required />
          </div>
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password",{ required: true, minLength:6 })} placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          
          </div>
        </form>
        <p className="p-2"><small>Already have an account?<Link to='/login'>Login</Link></small></p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
  </>
  )
}
