import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const Signup = () => {
    const handleSignUp = e =>{
        e.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
                <img src={img} alt="" />

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Sign up</h1>
                    <form onSubmit={ handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" value='Signup' type="submit" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;