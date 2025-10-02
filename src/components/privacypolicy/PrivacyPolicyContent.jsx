import SocialShare from '../utilities/SocialShare';
// import BlogPostComments from '../blog/BlogPostComments';
import BlogCommentForm from '../form/BlogCommentForm';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import FollowWidget from '../widgets/FollowWidget';
import { Link } from 'react-router-dom';
import Animation from '../animation/Animation';
import BlogContentRender from '../blog/BlogContentRender';

const PrivacyPolicyContent = () => {
 
  return (
    <section className='blog_detail_page'>
     
      <div className="blog-area single full-blog right-sidebar default-padding-bottom pb-0">
        <div className="container">
          <div className="blog-items">
            <div className="row">

              {/* Main */}
              <div className="blog-content col-md-12 ">
                <article className="blog-style-two item">

                     <div className="content_sec">
                    <p>
                        At SR Seating, we collect and manage user data according to the following Privacy Policy. 
                    </p>
                    </div>

                    <div className="content_sec">
                    <p><strong>Data Collected</strong></p>
                    <p>We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, credit card information and other contact or identifying information you choose to provide. </p>
                    </div>
   <div className="content_desc">
                    <p>We collect anonymous data from every visitor of the website to monitor traffic and fix bugs. For example, we collect information like web requests, the data sent in response to such requests, the Internet Protocol address, browser type, browser language, and a timestamp for the request. </p>
</div>
             <div className="content_desc">
                    <p>
                        We also use various technologies to collect information, and this may include sending cookies to your computer. Cookies are small data files stored on your hard drive or in your device memory that helps us to improve our services and your experience, see which areas and features of our services are popular and count visits. We may also collect information using web beacons (also known as “tracking pixels”). Web beacons are electronic images that may be used in our services or emails and to track count visits or understand usage and campaign effectiveness. 
                    </p>
                    </div>


                        <div className="content_sec">
                            <p><strong>Use of the Data</strong></p>
                    <p>
                       We only use your personal information to provide you the SR Seating services or to communicate with you about the website or the services. We employ industry standard techniques to protect against unauthorized access of data about you that we store, including personal information. We do not share personal information you have provided to us without your consent, unless: 
                    
                            <ul>
                                <li>Doing so is appropriate to carry out your own request. </li>
                                <li>We believe it’s needed to enforce our legal agreements or that is legally required. </li>
                                <li>We believe it’s needed to detect, prevent or address fraud, security or technical issues. </li> 
                            </ul>
                    </p>
                    </div>


                    <div className="content_desc">
                        <p>We don’t share your personal information with third parties. Aggregated, anonymized data is periodically transmitted to external services to help us improve the website and service. </p>
                        </div>
  <div className="content_desc">

                       <p> We may allow third parties to provide analytics services. These third parties may use cookies, web beacons and other technologies to collect information about your use of the services and other websites, including your IP address, web browser, pages viewed, time spent on pages, links clicked and conversion information.  </p>

</div>
                    <div className="content_desc">
                       <p> We also use social buttons provided by services like Twitter, Instagram, LinkedIn and Facebook. Your use of these third-party services is entirely optional. We are not responsible for the privacy policies and/or practices of these third-party services, and you are responsible for reading and understanding those third-party services’ privacy policies. </p>
                    </div>

                     <div className="content_desc">
                        <p><strong>Opt-Out, Communication Preferences</strong></p>
                       <p> You may modify your communication preferences and/or opt-out from specific communications at any time. Please specify and adjust your preferences. </p>
                    </div>

                     <div className="content_desc">
                        <p><strong>Security</strong></p>
                       <p> We take reasonable steps to protect personally identifiable information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. But you should keep in mind that no Internet transmission is ever completely secure or error-free. In particular, email sent to or from the Sites may not be secure.  </p>
                    </div>
                    
                     <div className="content_desc">
                        <p><strong>About Children</strong></p>
                       <p> We do not knowingly collect personally identifiable information of children below the age of 13 via the website.  </p>
                    </div>

                      <div className="content_desc">
                        <p><strong>Changes to the Privacy Policy</strong></p>
                       <p> We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used.  </p>

                                <p>If we make major changes in the way we collect or use information, we will notify you by posting an announcement on the website or sending you an email.   </p>
                    </div>

                  </article>
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
