import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

    
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [phone, setPhone] = useState('')
        const [companyname, setCompanyName] = useState('')
        const [message, setMessage] = useState('')
        const [choosesolution, setChooseSolution] = useState('')

        const submitForm = async (e)=>{

         e.preventDefault()
      

            const contactData = {
                name,
                email,
                phone,
                companyname,
                message,
                choosesolution

            };

            try{
                const res =await fetch('http://localhost/backend/contactForm.php',{
                            method:'POST',
                            headers:{
                                'Content-Type' :'application/json',
                            },
                            body:JSON.stringify(contactData)
                })
                if(res.ok){
                    setName('')
                    setEmail('')
                    setPhone('')
                    setCompanyName('')
                    setMessage('')
                    setChooseSolution('')
                    e.target.reset()
                   toast.success("Thanks For Your Message")
                //   alert('Your form successfully stored');
                }
                else{
                    console.error('Submission Failed')
                }

            }
            catch(error){
                console.error(error)
            }

        }


    // const handleForm = (event) => {
    //     event.preventDefault()
    //     event.target.reset()
    //     toast.success("Thanks For Your Message")
    // }

    return (
        <>
            <form className="contact-form contact-form" onSubmit={submitForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" autoComplete='off' required onChange={(e)=>setName(e.target.value)} />
                            <span className="alert-error"/>
                        </div>
                    </div>
                </div>

                   <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="companyname" name="companyname" placeholder="Company Name" type="text" autoComplete='off' required onChange={(e)=>setCompanyName(e.target.value)}/>
                            <span className="alert-error"  
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" autoComplete='off' required onChange={(e)=>setEmail(e.target.value)}/>
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" autoComplete='off' required onChange={(e)=>setPhone(e.target.value)}/>
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                       <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                        <select name="choosesolution" id='choosesolution' placeholder='Select Solution' className='form-control'
                                onChange={(e)=>setChooseSolution(e.target.value)}
                                    >
                                <option value="1">SR1</option>
                                <option value="3">SR2</option>
                                <option value="3">SR3</option>
                        </select>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="message" name="message" placeholder="Tell Us About Project *" autoComplete='off' required 
                            onChange={(e)=>setMessage(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit" >
                            <i className="fa fa-paper-plane" /> Get in Touch
                        </button>
                    </div>
                </div>
                
                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                </div>
            </form>



        </>
    );
};

export default ContactForm;