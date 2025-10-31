    import { useState } from 'react';
    import { toast } from 'react-toastify';
    import PhoneInput from 'react-phone-input-2'
    import 'react-phone-input-2/lib/style.css'
    const ContactUsListPage = () => {

        
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
                    const res =await fetch('https://www.srseating.com/api/contactForm.php',{
                                method:'POST',
                                headers:{
                                    'Content-Type' :'application/json',
                                },
                                body:JSON.stringify(contactData)
                    })
                   if (res.ok) {
    // Reset form fields and show success message
    setName('');
    setEmail('');
    setPhone('');
    setCompanyName('');
    setMessage('');
    setChooseSolution('');
    e.target.reset();
    toast.success("Thanks You, We’ve received your message and will respond shortly.");
} else {
    const errorData = await res.json();  // Capture the error details
    console.error('Submission Failed', errorData);
    toast.error("Submission failed. Please try again.");
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
                                <input className="form-control" id="name" name="name" placeholder="Name*" type="text" autoComplete='off' required onChange={(e)=>setName(e.target.value)} />
                                <span className="alert-error"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input className="form-control" id="companyname" name="companyname" placeholder="Company Name*" type="text" autoComplete='off' required onChange={(e)=>setCompanyName(e.target.value)}/>
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
                            {/* <div className="form-group">
                                <input className="form-control" id="phone" name="phone" placeholder="Phone*" type="text" autoComplete='off' required onChange={(e)=>setPhone(e.target.value)}/>
                                <span className="alert-error" />
                            </div> */}
                            <PhoneInput
                                country={'in'}
                                value={phone}
                                onChange={phone => setPhone(phone)}
                                inputClass="form-control"
                                containerClass="w-100"
                                inputProps={{
                                    required: true,
                                    name: 'phone',
                                    autoFocus: false,
                                    autoComplete: 'off',
                                    placeholder: 'Phone*'
                                }}
                                />
                        </div>
                    </div>
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group select_solution">
                                            {/* <span> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>

                                            {/* </span> */}
                                    <select name="choosesolution" id='choosesolution' placeholder='Select Solution' className='form-control'
                                    onChange={(e)=>setChooseSolution(e.target.value)}
                                        >
                                    <option value="" disabled selected className='select'>Select Solution</option>
                                    <option value="cinema">Cinema</option>
                                    <option value="iducationalinstitutions">Educational Institutions</option>
                                    <option value="auditorium">Auditorium</option>
                                <option value="hospitalityconvention">Hospitality & Convention</option>
                                <option value="defensegovernment">Defense & Government Venue Solutions</option>
                                <option value="hometheatre">Home Theatre</option>

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
                                Get a Callback
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

    export default ContactUsListPage;