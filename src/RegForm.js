import react from "react";
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { ErrorMessage } from "@hookform/error-message";
import './style.css'

const useStyles = makeStyles((theme) => ({
    button: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1)
            },
    })
);

export const RegForm = ({ user, onsubmit}) => {
    const { register, formState: { errors }, hansdleSubmit} = useForm({
        criteriaMode: "all",
        defaultValues: {
            
            lastName: user ? user.lastName : "",
            firstName: user ? user.firstName : "",
            middleName: user ? user.middleName : "",
            age: user ? user.age : "",
            gender: user ? user.gender : "Male/Female",
            address: user ? user.address : "",
            email: user ? user.email : "",
            number: user ? user.number : "",
        }
    });

    const classes = useStyles();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })

    return (
        <div className = "form-group main-container">
            <form onSubmit = {submitHandler} className = "row g-3">
                <div className = "col-md-4">
                    <label htmlFor = "lastname" className = "form-label"> Last Name </label>
                    <input {... register('lastname', { required: "*This field is required."})}
                    className="form-control" type="text" name="lastname" id="lastname" placeholder="Enter your last name" />
                   
                    <ErrorMessage errors={errors} name="lastName"
                        render={({ message }) => <p className="error-message">{message}</p>} />  
        </div>

        <div className="col-md-4">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input {...register('firstName', { required: "*First name is required." })} 
                    className="form-control" type="text" name="firstName" id="firstName" placeholder="Enter your first name" />
                    <ErrorMessage errors={errors} name="firstName"
                        render={({ message }) => <p className="error-message">{message}</p>} />
        </div>
        <div className="col-md-4">
                    <label htmlFor="middleName" className="form-label">Middle name</label>
                    <input {...register('middleName', { required: "*This field is required." })}
                     className="form-control" type="text" name="middleName" id="middleName" placeholder="Enter your Middle name" />
                    <ErrorMessage errors={errors} name="middleName"
                        render={({ message }) => <p className="error-message">{message}</p>} />
        </div>
        <div className="col-md-4">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input {...register('age', { required: "*This field is required." })}
                     className="form-control" type="text" name="age" id="age" placeholder="Enter your age" />
                    <ErrorMessage errors={errors} name="age"
                        render={({ message }) => <p className="error-message">{message}</p>} />
        </div>
        <div className="col-md-4">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input {...register('gender', { required: "*This field is required." })}
                     className="form-control" type="text" name="gender" id="gender" placeholder="Enter your gender" />
                    <ErrorMessage errors={errors} name="gender"
                        render={({ message }) => <p className="error-message">{message}</p>} />
        </div>
        <div className="col-md-4">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input {...register('address', { required: "*This field is required." })}
                     className="form-control" type="text" name="address" id="address" placeholder="Enter your address" />
                    <ErrorMessage errors={errors} name="age"
                        render={({ message }) => <p className="error-message">{message}</p>} />
        </div>
        <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register('email', { required: "*This field is required." })} 
                    type="email" className="form-control" id="email" placeholder="Enter your Email address" />
                    <ErrorMessage errors={errors} name="email"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="number" className="form-label">Mobile Number</label>
                    <input {...register('number', { required: "*This field is required." })} 
                    type="text" className="form-control" id="number" placeholder="Enter your Mobile number" />
                    <ErrorMessage errors={errors} name="number"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="form-group">
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            backgroundColor: '#363738',
                            color: '#fff',
                            width: '100%'
                        }}
                        size="Small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </div>
            </form>

        </div>
    )

}
