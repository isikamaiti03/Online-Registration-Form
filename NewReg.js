import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
const NewReg = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup
            .string()
            .email('Invalid email format')
            .required('Email is required')
            .matches(/@/, 'Email must contain "@" symbol'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .matches(/[\W_]/, 'Password must contain at least one special character'),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    const handleSubmit=(values)=>{
        console.log(values);
    }
    return ( 
        <div>
            <div className='Reg Form' style={{width:"700px" , height:"auto", marginLeft: "400px", border:"1px solid black", marginTop:"10px",marginBottom:"5px", borderRadius:"18px",boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)", backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwe9JcHEvua0vems5ZKpSpylxlQhkDKtOFZ-2tx9gEa1i-5pTq5Q4s_8Tew&s')", backgroundSize: "cover",backgroundPosition: "center",}}>
                <h3 style={{textAlign:"center", marginTop:"15px" , color:"white"}}>Conference Online Registration</h3>
                <p style={{textAlign:"center", color:"gray",marginBottom:"25px", fontWeight:"600px"}}>Please fill in the form below. We'll contact you as soon as possible.</p><hr style={{color:"white"}}></hr>
            <Formik
                validationSchema={schema}
                initialValues={{
                    firstName:'' ,
                    lastName: '',
                    email: '',
                    password:'',
                    city: '',
                    state: '',
                    zip: '',
                    terms: false,
                }}
            >
                {({ handleBlur, handleSubmit,  handleChange, values, touched, errors }) => (
                    <div style={{marginLeft:"140px"}}>
                    <Form noValidate onSubmit={handleSubmit} >
                    
                                <Form.Group as={Col} md="7" controlId="validationFormik01">
                                    <Form.Label
                                        style={{ color: 'GrayText', fontWeight: 'bold', fontSize: '18px' }}
                                    >
                                        First name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.firstName && !errors.firstName}
                                        isInvalid={touched.firstName && !!errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                    
                                </Form.Group>
                                <Form.Group as={Col} md="7" controlId="validationFormik02">
                                    <Form.Label
                                        style={{ color: 'GrayText', fontWeight: 'bold', fontSize: '18px' }}
                                    >
                                        Last name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.lastName && !errors.lastName}
                                        isInvalid={touched.lastName && !!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                                </Form.Group>
                        <Form.Group as={Col} md="7" controlId="validationFormik01">
                            <Form.Label style={{color:"GrayText", fontWeight:"bold",fontSize:"18px"}}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="7" controlId="validationFormik04">
                            <Form.Label style={{color:"GrayText", fontWeight:"bold",fontSize:"18px"}}>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="7" controlId="validationFormik03">
                            <Form.Label style={{color:"GrayText", fontWeight:"bold",fontSize:"18px"}}>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="7" controlId="validationFormik04">
                            <Form.Label style={{color:"GrayText", fontWeight:"bold",fontSize:"18px"}}>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="7" controlId="validationFormik05">
                            <Form.Label style={{color:"GrayText", fontWeight:"bold",fontSize:"18px"}}>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip"
                                name="zip"
                                value={values.zip}
                                onChange={handleChange}
                                isInvalid={!!errors.zip}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.zip}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" style={{color:"Green", fontWeight:"bold",fontSize:"18px"}}>
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit" style={{marginBottom:"10px"}}>Submit form</Button>
                    </Form>
                    </div>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default NewReg;