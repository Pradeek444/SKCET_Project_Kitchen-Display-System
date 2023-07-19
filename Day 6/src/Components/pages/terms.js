import React from 'react';
import Navbar from './navbar';
import '../pages/terms.css';
import Footer from './footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="terms-container">
        <h1 className="terms-title">Terms and Conditions</h1>
        <div className="terms-content">
          <p className="terms-paragraph">
       

Please read the following terms and conditions carefully before using the kitchen display system (KDS) in our restaurant. By using the KDS, you agree to comply with these terms and conditions:<br></br>

1. Acceptance of Terms:
   a. The KDS is provided by the restaurant for the convenience of its customers. By accessing and using the KDS, you acknowledge that you have read, understood, and agree to these terms and conditions.
   b. If you do not agree with these terms and conditions, please refrain from using the KDS.
<br></br><br></br>
2. Purpose:
   a. The KDS allows customers to view the status and progress of their orders placed at the restaurant's kitchen.
   b. The information displayed on the KDS is for informational purposes only and does not guarantee the availability or accuracy of the order status.
<br></br><br></br>

3. User Responsibilities:
   a. You are responsible for maintaining the confidentiality and security of any personal login credentials provided to access the KDS.
   b. You agree not to share your login credentials with any other individuals.
   c. Any actions or activities performed using your login credentials will be considered your responsibility.
<br></br><br></br>

4. Availability and Accuracy:
   a. The restaurant will make reasonable efforts to ensure the availability and accuracy of the KDS. However, the KDS may be subject to occasional downtime or technical issues beyond our control.
   b. The displayed order status on the KDS may not always reflect real-time updates due to delays in the kitchen or other factors.
<br></br><br></br>

5. Privacy and Data Protection:
   a. The restaurant will handle your personal information in accordance with applicable data protection laws.
   b. By using the KDS, you consent to the collection, storage, and use of your personal information as outlined in the restaurant's privacy policy.
<br></br><br></br>

6. Limitation of Liability:
   a. The restaurant shall not be liable for any damages, losses, or expenses arising from the use or inability to use the KDS.
   b. The restaurant shall not be responsible for any inaccuracies, delays, or interruptions in the KDS.
<br></br><br></br>

7. Modifications:
   a. The restaurant reserves the right to modify or discontinue the KDS at any time without prior notice.
   b. The restaurant may update these terms and conditions from time to time. It is your responsibility to review the most current version available.
<br></br><br></br>

8. Governing Law:
   a. These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction where the restaurant is located.
<br></br><br></br>

9. Severability:
   a. If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
<br></br><br></br>  

By using the kitchen display system (KDS) in our restaurant, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions. If you have any questions or concerns, please contact our restaurant staff for clarification.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

