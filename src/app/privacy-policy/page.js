import Image from "next/image";

export const metadata = {
  title: "Privacy Policy",
  description: "Review the Privacy Policy to understand how I collect, use, and protect your personal information. Your privacy is my priority while you engage with my services.",
};


export default function PrivacyPolicy() {
  return (
    <div className="">
      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh]">
        <div className="relative container max-w-screen-xl mx-auto">
          <div className="block">
            <h1 className="">Privacy Policy</h1>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Responsible for Data Processing</h2>
            <p className="text-[--dark-secondary] text-[15px] font-bold mb-3">Mauro Micozzi</p>
            <p className="text-[--dark-secondary] text-[15px]">Email address of the Responsible:</p>
            <a href="mailto:mau.micozzi@gmail.com" className="underline text-[--dark-primary]">mau.micozzi@gmail.com</a>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Types of Data Collected</h2>
            <p className="text-[--dark-secondary] text-[15px] mb-5">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The Personal Data collected by this Site, whether autonomously or through third parties, includes: Cookies; Usage data.</p>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Full details of each type of data collected are provided in the specific sections of this privacy policy or through specific information texts displayed before the data is collected. Personal Data may be freely provided by the User or, in the case of Usage Data, collected automatically during the use of this Site. Unless otherwise specified, all Data required by this Site is mandatory. If the User refuses to provide them, this Site may be unable to provide the Service. In cases where this Site indicates some Data as optional, Users are free to refrain from providing that Data without affecting the availability of the Service or its functionality. Users who have questions about which Data is mandatory are encouraged to contact the Controller. The eventual use of Cookies or other tracking tools by this Site or the owners of third-party services used by this Site, unless otherwise specified, is intended to provide the Service requested by the User, in addition to other purposes detailed in this document and in the Cookies Policy.</p>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The User assumes responsibility for the Personal Data of third parties obtained, published or shared through this Site and guarantees that they have the right to communicate or disseminate them, releasing the Controller from any responsibility towards third parties.</p>
            <p className="text-[--dark-secondary] text-[15px]"></p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Methods and place of processing of collected Data</h2>
            <p className="text-[--dark-secondary] text-[15px]">If you upload images to the website, you should avoid uploading images that include embedded location data (EXIF GPS). Visitors to the website can download and extract any location data from images on the website.</p>
            <h3 className="mt-10 mb-5">Processing methods</h3>
            <p className="text-[--dark-secondary] text-[15px]">The Controller adopts appropriate security measures to prevent unauthorized access, disclosure, alteration or destruction of Personal Data. The processing is carried out using computer and/or telematic tools, with organizational logic and procedures strictly related to the indicated purposes. In addition to the Controller, in some cases, other parties involved in the organization of this Site (administrative, commercial, marketing, legal personnel, system administrators) or external parties (such as third-party technical service providers, third-party technical services, etc.) may have access to the Data. courier services, hosting providers, IT companies, communication agencies), designated, if necessary, as Data Processors by the Controller. The updated list of Data Processors can always be requested from the Data Controller.</p>
            <h3 className="mt-10 mb-5">Legal basis of treatment</h3>
            <p className="text-[--dark-secondary] text-[15px]">The Controller processes Personal Data related to the User if one of the following conditions is met:</p>
            <ul className="list-disc pl-8 my-5">
              <li className="text-[--dark-secondary] mb-3">The User has given consent for one or more specific purposes; Note: in some legal systems, the Controller may be authorized to process Personal Data without requiring the User’s consent or another of the legal bases specified below, until the User objects (“opt-out”) to such processing. . This does not apply, however, if the processing of Personal Data is subject to European legislation on the protection of Personal Data;</li>
              <li className="text-[--dark-secondary] mb-3">The processing is necessary for the execution of a contract with the User and/or for the execution of pre-contractual measures;</li>
              <li className="text-[--dark-secondary] mb-3">The processing is necessary for compliance with a legal obligation to which the Controller is subject;</li>
              <li className="text-[--dark-secondary] mb-3">The processing is necessary for the execution of a task carried out in the public interest or in the exercise of public powers conferred on the Controller;</li>
              <li className="text-[--dark-secondary] mb-3">The processing is necessary to achieve a legitimate interest pursued by the Controller or a third party;</li>
            </ul> 
            <p className="text-[--dark-secondary] text-[15px]">However, it is always possible to ask the Controller to clarify the specific legal basis for each processing and, in particular, whether the processing is based on law, on a contract or is necessary to enter into a contract.</p>
            <h3 className="mt-10 mb-5">Place</h3>
            <p className="text-[--dark-secondary] text-[15px]">The Data is processed at the Controller’s operating locations and any other locations where the parties involved in the processing are located. For more information, please contact the Controller. The User’s Personal Data may be transferred to a country other than the User’s residence. For more information about the place of processing, the User can consult the section with details on the processing of Personal Data. The User has the right to obtain information about the legal basis for the transfer of Data outside the European Union or to an international organization governed by public law or constituted by two or more countries, such as the UN, as well as about the security measures adopted by the Responsible for protecting the Data. The User can check whether one of the aforementioned transfers takes place by consulting the section of this document relating to details on the processing of Personal Data or by asking the Controller using the contact information provided at the beginning.</p>
            <h3 className="mt-10 mb-5">Retention period</h3>
            <p className="text-[--dark-secondary] text-[15px]">The Data is processed and retained for the time necessary to fulfill the purposes for which it is collected. Therefore:</p>
            <ul className="list-disc pl-8 my-5">
              <li className="text-[--dark-secondary] mb-3">Personal Data collected for purposes related to the performance of a contract between the Controller and the User will be retained until the performance of said contract is completed;</li>
              <li className="text-[--dark-secondary] mb-3">Personal Data collected for purposes related to the Controller’s legitimate interest will be retained until such interest is satisfied. The User can obtain more information about the legitimate interest pursued by the Controller in the relevant sections of this document or by contacting the Controller;</li>
            </ul> 
            <p className="text-[--dark-secondary] text-[15px]">When the processing is based on the User’s consent, the Controller may retain the Personal Data for longer until such consent is revoked. Furthermore, the Controller may be required to retain Personal Data for a longer period in compliance with a legal obligation or by order of an authority. After the retention period has expired, Personal Data will be deleted. Therefore, upon expiration of this period, the right of access, deletion, correction and portability of the Data can no longer be exercised.</p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Purposes of the Processing of the Collected Data</h2>
            <p className="text-[--dark-secondary] text-[15px]">User Data is collected to allow the Controller to provide its Services, as well as for the following purposes: Statistics. For more detailed information on the purposes of the processing and the Personal Data specifically relevant for each purpose, the User may consult the respective sections of this document.</p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Details on the processing of Personal Data</h2>
            <p className="text-[--dark-secondary] text-[15px]">Personal Data is collected for the following purposes and using the following services:</p>
            <h3 className="mt-10 mb-5">Statistics</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The services contained in this section allow the Data Controller to monitor and analyze traffic data and track the User’s behavior. Google Analytics (Google Ireland Limited) Google Analytics is a web analytics service provided by Google Ireland Limited (“Google”). Google uses the Personal Data collected for the purposes of tracking and examining the use of this Site, compiling reports and sharing them with other services developed by Google. Google may use Personal Data to contextualize and personalize ads from its own advertising network.</p>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Personal Data collected: Cookies; Usage data.</p>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Place of processing: Ireland – <a href="https://policies.google.com/privacy" target="_blank" className="text-[--dark-primary] underline">Privacy Policy</a> - <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" className="text-[--dark-primary] underline">Opt Out</a></p>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Subject to Privacy Shield.</p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">User Rights</h2>
            <p className="text-[--dark-secondary] text-[15px]">Users may exercise certain rights in relation to the Data processed by the Controller. In particular, the User has the right to:</p>
            <ul className="list-disc pl-8 my-5">
              <li className="text-[--dark-secondary] mb-3">Revoke your consent at any time. The User may revoke the consent for the processing of their Personal Data previously expressed;</li>
              <li className="text-[--dark-secondary] mb-3">Oppose the processing of your Data. The User may oppose the processing of their Data when it is carried out on a legal basis other than consent. More details on the right to object are provided in the relevant section below;</li>
              <li className="text-[--dark-secondary] mb-3">Access your Data. The User has the right to obtain information about the Data processed by the Controller, about certain aspects of the processing and to receive a copy of the Data processed;</li>
              <li className="text-[--dark-secondary] mb-3">Verify and request correction. The User can verify the accuracy of their Data and request its update or correction;</li>
              <li className="text-[--dark-secondary] mb-3">Obtain treatment limitation. When certain conditions are met, the User may request the limitation of the processing of their Data. In this case, the Controller will not process the Data for any purpose other than its conservation;</li>
              <li className="text-[--dark-secondary] mb-3">Obtain deletion or deletion of your Personal Data. When certain conditions are met, the User may request the deletion of their Data by the Controller;</li>
              <li className="text-[--dark-secondary] mb-3">Receive your Data or transfer it to another person responsible. The User has the right to receive their Data in a structured, commonly used and machine-readable format and, when technically possible, to obtain the unobstructed transfer to another controller. This provision is applicable when the Data is processed with automated tools and the processing is based on the User’s consent, on a contract to which the User is a party or on contractual measures related to it;</li>
              <li className="text-[--dark-secondary] mb-3">File a complaint. The User may file a complaint with the competent data protection supervisory authority or take legal action;</li>
            </ul> 
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Details on the right to object</h2>
            <p className="text-[--dark-secondary] text-[15px]">When Personal Data is processed in the public interest, in the exercise of public powers conferred on the Controller or for the satisfaction of a legitimate interest pursued by the Controller or a third party, Users have the right to object to the processing for reasons related to their situation. particular. Users are informed that if their Data is processed for direct marketing purposes, they may object to the processing without providing any reason. To find out if the Controller is processing data for direct marketing purposes, Users can consult the corresponding sections of this document.</p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">How to exercise your rights</h2>
            <p className="text-[--dark-secondary] text-[15px]">To exercise the User’s rights, Users can direct a request to the contact details of the Controller indicated in this document. Requests are submitted free of charge and are responded to by the Controller in the shortest possible time, within one month in any case.</p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Additional information about treatment</h2>
            <h3 className="mt-10 mb-5">Defense at trial</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The User’s Personal Data may be used by the Controller in court or in the preparatory stages for its possible establishment to defend against misuse of this Site or the related Services by the User. The User declares to be aware that the Controller may be obliged to reveal the Data by order of public authorities.</p>         
            <h3 className="mt-10 mb-5">Specific information</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">At the User’s request, in addition to the information contained in this privacy policy, this Site may provide the User with additional and contextual information about specific Services, or the collection and processing of Personal Data.</p>    
            <h3 className="mt-10 mb-5">System logs and maintenance</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">For needs related to operation and maintenance, this Site and any third-party services used by it may collect system logs, that is, files that record interactions and that may contain Personal Data, such as the User’s IP address.</p>
            <h3 className="mt-10 mb-5">Information not contained in this policy</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Further details regarding the processing of Personal Data can be requested at any time from the Data Controller using the contact details. Responding to “Do Not Track” Requests This Site does not support “Do Not Track” requests. To find out if the possible third-party services used support them, the User is invited to consult their respective privacy policies.</p>
            <h3 className="mt-10 mb-5">Changes to this privacy policy</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The Controller reserves the right to make changes to this privacy policy at any time, notifying Users on this page and, if possible, on this Site, as well as, if technically and legally feasible, sending a notification. to Users through one of the contact details available to the Controller. We therefore recommend that you consult this page regularly, referring to the date of the last modification indicated at the end. In the event that the modifications affect treatments whose legal basis is consent, the Controller will collect the User’s consent again, if necessary.</p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Definitions and legal references</h2>
            <h3 className="mt-10 mb-5">Personal Data (or Data)</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Personal data constitutes any information that, directly or indirectly, also in conjunction with any other information, including a personal identification number, makes a natural person identified or identifiable.</p>        
            <h3 className="mt-10 mb-5">Personal Data (or Data)</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Personal data constitutes any information that, directly or indirectly, also in conjunction with any other information, including a personal identification number, makes a natural person identified or identifiable.</p>          
            <h3 className="mt-10 mb-5">Usage Data</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">It is the data collected automatically through this Site (including through third-party applications integrated into this Site), which includes: the IP addresses or domain names of the computers used by the User that connects to this Site, the addresses in URI (Uniform Resource Identifier) notation, the time of the request, the method used to send the request to the server, the size of the file obtained in response, the numerical code that indicates the status of the server response (success, error , etc.), the country of origin, the characteristics of the browser and the operating system used by the visitor, the different temporal connotations of the visit (for example, the time spent on each page) and the details about the itinerary followed within of the Application, with particular reference to the sequence of pages consulted, to the parameters related to the operating system and the User’s computing environment.</p>
            <h3 className="mt-10 mb-5">User</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The person using this Site, who, unless otherwise specified, is the same as the Data Subject.</p>
            <h3 className="mt-10 mb-5">Interested</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The natural person to whom the Personal Data relates.</p>
            <h3 className="mt-10 mb-5">Responsible for the Treatment (or Responsible)</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The natural or legal person, public authority, service or other body that, individually or jointly with others, determines the purposes and means of the processing of personal data and the tools adopted, including security measures related to the operation and use of this Site. The Controller, unless otherwise specified, is the owner of this Site.</p>
            <h3 className="mt-10 mb-5">This site</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The hardware or software tool through which Users’ Personal Data is collected and processed.</p>
            <h3 className="mt-10 mb-5">Service</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">The service provided by this Site, as described in the relevant terms (if any) on this site/app.</p>
            <h3 className="mt-10 mb-5">European Union (or EU)</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Unless otherwise specified, any reference to the European Union contained in this document extends to all current Member States of the European Union and the European Economic Area.</p>
            <h3 className="mt-10 mb-5">Cookie</h3>
            <p className="text-[--dark-secondary] text-[15px] mb-5">Small portion of data stored on the User’s device.</p>
            <hr className="my-10 border-[--dark-secondary] opacity-30"></hr>
            <h2 className="mt-10 mb-5">Legal references</h2>
            <p className="text-[--dark-secondary] text-[15px] mb-40">This privacy statement has been drawn up based on multiple legislative orders, including articles 13 and 14 of Regulation (EU) 2016/679. Unless otherwise specified, this privacy statement applies only to this Site.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
